document.addEventListener('DOMContentLoaded', function() {
    // JavaScript to handle the search form submission
    document.getElementById('searchForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission
      var searchQuery = document.getElementById('searchQuery').value.toLowerCase();
  
      // A simple mapping of keywords to URLs
      var pageMap = {
        'home': 'main.html',
        'about': 'about.html',
        'services': 'services.html',
        'contact': 'contact.html',
        'clients': 'clients.html',
        'staff': 'staff.html',
        'vision': 'visionmission.html'
        // Add more mappings as needed
      };
  
      // Check if the entered keyword matches any of the keys in the pageMap
      var matchedPage = pageMap[searchQuery];
      
      if (matchedPage) {
        // If a match is found, redirect to the corresponding page
        window.location.href = matchedPage;
      } else {
        // If no match is found, alert the user or handle as needed
        alert("No results found. Please try a different keyword.");
      }
    });
  });