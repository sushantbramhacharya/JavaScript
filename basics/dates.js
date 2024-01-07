let myDate=new Date();//returns current date and time
console.log(myDate);
console.log(myDate.toDateString());//Converts into a date string
console.log(myDate.toLocaleTimeString());//Give date and time according to local time
console.log(myDate.toLocaleString());//Local Formated date

console.log(myDate.getDate())//gives 7 because of 7th jan
console.log(myDate.getDay());//0 because of starting of the week
console.log(myDate.getFullYear());//2024
console.log(myDate.getTime());//gives timestamp in milliseconds after  January 1, 1970(epoch)
console.log(myDate.getSeconds());//seconds now
console.log(myDate.getMonth());//current month starting from 0


console.log();
let createdDate =new Date(2024,0,12);//month starts from 0
//another ways to create date
let anotherDate = new Date("2023-01-12");
console.log(anotherDate.toDateString());
let anotherDate0 = new Date("2023/01/12");
console.log(anotherDate0.toDateString());
let anotherDate1= new Date("01-13-2024");
console.log(anotherDate1.toDateString());

console.log();
console.log("Time passed since 2018-01-12");
let date=new Date("2018-01-12");
let timePassed=Date.now()-date.getTime();
console.log(`Time passed in milliseconds ${timePassed}`);