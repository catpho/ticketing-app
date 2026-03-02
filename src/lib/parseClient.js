import Parse from 'parse';

// Initialize Parse SDK
Parse.initialize('YOUR_APP_ID', 'YOUR_JS_KEY');
Parse.serverURL = 'https://parseapi.back4app.com';

export default Parse;