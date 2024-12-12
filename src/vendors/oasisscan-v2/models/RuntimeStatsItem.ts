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
 * @interface RuntimeStatsItem
 */
export interface RuntimeStatsItem {
    /**
     * 
     * @type {number}
     * @memberof RuntimeStatsItem
     */
    elected: number;
    /**
     * 
     * @type {number}
     * @memberof RuntimeStatsItem
     */
    primary: number;
    /**
     * 
     * @type {number}
     * @memberof RuntimeStatsItem
     */
    backup: number;
    /**
     * 
     * @type {number}
     * @memberof RuntimeStatsItem
     */
    proposer: number;
}

export function RuntimeStatsItemFromJSON(json: any): RuntimeStatsItem {
    return RuntimeStatsItemFromJSONTyped(json, false);
}

export function RuntimeStatsItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): RuntimeStatsItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'elected': json['elected'],
        'primary': json['primary'],
        'backup': json['backup'],
        'proposer': json['proposer'],
    };
}

export function RuntimeStatsItemToJSON(value?: RuntimeStatsItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'elected': value.elected,
        'primary': value.primary,
        'backup': value.backup,
        'proposer': value.proposer,
    };
}

