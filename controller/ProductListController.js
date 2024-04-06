window.ProductListController = function($scope, $http, $location){
    var apiUrl = "http://localhost:3000/products";
    var apiUrlC = "http://localhost:3000/category";

    $http.get(apiUrlC).then(function (response) {
            if (response.status == 200) {
                $scope.category = response.data;
                $scope.getData();
            }
    });

    $scope.getCategoryName = function (categoryId) {
        for (var i = 0; i < $scope.category.length; i++) {
            if ($scope.category[i].id === categoryId) {
                return $scope.category[i].name;
            }
        }
        return "";
    }
    
    $scope.getData = function(){
        $http.get(apiUrl).then(function(response){
            if(response.status == 200){
                $scope.products = response.data;
            }
        })
    }
    $scope.getData();

    // Nút xóa
    $scope.onDelete = function(deleteID){
        let confirm = window.confirm("Bạn có muốn xóa không");
        if(confirm){
            $http.delete(`${apiUrl}/${deleteID}`).then(
                function(reponse){
                    if(reponse.status == 200){
                        $scope.getData();
                    }
                }
            )
        }
    }

    $scope.onDetail = function(id){
        $location.path(`/product/detail/${id}`);
    }

    $scope.onEdit = function(id){
        $location.path(`product/${id}/edit`);
    }
}