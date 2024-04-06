window.ProductAddController = function($scope, $http, $location){
    var apiUrl = "http://localhost:3000/products";
    var apiUrlC = "http://localhost:3000/category";

    $scope.getData = function(){
        $http.get(apiUrlC).then(function(response){
            if(response.status == 200){
                $scope.category = response.data;
            }
        })
    }
    $scope.getData();

    $scope.KiemTraDuLieu = {
        name: false,
        price: false,
        categoryId: false,
    }

    $scope.onSubmit = function(){
        let flag = false;

        if(!$scope.inputValue || !$scope.inputValue.name){
            $scope.KiemTraDuLieu.name = true;
            flag = true;
        }

        if(!$scope.inputValue || !$scope.inputValue.price){
            $scope.KiemTraDuLieu.price = true;
            flag = true;
        }

        if(!$scope.inputValue || !$scope.inputValue.categoryId){
            $scope.KiemTraDuLieu.categoryId = true;
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
                    $location.path('product/list');
                }
            })
        }
    }
}