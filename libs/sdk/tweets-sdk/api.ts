/* tslint:disable */
/* eslint-disable */
/**
 * Tweets
 * Tweets API
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface TweetsDeleteDto
 */
export interface TweetsDeleteDto {
    /**
     * 
     * @type {string}
     * @memberof TweetsDeleteDto
     */
    tweetId: string;
}
/**
 * 
 * @export
 * @interface TweetsDto
 */
export interface TweetsDto {
    /**
     * 
     * @type {string}
     * @memberof TweetsDto
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof TweetsDto
     */
    profileId: string;
    /**
     * 
     * @type {string}
     * @memberof TweetsDto
     */
    content: string;
    /**
     * 
     * @type {string}
     * @memberof TweetsDto
     */
    date: string;
    /**
     * 
     * @type {string}
     * @memberof TweetsDto
     */
    parentId: string;
}
/**
 * 
 * @export
 * @interface TweetsInputDto
 */
export interface TweetsInputDto {
    /**
     * 
     * @type {string}
     * @memberof TweetsInputDto
     */
    profileId: string;
    /**
     * 
     * @type {string}
     * @memberof TweetsInputDto
     */
    content: string;
    /**
     * 
     * @type {string}
     * @memberof TweetsInputDto
     */
    parentId: string;
}
/**
 * 
 * @export
 * @interface TweetsUpdateDto
 */
