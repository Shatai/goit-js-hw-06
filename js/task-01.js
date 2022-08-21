const numberCategories = document.querySelectorAll('li.item');
const category = document.querySelectorAll('h2');
const elements = document.querySelectorAll('ul');

console.log(`Number of categories:`, numberCategories.length);

console.log(`Category:`, category[0].innerHTML);
console.log(`Elements:`, elements[1].children.length);

console.log(`Category:`, category[1].innerHTML);
console.log(`Elements:`, elements[2].children.length);

console.log(`Category:`, category[2].innerHTML);
console.log(`Elements:`, elements[3].children.length);


