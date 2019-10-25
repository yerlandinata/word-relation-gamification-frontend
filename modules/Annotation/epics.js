import { ofType, combineEpics } from "redux-observable"; 
import { FETCH_WORD_RELATION_TYPES, fetchWordRelationTypesSuccess, fetchWordRelationTypesFailure, fetchWordRelationTypes } from "./reducer";
import { mergeMap, map, catchError, mapTo } from "rxjs/operators";
import { request } from "universal-rxjs-ajax";
import { of } from "rxjs";
import { BEGIN_GAME } from "modules/MainPage/reducer";

const beginGameEpic = (action$) =>
    action$.pipe(
        ofType(BEGIN_GAME),
        mapTo(fetchWordRelationTypes())
    )

const fetchWordRelationTypesEpic = (action$, state$, {apiBaseUrl}) =>
    action$.pipe(
        ofType(FETCH_WORD_RELATION_TYPES),
        mergeMap(action =>
            request({
                url: `${apiBaseUrl}/word_relation_types`,
            }).pipe(
                map(({response}) =>
                    {
                        console.log('wordpair api response:', response)
                        return fetchWordRelationTypesSuccess(
                            response.map(
                                (wrt) => ({
                                    id: wrt.id,
                                    description: wrt.human_desc
                                })
                            )
                        )
                    }
                ),
                catchError(error =>
                    of(
                        fetchWordRelationTypesFailure(
                            error.xhr.response,
                        )
                    )
                )
            )
        )
    )

const annotationEpics = combineEpics(
    beginGameEpic,
    fetchWordRelationTypesEpic,
)

export default annotationEpics