export interface TweetsUpdateDto {
    /**
     * 
     * @type {string}
     * @memberof TweetsUpdateDto
     */
    tweetId: string;
    /**
     * 
     * @type {string}
     * @memberof TweetsUpdateDto
     */
    content: string;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        appControllerGetData: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {TweetsInputDto} tweetsInputDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tweetsAddTweet: async (tweetsInputDto: TweetsInputDto, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'tweetsInputDto' is not null or undefined
            assertParamExists('tweetsAddTweet', 'tweetsInputDto', tweetsInputDto)
            const localVarPath = `/api/tweets`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(tweetsInputDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} profileId 
         * @param {TweetsDeleteDto} tweetsDeleteDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tweetsDeleteTweet: async (profileId: string, tweetsDeleteDto: TweetsDeleteDto, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'profileId' is not null or undefined
            assertParamExists('tweetsDeleteTweet', 'profileId', profileId)
            // verify required parameter 'tweetsDeleteDto' is not null or undefined
            assertParamExists('tweetsDeleteTweet', 'tweetsDeleteDto', tweetsDeleteDto)
            const localVarPath = `/api/tweets/{profileId}`
                .replace(`{${"profileId"}}`, encodeURIComponent(String(profileId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(tweetsDeleteDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} profileId 
         * @param {string} tweetId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tweetsGetTweet: async (profileId: string, tweetId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'profileId' is not null or undefined
            assertParamExists('tweetsGetTweet', 'profileId', profileId)
            // verify required parameter 'tweetId' is not null or undefined
            assertParamExists('tweetsGetTweet', 'tweetId', tweetId)
            const localVarPath = `/api/tweets/{profileId}/{tweetId}`
                .replace(`{${"profileId"}}`, encodeURIComponent(String(profileId)))
                .replace(`{${"tweetId"}}`, encodeURIComponent(String(tweetId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} profileId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tweetsGetTweets: async (profileId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'profileId' is not null or undefined
            assertParamExists('tweetsGetTweets', 'profileId', profileId)
            const localVarPath = `/api/tweets/{profileId}`
                .replace(`{${"profileId"}}`, encodeURIComponent(String(profileId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} profileId 
         * @param {TweetsUpdateDto} tweetsUpdateDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tweetsUpdateTweet: async (profileId: string, tweetsUpdateDto: TweetsUpdateDto, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'profileId' is not null or undefined
            assertParamExists('tweetsUpdateTweet', 'profileId', profileId)
            // verify required parameter 'tweetsUpdateDto' is not null or undefined
            assertParamExists('tweetsUpdateTweet', 'tweetsUpdateDto', tweetsUpdateDto)
            const localVarPath = `/api/tweets/{profileId}`
                .replace(`{${"profileId"}}`, encodeURIComponent(String(profileId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(tweetsUpdateDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async appControllerGetData(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.appControllerGetData(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {TweetsInputDto} tweetsInputDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tweetsAddTweet(tweetsInputDto: TweetsInputDto, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TweetsDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tweetsAddTweet(tweetsInputDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} profileId 
         * @param {TweetsDeleteDto} tweetsDeleteDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tweetsDeleteTweet(profileId: string, tweetsDeleteDto: TweetsDeleteDto, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tweetsDeleteTweet(profileId, tweetsDeleteDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} profileId 
         * @param {string} tweetId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tweetsGetTweet(profileId: string, tweetId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<TweetsDto>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tweetsGetTweet(profileId, tweetId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} profileId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tweetsGetTweets(profileId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<TweetsDto>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tweetsGetTweets(profileId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} profileId 
         * @param {TweetsUpdateDto} tweetsUpdateDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tweetsUpdateTweet(profileId: string, tweetsUpdateDto: TweetsUpdateDto, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TweetsDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tweetsUpdateTweet(profileId, tweetsUpdateDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        appControllerGetData(options?: any): AxiosPromise<void> {
            return localVarFp.appControllerGetData(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {TweetsInputDto} tweetsInputDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tweetsAddTweet(tweetsInputDto: TweetsInputDto, options?: any): AxiosPromise<TweetsDto> {
            return localVarFp.tweetsAddTweet(tweetsInputDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} profileId 
         * @param {TweetsDeleteDto} tweetsDeleteDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tweetsDeleteTweet(profileId: string, tweetsDeleteDto: TweetsDeleteDto, options?: any): AxiosPromise<boolean> {
            return localVarFp.tweetsDeleteTweet(profileId, tweetsDeleteDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} profileId 
         * @param {string} tweetId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tweetsGetTweet(profileId: string, tweetId: string, options?: any): AxiosPromise<Array<TweetsDto>> {
            return localVarFp.tweetsGetTweet(profileId, tweetId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} profileId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tweetsGetTweets(profileId: string, options?: any): AxiosPromise<Array<TweetsDto>> {
            return localVarFp.tweetsGetTweets(profileId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} profileId 
         * @param {TweetsUpdateDto} tweetsUpdateDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tweetsUpdateTweet(profileId: string, tweetsUpdateDto: TweetsUpdateDto, options?: any): AxiosPromise<TweetsDto> {
            return localVarFp.tweetsUpdateTweet(profileId, tweetsUpdateDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public appControllerGetData(options?: any) {
        return DefaultApiFp(this.configuration).appControllerGetData(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {TweetsInputDto} tweetsInputDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public tweetsAddTweet(tweetsInputDto: TweetsInputDto, options?: any) {
        return DefaultApiFp(this.configuration).tweetsAddTweet(tweetsInputDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} profileId 
     * @param {TweetsDeleteDto} tweetsDeleteDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public tweetsDeleteTweet(profileId: string, tweetsDeleteDto: TweetsDeleteDto, options?: any) {
        return DefaultApiFp(this.configuration).tweetsDeleteTweet(profileId, tweetsDeleteDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} profileId 
     * @param {string} tweetId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public tweetsGetTweet(profileId: string, tweetId: string, options?: any) {
        return DefaultApiFp(this.configuration).tweetsGetTweet(profileId, tweetId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} profileId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public tweetsGetTweets(profileId: string, options?: any) {
        return DefaultApiFp(this.configuration).tweetsGetTweets(profileId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} profileId 
     * @param {TweetsUpdateDto} tweetsUpdateDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public tweetsUpdateTweet(profileId: string, tweetsUpdateDto: TweetsUpdateDto, options?: any) {
        return DefaultApiFp(this.configuration).tweetsUpdateTweet(profileId, tweetsUpdateDto, options).then((request) => request(this.axios, this.basePath));
    }
}


