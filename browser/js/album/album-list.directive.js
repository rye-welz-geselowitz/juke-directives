juke.directive('albumList', function () {
  return {
    restrict: 'E', 
    templateUrl: '/js/album/templates/album-list.html',
 	scope: {
 		albums: '='
 	},
    link:function(scope,element,attrs){
    }
  };
});