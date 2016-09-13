describe("E2E: book list view", function () {

   // Define the array of books in the expected order.
   // Sorted by title.
   var expectedBooks = [
       {
          title: 'CoffeeScript',
          isbn: '978-3-86490-050-1',
          author: 'Andreas Schubert'
       },
       {
          title: 'JavaScript für Enterprise-Entwickler',
          isbn: '978-3-89864-728-1',
          author: 'Oliver Ochs'
       },
       {
          title: 'Node.js & Co.',
          isbn: '978-3-89864-829-5',
          author: 'Golo Roden'
       }
   ];

   // Derive an array that only contains titles
   // for easier expectation checks.
   var orderedTitles = expectedBooks.map(function(book) {
       return book.title;
   });

   [...]

});
