juke.directive('doubleClick', function (PlayerFactory) {
  return {
    restrict: 'A', 
    scope: {
    	doubleClick: '&'
    },
    // template: '<h1>WELL HAI</h1>',
    link:function(scope,element,attrs){
		element.on('dblclick',function(){
			scope.doubleClick();
		})
    }
  };
});


// scope.doubleClick

// scope.doubleClick = function () {
// 	return parse('toggle(song)', scope.$parent)
// }