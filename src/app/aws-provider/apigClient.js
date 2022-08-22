/*
 * Copyright 2010-2016 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

var apigClientFactory = {};
apigClientFactory.newClient = function (config) {
    var apigClient = { };
    if(config === undefined) {
        config = {
            accessKey: 'ASIAQV2NQILQNYMVR6PL',
            secretKey: 'gL1oAbyqkRLSq9nH7ilD5N+HHxOw4s6cQdrlSM9b',
            sessionToken: 'IQoJb3JpZ2luX2VjEO///////////wEaCXVzLWVhc3QtMSJHMEUCIAjmxFMFngz8TVbwTw6Rq3e4mCBKR19ONaSbC/H3hWllAiEAhz6cCmk3gkEE+vA0/XWfPx6GunIGEWprLY1QA5UhA98q6gEIZxAAGgwwNDY4NzAzMTU3NDQiDB2heOFAPVa+6fKgdyrHAeawCNsuLugMLA3Iu2Ncc0uThh/3TBu4ZC648H+JZOjuaRtTJZYf/yg87VYdmbfl5KYo7DMa4TjG0qrykVUqWrTpnjKwx5LQsJ1/24tnYN0dO8e9531S+r5Dbc5Gh1gtNgsF4IrFa4A+PfZ3vuwNCkx6FaytqVwZqYFGwwWENtIzCZLpfK6aM7d8hRgJMtH9eZBbEnQjrpe0Gf5sJizQ9i99AeGy6wdcFF7PF385haO6sA+M6XEWppVDXm4STxQP/nPQG/9441kw0tmKmAY6mAGmFSv1HaoVq5tvi2KCgOgfDOM8u7SOZnhDpliJpbu3Oxf+XRw/EWaerUER8P0OjvhfU4AIjUbG3dxVN4nzPGK/6pLickcT8NydnL+tD9lbbFUIKG3AyqaqqRcnZID5Hj2HkTOVLuvO4DW3KfSKa0MuZaw2VGJnQdm47pOHwbW8SWXeeoXFpQdIR2df5Hbox58enNIkmuwvSA==',
            region: 'us-east-1',
            apiKey: undefined,
            defaultContentType: 'application/json',
            defaultAcceptType: 'application/json'
        };
    }
    if(config.accessKey === undefined) {
        config.accessKey = '';
    }
    if(config.secretKey === undefined) {
        config.secretKey = '';
    }
    if(config.apiKey === undefined) {
        config.apiKey = '';
    }
    if(config.sessionToken === undefined) {
        config.sessionToken = '';
    }
    if(config.region === undefined) {
        config.region = 'us-east-1';
    }
    //If defaultContentType is not defined then default to application/json
    if(config.defaultContentType === undefined) {
        config.defaultContentType = 'application/json';
    }
    //If defaultAcceptType is not defined then default to application/json
    if(config.defaultAcceptType === undefined) {
        config.defaultAcceptType = 'application/json';
    }

    
    // extract endpoint and path from url
    var invokeUrl = 'https://gt2ekop1rj.execute-api.us-east-1.amazonaws.com/helloworld';
    var endpoint = /(^https?:\/\/[^\/]+)/g.exec(invokeUrl)[1];
    var pathComponent = invokeUrl.substring(endpoint.length);

    var sigV4ClientConfig = {
        accessKey: config.accessKey,
        secretKey: config.secretKey,
        sessionToken: config.sessionToken,
        serviceName: 'execute-api',
        region: config.region,
        endpoint: endpoint,
        defaultContentType: config.defaultContentType,
        defaultAcceptType: config.defaultAcceptType
    };

    var authType = 'NONE';
    if (sigV4ClientConfig.accessKey !== undefined && sigV4ClientConfig.accessKey !== '' && sigV4ClientConfig.secretKey !== undefined && sigV4ClientConfig.secretKey !== '') {
        authType = 'AWS_IAM';
    }

    var simpleHttpClientConfig = {
        endpoint: endpoint,
        defaultContentType: config.defaultContentType,
        defaultAcceptType: config.defaultAcceptType
    };

    var apiGatewayClient = apiGateway.core.apiGatewayClientFactory.newClient(simpleHttpClientConfig, sigV4ClientConfig);
    
    
    
    apigClient.unitedSearchGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['united_search'], ['body']);
        
        var unitedSearchGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/{united_search+}').expand(apiGateway.core.utils.parseParametersToObject(params, ['united_search'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(unitedSearchGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.unitedSearchOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var unitedSearchOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/{united_search+}').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(unitedSearchOptionsRequest, authType, additionalParams, config.apiKey);
    };
    

    return apigClient;
};
