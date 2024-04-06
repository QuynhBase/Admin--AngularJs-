window.CategoryAddController = function($scope, $http, $location){
    var apiUrl = "http://localhost:3000/category";
    $scope.KiemTraDuLieu = {
        name: false,
    }

    $scope.onSubmit = function(){
        let flag = false;

        if(!$scope.inputValue || !$scope.inputValue.name){
            $scope.KiemTraDuLieu.name = true;
            flag = true;
        }

        if(!flag){
            var newItem = {
                ...$scope.inputValue,
            }

            $http.post(
                apiUrl,
                newItem
            ).then(function(response){
                if(response.status == 201){
                    $location.path('category/list');
                }
            })
        }
    }
}