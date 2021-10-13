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


import * as runtime from '../runtime';
import {
    Profile,
    ProfileFromJSON,
    ProfileToJSON,
} from '../models';

export interface GetProfileRequest {
    id: string;
}

export interface RegisterRequest {
    body: object;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     * sqwagger
     */
    async appControllerGetSwaggerRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/omry`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * sqwagger
     */
    async appControllerGetSwagger(initOverrides?: RequestInit): Promise<void> {
        await this.appControllerGetSwaggerRaw(initOverrides);
    }

    /**
     * profile of a given user by id
     */
    async getProfileRaw(requestParameters: GetProfileRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Profile>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getProfile.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/profile/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProfileFromJSON(jsonValue));
    }

    /**
     * profile of a given user by id
     */
    async getProfile(requestParameters: GetProfileRequest, initOverrides?: RequestInit): Promise<Profile> {
        const response = await this.getProfileRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * return all avilable profiles.
     */
    async getProfilesRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/profiles`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * return all avilable profiles.
     */
    async getProfiles(initOverrides?: RequestInit): Promise<void> {
        await this.getProfilesRaw(initOverrides);
    }

    /**
     * register a new twitter profile.
     */
    async registerRaw(requestParameters: RegisterRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling register.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/register`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * register a new twitter profile.
     */
    async register(requestParameters: RegisterRequest, initOverrides?: RequestInit): Promise<void> {
        await this.registerRaw(requestParameters, initOverrides);
    }

}
