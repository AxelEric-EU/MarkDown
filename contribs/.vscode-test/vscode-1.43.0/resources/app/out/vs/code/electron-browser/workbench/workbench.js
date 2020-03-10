/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
"use strict";const perf=require("../../../base/common/performance");perf.mark("renderer/started");const bootstrapWindow=require("../../../../bootstrap-window");function showPartsSplash(t){let e;if(perf.mark("willShowPartsSplash"),"string"==typeof t.partsSplashPath)try{e=JSON.parse(require("fs").readFileSync(t.partsSplashPath,"utf8"))}catch(t){}e&&t.highContrast&&"hc-black"!==e.baseTheme&&(e=void 0),e&&t.extensionDevelopmentPath&&(e.layoutInfo=void 0);const o=e?e.baseTheme:t.highContrast?"hc-black":"vs-dark",i=e?e.colorInfo.editorBackground:t.highContrast?"#000000":"#1E1E1E",r=e?e.colorInfo.foreground:t.highContrast?"#FFFFFF":"#CCCCCC",n=document.createElement("style");if(n.className="initialShellColors",document.head.appendChild(n),document.body.className=o,n.innerHTML=`body { background-color: ${i}; color: ${r}; margin: 0; padding: 0; }`,e&&e.layoutInfo){const{id:o,layoutInfo:i,colorInfo:r}=e,n=document.createElement("div");n.id=o,i.windowBorder&&(n.style.position="relative",
n.style.height="calc(100vh - 2px)",n.style.width="calc(100vw - 2px)",n.style.border="1px solid var(--window-border-color)",n.style.setProperty("--window-border-color",r.windowBorder),i.windowBorderRadius&&(n.style.borderRadius=i.windowBorderRadius)),i.sideBarWidth=Math.min(i.sideBarWidth,window.innerWidth-(i.activityBarWidth+i.editorPartMinWidth)),
t.folderUri||t.workspace?n.innerHTML=`\n\t\t\t<div style="position: absolute; width: 100%; left: 0; top: 0; height: ${i.titleBarHeight}px; background-color: ${r.titleBarBackground}; -webkit-app-region: drag;"></div>\n\t\t\t<div style="position: absolute; height: calc(100% - ${i.titleBarHeight}px); top: ${i.titleBarHeight}px; ${i.sideBarSide}: 0; width: ${i.activityBarWidth}px; background-color: ${r.activityBarBackground};"></div>\n\t\t\t<div style="position: absolute; height: calc(100% - ${i.titleBarHeight}px); top: ${i.titleBarHeight}px; ${i.sideBarSide}: ${i.activityBarWidth}px; width: ${i.sideBarWidth}px; background-color: ${r.sideBarBackground};"></div>\n\t\t\t<div style="position: absolute; width: 100%; bottom: 0; left: 0; height: ${i.statusBarHeight}px; background-color: ${r.statusBarBackground};"></div>\n\t\t\t`:n.innerHTML=`\n\t\t\t<div style="position: absolute; width: 100%; left: 0; top: 0; height: ${i.titleBarHeight}px; background-color: ${r.titleBarBackground}; -webkit-app-region: drag;"></div>\n\t\t\t<div style="position: absolute; height: calc(100% - ${i.titleBarHeight}px); top: ${i.titleBarHeight}px; ${i.sideBarSide}: 0; width: ${i.activityBarWidth}px; background-color: ${r.activityBarBackground};"></div>\n\t\t\t<div style="position: absolute; width: 100%; bottom: 0; left: 0; height: ${i.statusBarHeight}px; background-color: ${r.statusBarNoFolderBackground};"></div>\n\t\t\t`,
document.body.appendChild(n)}perf.mark("didShowPartsSplash")}function getLazyEnv(){const t=require("electron").ipcRenderer;return new Promise((function(e){const o=setTimeout((function(){e(),console.warn("renderer did not receive lazyEnv in time")}),1e4);t.once("vscode:acceptShellEnv",(function(t,i){clearTimeout(o),bootstrapWindow.assign(process.env,i),e(process.env)})),t.send("vscode:fetchShellEnv")}))}process.lazyEnv=getLazyEnv(),bootstrapWindow.load(["vs/workbench/workbench.desktop.main","vs/nls!vs/workbench/workbench.desktop.main","vs/css!vs/workbench/workbench.desktop.main"],(function(t,e){return perf.mark("didLoadWorkbenchMain"),process.lazyEnv.then((function(){return perf.mark("main/startup"),require("vs/workbench/electron-browser/desktop.main").main(e)}))}),{removeDeveloperKeybindingsAfterLoad:!0,canModifyDOM:function(t){showPartsSplash(t)},beforeLoaderConfig:function(t,e){e.recordStats=!0},beforeRequire:function(){perf.mark("willLoadWorkbenchMain")}});
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/78a4c91400152c0f27ba4d363eb56d2835f9903a/core/vs/code/electron-browser/workbench/workbench.js.map
