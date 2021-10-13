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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Profile
 */
export interface Profile {
    /**
     * user id
     * @type {string}
     * @memberof Profile
     */
    id: string;
    /**
     * user name
     * @type {string}
     * @memberof Profile
     */
    userName: string;
    /**
     * first name
     * @type {string}
     * @memberof Profile
     */
    firstName: string;
    /**
     * last name
     * @type {string}
     * @memberof Profile
     */
    lastName: string;
    /**
     * password
     * @type {string}
     * @memberof Profile
     */
    passward: string;
    /**
     * the date when the profile was created
     * @type {string}
     * @memberof Profile
     */
    creationDate: string;
    /**
     * user email
     * @type {string}
     * @memberof Profile
     */
    email: string;
}

export function ProfileFromJSON(json: any): Profile {
    return ProfileFromJSONTyped(json, false);
}

export function ProfileFromJSONTyped(json: any, ignoreDiscriminator: boolean): Profile {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'userName': json['userName'],
        'firstName': json['firstName'],
        'lastName': json['lastName'],
        'passward': json['passward'],
        'creationDate': json['creationDate'],
        'email': json['email'],
    };
}

export function ProfileToJSON(value?: Profile | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'userName': value.userName,
        'firstName': value.firstName,
        'lastName': value.lastName,
        'passward': value.passward,
        'creationDate': value.creationDate,
        'email': value.email,
    };
}


