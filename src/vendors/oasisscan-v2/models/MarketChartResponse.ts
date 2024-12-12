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
    Chart,
    ChartFromJSON,
    ChartFromJSONTyped,
    ChartToJSON,
} from './';

/**
 * 
 * @export
 * @interface MarketChartResponse
 */
export interface MarketChartResponse {
    /**
     * 
     * @type {Array<Chart>}
     * @memberof MarketChartResponse
     */
    price: Array<Chart>;
    /**
     * 
     * @type {Array<Chart>}
     * @memberof MarketChartResponse
     */
    marketCap: Array<Chart>;
    /**
     * 
     * @type {Array<Chart>}
     * @memberof MarketChartResponse
     */
    volume: Array<Chart>;
}

export function MarketChartResponseFromJSON(json: any): MarketChartResponse {
    return MarketChartResponseFromJSONTyped(json, false);
}

export function MarketChartResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketChartResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'price': ((json['price'] as Array<any>).map(ChartFromJSON)),
        'marketCap': ((json['marketCap'] as Array<any>).map(ChartFromJSON)),
        'volume': ((json['volume'] as Array<any>).map(ChartFromJSON)),
    };
}

export function MarketChartResponseToJSON(value?: MarketChartResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'price': ((value.price as Array<any>).map(ChartToJSON)),
        'marketCap': ((value.marketCap as Array<any>).map(ChartToJSON)),
        'volume': ((value.volume as Array<any>).map(ChartToJSON)),
    };
}

