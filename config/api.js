import { request } from "universal-rxjs-ajax"
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const getAuthenticatedApi = (token) => ({
    get: (url, params) => request({
        url: `${publicRuntimeConfig.apiBaseUrl}/${url}`,
        method: 'GET',
        body: params ? params : undefined,
        crossDomain: true,
        headers: (token) ? {
            "Authorization": `Bearer ${token}`,
        } : {},
    }),
    post: (url, body) => request({
        url: `${publicRuntimeConfig.apiBaseUrl}/${url}`,
        method: 'POST',
        body: body,
        crossDomain: true,
        headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Authorization": token ? `Bearer ${token}` : '',
        },
    }),
})

export default getAuthenticatedApi
