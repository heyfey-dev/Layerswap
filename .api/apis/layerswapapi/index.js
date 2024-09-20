import Oas from 'oas';
import APICore from 'api/dist/core';
import definition from './openapi.json';
class SDK {
    constructor() {
        this.spec = Oas.init(definition);
        this.core = new APICore(this.spec, 'layerswapapi/v2 (api/6.1.2)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config) {
        this.core.setConfig(config);
    }
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
    auth(...values) {
        this.core.setAuth(...values);
        return this;
    }
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
    server(url, variables = {}) {
        this.core.setServer(url, variables);
    }
    getApiV2Health() {
        return this.core.fetch('/api/v2/health', 'get');
    }
    getApiV2Networks(metadata) {
        return this.core.fetch('/api/v2/networks', 'get', metadata);
    }
    getApiV2Sources(metadata) {
        return this.core.fetch('/api/v2/sources', 'get', metadata);
    }
    getApiV2Destinations(metadata) {
        return this.core.fetch('/api/v2/destinations', 'get', metadata);
    }
    getApiV2Limits(metadata) {
        return this.core.fetch('/api/v2/limits', 'get', metadata);
    }
    getApiV2Quote(metadata) {
        return this.core.fetch('/api/v2/quote', 'get', metadata);
    }
    getApiV2SwapsSwapid(metadata) {
        return this.core.fetch('/api/v2/swaps/{swapId}', 'get', metadata);
    }
    getApiV2SwapsSwapidDeposit_actions(metadata) {
        return this.core.fetch('/api/v2/swaps/{swapId}/deposit_actions', 'get', metadata);
    }
    getApiV2Swaps(metadata) {
        return this.core.fetch('/api/v2/swaps', 'get', metadata);
    }
    postApiV2Swaps(body) {
        return this.core.fetch('/api/v2/swaps', 'post', body);
    }
}
const createSDK = (() => { return new SDK(); })();
export default createSDK;
