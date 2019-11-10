import { ofType, combineEpics } from "redux-observable";
import { BEGIN_GAME } from "modules/MainPage/reducer";
import { mapTo, mergeMap, map, catchError, filter } from "rxjs/operators";
import {
    fethcGoldStandard, FETCH_GOLD_STANDARD, fetchGoldStandardSuccess,
    fetchGoldStandardFailure, FETCH_GOLD_STANDARD_SUCCESS, setSampleGoldStandard, RESAMPLE_GOLD_STANDARD
} from "./reducer";
import { of } from "rxjs";
import { WORD_RELATION_TYPES } from "modules/Game/constants";
import { FETCH_PAIR_SUCCESS, POST_ANNOTATION_SUCCESS } from "modules/Game/reducer";

const beginGameEpic = (action$) => 
    action$.pipe(
        ofType(BEGIN_GAME),
        mapTo(fethcGoldStandard())
    )

const fetchGoldStandardEpic = (action$, state$, {publicApi}) =>
    action$.pipe(
        ofType(FETCH_GOLD_STANDARD),
        mergeMap(
            action => publicApi.get('gold_standards').pipe(
                map(({response}) => fetchGoldStandardSuccess(response.map(
                    (goldStandard) => ({
                        wordRelationType: {
                            id: goldStandard.wrt.id,
                            description: goldStandard.wrt.short_desc,
                        },
                        lhsWord: goldStandard.wp.word_1.replace(/_/g, ' '),
                        rhsWord: goldStandard.wp.word_2.replace(/_/g, ' '),
                        wordPairId: goldStandard.wp.id,
                    })
                ))),
                catchError(error =>
                    of(
                        fetchGoldStandardFailure(
                            error.xhr.response,
                        )
                    )
                )
            )
        )
    )

const selectSampleGoldStandard = (goldStandards) =>
    Object.values(WORD_RELATION_TYPES).map(
        wrt => goldStandards.filter(
            gs => gs.wordRelationType.id == wrt.id
        )
    ).map(
        gsList => gsList[Math.floor(Math.random() * 1000003) % gsList.length ]
    )

    

const setSampleGoldStandardEpic = (action$) =>
    action$.pipe(
        ofType(FETCH_GOLD_STANDARD_SUCCESS),
        map(action => setSampleGoldStandard(selectSampleGoldStandard(action.payload))),
    )

const resampleGoldStandardEpic = (action$, state$) =>
    action$.pipe(
        ofType(RESAMPLE_GOLD_STANDARD),
        map(
            () => setSampleGoldStandard(selectSampleGoldStandard(state$.value.goldStandardState.allGoldStandards))
        )
    )

const updateGoldStandardEpicFirstFetchPair = (action$, state$) =>
    action$.pipe(
        ofType(FETCH_PAIR_SUCCESS),
        map(
            ({payload}) => fetchGoldStandardSuccess(
                state$.value.goldStandardState.allGoldStandards.filter(
                    goldStandard => goldStandard.lhsWord != payload.lhsWord && goldStandard.rhsWord != payload.rhsWord
                )
            )
        )
    )

const updateGoldStandardEpicNextPairs = (action$, state$) =>
    action$.pipe(
        ofType(POST_ANNOTATION_SUCCESS),
        filter(({payload}) => payload.nextWordPair),
        map(
            ({payload}) => fetchGoldStandardSuccess(
                state$.value.goldStandardState.allGoldStandards.filter(
                    goldStandard => goldStandard.lhsWord != payload.nextWordPair.lhsWord && goldStandard.rhsWord != payload.nextWordPair.rhsWord
                )
            )
        )
    )

const goldStandardEpics = combineEpics(
    beginGameEpic,
    fetchGoldStandardEpic,
    setSampleGoldStandardEpic,
    resampleGoldStandardEpic,
    updateGoldStandardEpicFirstFetchPair,
    updateGoldStandardEpicNextPairs,
)

export default goldStandardEpics
