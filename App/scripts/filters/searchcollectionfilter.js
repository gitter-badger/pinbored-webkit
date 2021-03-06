
/**
 * @ngdoc filter
 * @name pinboredWebkitApp.searchcollection
 * @description
 * # searchcollection filter
 * Filter in the pinboredWebkitApp.
 */
angular.module('pinboredWebkitApp')
  
  .filter('searchcollection', function() {
    return function(propertyName, propertyValue, collection) {
      var i=0, len=collection.length;
      for (; i<len; i++) {
        // if (collection[i]['data'][propertyName] == propertyValue) {
        if (collection[i].data.propertyName === propertyValue) {
          return collection[i];
        }
      }
      return null;
    };
  });