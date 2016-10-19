sqlsheet.controller('DocsController', function() {

});

sqlsheet.directive('hljsComponent', function() {
  return {
    restrict: 'A',
    link: function(scope) {
      hljs.initHighlightingOnLoad();
    }
  };
});
