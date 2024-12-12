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
 * @interface ValidatorBlocksStatsInfo
 */
export interface ValidatorBlocksStatsInfo {
    /**
     * 
     * @type {number}
     * @memberof ValidatorBlocksStatsInfo
     */
    height: number;
    /**
     * 
     * @type {boolean}
     * @memberof ValidatorBlocksStatsInfo
     */
    block: boolean;
}

export function ValidatorBlocksStatsInfoFromJSON(json: any): ValidatorBlocksStatsInfo {
    return ValidatorBlocksStatsInfoFromJSONTyped(json, false);
}

export function ValidatorBlocksStatsInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValidatorBlocksStatsInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'height': json['height'],
        'block': json['block'],
    };
}

export function ValidatorBlocksStatsInfoToJSON(value?: ValidatorBlocksStatsInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'height': value.height,
        'block': value.block,
    };
}

