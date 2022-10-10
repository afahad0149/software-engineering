
// Paint fill (45 mins)

// Implement a "paint fill" function similar to what is found
// in many image editing programs. That is, given a screen
// (represented by a two dimensional array of colors),
// a point, and a new color, fill in the surrounding area
// until the old color changes. For example:
//
const imageTest = [
  [1, 2, 3, 4],
  [5, 2, 4, 3],
  [3, 9, 2, 6],
  [2, 9, 2, 8]
];

// paintFill(imageTest, [0, 1], 7);

// const res = [
//   [1, 7, 3, 4],
//   [5, 7, 4, 3],
//   [3, 9, 7, 6],
//   [2, 9, 7, 8]
// ]

// function paintFill (image, point, newColor) {
//   const oldColor = image[point[0]][point[1]]; 
//   for (let i = 0; i < image.length; i++) { 
//     let firstIndex = image[i].indexOf(oldColor); 
//     if (firstIndex >= 0) { 
//       image[i][firstIndex] = newColor; 
//     } 
//     let secondIndex = image[i].indexOf(oldColor, image[i].indexOf(oldColor)); 
//     if (secondIndex >= 0) { 
//       image[i][secondIndex] = newColor; 
//     } 
//   }
//   return image;
// }


// console.table(paintFill(imageTest, [0,1], 7));


const directionsObj = {
  'left-up': [-1, -1],
  up: [-1, 0],
  'right-up': [-1, 1],
  left: [0, -1],
  right: [0, 1],
  'left-down': [1, -1],
  down: [1, 0],
  'right-down': [1, 1]
};

function paintFill (image, point, newColor) {
  console.table(image,  console.count('iter'));

  const directions =  Object.values(directionsObj);
  
  // Taking the old color [row, column]
  const oldColor = image[point[0]][point[1]];
  // Take that point and filling it w/ the new color
  image[point[0]][point[1]] = newColor;
  
  // We use the for loop to find a new point, nothing else
  for (let i = 0; i < directions.length; i++) {
    // We go through all directions from the array
    const direction = directions[i];

    const newPoint = [
      point[0] + direction[0], // row
      point[1] + direction[1] // columns
    ];
    
    // If row exists and color === oldColor --> We fill it recursively
    if (image[newPoint[0]] && image[newPoint[0]][newPoint[1]] === oldColor) {
      // We pass the modified image
      paintFill(image, newPoint, newColor);
    }
  }
}


module.exports = paintFill;
