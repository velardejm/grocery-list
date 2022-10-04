const capitalize = function (word) {
  let capitalized = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  return capitalized;
}

function getCategories(pantryItems) {
  let categoriesArray = pantryItems.map((item) => {
    return item.category.toLowerCase();
  });
  return [...new Set(categoriesArray)].sort();
}

// Note: for the meantime, use updateCategory function which will be called when the pantryItems state is updated.
// As an improvement later, categories array will be automatically updated if a new pantry item or product with a new category is added.

function sortItems(arr) {
  let nameSortedArr = arr.map((i) => i.name).sort();
  let arrSorted = nameSortedArr.map((i) => {
    let found = arr.find((el) => el.name === i);
    return found;
  });
  return arrSorted;
}


export { capitalize, getCategories, sortItems };