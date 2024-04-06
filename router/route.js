angular.module('myAssignment',['ngRoute']).config(function($routeProvider){
    $routeProvider.when('/product/list',{
        templateUrl: 'views/Product/list.html',
        controller: ProductListController
    })
    .when('/product/add',{
        templateUrl: 'views/Product/add.html',
        controller: ProductAddController
    })
    .when('/product/detail/:id',{
        templateUrl: 'views/Product/detail.html',
        controller: ProductDetailController
    })
    .when('/product/:id/edit',{
        templateUrl: 'views/Product/edit.html',
        controller: ProductEditController
    })
    .when('/category/list',{
        templateUrl: 'views/Category/list.html',
        controller: CategoryListController
    })
    .when('/category/add',{
        templateUrl: 'views/Category/add.html',
        controller: CategoryAddController
    })
    .when('/category/detail/:id',{
        templateUrl: 'views/Category/detail.html',
        controller: CategoryDetailController
    })
    .when('/category/:id/edit',{
        templateUrl: 'views/Category/edit.html',
        controller: CategoryEditController
    })

});