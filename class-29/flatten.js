const nestedArr = [1, [2, 3], [4, [5, 6]]];

function flattenArray(arr) {
  return arr.reduce((flatArray, item) => {
    if (Array.isArray(item)) {
      flatArray.push(...flattenArray(item)); // Recursively flattening the nested array
    } else {
      flatArray.push(item); // Push it to flat array
    }

    return flatArray;
  }, []);
}

flattenArray(nestedArr); // [1, 2, 3, 4, 5, 6]
