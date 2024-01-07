const city=['Kathmandu',"lalitpur",'pokhara']
const country=['nepal','india','china']

// city.push(country)//pushes array inside array creating multi dimension array
// console.log(city);

// const newArr=city.concat(country)//returns new array and concats 2 array into single one
// console.log(newArr);

// Spread Operator = spread each element in array
// const city_country_joined=[...city,...country]
// console.log(city_country_joined)

// array inside array
// const arr_arr=[1,2,3,[4,5],7,[[8,9],10],11]
// const arr_arr_arr=arr_arr.flat(Infinity)//flats all array elements sperads them
// const arr_arr_arr0=arr_arr.flat(1)//flats 1 level only [ 1, 2, 3, 4, 5, 7, [ 8, 9 ], 10, 11 ]
// console.log(arr_arr_arr);
// console.log(arr_arr_arr0);

// console.log(Array.isArray("Sush"));//Checks if its array
// console.log(Array.from("Sush"));//Converts into array

//Conversion of obj to array
// console.log(Array.from({name:"sush"}))//returns nothing empty array

// of in array
console.log(Array.of("a","b","c"))
