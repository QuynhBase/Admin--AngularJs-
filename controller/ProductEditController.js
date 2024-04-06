window.ProductEditController = function($scope, $http, $routeParams, $location){
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
    var editId = $routeParams.id;

    $scope.getProductInfo = function(){
        $http.get(`${apiUrl}/${editId}`).then(function(response){
            if(response.status == 200){
                $scope.product = response.data;
                $scope.inputValue = {
                    name: response.data.name,
                    price: response.data.price,
                    categoryId: response.data.categoryId,
                }
            }
        }).catch(function(error){
                $scope.message = `${error.statusText} product with id ${editId}`;      
        })
    }

    $scope.getProductInfo();

    $scope.KiemTraDuLieu = {
        name: false,
        price: false,
        categoryId: false,
    }

    $scope.onEdit = function(){
        // Gắn 1 biến để kiểm tra lỗi,
        // Nếu như 1 trong 2 trường hợp lỗi thì chuyển thành true
        let flag = false;

        if(!$scope.inputValue || !$scope.inputValue.name){
            // Nếu như không có inputValue hoặc inputValue.name 
            $scope.KiemTraDuLieu.name = true;
            flag = true;
        }

        if(!$scope.inputValue || !$scope.inputValue.price){
            // Nếu như không có inputValue hoặc inputValue.name 
            $scope.KiemTraDuLieu.price = true;
            flag = true;
        }

        if(!$scope.inputValue || !$scope.inputValue.categoryId){
            // Nếu như không có inputValue hoặc inputValue.name 
            $scope.KiemTraDuLieu.categoryId = true;
            flag = true;
        }

        if(!flag){
            // Tạo ra đối tượng item mới để thêm vào 
            var updateItem = {
                ...$scope.inputValue,
            }
            // Thêm dữ liệu mới thì phải sử dụng phương thức Post
            $http.put(
                `${apiUrl}/${editId}`,
                updateItem
            ).then(function(response){
                if(response.status == 200){
                    $location.path('product/list')
                }
            })
        }
    }
}