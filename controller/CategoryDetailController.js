window.CategoryDetailController = function($scope, $http, $routeParams){
    var apiUrl = "http://localhost:3000/category";
    var id = $routeParams.id;
    $scope.getDetail = function(){
        $http.get(`${apiUrl}/${id}`).then(function(response){
            if(response.status == 200){
                $scope.c = response.data;
            }
        })
    }
    $scope.getDetail();
}