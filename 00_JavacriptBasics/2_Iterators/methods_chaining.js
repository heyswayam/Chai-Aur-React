//U can chain methods, how many times u want

//In map chaining, 1st chain ka jo bhi result h woh 2nd ko pass Hota h
//so , it moves to 2nd chain only after 1st chain is completed

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let value = myNumers.filter((num)=>(num>3)).map((val)=>(val+1)).map((val)=>(val*100))
console.log(value);