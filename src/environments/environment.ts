// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDoBgHxR6P0aA90TlU-tn8VpAXiZYhXtWQ',
    authDomain: 'wp-dasboard-app.firebaseapp.com',
    databaseURL: 'https://wp-dasboard-app.firebaseio.com',
    projectId: 'wp-dasboard-app',
    storageBucket: 'wp-dasboard-app.appspot.com',
    messagingSenderId: '643597976913'
  }
};
