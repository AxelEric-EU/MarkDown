/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict'
const bootstrap = require('./bootstrap')
bootstrap.avoidMonkeyPatchFromAppInsights(),
  bootstrap.configurePortable(),
  bootstrap.enableASARSupport(),
  require('./bootstrap-amd').load('vs/code/node/cli')
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/78a4c91400152c0f27ba4d363eb56d2835f9903a/core/cli.js.map
