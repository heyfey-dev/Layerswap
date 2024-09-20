declare const GetApiV2Destinations: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly source_network: {
                    readonly type: "string";
                    readonly examples: readonly ["ETHEREUM_MAINNET", "ARBITRUM_MAINNET", "OPTIMISM_MAINNET", "STARKNET_MAINNET", "SOLANA_MAINNET"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly source_token: {
                    readonly type: "string";
                    readonly examples: readonly ["ETH", "USDC", "USDC.e", "WETH"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly include_swaps: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly include_unavailable: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly include_unmatched: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly network_types: {
                    readonly type: "array";
                    readonly items: {
                        readonly enum: readonly ["evm", "starknet", "solana", "cosmos", "starkex", "zksynclite", "ton", "paradex", "tron"];
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly code: {
                            readonly type: "string";
                        };
                        readonly message: {
                            readonly type: "string";
                        };
                        readonly metadata: {
                            readonly type: "object";
                            readonly additionalProperties: true;
                        };
                    };
                    readonly additionalProperties: false;
                };
                readonly data: {
                    readonly type: readonly ["array", "null"];
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly display_name: {
                                readonly type: "string";
                            };
                            readonly logo: {
                                readonly type: "string";
                            };
                            readonly chain_id: {
                                readonly type: readonly ["string", "null"];
                            };
                            readonly node_url: {
                                readonly type: readonly ["string", "null"];
                            };
                            readonly type: {
                                readonly enum: readonly ["evm", "starknet", "solana", "cosmos", "starkex", "zksynclite", "ton", "paradex", "tron"];
                                readonly type: "string";
                                readonly description: "`evm` `starknet` `solana` `cosmos` `starkex` `zksynclite` `ton` `paradex` `tron`";
                            };
                            readonly transaction_explorer_template: {
                                readonly type: "string";
                            };
                            readonly account_explorer_template: {
                                readonly type: "string";
                            };
                            readonly token: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly symbol: {
                                        readonly type: "string";
                                    };
                                    readonly logo: {
                                        readonly type: "string";
                                    };
                                    readonly contract: {
                                        readonly type: readonly ["string", "null"];
                                    };
                                    readonly decimals: {
                                        readonly type: "integer";
                                        readonly format: "int32";
                                        readonly minimum: -2147483648;
                                        readonly maximum: 2147483647;
                                    };
                                    readonly price_in_usd: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly precision: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly listing_date: {
                                        readonly type: "string";
                                        readonly format: "date-time";
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly listing_date: {
                                        readonly type: "string";
                                        readonly format: "date-time";
                                    };
                                    readonly evm_oracle_contract: {
                                        readonly type: readonly ["string", "null"];
                                    };
                                    readonly evm_multicall_contract: {
                                        readonly type: readonly ["string", "null"];
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                            readonly deposit_methods: {
                                readonly type: readonly ["array", "null"];
                                readonly items: {
                                    readonly type: "string";
                                };
                            };
                            readonly tokens: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly symbol: {
                                            readonly type: "string";
                                        };
                                        readonly logo: {
                                            readonly type: "string";
                                        };
                                        readonly contract: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly decimals: {
                                            readonly type: "integer";
                                            readonly format: "int32";
                                            readonly minimum: -2147483648;
                                            readonly maximum: 2147483647;
                                        };
                                        readonly price_in_usd: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly precision: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly listing_date: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly status: {
                                            readonly type: "string";
                                        };
                                        readonly refuel: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly token: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly symbol: {
                                                            readonly type: "string";
                                                        };
                                                        readonly logo: {
                                                            readonly type: "string";
                                                        };
                                                        readonly contract: {
                                                            readonly type: readonly ["string", "null"];
                                                        };
                                                        readonly decimals: {
                                                            readonly type: "integer";
                                                            readonly format: "int32";
                                                            readonly minimum: -2147483648;
                                                            readonly maximum: 2147483647;
                                                        };
                                                        readonly price_in_usd: {
                                                            readonly type: "number";
                                                            readonly format: "double";
                                                            readonly minimum: -1.7976931348623157e+308;
                                                            readonly maximum: 1.7976931348623157e+308;
                                                        };
                                                        readonly precision: {
                                                            readonly type: "number";
                                                            readonly format: "double";
                                                            readonly minimum: -1.7976931348623157e+308;
                                                            readonly maximum: 1.7976931348623157e+308;
                                                        };
                                                        readonly listing_date: {
                                                            readonly type: "string";
                                                            readonly format: "date-time";
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                };
                                                readonly network: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly name: {
                                                            readonly type: "string";
                                                        };
                                                        readonly display_name: {
                                                            readonly type: "string";
                                                        };
                                                        readonly logo: {
                                                            readonly type: "string";
                                                        };
                                                        readonly chain_id: {
                                                            readonly type: readonly ["string", "null"];
                                                        };
                                                        readonly node_url: {
                                                            readonly type: readonly ["string", "null"];
                                                        };
                                                        readonly type: {
                                                            readonly enum: readonly ["evm", "starknet", "solana", "cosmos", "starkex", "zksynclite", "ton", "paradex", "tron"];
                                                            readonly type: "string";
                                                            readonly description: "`evm` `starknet` `solana` `cosmos` `starkex` `zksynclite` `ton` `paradex` `tron`";
                                                        };
                                                        readonly transaction_explorer_template: {
                                                            readonly type: "string";
                                                        };
                                                        readonly account_explorer_template: {
                                                            readonly type: "string";
                                                        };
                                                        readonly token: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly symbol: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly logo: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly contract: {
                                                                    readonly type: readonly ["string", "null"];
                                                                };
                                                                readonly decimals: {
                                                                    readonly type: "integer";
                                                                    readonly format: "int32";
                                                                    readonly minimum: -2147483648;
                                                                    readonly maximum: 2147483647;
                                                                };
                                                                readonly price_in_usd: {
                                                                    readonly type: "number";
                                                                    readonly format: "double";
                                                                    readonly minimum: -1.7976931348623157e+308;
                                                                    readonly maximum: 1.7976931348623157e+308;
                                                                };
                                                                readonly precision: {
                                                                    readonly type: "number";
                                                                    readonly format: "double";
                                                                    readonly minimum: -1.7976931348623157e+308;
                                                                    readonly maximum: 1.7976931348623157e+308;
                                                                };
                                                                readonly listing_date: {
                                                                    readonly type: "string";
                                                                    readonly format: "date-time";
                                                                };
                                                            };
                                                            readonly additionalProperties: false;
                                                        };
                                                        readonly metadata: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly listing_date: {
                                                                    readonly type: "string";
                                                                    readonly format: "date-time";
                                                                };
                                                                readonly evm_oracle_contract: {
                                                                    readonly type: readonly ["string", "null"];
                                                                };
                                                                readonly evm_multicall_contract: {
                                                                    readonly type: readonly ["string", "null"];
                                                                };
                                                            };
                                                            readonly additionalProperties: false;
                                                        };
                                                        readonly deposit_methods: {
                                                            readonly type: readonly ["array", "null"];
                                                            readonly items: {
                                                                readonly type: "string";
                                                            };
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                };
                                                readonly amount: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly amount_in_usd: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetApiV2Limits: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly source_network: {
                    readonly type: "string";
                    readonly examples: readonly ["ETHEREUM_MAINNET", "ARBITRUM_MAINNET", "OPTIMISM_MAINNET", "STARKNET_MAINNET", "SOLANA_MAINNET"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly source_token: {
                    readonly type: "string";
                    readonly examples: readonly ["ETH", "USDC", "USDC.e", "WETH"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly destination_network: {
                    readonly type: "string";
                    readonly examples: readonly ["ETHEREUM_MAINNET", "ARBITRUM_MAINNET", "OPTIMISM_MAINNET", "STARKNET_MAINNET", "SOLANA_MAINNET"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly destination_token: {
                    readonly type: "string";
                    readonly examples: readonly ["ETH", "USDC", "USDC.e", "WETH"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly use_deposit_address: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly refuel: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["source_network", "source_token", "destination_network", "destination_token"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly code: {
                            readonly type: "string";
                        };
                        readonly message: {
                            readonly type: "string";
                        };
                        readonly metadata: {
                            readonly type: "object";
                            readonly additionalProperties: true;
                        };
                    };
                    readonly additionalProperties: false;
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly min_amount_in_usd: {
                            readonly type: "number";
                            readonly format: "double";
                            readonly minimum: -1.7976931348623157e+308;
                            readonly maximum: 1.7976931348623157e+308;
                        };
                        readonly min_amount: {
                            readonly type: "number";
                            readonly format: "double";
                            readonly minimum: -1.7976931348623157e+308;
                            readonly maximum: 1.7976931348623157e+308;
                        };
                        readonly max_amount_in_usd: {
                            readonly type: "number";
                            readonly format: "double";
                            readonly minimum: -1.7976931348623157e+308;
                            readonly maximum: 1.7976931348623157e+308;
                        };
                        readonly max_amount: {
                            readonly type: "number";
                            readonly format: "double";
                            readonly minimum: -1.7976931348623157e+308;
                            readonly maximum: 1.7976931348623157e+308;
                        };
                    };
                    readonly additionalProperties: false;
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetApiV2Networks: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly network_types: {
                    readonly type: "array";
                    readonly items: {
                        readonly enum: readonly ["evm", "starknet", "solana", "cosmos", "starkex", "zksynclite", "ton", "paradex", "tron"];
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly code: {
                            readonly type: "string";
                        };
                        readonly message: {
                            readonly type: "string";
                        };
                        readonly metadata: {
                            readonly type: "object";
                            readonly additionalProperties: true;
                        };
                    };
                    readonly additionalProperties: false;
                };
                readonly data: {
                    readonly type: readonly ["array", "null"];
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly display_name: {
                                readonly type: "string";
                            };
                            readonly logo: {
                                readonly type: "string";
                            };
                            readonly chain_id: {
                                readonly type: readonly ["string", "null"];
                            };
                            readonly node_url: {
                                readonly type: readonly ["string", "null"];
                            };
                            readonly type: {
                                readonly enum: readonly ["evm", "starknet", "solana", "cosmos", "starkex", "zksynclite", "ton", "paradex", "tron"];
                                readonly type: "string";
                                readonly description: "`evm` `starknet` `solana` `cosmos` `starkex` `zksynclite` `ton` `paradex` `tron`";
                            };
                            readonly transaction_explorer_template: {
                                readonly type: "string";
                            };
                            readonly account_explorer_template: {
                                readonly type: "string";
                            };
                            readonly token: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly symbol: {
                                        readonly type: "string";
                                    };
                                    readonly logo: {
                                        readonly type: "string";
                                    };
                                    readonly contract: {
                                        readonly type: readonly ["string", "null"];
                                    };
                                    readonly decimals: {
                                        readonly type: "integer";
                                        readonly format: "int32";
                                        readonly minimum: -2147483648;
                                        readonly maximum: 2147483647;
                                    };
                                    readonly price_in_usd: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly precision: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly listing_date: {
                                        readonly type: "string";
                                        readonly format: "date-time";
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly listing_date: {
                                        readonly type: "string";
                                        readonly format: "date-time";
                                    };
                                    readonly evm_oracle_contract: {
                                        readonly type: readonly ["string", "null"];
                                    };
                                    readonly evm_multicall_contract: {
                                        readonly type: readonly ["string", "null"];
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                            readonly deposit_methods: {
                                readonly type: readonly ["array", "null"];
                                readonly items: {
                                    readonly type: "string";
                                };
                            };
                            readonly tokens: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly symbol: {
                                            readonly type: "string";
                                        };
                                        readonly logo: {
                                            readonly type: "string";
                                        };
                                        readonly contract: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly decimals: {
                                            readonly type: "integer";
                                            readonly format: "int32";
                                            readonly minimum: -2147483648;
                                            readonly maximum: 2147483647;
                                        };
                                        readonly price_in_usd: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly precision: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly listing_date: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetApiV2Quote: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly source_network: {
                    readonly type: "string";
                    readonly examples: readonly ["ETHEREUM_MAINNET", "ARBITRUM_MAINNET", "OPTIMISM_MAINNET", "STARKNET_MAINNET", "SOLANA_MAINNET"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly source_token: {
                    readonly type: "string";
                    readonly examples: readonly ["ETH", "USDC", "USDC.e", "WETH"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly destination_network: {
                    readonly type: "string";
                    readonly examples: readonly ["ETHEREUM_MAINNET", "ARBITRUM_MAINNET", "OPTIMISM_MAINNET", "STARKNET_MAINNET", "SOLANA_MAINNET"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly destination_token: {
                    readonly type: "string";
                    readonly examples: readonly ["ETH", "USDC", "USDC.e", "WETH"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly source_address: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly slippage: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly use_deposit_address: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly amount: {
                    readonly type: "number";
                    readonly format: "double";
                    readonly minimum: -1.7976931348623157e+308;
                    readonly maximum: 1.7976931348623157e+308;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly refuel: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["source_network", "source_token", "destination_network", "destination_token", "amount"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly code: {
                            readonly type: "string";
                        };
                        readonly message: {
                            readonly type: "string";
                        };
                        readonly metadata: {
                            readonly type: "object";
                            readonly additionalProperties: true;
                        };
                    };
                    readonly additionalProperties: false;
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly quote: {
                            readonly type: "object";
                            readonly properties: {
                                readonly total_fee: {
                                    readonly type: "number";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                                readonly total_fee_in_usd: {
                                    readonly type: "number";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                                readonly source_network: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly display_name: {
                                            readonly type: "string";
                                        };
                                        readonly logo: {
                                            readonly type: "string";
                                        };
                                        readonly chain_id: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly node_url: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly type: {
                                            readonly enum: readonly ["evm", "starknet", "solana", "cosmos", "starkex", "zksynclite", "ton", "paradex", "tron"];
                                            readonly type: "string";
                                            readonly description: "`evm` `starknet` `solana` `cosmos` `starkex` `zksynclite` `ton` `paradex` `tron`";
                                        };
                                        readonly transaction_explorer_template: {
                                            readonly type: "string";
                                        };
                                        readonly account_explorer_template: {
                                            readonly type: "string";
                                        };
                                        readonly token: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly symbol: {
                                                    readonly type: "string";
                                                };
                                                readonly logo: {
                                                    readonly type: "string";
                                                };
                                                readonly contract: {
                                                    readonly type: readonly ["string", "null"];
                                                };
                                                readonly decimals: {
                                                    readonly type: "integer";
                                                    readonly format: "int32";
                                                    readonly minimum: -2147483648;
                                                    readonly maximum: 2147483647;
                                                };
                                                readonly price_in_usd: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly precision: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly listing_date: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                        readonly metadata: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly listing_date: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                                readonly evm_oracle_contract: {
                                                    readonly type: readonly ["string", "null"];
                                                };
                                                readonly evm_multicall_contract: {
                                                    readonly type: readonly ["string", "null"];
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                        readonly deposit_methods: {
                                            readonly type: readonly ["array", "null"];
                                            readonly items: {
                                                readonly type: "string";
                                            };
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                                readonly source_token: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly symbol: {
                                            readonly type: "string";
                                        };
                                        readonly logo: {
                                            readonly type: "string";
                                        };
                                        readonly contract: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly decimals: {
                                            readonly type: "integer";
                                            readonly format: "int32";
                                            readonly minimum: -2147483648;
                                            readonly maximum: 2147483647;
                                        };
                                        readonly price_in_usd: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly precision: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly listing_date: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                                readonly destination_network: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly display_name: {
                                            readonly type: "string";
                                        };
                                        readonly logo: {
                                            readonly type: "string";
                                        };
                                        readonly chain_id: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly node_url: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly type: {
                                            readonly enum: readonly ["evm", "starknet", "solana", "cosmos", "starkex", "zksynclite", "ton", "paradex", "tron"];
                                            readonly type: "string";
                                            readonly description: "`evm` `starknet` `solana` `cosmos` `starkex` `zksynclite` `ton` `paradex` `tron`";
                                        };
                                        readonly transaction_explorer_template: {
                                            readonly type: "string";
                                        };
                                        readonly account_explorer_template: {
                                            readonly type: "string";
                                        };
                                        readonly token: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly symbol: {
                                                    readonly type: "string";
                                                };
                                                readonly logo: {
                                                    readonly type: "string";
                                                };
                                                readonly contract: {
                                                    readonly type: readonly ["string", "null"];
                                                };
                                                readonly decimals: {
                                                    readonly type: "integer";
                                                    readonly format: "int32";
                                                    readonly minimum: -2147483648;
                                                    readonly maximum: 2147483647;
                                                };
                                                readonly price_in_usd: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly precision: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly listing_date: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                        readonly metadata: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly listing_date: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                                readonly evm_oracle_contract: {
                                                    readonly type: readonly ["string", "null"];
                                                };
                                                readonly evm_multicall_contract: {
                                                    readonly type: readonly ["string", "null"];
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                        readonly deposit_methods: {
                                            readonly type: readonly ["array", "null"];
                                            readonly items: {
                                                readonly type: "string";
                                            };
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                                readonly destination_token: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly symbol: {
                                            readonly type: "string";
                                        };
                                        readonly logo: {
                                            readonly type: "string";
                                        };
                                        readonly contract: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly decimals: {
                                            readonly type: "integer";
                                            readonly format: "int32";
                                            readonly minimum: -2147483648;
                                            readonly maximum: 2147483647;
                                        };
                                        readonly price_in_usd: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly precision: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly listing_date: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                                readonly receive_amount: {
                                    readonly type: "number";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                                readonly min_receive_amount: {
                                    readonly type: "number";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                                readonly blockchain_fee: {
                                    readonly type: "number";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                                readonly service_fee: {
                                    readonly type: "number";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                                readonly avg_completion_time: {
                                    readonly type: "string";
                                };
                                readonly refuel_in_source: {
                                    readonly type: readonly ["number", "null"];
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                                readonly slippage: {
                                    readonly type: "number";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                            };
                            readonly additionalProperties: false;
                        };
                        readonly refuel: {
                            readonly type: "object";
                            readonly properties: {
                                readonly token: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly symbol: {
                                            readonly type: "string";
                                        };
                                        readonly logo: {
                                            readonly type: "string";
                                        };
                                        readonly contract: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly decimals: {
                                            readonly type: "integer";
                                            readonly format: "int32";
                                            readonly minimum: -2147483648;
                                            readonly maximum: 2147483647;
                                        };
                                        readonly price_in_usd: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly precision: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly listing_date: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                                readonly network: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly display_name: {
                                            readonly type: "string";
                                        };
                                        readonly logo: {
                                            readonly type: "string";
                                        };
                                        readonly chain_id: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly node_url: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly type: {
                                            readonly enum: readonly ["evm", "starknet", "solana", "cosmos", "starkex", "zksynclite", "ton", "paradex", "tron"];
                                            readonly type: "string";
                                            readonly description: "`evm` `starknet` `solana` `cosmos` `starkex` `zksynclite` `ton` `paradex` `tron`";
                                        };
                                        readonly transaction_explorer_template: {
                                            readonly type: "string";
                                        };
                                        readonly account_explorer_template: {
                                            readonly type: "string";
                                        };
                                        readonly token: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly symbol: {
                                                    readonly type: "string";
                                                };
                                                readonly logo: {
                                                    readonly type: "string";
                                                };
                                                readonly contract: {
                                                    readonly type: readonly ["string", "null"];
                                                };
                                                readonly decimals: {
                                                    readonly type: "integer";
                                                    readonly format: "int32";
                                                    readonly minimum: -2147483648;
                                                    readonly maximum: 2147483647;
                                                };
                                                readonly price_in_usd: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly precision: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly listing_date: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                        readonly metadata: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly listing_date: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                                readonly evm_oracle_contract: {
                                                    readonly type: readonly ["string", "null"];
                                                };
                                                readonly evm_multicall_contract: {
                                                    readonly type: readonly ["string", "null"];
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                        readonly deposit_methods: {
                                            readonly type: readonly ["array", "null"];
                                            readonly items: {
                                                readonly type: "string";
                                            };
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                                readonly amount: {
                                    readonly type: "number";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                                readonly amount_in_usd: {
                                    readonly type: "number";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                            };
                            readonly additionalProperties: false;
                        };
                        readonly reward: {
                            readonly type: "object";
                            readonly properties: {
                                readonly token: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly symbol: {
                                            readonly type: "string";
                                        };
                                        readonly logo: {
                                            readonly type: "string";
                                        };
                                        readonly contract: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly decimals: {
                                            readonly type: "integer";
                                            readonly format: "int32";
                                            readonly minimum: -2147483648;
                                            readonly maximum: 2147483647;
                                        };
                                        readonly price_in_usd: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly precision: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly listing_date: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                                readonly network: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly display_name: {
                                            readonly type: "string";
                                        };
                                        readonly logo: {
                                            readonly type: "string";
                                        };
                                        readonly chain_id: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly node_url: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly type: {
                                            readonly enum: readonly ["evm", "starknet", "solana", "cosmos", "starkex", "zksynclite", "ton", "paradex", "tron"];
                                            readonly type: "string";
                                            readonly description: "`evm` `starknet` `solana` `cosmos` `starkex` `zksynclite` `ton` `paradex` `tron`";
                                        };
                                        readonly transaction_explorer_template: {
                                            readonly type: "string";
                                        };
                                        readonly account_explorer_template: {
                                            readonly type: "string";
                                        };
                                        readonly token: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly symbol: {
                                                    readonly type: "string";
                                                };
                                                readonly logo: {
                                                    readonly type: "string";
                                                };
                                                readonly contract: {
                                                    readonly type: readonly ["string", "null"];
                                                };
                                                readonly decimals: {
                                                    readonly type: "integer";
                                                    readonly format: "int32";
                                                    readonly minimum: -2147483648;
                                                    readonly maximum: 2147483647;
                                                };
                                                readonly price_in_usd: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly precision: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly listing_date: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                        readonly metadata: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly listing_date: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                                readonly evm_oracle_contract: {
                                                    readonly type: readonly ["string", "null"];
                                                };
                                                readonly evm_multicall_contract: {
                                                    readonly type: readonly ["string", "null"];
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                        readonly deposit_methods: {
                                            readonly type: readonly ["array", "null"];
                                            readonly items: {
                                                readonly type: "string";
                                            };
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                                readonly amount: {
                                    readonly type: "number";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                                readonly amount_in_usd: {
                                    readonly type: "number";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                            };
                            readonly additionalProperties: false;
                        };
                    };
                    readonly additionalProperties: false;
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetApiV2Sources: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly destination_network: {
                    readonly type: "string";
                    readonly examples: readonly ["ETHEREUM_MAINNET", "ARBITRUM_MAINNET", "OPTIMISM_MAINNET", "STARKNET_MAINNET", "SOLANA_MAINNET"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly destination_token: {
                    readonly type: "string";
                    readonly examples: readonly ["ETH", "USDC", "USDC.e", "WETH"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly include_swaps: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly include_unavailable: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly include_unmatched: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly network_types: {
                    readonly type: "array";
                    readonly items: {
                        readonly enum: readonly ["evm", "starknet", "solana", "cosmos", "starkex", "zksynclite", "ton", "paradex", "tron"];
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly code: {
                            readonly type: "string";
                        };
                        readonly message: {
                            readonly type: "string";
                        };
                        readonly metadata: {
                            readonly type: "object";
                            readonly additionalProperties: true;
                        };
                    };
                    readonly additionalProperties: false;
                };
                readonly data: {
                    readonly type: readonly ["array", "null"];
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly display_name: {
                                readonly type: "string";
                            };
                            readonly logo: {
                                readonly type: "string";
                            };
                            readonly chain_id: {
                                readonly type: readonly ["string", "null"];
                            };
                            readonly node_url: {
                                readonly type: readonly ["string", "null"];
                            };
                            readonly type: {
                                readonly enum: readonly ["evm", "starknet", "solana", "cosmos", "starkex", "zksynclite", "ton", "paradex", "tron"];
                                readonly type: "string";
                                readonly description: "`evm` `starknet` `solana` `cosmos` `starkex` `zksynclite` `ton` `paradex` `tron`";
                            };
                            readonly transaction_explorer_template: {
                                readonly type: "string";
                            };
                            readonly account_explorer_template: {
                                readonly type: "string";
                            };
                            readonly token: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly symbol: {
                                        readonly type: "string";
                                    };
                                    readonly logo: {
                                        readonly type: "string";
                                    };
                                    readonly contract: {
                                        readonly type: readonly ["string", "null"];
                                    };
                                    readonly decimals: {
                                        readonly type: "integer";
                                        readonly format: "int32";
                                        readonly minimum: -2147483648;
                                        readonly maximum: 2147483647;
                                    };
                                    readonly price_in_usd: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly precision: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly listing_date: {
                                        readonly type: "string";
                                        readonly format: "date-time";
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly listing_date: {
                                        readonly type: "string";
                                        readonly format: "date-time";
                                    };
                                    readonly evm_oracle_contract: {
                                        readonly type: readonly ["string", "null"];
                                    };
                                    readonly evm_multicall_contract: {
                                        readonly type: readonly ["string", "null"];
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                            readonly deposit_methods: {
                                readonly type: readonly ["array", "null"];
                                readonly items: {
                                    readonly type: "string";
                                };
                            };
                            readonly tokens: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly symbol: {
                                            readonly type: "string";
                                        };
                                        readonly logo: {
                                            readonly type: "string";
                                        };
                                        readonly contract: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly decimals: {
                                            readonly type: "integer";
                                            readonly format: "int32";
                                            readonly minimum: -2147483648;
                                            readonly maximum: 2147483647;
                                        };
                                        readonly price_in_usd: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly precision: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly listing_date: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly status: {
                                            readonly type: "string";
                                        };
                                        readonly refuel: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly token: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly symbol: {
                                                            readonly type: "string";
                                                        };
                                                        readonly logo: {
                                                            readonly type: "string";
                                                        };
                                                        readonly contract: {
                                                            readonly type: readonly ["string", "null"];
                                                        };
                                                        readonly decimals: {
                                                            readonly type: "integer";
                                                            readonly format: "int32";
                                                            readonly minimum: -2147483648;
                                                            readonly maximum: 2147483647;
                                                        };
                                                        readonly price_in_usd: {
                                                            readonly type: "number";
                                                            readonly format: "double";
                                                            readonly minimum: -1.7976931348623157e+308;
                                                            readonly maximum: 1.7976931348623157e+308;
                                                        };
                                                        readonly precision: {
                                                            readonly type: "number";
                                                            readonly format: "double";
                                                            readonly minimum: -1.7976931348623157e+308;
                                                            readonly maximum: 1.7976931348623157e+308;
                                                        };
                                                        readonly listing_date: {
                                                            readonly type: "string";
                                                            readonly format: "date-time";
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                };
                                                readonly network: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly name: {
                                                            readonly type: "string";
                                                        };
                                                        readonly display_name: {
                                                            readonly type: "string";
                                                        };
                                                        readonly logo: {
                                                            readonly type: "string";
                                                        };
                                                        readonly chain_id: {
                                                            readonly type: readonly ["string", "null"];
                                                        };
                                                        readonly node_url: {
                                                            readonly type: readonly ["string", "null"];
                                                        };
                                                        readonly type: {
                                                            readonly enum: readonly ["evm", "starknet", "solana", "cosmos", "starkex", "zksynclite", "ton", "paradex", "tron"];
                                                            readonly type: "string";
                                                            readonly description: "`evm` `starknet` `solana` `cosmos` `starkex` `zksynclite` `ton` `paradex` `tron`";
                                                        };
                                                        readonly transaction_explorer_template: {
                                                            readonly type: "string";
                                                        };
                                                        readonly account_explorer_template: {
                                                            readonly type: "string";
                                                        };
                                                        readonly token: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly symbol: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly logo: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly contract: {
                                                                    readonly type: readonly ["string", "null"];
                                                                };
                                                                readonly decimals: {
                                                                    readonly type: "integer";
                                                                    readonly format: "int32";
                                                                    readonly minimum: -2147483648;
                                                                    readonly maximum: 2147483647;
                                                                };
                                                                readonly price_in_usd: {
                                                                    readonly type: "number";
                                                                    readonly format: "double";
                                                                    readonly minimum: -1.7976931348623157e+308;
                                                                    readonly maximum: 1.7976931348623157e+308;
                                                                };
                                                                readonly precision: {
                                                                    readonly type: "number";
                                                                    readonly format: "double";
                                                                    readonly minimum: -1.7976931348623157e+308;
                                                                    readonly maximum: 1.7976931348623157e+308;
                                                                };
                                                                readonly listing_date: {
                                                                    readonly type: "string";
                                                                    readonly format: "date-time";
                                                                };
                                                            };
                                                            readonly additionalProperties: false;
                                                        };
                                                        readonly metadata: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly listing_date: {
                                                                    readonly type: "string";
                                                                    readonly format: "date-time";
                                                                };
                                                                readonly evm_oracle_contract: {
                                                                    readonly type: readonly ["string", "null"];
                                                                };
                                                                readonly evm_multicall_contract: {
                                                                    readonly type: readonly ["string", "null"];
                                                                };
                                                            };
                                                            readonly additionalProperties: false;
                                                        };
                                                        readonly deposit_methods: {
                                                            readonly type: readonly ["array", "null"];
                                                            readonly items: {
                                                                readonly type: "string";
                                                            };
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                };
                                                readonly amount: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly amount_in_usd: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetApiV2Swaps: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly address: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly page: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly include_expired: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["address"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly code: {
                            readonly type: "string";
                        };
                        readonly message: {
                            readonly type: "string";
                        };
                        readonly metadata: {
                            readonly type: "object";
                            readonly additionalProperties: true;
                        };
                    };
                    readonly additionalProperties: false;
                };
                readonly data: {
                    readonly type: readonly ["array", "null"];
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly quote: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly total_fee: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly total_fee_in_usd: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly source_network: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly name: {
                                                readonly type: "string";
                                            };
                                            readonly display_name: {
                                                readonly type: "string";
                                            };
                                            readonly logo: {
                                                readonly type: "string";
                                            };
                                            readonly chain_id: {
                                                readonly type: readonly ["string", "null"];
                                            };
                                            readonly node_url: {
                                                readonly type: readonly ["string", "null"];
                                            };
                                            readonly type: {
                                                readonly enum: readonly ["evm", "starknet", "solana", "cosmos", "starkex", "zksynclite", "ton", "paradex", "tron"];
                                                readonly type: "string";
                                                readonly description: "`evm` `starknet` `solana` `cosmos` `starkex` `zksynclite` `ton` `paradex` `tron`";
                                            };
                                            readonly transaction_explorer_template: {
                                                readonly type: "string";
                                            };
                                            readonly account_explorer_template: {
                                                readonly type: "string";
                                            };
                                            readonly token: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly symbol: {
                                                        readonly type: "string";
                                                    };
                                                    readonly logo: {
                                                        readonly type: "string";
                                                    };
                                                    readonly contract: {
                                                        readonly type: readonly ["string", "null"];
                                                    };
                                                    readonly decimals: {
                                                        readonly type: "integer";
                                                        readonly format: "int32";
                                                        readonly minimum: -2147483648;
                                                        readonly maximum: 2147483647;
                                                    };
                                                    readonly price_in_usd: {
                                                        readonly type: "number";
                                                        readonly format: "double";
                                                        readonly minimum: -1.7976931348623157e+308;
                                                        readonly maximum: 1.7976931348623157e+308;
                                                    };
                                                    readonly precision: {
                                                        readonly type: "number";
                                                        readonly format: "double";
                                                        readonly minimum: -1.7976931348623157e+308;
                                                        readonly maximum: 1.7976931348623157e+308;
                                                    };
                                                    readonly listing_date: {
                                                        readonly type: "string";
                                                        readonly format: "date-time";
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            };
                                            readonly metadata: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly listing_date: {
                                                        readonly type: "string";
                                                        readonly format: "date-time";
                                                    };
                                                    readonly evm_oracle_contract: {
                                                        readonly type: readonly ["string", "null"];
                                                    };
                                                    readonly evm_multicall_contract: {
                                                        readonly type: readonly ["string", "null"];
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            };
                                            readonly deposit_methods: {
                                                readonly type: readonly ["array", "null"];
                                                readonly items: {
                                                    readonly type: "string";
                                                };
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly source_token: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly symbol: {
                                                readonly type: "string";
                                            };
                                            readonly logo: {
                                                readonly type: "string";
                                            };
                                            readonly contract: {
                                                readonly type: readonly ["string", "null"];
                                            };
                                            readonly decimals: {
                                                readonly type: "integer";
                                                readonly format: "int32";
                                                readonly minimum: -2147483648;
                                                readonly maximum: 2147483647;
                                            };
                                            readonly price_in_usd: {
                                                readonly type: "number";
                                                readonly format: "double";
                                                readonly minimum: -1.7976931348623157e+308;
                                                readonly maximum: 1.7976931348623157e+308;
                                            };
                                            readonly precision: {
                                                readonly type: "number";
                                                readonly format: "double";
                                                readonly minimum: -1.7976931348623157e+308;
                                                readonly maximum: 1.7976931348623157e+308;
                                            };
                                            readonly listing_date: {
                                                readonly type: "string";
                                                readonly format: "date-time";
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly destination_network: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly name: {
                                                readonly type: "string";
                                            };
                                            readonly display_name: {
                                                readonly type: "string";
                                            };
                                            readonly logo: {
                                                readonly type: "string";
                                            };
                                            readonly chain_id: {
                                                readonly type: readonly ["string", "null"];
                                            };
                                            readonly node_url: {
                                                readonly type: readonly ["string", "null"];
                                            };
                                            readonly type: {
                                                readonly enum: readonly ["evm", "starknet", "solana", "cosmos", "starkex", "zksynclite", "ton", "paradex", "tron"];
                                                readonly type: "string";
                                                readonly description: "`evm` `starknet` `solana` `cosmos` `starkex` `zksynclite` `ton` `paradex` `tron`";
                                            };
                                            readonly transaction_explorer_template: {
                                                readonly type: "string";
                                            };
                                            readonly account_explorer_template: {
                                                readonly type: "string";
                                            };
                                            readonly token: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly symbol: {
                                                        readonly type: "string";
                                                    };
                                                    readonly logo: {
                                                        readonly type: "string";
                                                    };
                                                    readonly contract: {
                                                        readonly type: readonly ["string", "null"];
                                                    };
                                                    readonly decimals: {
                                                        readonly type: "integer";
                                                        readonly format: "int32";
                                                        readonly minimum: -2147483648;
                                                        readonly maximum: 2147483647;
                                                    };
                                                    readonly price_in_usd: {
                                                        readonly type: "number";
                                                        readonly format: "double";
                                                        readonly minimum: -1.7976931348623157e+308;
                                                        readonly maximum: 1.7976931348623157e+308;
                                                    };
                                                    readonly precision: {
                                                        readonly type: "number";
                                                        readonly format: "double";
                                                        readonly minimum: -1.7976931348623157e+308;
                                                        readonly maximum: 1.7976931348623157e+308;
                                                    };
                                                    readonly listing_date: {
                                                        readonly type: "string";
                                                        readonly format: "date-time";
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            };
                                            readonly metadata: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly listing_date: {
                                                        readonly type: "string";
                                                        readonly format: "date-time";
                                                    };
                                                    readonly evm_oracle_contract: {
                                                        readonly type: readonly ["string", "null"];
                                                    };
                                                    readonly evm_multicall_contract: {
                                                        readonly type: readonly ["string", "null"];
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            };
                                            readonly deposit_methods: {
                                                readonly type: readonly ["array", "null"];
                                                readonly items: {
                                                    readonly type: "string";
                                                };
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly destination_token: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly symbol: {
                                                readonly type: "string";
                                            };
                                            readonly logo: {
                                                readonly type: "string";
                                            };
                                            readonly contract: {
                                                readonly type: readonly ["string", "null"];
                                            };
                                            readonly decimals: {
                                                readonly type: "integer";
                                                readonly format: "int32";
                                                readonly minimum: -2147483648;
                                                readonly maximum: 2147483647;
                                            };
                                            readonly price_in_usd: {
                                                readonly type: "number";
                                                readonly format: "double";
                                                readonly minimum: -1.7976931348623157e+308;
                                                readonly maximum: 1.7976931348623157e+308;
                                            };
                                            readonly precision: {
                                                readonly type: "number";
                                                readonly format: "double";
                                                readonly minimum: -1.7976931348623157e+308;
                                                readonly maximum: 1.7976931348623157e+308;
                                            };
                                            readonly listing_date: {
                                                readonly type: "string";
                                                readonly format: "date-time";
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly receive_amount: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly min_receive_amount: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly blockchain_fee: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly service_fee: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly avg_completion_time: {
                                        readonly type: "string";
                                    };
                                    readonly refuel_in_source: {
                                        readonly type: readonly ["number", "null"];
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly slippage: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                            readonly refuel: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly token: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly symbol: {
                                                readonly type: "string";
                                            };
                                            readonly logo: {
                                                readonly type: "string";
                                            };
                                            readonly contract: {
                                                readonly type: readonly ["string", "null"];
                                            };
                                            readonly decimals: {
                                                readonly type: "integer";
                                                readonly format: "int32";
                                                readonly minimum: -2147483648;
                                                readonly maximum: 2147483647;
                                            };
                                            readonly price_in_usd: {
                                                readonly type: "number";
                                                readonly format: "double";
                                                readonly minimum: -1.7976931348623157e+308;
                                                readonly maximum: 1.7976931348623157e+308;
                                            };
                                            readonly precision: {
                                                readonly type: "number";
                                                readonly format: "double";
                                                readonly minimum: -1.7976931348623157e+308;
                                                readonly maximum: 1.7976931348623157e+308;
                                            };
                                            readonly listing_date: {
                                                readonly type: "string";
                                                readonly format: "date-time";
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly network: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly name: {
                                                readonly type: "string";
                                            };
                                            readonly display_name: {
                                                readonly type: "string";
                                            };
                                            readonly logo: {
                                                readonly type: "string";
                                            };
                                            readonly chain_id: {
                                                readonly type: readonly ["string", "null"];
                                            };
                                            readonly node_url: {
                                                readonly type: readonly ["string", "null"];
                                            };
                                            readonly type: {
                                                readonly enum: readonly ["evm", "starknet", "solana", "cosmos", "starkex", "zksynclite", "ton", "paradex", "tron"];
                                                readonly type: "string";
                                                readonly description: "`evm` `starknet` `solana` `cosmos` `starkex` `zksynclite` `ton` `paradex` `tron`";
                                            };
                                            readonly transaction_explorer_template: {
                                                readonly type: "string";
                                            };
                                            readonly account_explorer_template: {
                                                readonly type: "string";
                                            };
                                            readonly token: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly symbol: {
                                                        readonly type: "string";
                                                    };
                                                    readonly logo: {
                                                        readonly type: "string";
                                                    };
                                                    readonly contract: {
                                                        readonly type: readonly ["string", "null"];
                                                    };
                                                    readonly decimals: {
                                                        readonly type: "integer";
                                                        readonly format: "int32";
                                                        readonly minimum: -2147483648;
                                                        readonly maximum: 2147483647;
                                                    };
                                                    readonly price_in_usd: {
                                                        readonly type: "number";
                                                        readonly format: "double";
                                                        readonly minimum: -1.7976931348623157e+308;
                                                        readonly maximum: 1.7976931348623157e+308;
                                                    };
                                                    readonly precision: {
                                                        readonly type: "number";
                                                        readonly format: "double";
                                                        readonly minimum: -1.7976931348623157e+308;
                                                        readonly maximum: 1.7976931348623157e+308;
                                                    };
                                                    readonly listing_date: {
                                                        readonly type: "string";
                                                        readonly format: "date-time";
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            };
                                            readonly metadata: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly listing_date: {
                                                        readonly type: "string";
                                                        readonly format: "date-time";
                                                    };
                                                    readonly evm_oracle_contract: {
                                                        readonly type: readonly ["string", "null"];
                                                    };
                                                    readonly evm_multicall_contract: {
                                                        readonly type: readonly ["string", "null"];
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            };
                                            readonly deposit_methods: {
                                                readonly type: readonly ["array", "null"];
                                                readonly items: {
                                                    readonly type: "string";
                                                };
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly amount: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly amount_in_usd: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                            readonly reward: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly token: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly symbol: {
                                                readonly type: "string";
                                            };
                                            readonly logo: {
                                                readonly type: "string";
                                            };
                                            readonly contract: {
                                                readonly type: readonly ["string", "null"];
                                            };
                                            readonly decimals: {
                                                readonly type: "integer";
                                                readonly format: "int32";
                                                readonly minimum: -2147483648;
                                                readonly maximum: 2147483647;
                                            };
                                            readonly price_in_usd: {
                                                readonly type: "number";
                                                readonly format: "double";
                                                readonly minimum: -1.7976931348623157e+308;
                                                readonly maximum: 1.7976931348623157e+308;
                                            };
                                            readonly precision: {
                                                readonly type: "number";
                                                readonly format: "double";
                                                readonly minimum: -1.7976931348623157e+308;
                                                readonly maximum: 1.7976931348623157e+308;
                                            };
                                            readonly listing_date: {
                                                readonly type: "string";
                                                readonly format: "date-time";
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly network: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly name: {
                                                readonly type: "string";
                                            };
                                            readonly display_name: {
                                                readonly type: "string";
                                            };
                                            readonly logo: {
                                                readonly type: "string";
                                            };
                                            readonly chain_id: {
                                                readonly type: readonly ["string", "null"];
                                            };
                                            readonly node_url: {
                                                readonly type: readonly ["string", "null"];
                                            };
                                            readonly type: {
                                                readonly enum: readonly ["evm", "starknet", "solana", "cosmos", "starkex", "zksynclite", "ton", "paradex", "tron"];
                                                readonly type: "string";
                                                readonly description: "`evm` `starknet` `solana` `cosmos` `starkex` `zksynclite` `ton` `paradex` `tron`";
                                            };
                                            readonly transaction_explorer_template: {
                                                readonly type: "string";
                                            };
                                            readonly account_explorer_template: {
                                                readonly type: "string";
                                            };
                                            readonly token: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly symbol: {
                                                        readonly type: "string";
                                                    };
                                                    readonly logo: {
                                                        readonly type: "string";
                                                    };
                                                    readonly contract: {
                                                        readonly type: readonly ["string", "null"];
                                                    };
                                                    readonly decimals: {
                                                        readonly type: "integer";
                                                        readonly format: "int32";
                                                        readonly minimum: -2147483648;
                                                        readonly maximum: 2147483647;
                                                    };
                                                    readonly price_in_usd: {
                                                        readonly type: "number";
                                                        readonly format: "double";
                                                        readonly minimum: -1.7976931348623157e+308;
                                                        readonly maximum: 1.7976931348623157e+308;
                                                    };
                                                    readonly precision: {
                                                        readonly type: "number";
                                                        readonly format: "double";
                                                        readonly minimum: -1.7976931348623157e+308;
                                                        readonly maximum: 1.7976931348623157e+308;
                                                    };
                                                    readonly listing_date: {
                                                        readonly type: "string";
                                                        readonly format: "date-time";
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            };
                                            readonly metadata: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly listing_date: {
                                                        readonly type: "string";
                                                        readonly format: "date-time";
                                                    };
                                                    readonly evm_oracle_contract: {
                                                        readonly type: readonly ["string", "null"];
                                                    };
                                                    readonly evm_multicall_contract: {
                                                        readonly type: readonly ["string", "null"];
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            };
                                            readonly deposit_methods: {
                                                readonly type: readonly ["array", "null"];
                                                readonly items: {
                                                    readonly type: "string";
                                                };
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly amount: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly amount_in_usd: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                            readonly swap: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                    };
                                    readonly created_date: {
                                        readonly type: "string";
                                        readonly format: "date-time";
                                    };
                                    readonly source_network: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly name: {
                                                readonly type: "string";
                                            };
                                            readonly display_name: {
                                                readonly type: "string";
                                            };
                                            readonly logo: {
                                                readonly type: "string";
                                            };
                                            readonly chain_id: {
                                                readonly type: readonly ["string", "null"];
                                            };
                                            readonly node_url: {
                                                readonly type: readonly ["string", "null"];
                                            };
                                            readonly type: {
                                                readonly enum: readonly ["evm", "starknet", "solana", "cosmos", "starkex", "zksynclite", "ton", "paradex", "tron"];
                                                readonly type: "string";
                                                readonly description: "`evm` `starknet` `solana` `cosmos` `starkex` `zksynclite` `ton` `paradex` `tron`";
                                            };
                                            readonly transaction_explorer_template: {
                                                readonly type: "string";
                                            };
                                            readonly account_explorer_template: {
                                                readonly type: "string";
                                            };
                                            readonly token: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly symbol: {
                                                        readonly type: "string";
                                                    };
                                                    readonly logo: {
                                                        readonly type: "string";
                                                    };
                                                    readonly contract: {
                                                        readonly type: readonly ["string", "null"];
                                                    };
                                                    readonly decimals: {
                                                        readonly type: "integer";
                                                        readonly format: "int32";
                                                        readonly minimum: -2147483648;
                                                        readonly maximum: 2147483647;
                                                    };
                                                    readonly price_in_usd: {
                                                        readonly type: "number";
                                                        readonly format: "double";
                                                        readonly minimum: -1.7976931348623157e+308;
                                                        readonly maximum: 1.7976931348623157e+308;
                                                    };
                                                    readonly precision: {
                                                        readonly type: "number";
                                                        readonly format: "double";
                                                        readonly minimum: -1.7976931348623157e+308;
                                                        readonly maximum: 1.7976931348623157e+308;
                                                    };
                                                    readonly listing_date: {
                                                        readonly type: "string";
                                                        readonly format: "date-time";
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            };
                                            readonly metadata: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly listing_date: {
                                                        readonly type: "string";
                                                        readonly format: "date-time";
                                                    };
                                                    readonly evm_oracle_contract: {
                                                        readonly type: readonly ["string", "null"];
                                                    };
                                                    readonly evm_multicall_contract: {
                                                        readonly type: readonly ["string", "null"];
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            };
                                            readonly deposit_methods: {
                                                readonly type: readonly ["array", "null"];
                                                readonly items: {
                                                    readonly type: "string";
                                                };
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly source_token: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly symbol: {
                                                readonly type: "string";
                                            };
                                            readonly logo: {
                                                readonly type: "string";
                                            };
                                            readonly contract: {
                                                readonly type: readonly ["string", "null"];
                                            };
                                            readonly decimals: {
                                                readonly type: "integer";
                                                readonly format: "int32";
                                                readonly minimum: -2147483648;
                                                readonly maximum: 2147483647;
                                            };
                                            readonly price_in_usd: {
                                                readonly type: "number";
                                                readonly format: "double";
                                                readonly minimum: -1.7976931348623157e+308;
                                                readonly maximum: 1.7976931348623157e+308;
                                            };
                                            readonly precision: {
                                                readonly type: "number";
                                                readonly format: "double";
                                                readonly minimum: -1.7976931348623157e+308;
                                                readonly maximum: 1.7976931348623157e+308;
                                            };
                                            readonly listing_date: {
                                                readonly type: "string";
                                                readonly format: "date-time";
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly source_exchange: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly name: {
                                                readonly type: "string";
                                            };
                                            readonly display_name: {
                                                readonly type: "string";
                                            };
                                            readonly logo: {
                                                readonly type: "string";
                                            };
                                            readonly metadata: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly oauth: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly authorize_url: {
                                                                readonly type: "string";
                                                            };
                                                            readonly connect_url: {
                                                                readonly type: "string";
                                                            };
                                                        };
                                                        readonly additionalProperties: false;
                                                    };
                                                    readonly listing_date: {
                                                        readonly type: "string";
                                                        readonly format: "date-time";
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly destination_network: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly name: {
                                                readonly type: "string";
                                            };
                                            readonly display_name: {
                                                readonly type: "string";
                                            };
                                            readonly logo: {
                                                readonly type: "string";
                                            };
                                            readonly chain_id: {
                                                readonly type: readonly ["string", "null"];
                                            };
                                            readonly node_url: {
                                                readonly type: readonly ["string", "null"];
                                            };
                                            readonly type: {
                                                readonly enum: readonly ["evm", "starknet", "solana", "cosmos", "starkex", "zksynclite", "ton", "paradex", "tron"];
                                                readonly type: "string";
                                                readonly description: "`evm` `starknet` `solana` `cosmos` `starkex` `zksynclite` `ton` `paradex` `tron`";
                                            };
                                            readonly transaction_explorer_template: {
                                                readonly type: "string";
                                            };
                                            readonly account_explorer_template: {
                                                readonly type: "string";
                                            };
                                            readonly token: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly symbol: {
                                                        readonly type: "string";
                                                    };
                                                    readonly logo: {
                                                        readonly type: "string";
                                                    };
                                                    readonly contract: {
                                                        readonly type: readonly ["string", "null"];
                                                    };
                                                    readonly decimals: {
                                                        readonly type: "integer";
                                                        readonly format: "int32";
                                                        readonly minimum: -2147483648;
                                                        readonly maximum: 2147483647;
                                                    };
                                                    readonly price_in_usd: {
                                                        readonly type: "number";
                                                        readonly format: "double";
                                                        readonly minimum: -1.7976931348623157e+308;
                                                        readonly maximum: 1.7976931348623157e+308;
                                                    };
                                                    readonly precision: {
                                                        readonly type: "number";
                                                        readonly format: "double";
                                                        readonly minimum: -1.7976931348623157e+308;
                                                        readonly maximum: 1.7976931348623157e+308;
                                                    };
                                                    readonly listing_date: {
                                                        readonly type: "string";
                                                        readonly format: "date-time";
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            };
                                            readonly metadata: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly listing_date: {
                                                        readonly type: "string";
                                                        readonly format: "date-time";
                                                    };
                                                    readonly evm_oracle_contract: {
                                                        readonly type: readonly ["string", "null"];
                                                    };
                                                    readonly evm_multicall_contract: {
                                                        readonly type: readonly ["string", "null"];
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            };
                                            readonly deposit_methods: {
                                                readonly type: readonly ["array", "null"];
                                                readonly items: {
                                                    readonly type: "string";
                                                };
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly destination_token: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly symbol: {
                                                readonly type: "string";
                                            };
                                            readonly logo: {
                                                readonly type: "string";
                                            };
                                            readonly contract: {
                                                readonly type: readonly ["string", "null"];
                                            };
                                            readonly decimals: {
                                                readonly type: "integer";
                                                readonly format: "int32";
                                                readonly minimum: -2147483648;
                                                readonly maximum: 2147483647;
                                            };
                                            readonly price_in_usd: {
                                                readonly type: "number";
                                                readonly format: "double";
                                                readonly minimum: -1.7976931348623157e+308;
                                                readonly maximum: 1.7976931348623157e+308;
                                            };
                                            readonly precision: {
                                                readonly type: "number";
                                                readonly format: "double";
                                                readonly minimum: -1.7976931348623157e+308;
                                                readonly maximum: 1.7976931348623157e+308;
                                            };
                                            readonly listing_date: {
                                                readonly type: "string";
                                                readonly format: "date-time";
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly destination_exchange: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly name: {
                                                readonly type: "string";
                                            };
                                            readonly display_name: {
                                                readonly type: "string";
                                            };
                                            readonly logo: {
                                                readonly type: "string";
                                            };
                                            readonly metadata: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly oauth: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly authorize_url: {
                                                                readonly type: "string";
                                                            };
                                                            readonly connect_url: {
                                                                readonly type: "string";
                                                            };
                                                        };
                                                        readonly additionalProperties: false;
                                                    };
                                                    readonly listing_date: {
                                                        readonly type: "string";
                                                        readonly format: "date-time";
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly requested_amount: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly destination_address: {
                                        readonly type: "string";
                                    };
                                    readonly status: {
                                        readonly type: "string";
                                    };
                                    readonly fail_reason: {
                                        readonly type: readonly ["string", "null"];
                                    };
                                    readonly use_deposit_address: {
                                        readonly type: "boolean";
                                    };
                                    readonly metadata: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly sequence_number: {
                                                readonly type: "integer";
                                                readonly format: "int64";
                                                readonly minimum: -9223372036854776000;
                                                readonly maximum: 9223372036854776000;
                                            };
                                            readonly reference_id: {
                                                readonly type: readonly ["string", "null"];
                                            };
                                            readonly exchange_account: {
                                                readonly type: readonly ["string", "null"];
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly transactions: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly from: {
                                                    readonly type: readonly ["string", "null"];
                                                };
                                                readonly to: {
                                                    readonly type: readonly ["string", "null"];
                                                };
                                                readonly timestamp: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                                readonly transaction_hash: {
                                                    readonly type: readonly ["string", "null"];
                                                };
                                                readonly confirmations: {
                                                    readonly type: "integer";
                                                    readonly format: "int32";
                                                    readonly minimum: -2147483648;
                                                    readonly maximum: 2147483647;
                                                };
                                                readonly max_confirmations: {
                                                    readonly type: "integer";
                                                    readonly format: "int32";
                                                    readonly minimum: -2147483648;
                                                    readonly maximum: 2147483647;
                                                };
                                                readonly amount: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly type: {
                                                    readonly type: "string";
                                                };
                                                readonly status: {
                                                    readonly type: "string";
                                                };
                                                readonly token: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly symbol: {
                                                            readonly type: "string";
                                                        };
                                                        readonly logo: {
                                                            readonly type: "string";
                                                        };
                                                        readonly contract: {
                                                            readonly type: readonly ["string", "null"];
                                                        };
                                                        readonly decimals: {
                                                            readonly type: "integer";
                                                            readonly format: "int32";
                                                            readonly minimum: -2147483648;
                                                            readonly maximum: 2147483647;
                                                        };
                                                        readonly price_in_usd: {
                                                            readonly type: "number";
                                                            readonly format: "double";
                                                            readonly minimum: -1.7976931348623157e+308;
                                                            readonly maximum: 1.7976931348623157e+308;
                                                        };
                                                        readonly precision: {
                                                            readonly type: "number";
                                                            readonly format: "double";
                                                            readonly minimum: -1.7976931348623157e+308;
                                                            readonly maximum: 1.7976931348623157e+308;
                                                        };
                                                        readonly listing_date: {
                                                            readonly type: "string";
                                                            readonly format: "date-time";
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                };
                                                readonly network: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly name: {
                                                            readonly type: "string";
                                                        };
                                                        readonly display_name: {
                                                            readonly type: "string";
                                                        };
                                                        readonly logo: {
                                                            readonly type: "string";
                                                        };
                                                        readonly chain_id: {
                                                            readonly type: readonly ["string", "null"];
                                                        };
                                                        readonly node_url: {
                                                            readonly type: readonly ["string", "null"];
                                                        };
                                                        readonly type: {
                                                            readonly enum: readonly ["evm", "starknet", "solana", "cosmos", "starkex", "zksynclite", "ton", "paradex", "tron"];
                                                            readonly type: "string";
                                                            readonly description: "`evm` `starknet` `solana` `cosmos` `starkex` `zksynclite` `ton` `paradex` `tron`";
                                                        };
                                                        readonly transaction_explorer_template: {
                                                            readonly type: "string";
                                                        };
                                                        readonly account_explorer_template: {
                                                            readonly type: "string";
                                                        };
                                                        readonly token: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly symbol: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly logo: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly contract: {
                                                                    readonly type: readonly ["string", "null"];
                                                                };
                                                                readonly decimals: {
                                                                    readonly type: "integer";
                                                                    readonly format: "int32";
                                                                    readonly minimum: -2147483648;
                                                                    readonly maximum: 2147483647;
                                                                };
                                                                readonly price_in_usd: {
                                                                    readonly type: "number";
                                                                    readonly format: "double";
                                                                    readonly minimum: -1.7976931348623157e+308;
                                                                    readonly maximum: 1.7976931348623157e+308;
                                                                };
                                                                readonly precision: {
                                                                    readonly type: "number";
                                                                    readonly format: "double";
                                                                    readonly minimum: -1.7976931348623157e+308;
                                                                    readonly maximum: 1.7976931348623157e+308;
                                                                };
                                                                readonly listing_date: {
                                                                    readonly type: "string";
                                                                    readonly format: "date-time";
                                                                };
                                                            };
                                                            readonly additionalProperties: false;
                                                        };
                                                        readonly metadata: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly listing_date: {
                                                                    readonly type: "string";
                                                                    readonly format: "date-time";
                                                                };
                                                                readonly evm_oracle_contract: {
                                                                    readonly type: readonly ["string", "null"];
                                                                };
                                                                readonly evm_multicall_contract: {
                                                                    readonly type: readonly ["string", "null"];
                                                                };
                                                            };
                                                            readonly additionalProperties: false;
                                                        };
                                                        readonly deposit_methods: {
                                                            readonly type: readonly ["array", "null"];
                                                            readonly items: {
                                                                readonly type: "string";
                                                            };
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetApiV2SwapsSwapid: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly swapId: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["swapId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly exclude_deposit_actions: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly source_address: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly code: {
                            readonly type: "string";
                        };
                        readonly message: {
                            readonly type: "string";
                        };
                        readonly metadata: {
                            readonly type: "object";
                            readonly additionalProperties: true;
                        };
                    };
                    readonly additionalProperties: false;
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly quote: {
                            readonly type: "object";
                            readonly properties: {
                                readonly total_fee: {
                                    readonly type: "number";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                                readonly total_fee_in_usd: {
                                    readonly type: "number";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                                readonly source_network: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly display_name: {
                                            readonly type: "string";
                                        };
                                        readonly logo: {
                                            readonly type: "string";
                                        };
                                        readonly chain_id: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly node_url: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly type: {
                                            readonly enum: readonly ["evm", "starknet", "solana", "cosmos", "starkex", "zksynclite", "ton", "paradex", "tron"];
                                            readonly type: "string";
                                            readonly description: "`evm` `starknet` `solana` `cosmos` `starkex` `zksynclite` `ton` `paradex` `tron`";
                                        };
                                        readonly transaction_explorer_template: {
                                            readonly type: "string";
                                        };
                                        readonly account_explorer_template: {
                                            readonly type: "string";
                                        };
                                        readonly token: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly symbol: {
                                                    readonly type: "string";
                                                };
                                                readonly logo: {
                                                    readonly type: "string";
                                                };
                                                readonly contract: {
                                                    readonly type: readonly ["string", "null"];
                                                };
                                                readonly decimals: {
                                                    readonly type: "integer";
                                                    readonly format: "int32";
                                                    readonly minimum: -2147483648;
                                                    readonly maximum: 2147483647;
                                                };
                                                readonly price_in_usd: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly precision: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly listing_date: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                        readonly metadata: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly listing_date: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                                readonly evm_oracle_contract: {
                                                    readonly type: readonly ["string", "null"];
                                                };
                                                readonly evm_multicall_contract: {
                                                    readonly type: readonly ["string", "null"];
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                        readonly deposit_methods: {
                                            readonly type: readonly ["array", "null"];
                                            readonly items: {
                                                readonly type: "string";
                                            };
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                                readonly source_token: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly symbol: {
                                            readonly type: "string";
                                        };
                                        readonly logo: {
                                            readonly type: "string";
                                        };
                                        readonly contract: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly decimals: {
                                            readonly type: "integer";
                                            readonly format: "int32";
                                            readonly minimum: -2147483648;
                                            readonly maximum: 2147483647;
                                        };
                                        readonly price_in_usd: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly precision: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly listing_date: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                                readonly destination_network: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly display_name: {
                                            readonly type: "string";
                                        };
                                        readonly logo: {
                                            readonly type: "string";
                                        };
                                        readonly chain_id: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly node_url: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly type: {
                                            readonly enum: readonly ["evm", "starknet", "solana", "cosmos", "starkex", "zksynclite", "ton", "paradex", "tron"];
                                            readonly type: "string";
                                            readonly description: "`evm` `starknet` `solana` `cosmos` `starkex` `zksynclite` `ton` `paradex` `tron`";
                                        };
                                        readonly transaction_explorer_template: {
                                            readonly type: "string";
                                        };
                                        readonly account_explorer_template: {
                                            readonly type: "string";
                                        };
                                        readonly token: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly symbol: {
                                                    readonly type: "string";
                                                };
                                                readonly logo: {
                                                    readonly type: "string";
                                                };
                                                readonly contract: {
                                                    readonly type: readonly ["string", "null"];
                                                };
                                                readonly decimals: {
                                                    readonly type: "integer";
                                                    readonly format: "int32";
                                                    readonly minimum: -2147483648;
                                                    readonly maximum: 2147483647;
                                                };
                                                readonly price_in_usd: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly precision: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly listing_date: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                        readonly metadata: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly listing_date: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                                readonly evm_oracle_contract: {
                                                    readonly type: readonly ["string", "null"];
                                                };
                                                readonly evm_multicall_contract: {
                                                    readonly type: readonly ["string", "null"];
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                        readonly deposit_methods: {
                                            readonly type: readonly ["array", "null"];
                                            readonly items: {
                                                readonly type: "string";
                                            };
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                                readonly destination_token: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly symbol: {
                                            readonly type: "string";
                                        };
                                        readonly logo: {
                                            readonly type: "string";
                                        };
                                        readonly contract: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly decimals: {
                                            readonly type: "integer";
                                            readonly format: "int32";
                                            readonly minimum: -2147483648;
                                            readonly maximum: 2147483647;
                                        };
                                        readonly price_in_usd: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly precision: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly listing_date: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                                readonly receive_amount: {
                                    readonly type: "number";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                                readonly min_receive_amount: {
                                    readonly type: "number";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                                readonly blockchain_fee: {
                                    readonly type: "number";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                                readonly service_fee: {
                                    readonly type: "number";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                                readonly avg_completion_time: {
                                    readonly type: "string";
                                };
                                readonly refuel_in_source: {
                                    readonly type: readonly ["number", "null"];
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                                readonly slippage: {
                                    readonly type: "number";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                            };
                            readonly additionalProperties: false;
                        };
                        readonly refuel: {
                            readonly type: "object";
                            readonly properties: {
                                readonly token: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly symbol: {
                                            readonly type: "string";
                                        };
                                        readonly logo: {
                                            readonly type: "string";
                                        };
                                        readonly contract: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly decimals: {
                                            readonly type: "integer";
                                            readonly format: "int32";
                                            readonly minimum: -2147483648;
                                            readonly maximum: 2147483647;
                                        };
                                        readonly price_in_usd: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly precision: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly listing_date: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                                readonly network: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly display_name: {
                                            readonly type: "string";
                                        };
                                        readonly logo: {
                                            readonly type: "string";
                                        };
                                        readonly chain_id: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly node_url: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly type: {
                                            readonly enum: readonly ["evm", "starknet", "solana", "cosmos", "starkex", "zksynclite", "ton", "paradex", "tron"];
                                            readonly type: "string";
                                            readonly description: "`evm` `starknet` `solana` `cosmos` `starkex` `zksynclite` `ton` `paradex` `tron`";
                                        };
                                        readonly transaction_explorer_template: {
                                            readonly type: "string";
                                        };
                                        readonly account_explorer_template: {
                                            readonly type: "string";
                                        };
                                        readonly token: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly symbol: {
                                                    readonly type: "string";
                                                };
                                                readonly logo: {
                                                    readonly type: "string";
                                                };
                                                readonly contract: {
                                                    readonly type: readonly ["string", "null"];
                                                };
                                                readonly decimals: {
                                                    readonly type: "integer";
                                                    readonly format: "int32";
                                                    readonly minimum: -2147483648;
                                                    readonly maximum: 2147483647;
                                                };
                                                readonly price_in_usd: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly precision: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly listing_date: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                        readonly metadata: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly listing_date: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                                readonly evm_oracle_contract: {
                                                    readonly type: readonly ["string", "null"];
                                                };
                                                readonly evm_multicall_contract: {
                                                    readonly type: readonly ["string", "null"];
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                        readonly deposit_methods: {
                                            readonly type: readonly ["array", "null"];
                                            readonly items: {
                                                readonly type: "string";
                                            };
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                                readonly amount: {
                                    readonly type: "number";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                                readonly amount_in_usd: {
                                    readonly type: "number";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                            };
                            readonly additionalProperties: false;
                        };
                        readonly reward: {
                            readonly type: "object";
                            readonly properties: {
                                readonly token: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly symbol: {
                                            readonly type: "string";
                                        };
                                        readonly logo: {
                                            readonly type: "string";
                                        };
                                        readonly contract: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly decimals: {
                                            readonly type: "integer";
                                            readonly format: "int32";
                                            readonly minimum: -2147483648;
                                            readonly maximum: 2147483647;
                                        };
                                        readonly price_in_usd: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly precision: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly listing_date: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                                readonly network: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly display_name: {
                                            readonly type: "string";
                                        };
                                        readonly logo: {
                                            readonly type: "string";
                                        };
                                        readonly chain_id: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly node_url: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly type: {
                                            readonly enum: readonly ["evm", "starknet", "solana", "cosmos", "starkex", "zksynclite", "ton", "paradex", "tron"];
                                            readonly type: "string";
                                            readonly description: "`evm` `starknet` `solana` `cosmos` `starkex` `zksynclite` `ton` `paradex` `tron`";
                                        };
                                        readonly transaction_explorer_template: {
                                            readonly type: "string";
                                        };
                                        readonly account_explorer_template: {
                                            readonly type: "string";
                                        };
                                        readonly token: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly symbol: {
                                                    readonly type: "string";
                                                };
                                                readonly logo: {
                                                    readonly type: "string";
                                                };
                                                readonly contract: {
                                                    readonly type: readonly ["string", "null"];
                                                };
                                                readonly decimals: {
                                                    readonly type: "integer";
                                                    readonly format: "int32";
                                                    readonly minimum: -2147483648;
                                                    readonly maximum: 2147483647;
                                                };
                                                readonly price_in_usd: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly precision: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly listing_date: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                        readonly metadata: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly listing_date: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                                readonly evm_oracle_contract: {
                                                    readonly type: readonly ["string", "null"];
                                                };
                                                readonly evm_multicall_contract: {
                                                    readonly type: readonly ["string", "null"];
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                        readonly deposit_methods: {
                                            readonly type: readonly ["array", "null"];
                                            readonly items: {
                                                readonly type: "string";
                                            };
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                                readonly amount: {
                                    readonly type: "number";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                                readonly amount_in_usd: {
                                    readonly type: "number";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                            };
                            readonly additionalProperties: false;
                        };
                        readonly swap: {
                            readonly type: "object";
                            readonly properties: {
                                readonly id: {
                                    readonly type: "string";
                                };
                                readonly created_date: {
                                    readonly type: "string";
                                    readonly format: "date-time";
                                };
                                readonly source_network: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly display_name: {
                                            readonly type: "string";
                                        };
                                        readonly logo: {
                                            readonly type: "string";
                                        };
                                        readonly chain_id: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly node_url: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly type: {
                                            readonly enum: readonly ["evm", "starknet", "solana", "cosmos", "starkex", "zksynclite", "ton", "paradex", "tron"];
                                            readonly type: "string";
                                            readonly description: "`evm` `starknet` `solana` `cosmos` `starkex` `zksynclite` `ton` `paradex` `tron`";
                                        };
                                        readonly transaction_explorer_template: {
                                            readonly type: "string";
                                        };
                                        readonly account_explorer_template: {
                                            readonly type: "string";
                                        };
                                        readonly token: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly symbol: {
                                                    readonly type: "string";
                                                };
                                                readonly logo: {
                                                    readonly type: "string";
                                                };
                                                readonly contract: {
                                                    readonly type: readonly ["string", "null"];
                                                };
                                                readonly decimals: {
                                                    readonly type: "integer";
                                                    readonly format: "int32";
                                                    readonly minimum: -2147483648;
                                                    readonly maximum: 2147483647;
                                                };
                                                readonly price_in_usd: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly precision: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly listing_date: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                        readonly metadata: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly listing_date: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                                readonly evm_oracle_contract: {
                                                    readonly type: readonly ["string", "null"];
                                                };
                                                readonly evm_multicall_contract: {
                                                    readonly type: readonly ["string", "null"];
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                        readonly deposit_methods: {
                                            readonly type: readonly ["array", "null"];
                                            readonly items: {
                                                readonly type: "string";
                                            };
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                                readonly source_token: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly symbol: {
                                            readonly type: "string";
                                        };
                                        readonly logo: {
                                            readonly type: "string";
                                        };
                                        readonly contract: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly decimals: {
                                            readonly type: "integer";
                                            readonly format: "int32";
                                            readonly minimum: -2147483648;
                                            readonly maximum: 2147483647;
                                        };
                                        readonly price_in_usd: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly precision: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly listing_date: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                                readonly source_exchange: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly display_name: {
                                            readonly type: "string";
                                        };
                                        readonly logo: {
                                            readonly type: "string";
                                        };
                                        readonly metadata: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly oauth: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly authorize_url: {
                                                            readonly type: "string";
                                                        };
                                                        readonly connect_url: {
                                                            readonly type: "string";
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                };
                                                readonly listing_date: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                                readonly destination_network: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly display_name: {
                                            readonly type: "string";
                                        };
                                        readonly logo: {
                                            readonly type: "string";
                                        };
                                        readonly chain_id: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly node_url: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly type: {
                                            readonly enum: readonly ["evm", "starknet", "solana", "cosmos", "starkex", "zksynclite", "ton", "paradex", "tron"];
                                            readonly type: "string";
                                            readonly description: "`evm` `starknet` `solana` `cosmos` `starkex` `zksynclite` `ton` `paradex` `tron`";
                                        };
                                        readonly transaction_explorer_template: {
                                            readonly type: "string";
                                        };
                                        readonly account_explorer_template: {
                                            readonly type: "string";
                                        };
                                        readonly token: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly symbol: {
                                                    readonly type: "string";
                                                };
                                                readonly logo: {
                                                    readonly type: "string";
                                                };
                                                readonly contract: {
                                                    readonly type: readonly ["string", "null"];
                                                };
                                                readonly decimals: {
                                                    readonly type: "integer";
                                                    readonly format: "int32";
                                                    readonly minimum: -2147483648;
                                                    readonly maximum: 2147483647;
                                                };
                                                readonly price_in_usd: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly precision: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly listing_date: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                        readonly metadata: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly listing_date: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                                readonly evm_oracle_contract: {
                                                    readonly type: readonly ["string", "null"];
                                                };
                                                readonly evm_multicall_contract: {
                                                    readonly type: readonly ["string", "null"];
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                        readonly deposit_methods: {
                                            readonly type: readonly ["array", "null"];
                                            readonly items: {
                                                readonly type: "string";
                                            };
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                                readonly destination_token: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly symbol: {
                                            readonly type: "string";
                                        };
                                        readonly logo: {
                                            readonly type: "string";
                                        };
                                        readonly contract: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly decimals: {
                                            readonly type: "integer";
                                            readonly format: "int32";
                                            readonly minimum: -2147483648;
                                            readonly maximum: 2147483647;
                                        };
                                        readonly price_in_usd: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly precision: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly listing_date: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                                readonly destination_exchange: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly display_name: {
                                            readonly type: "string";
                                        };
                                        readonly logo: {
                                            readonly type: "string";
                                        };
                                        readonly metadata: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly oauth: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly authorize_url: {
                                                            readonly type: "string";
                                                        };
                                                        readonly connect_url: {
                                                            readonly type: "string";
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                };
                                                readonly listing_date: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                                readonly requested_amount: {
                                    readonly type: "number";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                                readonly destination_address: {
                                    readonly type: "string";
                                };
                                readonly status: {
                                    readonly type: "string";
                                };
                                readonly fail_reason: {
                                    readonly type: readonly ["string", "null"];
                                };
                                readonly use_deposit_address: {
                                    readonly type: "boolean";
                                };
                                readonly metadata: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly sequence_number: {
                                            readonly type: "integer";
                                            readonly format: "int64";
                                            readonly minimum: -9223372036854776000;
                                            readonly maximum: 9223372036854776000;
                                        };
                                        readonly reference_id: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly exchange_account: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                                readonly transactions: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly from: {
                                                readonly type: readonly ["string", "null"];
                                            };
                                            readonly to: {
                                                readonly type: readonly ["string", "null"];
                                            };
                                            readonly timestamp: {
                                                readonly type: "string";
                                                readonly format: "date-time";
                                            };
                                            readonly transaction_hash: {
                                                readonly type: readonly ["string", "null"];
                                            };
                                            readonly confirmations: {
                                                readonly type: "integer";
                                                readonly format: "int32";
                                                readonly minimum: -2147483648;
                                                readonly maximum: 2147483647;
                                            };
                                            readonly max_confirmations: {
                                                readonly type: "integer";
                                                readonly format: "int32";
                                                readonly minimum: -2147483648;
                                                readonly maximum: 2147483647;
                                            };
                                            readonly amount: {
                                                readonly type: "number";
                                                readonly format: "double";
                                                readonly minimum: -1.7976931348623157e+308;
                                                readonly maximum: 1.7976931348623157e+308;
                                            };
                                            readonly type: {
                                                readonly type: "string";
                                            };
                                            readonly status: {
                                                readonly type: "string";
                                            };
                                            readonly token: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly symbol: {
                                                        readonly type: "string";
                                                    };
                                                    readonly logo: {
                                                        readonly type: "string";
                                                    };
                                                    readonly contract: {
                                                        readonly type: readonly ["string", "null"];
                                                    };
                                                    readonly decimals: {
                                                        readonly type: "integer";
                                                        readonly format: "int32";
                                                        readonly minimum: -2147483648;
                                                        readonly maximum: 2147483647;
                                                    };
                                                    readonly price_in_usd: {
                                                        readonly type: "number";
                                                        readonly format: "double";
                                                        readonly minimum: -1.7976931348623157e+308;
                                                        readonly maximum: 1.7976931348623157e+308;
                                                    };
                                                    readonly precision: {
                                                        readonly type: "number";
                                                        readonly format: "double";
                                                        readonly minimum: -1.7976931348623157e+308;
                                                        readonly maximum: 1.7976931348623157e+308;
                                                    };
                                                    readonly listing_date: {
                                                        readonly type: "string";
                                                        readonly format: "date-time";
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            };
                                            readonly network: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly name: {
                                                        readonly type: "string";
                                                    };
                                                    readonly display_name: {
                                                        readonly type: "string";
                                                    };
                                                    readonly logo: {
                                                        readonly type: "string";
                                                    };
                                                    readonly chain_id: {
                                                        readonly type: readonly ["string", "null"];
                                                    };
                                                    readonly node_url: {
                                                        readonly type: readonly ["string", "null"];
                                                    };
                                                    readonly type: {
                                                        readonly enum: readonly ["evm", "starknet", "solana", "cosmos", "starkex", "zksynclite", "ton", "paradex", "tron"];
                                                        readonly type: "string";
                                                        readonly description: "`evm` `starknet` `solana` `cosmos` `starkex` `zksynclite` `ton` `paradex` `tron`";
                                                    };
                                                    readonly transaction_explorer_template: {
                                                        readonly type: "string";
                                                    };
                                                    readonly account_explorer_template: {
                                                        readonly type: "string";
                                                    };
                                                    readonly token: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly symbol: {
                                                                readonly type: "string";
                                                            };
                                                            readonly logo: {
                                                                readonly type: "string";
                                                            };
                                                            readonly contract: {
                                                                readonly type: readonly ["string", "null"];
                                                            };
                                                            readonly decimals: {
                                                                readonly type: "integer";
                                                                readonly format: "int32";
                                                                readonly minimum: -2147483648;
                                                                readonly maximum: 2147483647;
                                                            };
                                                            readonly price_in_usd: {
                                                                readonly type: "number";
                                                                readonly format: "double";
                                                                readonly minimum: -1.7976931348623157e+308;
                                                                readonly maximum: 1.7976931348623157e+308;
                                                            };
                                                            readonly precision: {
                                                                readonly type: "number";
                                                                readonly format: "double";
                                                                readonly minimum: -1.7976931348623157e+308;
                                                                readonly maximum: 1.7976931348623157e+308;
                                                            };
                                                            readonly listing_date: {
                                                                readonly type: "string";
                                                                readonly format: "date-time";
                                                            };
                                                        };
                                                        readonly additionalProperties: false;
                                                    };
                                                    readonly metadata: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly listing_date: {
                                                                readonly type: "string";
                                                                readonly format: "date-time";
                                                            };
                                                            readonly evm_oracle_contract: {
                                                                readonly type: readonly ["string", "null"];
                                                            };
                                                            readonly evm_multicall_contract: {
                                                                readonly type: readonly ["string", "null"];
                                                            };
                                                        };
                                                        readonly additionalProperties: false;
                                                    };
                                                    readonly deposit_methods: {
                                                        readonly type: readonly ["array", "null"];
                                                        readonly items: {
                                                            readonly type: "string";
                                                        };
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                };
                            };
                            readonly additionalProperties: false;
                        };
                    };
                    readonly additionalProperties: false;
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetApiV2SwapsSwapidDepositActions: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly swapId: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["swapId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly source_address: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly code: {
                            readonly type: "string";
                        };
                        readonly message: {
                            readonly type: "string";
                        };
                        readonly metadata: {
                            readonly type: "object";
                            readonly additionalProperties: true;
                        };
                    };
                    readonly additionalProperties: false;
                };
                readonly data: {
                    readonly type: readonly ["array", "null"];
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                            };
                            readonly to_address: {
                                readonly type: "string";
                            };
                            readonly amount: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly order: {
                                readonly type: "integer";
                                readonly format: "int32";
                                readonly minimum: -2147483648;
                                readonly maximum: 2147483647;
                            };
                            readonly amount_in_base_units: {
                                readonly type: "string";
                            };
                            readonly network: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly name: {
                                        readonly type: "string";
                                    };
                                    readonly display_name: {
                                        readonly type: "string";
                                    };
                                    readonly logo: {
                                        readonly type: "string";
                                    };
                                    readonly chain_id: {
                                        readonly type: readonly ["string", "null"];
                                    };
                                    readonly node_url: {
                                        readonly type: readonly ["string", "null"];
                                    };
                                    readonly type: {
                                        readonly enum: readonly ["evm", "starknet", "solana", "cosmos", "starkex", "zksynclite", "ton", "paradex", "tron"];
                                        readonly type: "string";
                                        readonly description: "`evm` `starknet` `solana` `cosmos` `starkex` `zksynclite` `ton` `paradex` `tron`";
                                    };
                                    readonly transaction_explorer_template: {
                                        readonly type: "string";
                                    };
                                    readonly account_explorer_template: {
                                        readonly type: "string";
                                    };
                                    readonly token: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly symbol: {
                                                readonly type: "string";
                                            };
                                            readonly logo: {
                                                readonly type: "string";
                                            };
                                            readonly contract: {
                                                readonly type: readonly ["string", "null"];
                                            };
                                            readonly decimals: {
                                                readonly type: "integer";
                                                readonly format: "int32";
                                                readonly minimum: -2147483648;
                                                readonly maximum: 2147483647;
                                            };
                                            readonly price_in_usd: {
                                                readonly type: "number";
                                                readonly format: "double";
                                                readonly minimum: -1.7976931348623157e+308;
                                                readonly maximum: 1.7976931348623157e+308;
                                            };
                                            readonly precision: {
                                                readonly type: "number";
                                                readonly format: "double";
                                                readonly minimum: -1.7976931348623157e+308;
                                                readonly maximum: 1.7976931348623157e+308;
                                            };
                                            readonly listing_date: {
                                                readonly type: "string";
                                                readonly format: "date-time";
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly metadata: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly listing_date: {
                                                readonly type: "string";
                                                readonly format: "date-time";
                                            };
                                            readonly evm_oracle_contract: {
                                                readonly type: readonly ["string", "null"];
                                            };
                                            readonly evm_multicall_contract: {
                                                readonly type: readonly ["string", "null"];
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly deposit_methods: {
                                        readonly type: readonly ["array", "null"];
                                        readonly items: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                            readonly token: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly symbol: {
                                        readonly type: "string";
                                    };
                                    readonly logo: {
                                        readonly type: "string";
                                    };
                                    readonly contract: {
                                        readonly type: readonly ["string", "null"];
                                    };
                                    readonly decimals: {
                                        readonly type: "integer";
                                        readonly format: "int32";
                                        readonly minimum: -2147483648;
                                        readonly maximum: 2147483647;
                                    };
                                    readonly price_in_usd: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly precision: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly listing_date: {
                                        readonly type: "string";
                                        readonly format: "date-time";
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                            readonly fee_token: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly symbol: {
                                        readonly type: "string";
                                    };
                                    readonly logo: {
                                        readonly type: "string";
                                    };
                                    readonly contract: {
                                        readonly type: readonly ["string", "null"];
                                    };
                                    readonly decimals: {
                                        readonly type: "integer";
                                        readonly format: "int32";
                                        readonly minimum: -2147483648;
                                        readonly maximum: 2147483647;
                                    };
                                    readonly price_in_usd: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly precision: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly listing_date: {
                                        readonly type: "string";
                                        readonly format: "date-time";
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                            readonly call_data: {
                                readonly type: readonly ["string", "null"];
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostApiV2Swaps: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly destination_address: {
                readonly type: "string";
                readonly examples: readonly ["0x"];
            };
            readonly reference_id: {
                readonly type: readonly ["string", "null"];
            };
            readonly source_exchange: {
                readonly type: readonly ["string", "null"];
            };
            readonly destination_exchange: {
                readonly type: readonly ["string", "null"];
            };
            readonly source_network: {
                readonly type: "string";
                readonly examples: readonly ["ETHEREUM_MAINNET"];
            };
            readonly source_token: {
                readonly type: "string";
                readonly examples: readonly ["ETH"];
            };
            readonly destination_network: {
                readonly type: "string";
                readonly examples: readonly ["ARBITRUM_MAINNET"];
            };
            readonly destination_token: {
                readonly type: "string";
                readonly examples: readonly ["ETH"];
            };
            readonly refuel: {
                readonly type: "boolean";
            };
            readonly use_deposit_address: {
                readonly type: "boolean";
            };
            readonly use_new_deposit_address: {
                readonly type: readonly ["boolean", "null"];
            };
            readonly amount: {
                readonly type: "number";
                readonly format: "double";
                readonly examples: readonly [0.0042];
                readonly minimum: -1.7976931348623157e+308;
                readonly maximum: 1.7976931348623157e+308;
            };
            readonly source_address: {
                readonly type: readonly ["string", "null"];
            };
            readonly slippage: {
                readonly type: readonly ["string", "null"];
            };
        };
        readonly additionalProperties: false;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly code: {
                            readonly type: "string";
                        };
                        readonly message: {
                            readonly type: "string";
                        };
                        readonly metadata: {
                            readonly type: "object";
                            readonly additionalProperties: true;
                        };
                    };
                    readonly additionalProperties: false;
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly quote: {
                            readonly type: "object";
                            readonly properties: {
                                readonly total_fee: {
                                    readonly type: "number";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                                readonly total_fee_in_usd: {
                                    readonly type: "number";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                                readonly source_network: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly display_name: {
                                            readonly type: "string";
                                        };
                                        readonly logo: {
                                            readonly type: "string";
                                        };
                                        readonly chain_id: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly node_url: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly type: {
                                            readonly enum: readonly ["evm", "starknet", "solana", "cosmos", "starkex", "zksynclite", "ton", "paradex", "tron"];
                                            readonly type: "string";
                                            readonly description: "`evm` `starknet` `solana` `cosmos` `starkex` `zksynclite` `ton` `paradex` `tron`";
                                        };
                                        readonly transaction_explorer_template: {
                                            readonly type: "string";
                                        };
                                        readonly account_explorer_template: {
                                            readonly type: "string";
                                        };
                                        readonly token: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly symbol: {
                                                    readonly type: "string";
                                                };
                                                readonly logo: {
                                                    readonly type: "string";
                                                };
                                                readonly contract: {
                                                    readonly type: readonly ["string", "null"];
                                                };
                                                readonly decimals: {
                                                    readonly type: "integer";
                                                    readonly format: "int32";
                                                    readonly minimum: -2147483648;
                                                    readonly maximum: 2147483647;
                                                };
                                                readonly price_in_usd: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly precision: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly listing_date: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                        readonly metadata: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly listing_date: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                                readonly evm_oracle_contract: {
                                                    readonly type: readonly ["string", "null"];
                                                };
                                                readonly evm_multicall_contract: {
                                                    readonly type: readonly ["string", "null"];
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                        readonly deposit_methods: {
                                            readonly type: readonly ["array", "null"];
                                            readonly items: {
                                                readonly type: "string";
                                            };
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                                readonly source_token: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly symbol: {
                                            readonly type: "string";
                                        };
                                        readonly logo: {
                                            readonly type: "string";
                                        };
                                        readonly contract: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly decimals: {
                                            readonly type: "integer";
                                            readonly format: "int32";
                                            readonly minimum: -2147483648;
                                            readonly maximum: 2147483647;
                                        };
                                        readonly price_in_usd: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly precision: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly listing_date: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                                readonly destination_network: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly display_name: {
                                            readonly type: "string";
                                        };
                                        readonly logo: {
                                            readonly type: "string";
                                        };
                                        readonly chain_id: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly node_url: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly type: {
                                            readonly enum: readonly ["evm", "starknet", "solana", "cosmos", "starkex", "zksynclite", "ton", "paradex", "tron"];
                                            readonly type: "string";
                                            readonly description: "`evm` `starknet` `solana` `cosmos` `starkex` `zksynclite` `ton` `paradex` `tron`";
                                        };
                                        readonly transaction_explorer_template: {
                                            readonly type: "string";
                                        };
                                        readonly account_explorer_template: {
                                            readonly type: "string";
                                        };
                                        readonly token: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly symbol: {
                                                    readonly type: "string";
                                                };
                                                readonly logo: {
                                                    readonly type: "string";
                                                };
                                                readonly contract: {
                                                    readonly type: readonly ["string", "null"];
                                                };
                                                readonly decimals: {
                                                    readonly type: "integer";
                                                    readonly format: "int32";
                                                    readonly minimum: -2147483648;
                                                    readonly maximum: 2147483647;
                                                };
                                                readonly price_in_usd: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly precision: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly listing_date: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                        readonly metadata: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly listing_date: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                                readonly evm_oracle_contract: {
                                                    readonly type: readonly ["string", "null"];
                                                };
                                                readonly evm_multicall_contract: {
                                                    readonly type: readonly ["string", "null"];
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                        readonly deposit_methods: {
                                            readonly type: readonly ["array", "null"];
                                            readonly items: {
                                                readonly type: "string";
                                            };
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                                readonly destination_token: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly symbol: {
                                            readonly type: "string";
                                        };
                                        readonly logo: {
                                            readonly type: "string";
                                        };
                                        readonly contract: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly decimals: {
                                            readonly type: "integer";
                                            readonly format: "int32";
                                            readonly minimum: -2147483648;
                                            readonly maximum: 2147483647;
                                        };
                                        readonly price_in_usd: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly precision: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly listing_date: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                                readonly receive_amount: {
                                    readonly type: "number";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                                readonly min_receive_amount: {
                                    readonly type: "number";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                                readonly blockchain_fee: {
                                    readonly type: "number";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                                readonly service_fee: {
                                    readonly type: "number";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                                readonly avg_completion_time: {
                                    readonly type: "string";
                                };
                                readonly refuel_in_source: {
                                    readonly type: readonly ["number", "null"];
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                                readonly slippage: {
                                    readonly type: "number";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                            };
                            readonly additionalProperties: false;
                        };
                        readonly refuel: {
                            readonly type: "object";
                            readonly properties: {
                                readonly token: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly symbol: {
                                            readonly type: "string";
                                        };
                                        readonly logo: {
                                            readonly type: "string";
                                        };
                                        readonly contract: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly decimals: {
                                            readonly type: "integer";
                                            readonly format: "int32";
                                            readonly minimum: -2147483648;
                                            readonly maximum: 2147483647;
                                        };
                                        readonly price_in_usd: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly precision: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly listing_date: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                                readonly network: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly display_name: {
                                            readonly type: "string";
                                        };
                                        readonly logo: {
                                            readonly type: "string";
                                        };
                                        readonly chain_id: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly node_url: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly type: {
                                            readonly enum: readonly ["evm", "starknet", "solana", "cosmos", "starkex", "zksynclite", "ton", "paradex", "tron"];
                                            readonly type: "string";
                                            readonly description: "`evm` `starknet` `solana` `cosmos` `starkex` `zksynclite` `ton` `paradex` `tron`";
                                        };
                                        readonly transaction_explorer_template: {
                                            readonly type: "string";
                                        };
                                        readonly account_explorer_template: {
                                            readonly type: "string";
                                        };
                                        readonly token: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly symbol: {
                                                    readonly type: "string";
                                                };
                                                readonly logo: {
                                                    readonly type: "string";
                                                };
                                                readonly contract: {
                                                    readonly type: readonly ["string", "null"];
                                                };
                                                readonly decimals: {
                                                    readonly type: "integer";
                                                    readonly format: "int32";
                                                    readonly minimum: -2147483648;
                                                    readonly maximum: 2147483647;
                                                };
                                                readonly price_in_usd: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly precision: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly listing_date: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                        readonly metadata: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly listing_date: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                                readonly evm_oracle_contract: {
                                                    readonly type: readonly ["string", "null"];
                                                };
                                                readonly evm_multicall_contract: {
                                                    readonly type: readonly ["string", "null"];
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                        readonly deposit_methods: {
                                            readonly type: readonly ["array", "null"];
                                            readonly items: {
                                                readonly type: "string";
                                            };
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                                readonly amount: {
                                    readonly type: "number";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                                readonly amount_in_usd: {
                                    readonly type: "number";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                            };
                            readonly additionalProperties: false;
                        };
                        readonly reward: {
                            readonly type: "object";
                            readonly properties: {
                                readonly token: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly symbol: {
                                            readonly type: "string";
                                        };
                                        readonly logo: {
                                            readonly type: "string";
                                        };
                                        readonly contract: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly decimals: {
                                            readonly type: "integer";
                                            readonly format: "int32";
                                            readonly minimum: -2147483648;
                                            readonly maximum: 2147483647;
                                        };
                                        readonly price_in_usd: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly precision: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly listing_date: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                                readonly network: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly display_name: {
                                            readonly type: "string";
                                        };
                                        readonly logo: {
                                            readonly type: "string";
                                        };
                                        readonly chain_id: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly node_url: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly type: {
                                            readonly enum: readonly ["evm", "starknet", "solana", "cosmos", "starkex", "zksynclite", "ton", "paradex", "tron"];
                                            readonly type: "string";
                                            readonly description: "`evm` `starknet` `solana` `cosmos` `starkex` `zksynclite` `ton` `paradex` `tron`";
                                        };
                                        readonly transaction_explorer_template: {
                                            readonly type: "string";
                                        };
                                        readonly account_explorer_template: {
                                            readonly type: "string";
                                        };
                                        readonly token: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly symbol: {
                                                    readonly type: "string";
                                                };
                                                readonly logo: {
                                                    readonly type: "string";
                                                };
                                                readonly contract: {
                                                    readonly type: readonly ["string", "null"];
                                                };
                                                readonly decimals: {
                                                    readonly type: "integer";
                                                    readonly format: "int32";
                                                    readonly minimum: -2147483648;
                                                    readonly maximum: 2147483647;
                                                };
                                                readonly price_in_usd: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly precision: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly listing_date: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                        readonly metadata: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly listing_date: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                                readonly evm_oracle_contract: {
                                                    readonly type: readonly ["string", "null"];
                                                };
                                                readonly evm_multicall_contract: {
                                                    readonly type: readonly ["string", "null"];
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                        readonly deposit_methods: {
                                            readonly type: readonly ["array", "null"];
                                            readonly items: {
                                                readonly type: "string";
                                            };
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                                readonly amount: {
                                    readonly type: "number";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                                readonly amount_in_usd: {
                                    readonly type: "number";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                            };
                            readonly additionalProperties: false;
                        };
                        readonly swap: {
                            readonly type: "object";
                            readonly properties: {
                                readonly id: {
                                    readonly type: "string";
                                };
                                readonly created_date: {
                                    readonly type: "string";
                                    readonly format: "date-time";
                                };
                                readonly source_network: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly display_name: {
                                            readonly type: "string";
                                        };
                                        readonly logo: {
                                            readonly type: "string";
                                        };
                                        readonly chain_id: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly node_url: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly type: {
                                            readonly enum: readonly ["evm", "starknet", "solana", "cosmos", "starkex", "zksynclite", "ton", "paradex", "tron"];
                                            readonly type: "string";
                                            readonly description: "`evm` `starknet` `solana` `cosmos` `starkex` `zksynclite` `ton` `paradex` `tron`";
                                        };
                                        readonly transaction_explorer_template: {
                                            readonly type: "string";
                                        };
                                        readonly account_explorer_template: {
                                            readonly type: "string";
                                        };
                                        readonly token: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly symbol: {
                                                    readonly type: "string";
                                                };
                                                readonly logo: {
                                                    readonly type: "string";
                                                };
                                                readonly contract: {
                                                    readonly type: readonly ["string", "null"];
                                                };
                                                readonly decimals: {
                                                    readonly type: "integer";
                                                    readonly format: "int32";
                                                    readonly minimum: -2147483648;
                                                    readonly maximum: 2147483647;
                                                };
                                                readonly price_in_usd: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly precision: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly listing_date: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                        readonly metadata: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly listing_date: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                                readonly evm_oracle_contract: {
                                                    readonly type: readonly ["string", "null"];
                                                };
                                                readonly evm_multicall_contract: {
                                                    readonly type: readonly ["string", "null"];
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                        readonly deposit_methods: {
                                            readonly type: readonly ["array", "null"];
                                            readonly items: {
                                                readonly type: "string";
                                            };
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                                readonly source_token: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly symbol: {
                                            readonly type: "string";
                                        };
                                        readonly logo: {
                                            readonly type: "string";
                                        };
                                        readonly contract: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly decimals: {
                                            readonly type: "integer";
                                            readonly format: "int32";
                                            readonly minimum: -2147483648;
                                            readonly maximum: 2147483647;
                                        };
                                        readonly price_in_usd: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly precision: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly listing_date: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                                readonly source_exchange: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly display_name: {
                                            readonly type: "string";
                                        };
                                        readonly logo: {
                                            readonly type: "string";
                                        };
                                        readonly metadata: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly oauth: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly authorize_url: {
                                                            readonly type: "string";
                                                        };
                                                        readonly connect_url: {
                                                            readonly type: "string";
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                };
                                                readonly listing_date: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                                readonly destination_network: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly display_name: {
                                            readonly type: "string";
                                        };
                                        readonly logo: {
                                            readonly type: "string";
                                        };
                                        readonly chain_id: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly node_url: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly type: {
                                            readonly enum: readonly ["evm", "starknet", "solana", "cosmos", "starkex", "zksynclite", "ton", "paradex", "tron"];
                                            readonly type: "string";
                                            readonly description: "`evm` `starknet` `solana` `cosmos` `starkex` `zksynclite` `ton` `paradex` `tron`";
                                        };
                                        readonly transaction_explorer_template: {
                                            readonly type: "string";
                                        };
                                        readonly account_explorer_template: {
                                            readonly type: "string";
                                        };
                                        readonly token: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly symbol: {
                                                    readonly type: "string";
                                                };
                                                readonly logo: {
                                                    readonly type: "string";
                                                };
                                                readonly contract: {
                                                    readonly type: readonly ["string", "null"];
                                                };
                                                readonly decimals: {
                                                    readonly type: "integer";
                                                    readonly format: "int32";
                                                    readonly minimum: -2147483648;
                                                    readonly maximum: 2147483647;
                                                };
                                                readonly price_in_usd: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly precision: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly listing_date: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                        readonly metadata: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly listing_date: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                                readonly evm_oracle_contract: {
                                                    readonly type: readonly ["string", "null"];
                                                };
                                                readonly evm_multicall_contract: {
                                                    readonly type: readonly ["string", "null"];
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                        readonly deposit_methods: {
                                            readonly type: readonly ["array", "null"];
                                            readonly items: {
                                                readonly type: "string";
                                            };
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                                readonly destination_token: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly symbol: {
                                            readonly type: "string";
                                        };
                                        readonly logo: {
                                            readonly type: "string";
                                        };
                                        readonly contract: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly decimals: {
                                            readonly type: "integer";
                                            readonly format: "int32";
                                            readonly minimum: -2147483648;
                                            readonly maximum: 2147483647;
                                        };
                                        readonly price_in_usd: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly precision: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly listing_date: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                                readonly destination_exchange: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly display_name: {
                                            readonly type: "string";
                                        };
                                        readonly logo: {
                                            readonly type: "string";
                                        };
                                        readonly metadata: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly oauth: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly authorize_url: {
                                                            readonly type: "string";
                                                        };
                                                        readonly connect_url: {
                                                            readonly type: "string";
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                };
                                                readonly listing_date: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                                readonly requested_amount: {
                                    readonly type: "number";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                                readonly destination_address: {
                                    readonly type: "string";
                                };
                                readonly status: {
                                    readonly type: "string";
                                };
                                readonly fail_reason: {
                                    readonly type: readonly ["string", "null"];
                                };
                                readonly use_deposit_address: {
                                    readonly type: "boolean";
                                };
                                readonly metadata: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly sequence_number: {
                                            readonly type: "integer";
                                            readonly format: "int64";
                                            readonly minimum: -9223372036854776000;
                                            readonly maximum: 9223372036854776000;
                                        };
                                        readonly reference_id: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                        readonly exchange_account: {
                                            readonly type: readonly ["string", "null"];
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                                readonly transactions: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly from: {
                                                readonly type: readonly ["string", "null"];
                                            };
                                            readonly to: {
                                                readonly type: readonly ["string", "null"];
                                            };
                                            readonly timestamp: {
                                                readonly type: "string";
                                                readonly format: "date-time";
                                            };
                                            readonly transaction_hash: {
                                                readonly type: readonly ["string", "null"];
                                            };
                                            readonly confirmations: {
                                                readonly type: "integer";
                                                readonly format: "int32";
                                                readonly minimum: -2147483648;
                                                readonly maximum: 2147483647;
                                            };
                                            readonly max_confirmations: {
                                                readonly type: "integer";
                                                readonly format: "int32";
                                                readonly minimum: -2147483648;
                                                readonly maximum: 2147483647;
                                            };
                                            readonly amount: {
                                                readonly type: "number";
                                                readonly format: "double";
                                                readonly minimum: -1.7976931348623157e+308;
                                                readonly maximum: 1.7976931348623157e+308;
                                            };
                                            readonly type: {
                                                readonly type: "string";
                                            };
                                            readonly status: {
                                                readonly type: "string";
                                            };
                                            readonly token: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly symbol: {
                                                        readonly type: "string";
                                                    };
                                                    readonly logo: {
                                                        readonly type: "string";
                                                    };
                                                    readonly contract: {
                                                        readonly type: readonly ["string", "null"];
                                                    };
                                                    readonly decimals: {
                                                        readonly type: "integer";
                                                        readonly format: "int32";
                                                        readonly minimum: -2147483648;
                                                        readonly maximum: 2147483647;
                                                    };
                                                    readonly price_in_usd: {
                                                        readonly type: "number";
                                                        readonly format: "double";
                                                        readonly minimum: -1.7976931348623157e+308;
                                                        readonly maximum: 1.7976931348623157e+308;
                                                    };
                                                    readonly precision: {
                                                        readonly type: "number";
                                                        readonly format: "double";
                                                        readonly minimum: -1.7976931348623157e+308;
                                                        readonly maximum: 1.7976931348623157e+308;
                                                    };
                                                    readonly listing_date: {
                                                        readonly type: "string";
                                                        readonly format: "date-time";
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            };
                                            readonly network: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly name: {
                                                        readonly type: "string";
                                                    };
                                                    readonly display_name: {
                                                        readonly type: "string";
                                                    };
                                                    readonly logo: {
                                                        readonly type: "string";
                                                    };
                                                    readonly chain_id: {
                                                        readonly type: readonly ["string", "null"];
                                                    };
                                                    readonly node_url: {
                                                        readonly type: readonly ["string", "null"];
                                                    };
                                                    readonly type: {
                                                        readonly enum: readonly ["evm", "starknet", "solana", "cosmos", "starkex", "zksynclite", "ton", "paradex", "tron"];
                                                        readonly type: "string";
                                                        readonly description: "`evm` `starknet` `solana` `cosmos` `starkex` `zksynclite` `ton` `paradex` `tron`";
                                                    };
                                                    readonly transaction_explorer_template: {
                                                        readonly type: "string";
                                                    };
                                                    readonly account_explorer_template: {
                                                        readonly type: "string";
                                                    };
                                                    readonly token: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly symbol: {
                                                                readonly type: "string";
                                                            };
                                                            readonly logo: {
                                                                readonly type: "string";
                                                            };
                                                            readonly contract: {
                                                                readonly type: readonly ["string", "null"];
                                                            };
                                                            readonly decimals: {
                                                                readonly type: "integer";
                                                                readonly format: "int32";
                                                                readonly minimum: -2147483648;
                                                                readonly maximum: 2147483647;
                                                            };
                                                            readonly price_in_usd: {
                                                                readonly type: "number";
                                                                readonly format: "double";
                                                                readonly minimum: -1.7976931348623157e+308;
                                                                readonly maximum: 1.7976931348623157e+308;
                                                            };
                                                            readonly precision: {
                                                                readonly type: "number";
                                                                readonly format: "double";
                                                                readonly minimum: -1.7976931348623157e+308;
                                                                readonly maximum: 1.7976931348623157e+308;
                                                            };
                                                            readonly listing_date: {
                                                                readonly type: "string";
                                                                readonly format: "date-time";
                                                            };
                                                        };
                                                        readonly additionalProperties: false;
                                                    };
                                                    readonly metadata: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly listing_date: {
                                                                readonly type: "string";
                                                                readonly format: "date-time";
                                                            };
                                                            readonly evm_oracle_contract: {
                                                                readonly type: readonly ["string", "null"];
                                                            };
                                                            readonly evm_multicall_contract: {
                                                                readonly type: readonly ["string", "null"];
                                                            };
                                                        };
                                                        readonly additionalProperties: false;
                                                    };
                                                    readonly deposit_methods: {
                                                        readonly type: readonly ["array", "null"];
                                                        readonly items: {
                                                            readonly type: "string";
                                                        };
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                };
                            };
                            readonly additionalProperties: false;
                        };
                        readonly deposit_actions: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly type: {
                                        readonly type: "string";
                                    };
                                    readonly to_address: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly order: {
                                        readonly type: "integer";
                                        readonly format: "int32";
                                        readonly minimum: -2147483648;
                                        readonly maximum: 2147483647;
                                    };
                                    readonly amount_in_base_units: {
                                        readonly type: "string";
                                    };
                                    readonly network: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly name: {
                                                readonly type: "string";
                                            };
                                            readonly display_name: {
                                                readonly type: "string";
                                            };
                                            readonly logo: {
                                                readonly type: "string";
                                            };
                                            readonly chain_id: {
                                                readonly type: readonly ["string", "null"];
                                            };
                                            readonly node_url: {
                                                readonly type: readonly ["string", "null"];
                                            };
                                            readonly type: {
                                                readonly enum: readonly ["evm", "starknet", "solana", "cosmos", "starkex", "zksynclite", "ton", "paradex", "tron"];
                                                readonly type: "string";
                                                readonly description: "`evm` `starknet` `solana` `cosmos` `starkex` `zksynclite` `ton` `paradex` `tron`";
                                            };
                                            readonly transaction_explorer_template: {
                                                readonly type: "string";
                                            };
                                            readonly account_explorer_template: {
                                                readonly type: "string";
                                            };
                                            readonly token: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly symbol: {
                                                        readonly type: "string";
                                                    };
                                                    readonly logo: {
                                                        readonly type: "string";
                                                    };
                                                    readonly contract: {
                                                        readonly type: readonly ["string", "null"];
                                                    };
                                                    readonly decimals: {
                                                        readonly type: "integer";
                                                        readonly format: "int32";
                                                        readonly minimum: -2147483648;
                                                        readonly maximum: 2147483647;
                                                    };
                                                    readonly price_in_usd: {
                                                        readonly type: "number";
                                                        readonly format: "double";
                                                        readonly minimum: -1.7976931348623157e+308;
                                                        readonly maximum: 1.7976931348623157e+308;
                                                    };
                                                    readonly precision: {
                                                        readonly type: "number";
                                                        readonly format: "double";
                                                        readonly minimum: -1.7976931348623157e+308;
                                                        readonly maximum: 1.7976931348623157e+308;
                                                    };
                                                    readonly listing_date: {
                                                        readonly type: "string";
                                                        readonly format: "date-time";
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            };
                                            readonly metadata: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly listing_date: {
                                                        readonly type: "string";
                                                        readonly format: "date-time";
                                                    };
                                                    readonly evm_oracle_contract: {
                                                        readonly type: readonly ["string", "null"];
                                                    };
                                                    readonly evm_multicall_contract: {
                                                        readonly type: readonly ["string", "null"];
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            };
                                            readonly deposit_methods: {
                                                readonly type: readonly ["array", "null"];
                                                readonly items: {
                                                    readonly type: "string";
                                                };
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly token: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly symbol: {
                                                readonly type: "string";
                                            };
                                            readonly logo: {
                                                readonly type: "string";
                                            };
                                            readonly contract: {
                                                readonly type: readonly ["string", "null"];
                                            };
                                            readonly decimals: {
                                                readonly type: "integer";
                                                readonly format: "int32";
                                                readonly minimum: -2147483648;
                                                readonly maximum: 2147483647;
                                            };
                                            readonly price_in_usd: {
                                                readonly type: "number";
                                                readonly format: "double";
                                                readonly minimum: -1.7976931348623157e+308;
                                                readonly maximum: 1.7976931348623157e+308;
                                            };
                                            readonly precision: {
                                                readonly type: "number";
                                                readonly format: "double";
                                                readonly minimum: -1.7976931348623157e+308;
                                                readonly maximum: 1.7976931348623157e+308;
                                            };
                                            readonly listing_date: {
                                                readonly type: "string";
                                                readonly format: "date-time";
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly fee_token: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly symbol: {
                                                readonly type: "string";
                                            };
                                            readonly logo: {
                                                readonly type: "string";
                                            };
                                            readonly contract: {
                                                readonly type: readonly ["string", "null"];
                                            };
                                            readonly decimals: {
                                                readonly type: "integer";
                                                readonly format: "int32";
                                                readonly minimum: -2147483648;
                                                readonly maximum: 2147483647;
                                            };
                                            readonly price_in_usd: {
                                                readonly type: "number";
                                                readonly format: "double";
                                                readonly minimum: -1.7976931348623157e+308;
                                                readonly maximum: 1.7976931348623157e+308;
                                            };
                                            readonly precision: {
                                                readonly type: "number";
                                                readonly format: "double";
                                                readonly minimum: -1.7976931348623157e+308;
                                                readonly maximum: 1.7976931348623157e+308;
                                            };
                                            readonly listing_date: {
                                                readonly type: "string";
                                                readonly format: "date-time";
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly call_data: {
                                        readonly type: readonly ["string", "null"];
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                        };
                    };
                    readonly additionalProperties: false;
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { GetApiV2Destinations, GetApiV2Limits, GetApiV2Networks, GetApiV2Quote, GetApiV2Sources, GetApiV2Swaps, GetApiV2SwapsSwapid, GetApiV2SwapsSwapidDepositActions, PostApiV2Swaps };
