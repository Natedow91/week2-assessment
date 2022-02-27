///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
  Below is a cart array that has food objects inside. 
  Write a callback below that uses the reduce array method to 
  calculate the sum of all the food.  
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE



const sum = cart.reduce((acc = {}, item = {}) => {
  const itemTotal = parseFloat((item.amount * item.quantity).toFixed(2));
 

  acc.subtotal = parseFloat((acc.subtotal + itemTotal).toFixed(2));
  
  

  return acc;
}, {
  subtotal: 0,
  total: 0
});

console.log(sum);


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal, couponValue, tax) => {
    let finalPrice = cartTotal + (cartTotal * tax) - couponValue
    return finalPrice 
}
console.log(calcFinalPrice(15, 3, .06))



//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
 customer {
     name: 
     phoneNumber: 
     age: 
     birthday:

 }
I put name so we can know who it is we are talking too, Phone number so we can reach them and text out promotions, 
age so we can reach the right age demographic, and birthday so we can send them a birthday deal
/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
customer {
    firstName: "Nate",
    phoneNumber: 5555555555,
    age: 31,
    birthday: "February 21st",

}
