'use strict';

angular.module('tusApp')
.service('Utils', function Utils() {

    var utils = 
    {
        sortByDate : function(array, field)
        {
            array.sort(function(a,b){
                a = new Date(a[field]);
                b = new Date(b[field]);
                return a<b?-1:a>b?1:0;
            });
            return array;
        },

        copy : function(obj)
        {
            if (null == obj || "object" != typeof obj) return obj;
            var copy = obj.constructor();
            for (var attr in obj) {
                if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
            }
            return copy;
        }
    };

    return utils;
});
