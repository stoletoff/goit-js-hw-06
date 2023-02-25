const quantityCategories = document.querySelectorAll(`#categories .item`);
// console.log(quantityCategories);
console.log(`Number of categories:`, quantityCategories.length);

quantityCategories.forEach(elem => {
    const textTitle = elem.firstElementChild.textContent;
    const quantityElem = elem.lastElementChild.children.length;
    console.log(`Category: ${textTitle}`);
    console.log(`Elements:${quantityElem}`);
});

