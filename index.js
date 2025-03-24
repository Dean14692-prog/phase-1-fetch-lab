function fetchBooks() {
  // Fetch data from the Game of Thrones API
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json()) // Convert response to JSON
    .then((data) => {
      renderBooks(data); // Pass the books data to renderBooks function
    })
    .catch((error) => console.error("Error fetching books:", error)); // Handle errors
}

function renderBooks(books) {
  const main = document.querySelector("main"); // Select the main container
  main.innerHTML = ""; // Clear previous content (optional)

  books.forEach((book) => {
    const h2 = document.createElement("h2");
    h2.textContent = book.name; // Set book title
    main.appendChild(h2); // Append to the main container
  });
}

// Run fetchBooks() when page loads
document.addEventListener("DOMContentLoaded", function () {
  fetchBooks();
});
