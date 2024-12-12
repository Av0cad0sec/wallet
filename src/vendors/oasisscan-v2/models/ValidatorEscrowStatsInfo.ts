/* tslint:disable */
/* eslint-disable */
/**
 * 
 * This api document example is the Mainnet document, and the Testnet base URL is api.oasisscan.com/v2/testnet
 *
 * The version of the OpenAPI document: 
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
 * @interface ValidatorEscrowStatsInfo
 */
export interface ValidatorEscrowStatsInfo {
    /**
     * 
     * @type {number}
     * @memberof ValidatorEscrowStatsInfo
     */
    timestamp: number;
    /**
     * 
     * @type {string}
     * @memberof ValidatorEscrowStatsInfo
     */
    escrow: string;
}

export function ValidatorEscrowStatsInfoFromJSON(json: any): ValidatorEscrowStatsInfo {
    return ValidatorEscrowStatsInfoFromJSONTyped(json, false);
}

export function ValidatorEscrowStatsInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValidatorEscrowStatsInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'timestamp': json['timestamp'],
        'escrow': json['escrow'],
    };
}

export function ValidatorEscrowStatsInfoToJSON(value?: ValidatorEscrowStatsInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'timestamp': value.timestamp,
        'escrow': value.escrow,
    };
}

