app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: "Bruschetta",
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 4.94
    }
  ];

  $scope.mains = [
    {
      name: 'Pasta in Meat Sauce',
      description: 'Lots of pasta, with lots of meat sauce.',
      price: 14.95
    },
    {
      name: 'Fish',
      description: 'Delicious fish with veggies on the side.',
      price: 13.95
    },
    {
      name: 'Steak',
      description: '400oz T-bone.',
      price: 34.94
    }
  ];

}]);