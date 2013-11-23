var iAng = angular.module("iAng", []);
iAng.controller("TodoController", function($scope)
{
    //The array of TODOs
    $scope.todoList = [{name: 'Complete the TODO task in AngularJS', addTime: '1385221119053', completedTime: '1385223119053', status: 'Completed', isNew: false},{name: 'Complete the TODO task in jQuery', addTime: '1385221119053', completedTime: 'Pending', status: 'Pending', isNew: false}]; 
    $scope.todo = ''; //TODO model
    $scope.err = ''; //Error to validate the TODO entry.

    //Modal to filter the todoList
    $scope.status = 'All';
    //Adding a TODO entry in todoList
    $scope.addTodo = function(todo)
    {
        //If entry is not null
        if (todo.trim() !== '')
        {
            $scope.todoList.push(
                    {
                        name: todo,
                        addTime: $scope.getTime(),
                        completedTime: 'Pending',
                        status: 'Pending',
                        isNew: true,
                    });
            $scope.todo = '';
            $scope.err = '';
        }
        //if entry is null then show the validation message to user.
        else
        {
            $scope.err = 'Please enter a todo item.';
        }
    };

    //A function to get the current time in seconds.
    $scope.getTime = function()
    {
        return new Date().getTime();
    };
});

//A filter to reverse the TODO list array.
iAng.filter('reverse', function()
{
    return function(items)
    {
        return items.slice().reverse();
    };
});

iAng.filter('statusFilter', function()
{
    return function(items, status)
    {
        if (status == 'All')
            return items;
        else
        {
            var Matches = [];
            angular.forEach(items, function(item)
            {
                if(item.status==status)
                    Matches.push(item);
            });
            return Matches;
        }
    };
});