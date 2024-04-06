window.CategoryEditController = function($scope, $http, $routeParams, $location){
    var apiUrl = "http://localhost:3000/category";
    var editId = $routeParams.id;

    $scope.getCategoryInfo = function(){
        $http.get(`${apiUrl}/${editId}`).then(function(response){
            if(response.status == 200){
                $scope.category = response.data;
                $scope.inputValue = {
                    name: response.data.name,
                }
            }
        }).catch(function(error){
                $scope.message = `${error.statusText} category with id ${editId}`;      
        })
    }

    $scope.getCategoryInfo();

    $scope.KiemTraDuLieu = {
        name: false,
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
                    $location.path('category/list')
                }
            })
        }
    }
}