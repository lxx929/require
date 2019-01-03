function require(arr) {
    return function() {
        a = 10;
        a += a;
    }
}



define([
    'require',
    'dependency'
], function(require, factory) {
    'use strict';

});