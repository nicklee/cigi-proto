// test importing CommonJS modules from ./vendor/
import jQuery from 'jquery';

// We have to manually make jQuery a global variable.
// By default it will be in a closure and renamed to lowercase.
window.jQuery = jQuery;
