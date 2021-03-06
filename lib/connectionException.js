/*
Copyright © 2015-2016 ADP, LLC.

Licensed under the Apache License, Version 2.0 (the “License”);
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an “AS IS” BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.  See the License for the specific language
governing permissions and limitations under the License.
*/

'use strict';

var statusMap = require('http').STATUS_CODES;
var oauthCodeMap = require('./oauthCodeMap');

/**
@class ConnectionException
@description Exception returned upon API call exception or invalid response.
*/
function ConnectionException(err) {

	/**
	@memberof ConnectionException
	@description HTTP status code of the request.
	*/
	this.statusCode = err.statusCode || 0;

	/**
	@memberof ConnectionException
	@description HTTP status description.
	*/
	this.statusDesc = statusMap[this.statusCode] || 'No Status Description';

	/**
	@memberof ConnectionException
	@description Detailed authentication error message.
	*/
	this.message = oauthCodeMap(err.oauthResponse || {}) || 'Unknown Authentication Error';

	/**
	@memberof ConnectionException
	@description Original HTTP response object.
	*/
	this.response = err.response || {};

}

module.exports = ConnectionException;
