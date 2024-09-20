import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    auth(...values: string[] | number[]): this;
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    server(url: string, variables?: {}): void;
    getApiV2Health(): Promise<FetchResponse<number, unknown>>;
    getApiV2Networks(metadata?: types.GetApiV2NetworksMetadataParam): Promise<FetchResponse<200, types.GetApiV2NetworksResponse200>>;
    getApiV2Sources(metadata?: types.GetApiV2SourcesMetadataParam): Promise<FetchResponse<200, types.GetApiV2SourcesResponse200>>;
    getApiV2Destinations(metadata?: types.GetApiV2DestinationsMetadataParam): Promise<FetchResponse<200, types.GetApiV2DestinationsResponse200>>;
    getApiV2Limits(metadata: types.GetApiV2LimitsMetadataParam): Promise<FetchResponse<200, types.GetApiV2LimitsResponse200>>;
    getApiV2Quote(metadata: types.GetApiV2QuoteMetadataParam): Promise<FetchResponse<200, types.GetApiV2QuoteResponse200>>;
    getApiV2SwapsSwapid(metadata: types.GetApiV2SwapsSwapidMetadataParam): Promise<FetchResponse<200, types.GetApiV2SwapsSwapidResponse200>>;
    getApiV2SwapsSwapidDeposit_actions(metadata: types.GetApiV2SwapsSwapidDepositActionsMetadataParam): Promise<FetchResponse<200, types.GetApiV2SwapsSwapidDepositActionsResponse200>>;
    getApiV2Swaps(metadata: types.GetApiV2SwapsMetadataParam): Promise<FetchResponse<200, types.GetApiV2SwapsResponse200>>;
    postApiV2Swaps(body: types.PostApiV2SwapsBodyParam): Promise<FetchResponse<200, types.PostApiV2SwapsResponse200>>;
}
declare const createSDK: SDK;
export default createSDK;
