// // Write a function makeLine(size) that returns a line with exactly size hashes.

function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
        line += '#';
    }
    return line;
}

console.log(makeLine(5));

// // Write a function called makeSquare(size) that returns a size by size string of hashes. 
// // The function should NOT print each row of the square. 
// // Instead, it must return a single string that contains the entire shape.

function makeSquare(size) {
    let square = '';
    for (let i = 0; i < size; i++) {
        square += (makeLine(size) + '\n');
    }
    return square.slice(0, -1);
}

console.log(makeSquare(5));

// // Write a function makeRectangle(width, height) that returns a rectangle with the
// // given width and height. Use your makeLine function to do this.

function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
      rectangle += (makeLine(width) + '\n');
    }
    return rectangle.slice(0, -1);
  }

  console.log(makeRectangle(5, 3));


//   // Write a function makeDownwardStairs(height) that prints the staircase pattern shown below, 
//   // with the given height. Use your makeLine function to do this.

  function makeDownwardStairs(height) {
    let stairs = '';
    for (let i = 0; i < height; i++) {
      stairs += (makeLine(i+1) + '\n');
    }
    return stairs.slice(0, -1);
  }

  console.log(makeDownwardStairs(5));

//   Write a function makeSpaceLine(numSpaces, numChars) that returns a line with exactly 
//   the specified number of spaces, followed by the specified number of hashes, followed 
//   again by numSpaces more spaces.

function makeSpaceLine(numSpaces, numChars) {
    let line = '';
    for (let i = 0; i < numSpaces; i++) {
        line += ' ';
         }
    for (let i = 0; i < numChars; i++) {
          line += '#';
         }
    for (let i = 0; i < numSpaces; i++) {
            line +=  ' ';
         }
         return line;
}

console.log(makeSpaceLine(3, 5));

// Write a function makeIsoscelesTriangle(height) that returns a triangle of the given height.

function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
      triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
    }
    return triangle.slice(0, -1);
  }

console.log(makeIsoscelesTriangle(5));

// Write a function makeDiamond(height) that returns a diamond where the triangle 
// formed by the top portion has the given height.

function makeDiamond(height) {
    let diamond = '';
    for (let i = 0; i < height; i++) {
        diamond += (makeSpaceLine(height - i - 1, 2*i + 1) +'\n');
    }
    for (let i = height - 2; i >= 0; i--) {
        diamond += (makeSpaceLine(height - i - 1, 2 * i + 1) + '\n');
    }
    return diamond.slice(0, -1);
}


console.log(makeDiamond(5));