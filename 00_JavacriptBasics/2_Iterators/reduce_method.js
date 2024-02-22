//The final result of running the reducer across all elements of the array is a single value.
// ex- adding up values

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
// let totalCartPrice = shoppingCart.reduce( (accumulator,currval)=>{return accumulator+currval.price} , 0)
let totalCartPrice = shoppingCart.reduce( (accumulator,currval)=>(accumulator+currval.price), 0)
//acts like sum = sum + currVal
console.log(totalCartPrice);

///syntax
// array1.reduce( fun(accumulator, currval) , initialValue);