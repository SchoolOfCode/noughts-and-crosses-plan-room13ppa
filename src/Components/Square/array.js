let array = ["Chris", "Pietro", "Pyi", "Rambo"];

array = [...array.slice(0, 2), "Tom", ...array.slice(3)];

console.log(array);
//output = [chris, pietro, tom, rambo]
