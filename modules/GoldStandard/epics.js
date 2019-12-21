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

const SAMPLE_GOLD_STANDARD = [{
    wordRelationType: {
        id: WORD_RELATION_TYPES.HYPONYMY.id,
    },
    lhsWord: 'manusia',
    rhsWord: 'makhluk hidup',
},{
    wordRelationType: {
        id: WORD_RELATION_TYPES.SYNONYMY.id,
    },
    lhsWord: 'hewan',
    rhsWord: 'binatang',
},{
    wordRelationType: {
        id: WORD_RELATION_TYPES.UNRELATED.id,
    },
    lhsWord: 'nasi',
    rhsWord: 'comberan',
},{
    wordRelationType: {
        id: WORD_RELATION_TYPES.HYPONYMY.id,
    },
    lhsWord: 'tumbuhan',
    rhsWord: 'makhluk hidup',
},{
    wordRelationType: {
        id: WORD_RELATION_TYPES.SYNONYMY.id,
    },
    lhsWord: 'sulit',
    rhsWord: 'susah',
},{
    wordRelationType: {
        id: WORD_RELATION_TYPES.UNRELATED.id,
    },
    lhsWord: 'makanan',
    rhsWord: 'minuman',
}]

const fetchGoldStandardEpic = (action$) =>
    action$.pipe(
        ofType(FETCH_GOLD_STANDARD),
        map(
            () => fetchGoldStandardSuccess(SAMPLE_GOLD_STANDARD),
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
