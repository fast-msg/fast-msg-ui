// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const be_config = {
  host: '104.154.119.100',
  port:8080
};

const api = `http://${be_config.host}:${be_config.port}`;

export const environment = {
  production: false,
  ENDPOINT_SOCKET:api,
  ENDPOINT_CHAT : api+'/chat',
  ENDPOINT_USER : api+'/user',
  ENDPOINT_PUBLIC : api+'/public',
  ENDPOINT_IMAGES:'https://res.cloudinary.com/devemg/image/upload/v1605105665/fastmsg/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
