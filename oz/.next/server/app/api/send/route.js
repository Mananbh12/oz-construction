/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/send/route";
exports.ids = ["app/api/send/route"];
exports.modules = {

/***/ "(rsc)/./app/api/send/route.ts":
/*!*******************************!*\
  !*** ./app/api/send/route.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var resend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! resend */ \"(rsc)/./node_modules/resend/dist/index.mjs\");\n\nconst resend = new resend__WEBPACK_IMPORTED_MODULE_0__.Resend(process.env.RESEND_API_KEY);\nasync function POST(request) {\n    console.log('API route /api/send called');\n    // Validation de la clé API\n    if (!process.env.RESEND_API_KEY) {\n        console.error('Clé API Resend manquante');\n        return new Response(JSON.stringify({\n            error: 'Clé API Resend manquante'\n        }), {\n            status: 500\n        });\n    }\n    console.log('Resend API key is present');\n    try {\n        const { name, email, message } = await request.json();\n        console.log('Received request data:', {\n            name,\n            email,\n            message\n        });\n        // Validation des champs\n        if (!name || !email || !message) {\n            console.log('Validation failed: Missing required fields');\n            return new Response(JSON.stringify({\n                error: 'Les champs nom, email et message sont requis'\n            }), {\n                status: 400\n            });\n        }\n        // Validation du format de l'email\n        const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n        if (!emailRegex.test(email)) {\n            console.log('Validation failed: Invalid email format');\n            return new Response(JSON.stringify({\n                error: 'Adresse email invalide'\n            }), {\n                status: 400\n            });\n        }\n        console.log('Input validation passed');\n        const { data, error } = await resend.emails.send({\n            from: 'onboarding@resend.dev',\n            to: 'admin@ozmatesconcreting.com.au',\n            subject: `Nouvelle soumission de formulaire de ${name}`,\n            text: `Nom: ${name}\\nEmail: ${email}\\nMessage: ${message}`\n        });\n        if (error) {\n            console.error('Erreur lors de l\\'envoi avec Resend:', error);\n            return new Response(JSON.stringify({\n                error: error.message\n            }), {\n                status: 500\n            });\n        }\n        console.log('Email sent successfully, response data:', data);\n        return new Response(JSON.stringify({\n            success: true,\n            data\n        }), {\n            status: 200\n        });\n    } catch (error) {\n        console.error('Erreur inattendue dans l\\'API:', error);\n        return new Response(JSON.stringify({\n            error: 'Échec de l\\'envoi de l\\'email'\n        }), {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3NlbmQvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsU0FBUyxJQUFJRCwwQ0FBTUEsQ0FBQ0UsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO0FBRTdDLGVBQWVDLEtBQUtDLE9BQWdCO0lBQ3pDQyxRQUFRQyxHQUFHLENBQUM7SUFDWiwyQkFBMkI7SUFDM0IsSUFBSSxDQUFDTixRQUFRQyxHQUFHLENBQUNDLGNBQWMsRUFBRTtRQUMvQkcsUUFBUUUsS0FBSyxDQUFDO1FBQ2QsT0FBTyxJQUFJQyxTQUFTQyxLQUFLQyxTQUFTLENBQUM7WUFBRUgsT0FBTztRQUEyQixJQUFJO1lBQUVJLFFBQVE7UUFBSTtJQUMzRjtJQUNBTixRQUFRQyxHQUFHLENBQUM7SUFFWixJQUFJO1FBQ0YsTUFBTSxFQUFFTSxJQUFJLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFLEdBQUcsTUFBTVYsUUFBUVcsSUFBSTtRQUNuRFYsUUFBUUMsR0FBRyxDQUFDLDBCQUEwQjtZQUFFTTtZQUFNQztZQUFPQztRQUFRO1FBRTdELHdCQUF3QjtRQUN4QixJQUFJLENBQUNGLFFBQVEsQ0FBQ0MsU0FBUyxDQUFDQyxTQUFTO1lBQy9CVCxRQUFRQyxHQUFHLENBQUM7WUFDWixPQUFPLElBQUlFLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQztnQkFBRUgsT0FBTztZQUErQyxJQUFJO2dCQUFFSSxRQUFRO1lBQUk7UUFDL0c7UUFFQSxrQ0FBa0M7UUFDbEMsTUFBTUssYUFBYTtRQUNuQixJQUFJLENBQUNBLFdBQVdDLElBQUksQ0FBQ0osUUFBUTtZQUMzQlIsUUFBUUMsR0FBRyxDQUFDO1lBQ1osT0FBTyxJQUFJRSxTQUFTQyxLQUFLQyxTQUFTLENBQUM7Z0JBQUVILE9BQU87WUFBeUIsSUFBSTtnQkFBRUksUUFBUTtZQUFJO1FBQ3pGO1FBQ0FOLFFBQVFDLEdBQUcsQ0FBQztRQUVaLE1BQU0sRUFBRVksSUFBSSxFQUFFWCxLQUFLLEVBQUUsR0FBRyxNQUFNUixPQUFPb0IsTUFBTSxDQUFDQyxJQUFJLENBQUM7WUFDL0NDLE1BQU07WUFDTkMsSUFBSTtZQUNKQyxTQUFTLENBQUMscUNBQXFDLEVBQUVYLE1BQU07WUFDdkRZLE1BQU0sQ0FBQyxLQUFLLEVBQUVaLEtBQUssU0FBUyxFQUFFQyxNQUFNLFdBQVcsRUFBRUMsU0FBUztRQUM1RDtRQUVBLElBQUlQLE9BQU87WUFDVEYsUUFBUUUsS0FBSyxDQUFDLHdDQUF3Q0E7WUFDdEQsT0FBTyxJQUFJQyxTQUFTQyxLQUFLQyxTQUFTLENBQUM7Z0JBQUVILE9BQU9BLE1BQU1PLE9BQU87WUFBQyxJQUFJO2dCQUFFSCxRQUFRO1lBQUk7UUFDOUU7UUFFQU4sUUFBUUMsR0FBRyxDQUFDLDJDQUEyQ1k7UUFDdkQsT0FBTyxJQUFJVixTQUFTQyxLQUFLQyxTQUFTLENBQUM7WUFBRWUsU0FBUztZQUFNUDtRQUFLLElBQUk7WUFBRVAsUUFBUTtRQUFJO0lBQzdFLEVBQUUsT0FBT0osT0FBTztRQUNkRixRQUFRRSxLQUFLLENBQUMsa0NBQWtDQTtRQUNoRCxPQUFPLElBQUlDLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQztZQUFFSCxPQUFPO1FBQWdDLElBQUk7WUFBRUksUUFBUTtRQUFJO0lBQ2hHO0FBQ0YiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW5hbi9Eb2N1bWVudHMvT1ovb3ovYXBwL2FwaS9zZW5kL3JvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlc2VuZCB9IGZyb20gJ3Jlc2VuZCc7XG5cbmNvbnN0IHJlc2VuZCA9IG5ldyBSZXNlbmQocHJvY2Vzcy5lbnYuUkVTRU5EX0FQSV9LRVkpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIGNvbnNvbGUubG9nKCdBUEkgcm91dGUgL2FwaS9zZW5kIGNhbGxlZCcpO1xuICAvLyBWYWxpZGF0aW9uIGRlIGxhIGNsw6kgQVBJXG4gIGlmICghcHJvY2Vzcy5lbnYuUkVTRU5EX0FQSV9LRVkpIHtcbiAgICBjb25zb2xlLmVycm9yKCdDbMOpIEFQSSBSZXNlbmQgbWFucXVhbnRlJyk7XG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7IGVycm9yOiAnQ2zDqSBBUEkgUmVzZW5kIG1hbnF1YW50ZScgfSksIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cbiAgY29uc29sZS5sb2coJ1Jlc2VuZCBBUEkga2V5IGlzIHByZXNlbnQnKTtcblxuICB0cnkge1xuICAgIGNvbnN0IHsgbmFtZSwgZW1haWwsIG1lc3NhZ2UgfSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKCdSZWNlaXZlZCByZXF1ZXN0IGRhdGE6JywgeyBuYW1lLCBlbWFpbCwgbWVzc2FnZSB9KTtcblxuICAgIC8vIFZhbGlkYXRpb24gZGVzIGNoYW1wc1xuICAgIGlmICghbmFtZSB8fCAhZW1haWwgfHwgIW1lc3NhZ2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdWYWxpZGF0aW9uIGZhaWxlZDogTWlzc2luZyByZXF1aXJlZCBmaWVsZHMnKTtcbiAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBlcnJvcjogJ0xlcyBjaGFtcHMgbm9tLCBlbWFpbCBldCBtZXNzYWdlIHNvbnQgcmVxdWlzJyB9KSwgeyBzdGF0dXM6IDQwMCB9KTtcbiAgICB9XG5cbiAgICAvLyBWYWxpZGF0aW9uIGR1IGZvcm1hdCBkZSBsJ2VtYWlsXG4gICAgY29uc3QgZW1haWxSZWdleCA9IC9eW15cXHNAXStAW15cXHNAXStcXC5bXlxcc0BdKyQvO1xuICAgIGlmICghZW1haWxSZWdleC50ZXN0KGVtYWlsKSkge1xuICAgICAgY29uc29sZS5sb2coJ1ZhbGlkYXRpb24gZmFpbGVkOiBJbnZhbGlkIGVtYWlsIGZvcm1hdCcpO1xuICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7IGVycm9yOiAnQWRyZXNzZSBlbWFpbCBpbnZhbGlkZScgfSksIHsgc3RhdHVzOiA0MDAgfSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdJbnB1dCB2YWxpZGF0aW9uIHBhc3NlZCcpO1xuXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgcmVzZW5kLmVtYWlscy5zZW5kKHtcbiAgICAgIGZyb206ICdvbmJvYXJkaW5nQHJlc2VuZC5kZXYnLCBcbiAgICAgIHRvOiAnYWRtaW5Ab3ptYXRlc2NvbmNyZXRpbmcuY29tLmF1JywgLy8gVm90cmUgYWRyZXNzZSBwb3VyIHJlY2V2b2lyIGxlcyBzb3VtaXNzaW9uc1xuICAgICAgc3ViamVjdDogYE5vdXZlbGxlIHNvdW1pc3Npb24gZGUgZm9ybXVsYWlyZSBkZSAke25hbWV9YCxcbiAgICAgIHRleHQ6IGBOb206ICR7bmFtZX1cXG5FbWFpbDogJHtlbWFpbH1cXG5NZXNzYWdlOiAke21lc3NhZ2V9YCxcbiAgICB9KTtcblxuICAgIGlmIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZGUgbFxcJ2Vudm9pIGF2ZWMgUmVzZW5kOicsIGVycm9yKTtcbiAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9KSwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZygnRW1haWwgc2VudCBzdWNjZXNzZnVsbHksIHJlc3BvbnNlIGRhdGE6JywgZGF0YSk7XG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7IHN1Y2Nlc3M6IHRydWUsIGRhdGEgfSksIHsgc3RhdHVzOiAyMDAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyZXVyIGluYXR0ZW5kdWUgZGFucyBsXFwnQVBJOicsIGVycm9yKTtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgZXJyb3I6ICfDiWNoZWMgZGUgbFxcJ2Vudm9pIGRlIGxcXCdlbWFpbCcgfSksIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cbn0iXSwibmFtZXMiOlsiUmVzZW5kIiwicmVzZW5kIiwicHJvY2VzcyIsImVudiIsIlJFU0VORF9BUElfS0VZIiwiUE9TVCIsInJlcXVlc3QiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJSZXNwb25zZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdGF0dXMiLCJuYW1lIiwiZW1haWwiLCJtZXNzYWdlIiwianNvbiIsImVtYWlsUmVnZXgiLCJ0ZXN0IiwiZGF0YSIsImVtYWlscyIsInNlbmQiLCJmcm9tIiwidG8iLCJzdWJqZWN0IiwidGV4dCIsInN1Y2Nlc3MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/send/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsend%2Froute&page=%2Fapi%2Fsend%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend%2Froute.ts&appDir=%2FUsers%2Fmanan%2FDocuments%2FOZ%2Foz%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmanan%2FDocuments%2FOZ%2Foz&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsend%2Froute&page=%2Fapi%2Fsend%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend%2Froute.ts&appDir=%2FUsers%2Fmanan%2FDocuments%2FOZ%2Foz%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmanan%2FDocuments%2FOZ%2Foz&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_manan_Documents_OZ_oz_app_api_send_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/send/route.ts */ \"(rsc)/./app/api/send/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/send/route\",\n        pathname: \"/api/send\",\n        filename: \"route\",\n        bundlePath: \"app/api/send/route\"\n    },\n    resolvedPagePath: \"/Users/manan/Documents/OZ/oz/app/api/send/route.ts\",\n    nextConfigOutput,\n    userland: _Users_manan_Documents_OZ_oz_app_api_send_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZzZW5kJTJGcm91dGUmcGFnZT0lMkZhcGklMkZzZW5kJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGc2VuZCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRm1hbmFuJTJGRG9jdW1lbnRzJTJGT1olMkZveiUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZtYW5hbiUyRkRvY3VtZW50cyUyRk9aJTJGb3omaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ0U7QUFDL0U7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9tYW5hbi9Eb2N1bWVudHMvT1ovb3ovYXBwL2FwaS9zZW5kL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9zZW5kL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvc2VuZFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvc2VuZC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9tYW5hbi9Eb2N1bWVudHMvT1ovb3ovYXBwL2FwaS9zZW5kL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsend%2Froute&page=%2Fapi%2Fsend%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend%2Froute.ts&appDir=%2FUsers%2Fmanan%2FDocuments%2FOZ%2Foz%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmanan%2FDocuments%2FOZ%2Foz&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "async_hooks":
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("async_hooks");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:stream");

/***/ }),

/***/ "prettier/plugins/html":
/*!****************************************!*\
  !*** external "prettier/plugins/html" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("prettier/plugins/html");;

/***/ }),

/***/ "prettier/standalone":
/*!**************************************!*\
  !*** external "prettier/standalone" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = import("prettier/standalone");;

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/resend"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsend%2Froute&page=%2Fapi%2Fsend%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend%2Froute.ts&appDir=%2FUsers%2Fmanan%2FDocuments%2FOZ%2Foz%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmanan%2FDocuments%2FOZ%2Foz&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();