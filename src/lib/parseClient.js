import Parse from 'parse';

// Initialize Parse SDK
Parse.initialize(process.env.YOUR_PARSE_APP_ID, process.env.YOUR_PARSE_JS_KEY);
Parse.serverURL = 'https://parseapi.back4app.com';

export default Parse;