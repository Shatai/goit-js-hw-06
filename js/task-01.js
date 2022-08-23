const numberCategories = document.querySelectorAll('li.item');
console.log(`Number of categories:`, numberCategories.length);



numberCategories.forEach(function(categories) {
    console.log("Category:", categories.firstElementChild.textContent);
    console.log("Elements:", categories.lastElementChild.children.length);

});



