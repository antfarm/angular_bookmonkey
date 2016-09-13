bmApp.controller('BookListCtrl', function ($scope, $filter) {

    $scope.books = [
        {
           title : 'JavaScript für Enterprise-Entwickler',
           isbn : '978-3-89864-728-1',
           author : 'Oliver Ochs'
        },
        {
           title : 'Node.js & Co.',
           isbn : '978-3-89864-829-5',
           author : 'Golo Roden'
        },
        {
           title : 'CoffeeScript',
           isbn : '978-3-86490-050-1',
           author : 'Andreas Schubert'
         }
    ];

    $scope.getBookOrder = function(book) {
        return book.title;
    };

    // This is just to demonstrate the programmatic usage of a filter
    var orderBy = $filter('orderBy');

    var titles = $scope.books.map(function(book) {
        return {title: book.title};
    });

    console.log('titles before ordering', titles);

    // This is the actual invocation of the filter
    titles = orderBy(titles, 'title');

    console.log('titles after ordering', titles);
});
