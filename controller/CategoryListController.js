window.CategoryListController = function($scope, $http, $location){
    var apiUrl = "http://localhost:3000/category";
    $scope.getData = function(){
        $http.get(apiUrl).then(function(response){
            if(response.status == 200){
                $scope.category = response.data;
            }
        })
    }
    $scope.getData();

    // Xóa

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
        $location.path(`/category/detail/${id}`);
    }

    $scope.onEdit = function(id){
        $location.path(`category/${id}/edit`);
    }
}