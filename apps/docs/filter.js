sqlsheet.filter('isCollectionActive', function() {
  return function(input) {
    return input ? 'active' : '';
  };
});
