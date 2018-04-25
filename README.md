Unejected `create-react-app`.

Dropzone test will not run because `document` is undefined.

I can get the test to pass ONE TIME, with the following hack:

 - Open `/node_modules/react-scripts/config/jest/babelTransform.js`, and create a compilation error.  For example, remove the `require.` in front of a `resolve()` call.
 - Run `yarn test`.  The test runner starts in watch mode, but complains that it can't find `resolve()`.  The tests stay in watch mode.
 - Fix the compilation error in `babelTransform.js` and save the file.  This will cause the tests to re-run, and pass, ONE TIME.  Subsequent runs will fail.