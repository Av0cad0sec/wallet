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
import {
    RuntimeTransactionListInfo,
    RuntimeTransactionListInfoFromJSON,
    RuntimeTransactionListInfoFromJSONTyped,
    RuntimeTransactionListInfoToJSON,
} from './';

/**
 * 
 * @export
 * @interface RuntimeTransactionListResponse
 */
export interface RuntimeTransactionListResponse {
    /**
     * 
     * @type {Array<RuntimeTransactionListInfo>}
     * @memberof RuntimeTransactionListResponse
     */
    list: Array<RuntimeTransactionListInfo>;
    /**
     * 
     * @type {number}
     * @memberof RuntimeTransactionListResponse
     */
    page?: number;
    /**
     * 
     * @type {number}
     * @memberof RuntimeTransactionListResponse
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof RuntimeTransactionListResponse
     */
    maxPage?: number;
    /**
     * 
     * @type {number}
     * @memberof RuntimeTransactionListResponse
     */
    totalSize?: number;
}

export function RuntimeTransactionListResponseFromJSON(json: any): RuntimeTransactionListResponse {
    return RuntimeTransactionListResponseFromJSONTyped(json, false);
}

export function RuntimeTransactionListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RuntimeTransactionListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'list': ((json['list'] as Array<any>).map(RuntimeTransactionListInfoFromJSON)),
        'page': !exists(json, 'page') ? undefined : json['page'],
        'size': !exists(json, 'size') ? undefined : json['size'],
        'maxPage': !exists(json, 'maxPage') ? undefined : json['maxPage'],
        'totalSize': !exists(json, 'totalSize') ? undefined : json['totalSize'],
    };
}

export function RuntimeTransactionListResponseToJSON(value?: RuntimeTransactionListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'list': ((value.list as Array<any>).map(RuntimeTransactionListInfoToJSON)),
        'page': value.page,
        'size': value.size,
        'maxPage': value.maxPage,
        'totalSize': value.totalSize,
    };
}


