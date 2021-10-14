/* tslint:disable */
/* eslint-disable */
/**
 * Profile service APIs
 * becouse omry is making us do this.
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
 * @interface ProfileRequest
 */
export interface ProfileRequest {
    /**
     * 
     * @type {string}
     * @memberof ProfileRequest
     */
    userName: string;
    /**
     * 
     * @type {string}
     * @memberof ProfileRequest
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof ProfileRequest
     */
    password: string;
    /**
     * 
     * @type {string}
     * @memberof ProfileRequest
     */
    name: string;
}
/**
 * 
 * @export
 * @interface ProfileResponse
 */
export interface ProfileResponse {
    /**
     * 
     * @type {string}
     * @memberof ProfileResponse
     */
    userName: string;
    /**
     * 
     * @type {string}
     * @memberof ProfileResponse
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof ProfileResponse
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ProfileResponse
     */
    _id: string;
    /**
     * 
     * @type {string}
     * @memberof ProfileResponse
     */
    creationDate: string;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary profile of a given user by id
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProfile: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getProfile', 'id', id)
            const localVarPath = `/api/profiles/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
         * @summary return all avilable profiles.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProfiles: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/profiles`;
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
         * @summary register a new twitter profile.
         * @param {ProfileRequest} profileRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        register: async (profileRequest: ProfileRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'profileRequest' is not null or undefined
            assertParamExists('register', 'profileRequest', profileRequest)
            const localVarPath = `/api/register`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(profileRequest, localVarRequestOptions, configuration)

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
         * @summary profile of a given user by id
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProfile(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProfileResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProfile(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary return all avilable profiles.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProfiles(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ProfileResponse>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProfiles(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary register a new twitter profile.
         * @param {ProfileRequest} profileRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async register(profileRequest: ProfileRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProfileResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.register(profileRequest, options);
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
         * @summary profile of a given user by id
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProfile(id: string, options?: any): AxiosPromise<ProfileResponse> {
            return localVarFp.getProfile(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary return all avilable profiles.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProfiles(options?: any): AxiosPromise<Array<ProfileResponse>> {
            return localVarFp.getProfiles(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary register a new twitter profile.
         * @param {ProfileRequest} profileRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        register(profileRequest: ProfileRequest, options?: any): AxiosPromise<ProfileResponse> {
            return localVarFp.register(profileRequest, options).then((request) => request(axios, basePath));
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
     * @summary profile of a given user by id
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getProfile(id: string, options?: any) {
        return DefaultApiFp(this.configuration).getProfile(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary return all avilable profiles.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getProfiles(options?: any) {
        return DefaultApiFp(this.configuration).getProfiles(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary register a new twitter profile.
     * @param {ProfileRequest} profileRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public register(profileRequest: ProfileRequest, options?: any) {
        return DefaultApiFp(this.configuration).register(profileRequest, options).then((request) => request(this.axios, this.basePath));
    }
}


