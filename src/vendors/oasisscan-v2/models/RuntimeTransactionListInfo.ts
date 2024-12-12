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
 * @interface RuntimeTransactionListInfo
 */
export interface RuntimeTransactionListInfo {
    /**
     * 
     * @type {string}
     * @memberof RuntimeTransactionListInfo
     */
    runtimeId: string;
    /**
     * 
     * @type {string}
     * @memberof RuntimeTransactionListInfo
     */
    txHash: string;
    /**
     * 
     * @type {number}
     * @memberof RuntimeTransactionListInfo
     */
    round: number;
    /**
     * 
     * @type {boolean}
     * @memberof RuntimeTransactionListInfo
     */
    result: boolean;
    /**
     * 
     * @type {number}
     * @memberof RuntimeTransactionListInfo
     */
    timestamp: number;
    /**
     * 
     * @type {string}
     * @memberof RuntimeTransactionListInfo
     */
    type: string;
}

export function RuntimeTransactionListInfoFromJSON(json: any): RuntimeTransactionListInfo {
    return RuntimeTransactionListInfoFromJSONTyped(json, false);
}

export function RuntimeTransactionListInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): RuntimeTransactionListInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'runtimeId': json['runtimeId'],
        'txHash': json['txHash'],
        'round': json['round'],
        'result': json['result'],
        'timestamp': json['timestamp'],
        'type': json['type'],
    };
}

export function RuntimeTransactionListInfoToJSON(value?: RuntimeTransactionListInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'runtimeId': value.runtimeId,
        'txHash': value.txHash,
        'round': value.round,
        'result': value.result,
        'timestamp': value.timestamp,
        'type': value.type,
    };
}

