import { ofType, combineEpics } from "redux-observable"; 
import { FETCH_PAIR, fetchPairSuccess, fetchPairFailure, fetchPair } from "./reducer";
import { mergeMap, map, catchError, mapTo } from "rxjs/operators";
import { request } from "universal-rxjs-ajax";
import { of } from "rxjs";
import { BEGIN_GAME } from "modules/MainPage/reducer";

const beginGameEpic = (action$) =>
    action$.pipe(
        ofType(BEGIN_GAME),
        mapTo(fetchPair())
    )

const fetchPairEpic = (action$, state$, {apiBaseUrl}) =>
    action$.pipe(
        ofType(FETCH_PAIR),
        mergeMap(action =>
            request({
                url: `${apiBaseUrl}/word_pair`,
            }).pipe(
                map(({response}) =>
                    {
                        console.log('wordpair api response:', response)
                        return fetchPairSuccess({
                            id: response.id,
                            word1: response.word_1,
                            word2: response.word_2,
                            example: response.example_sentence
                        })
                    }
                ),
                catchError(error =>
                    of(
                        fetchPairFailure(
                            error.xhr.response,
                        )
                    )
                )
            )
        )
    )

const wordPairEpics = combineEpics(
    fetchPairEpic,
    beginGameEpic
)

export default wordPairEpics
