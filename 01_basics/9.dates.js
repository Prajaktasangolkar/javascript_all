// Dates


let myDate=new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate=new Date(2023,0,23)  //month start with 0 
console.log(myCreatedDate.toDateString());


let myCreatedDate1=new Date(2023,0,23,5,3) 
console.log(myCreatedDate1.toDateString());


let myCreatedDate3=new Date('2023-01-14')  //month start with 0 
console.log(myCreatedDate3.toDateString());


let myCreatedDate2=new Date("01-14-2023")  //month start with 0 
console.log(myCreatedDate2.toDateString());

let myTimStamp=Date.now()
console.log(myTimStamp);
console.log(myCreatedDate2.getTime());
console.log(Math.floor(Date.now()/1000));

let dates=new Date()
console.log('DATES METHOD');
console.log(dates);
console.log(dates.getDate());
console.log(dates.getDay());
console.log(dates.getFullYear());
console.log(dates.getMilliseconds());
dates.toLocaleString('default',{
    weekday: 'long',
    // timeZone: ''
})