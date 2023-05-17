/* tslint:disable */
/* eslint-disable */
/**
 * Oasisscan API
 * https://github.com/bitcat365/oasisscan-backend#readme https://api.oasisscan.com/mainnet/swagger-ui/#/ https://api.oasisscan.com/mainnet/v2/api-docs 
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    ParaTimeCtxRow,
    ParaTimeCtxRowFromJSON,
    ParaTimeCtxRowFromJSONTyped,
    ParaTimeCtxRowToJSON,
} from './';

/**
 * 
 * @export
 * @interface RuntimeTransactionInfoRow
 */
export interface RuntimeTransactionInfoRow {
    /**
     * 
     * @type {ParaTimeCtxRow}
     * @memberof RuntimeTransactionInfoRow
     */
    ctx: ParaTimeCtxRow;
    /**
     * 
     * @type {string}
     * @memberof RuntimeTransactionInfoRow
     */
    runtimeName: string;
    /**
     * 
     * @type {string}
     * @memberof RuntimeTransactionInfoRow
     */
    runtimeId: string;
    /**
     * 
     * @type {number}
     * @memberof RuntimeTransactionInfoRow
     */
    round: number;
    /**
     * 
     * @type {number}
     * @memberof RuntimeTransactionInfoRow
     */
    timestamp: number;
    /**
     * 
     * @type {string}
     * @memberof RuntimeTransactionInfoRow
     */
    txHash: string;
    /**
     * 
     * @type {boolean}
     * @memberof RuntimeTransactionInfoRow
     */
    result: boolean;
    /**
     * 
     * @type {any}
     * @memberof RuntimeTransactionInfoRow
     */
    message?: any | null;
    /**
     * 
     * @type {any}
     * @memberof RuntimeTransactionInfoRow
     */
    type?: any | null;
    /**
     * 
     * @type {any}
     * @memberof RuntimeTransactionInfoRow
     */
    etx?: any | null;
    /**
     * 
     * @type {any}
     * @memberof RuntimeTransactionInfoRow
     */
    events?: any | null;
}

export function RuntimeTransactionInfoRowFromJSON(json: any): RuntimeTransactionInfoRow {
    return RuntimeTransactionInfoRowFromJSONTyped(json, false);
}

export function RuntimeTransactionInfoRowFromJSONTyped(json: any, ignoreDiscriminator: boolean): RuntimeTransactionInfoRow {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ctx': ParaTimeCtxRowFromJSON(json['ctx']),
        'runtimeName': json['runtimeName'],
        'runtimeId': json['runtimeId'],
        'round': json['round'],
        'timestamp': json['timestamp'],
        'txHash': json['txHash'],
        'result': json['result'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'etx': !exists(json, 'etx') ? undefined : json['etx'],
        'events': !exists(json, 'events') ? undefined : json['events'],
    };
}

export function RuntimeTransactionInfoRowToJSON(value?: RuntimeTransactionInfoRow | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ctx': ParaTimeCtxRowToJSON(value.ctx),
        'runtimeName': value.runtimeName,
        'runtimeId': value.runtimeId,
        'round': value.round,
        'timestamp': value.timestamp,
        'txHash': value.txHash,
        'result': value.result,
        'message': value.message,
        'type': value.type,
        'etx': value.etx,
        'events': value.events,
    };
}


