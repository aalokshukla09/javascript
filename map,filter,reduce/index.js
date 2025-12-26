// forEach, filter, reducer, map, set -> array methods 

// const numbers = [1, 2, 3, 4, 5];

// // forEach
// numbers.forEach((num,ind) => {
//   console.log(`Number: ${num} at index: ${ind}`); // callback function
// });

// filter
// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log('Even Numbers:', evenNumbers); // [2, 4]

// // custom filter method
// const arr = [10,20,30,40,50,60];
// Array.prototype.filtering = function(compare){
    
//     const ans = [];
//     for(let num of this){
//        if(compare(num)){
//         ans.push(num);
//        }
//     }
//     return ans;
// }

// const newArr = arr.filtering((num)=>num>25);

// console.log(newArr);

// const a = [80,30,15,31,42,70]
// const answer = a.filtering((num)=>num>25).sort((a,b)=>a-b);
// console.log(answer);

const products = [
  // Electronics
  { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
  { id: 2, name: "Headphones", category: "Electronics", price: 200, inStock: true },
  { id: 3, name: "Smartphone", category: "Electronics", price: 800, inStock: false },
  { id: 4, name: "Monitor", category: "Electronics", price: 300, inStock: true },
  { id: 5, name: "Keyboard", category: "Electronics", price: 75, inStock: true },

  // Books
  { id: 6, name: "The Hobbit", category: "Books", price: 25, inStock: true },
  { id: 7, name: "A Brief History of Time", category: "Books", price: 30, inStock: true },
  { id: 8, name: "Dune", category: "Books", price: 28, inStock: false },

  // Appliances
  { id: 9, name: "Coffee Maker", category: "Appliances", price: 150, inStock: false },
  { id: 10, name: "Blender", category: "Appliances", price: 80, inStock: true },
  { id: 11, name: "Toaster", category: "Appliances", price: 45, inStock: true },
  { id: 12, name: "Microwave Oven", category: "Appliances", price: 220, inStock: true },

  // Clothing
  { id: 13, name: "T-Shirt", category: "Clothing", price: 20, inStock: true },
  { id: 14, name: "Jeans", category: "Clothing", price: 60, inStock: false },
  { id: 15, name: "Jacket", category: "Clothing", price: 110, inStock: true },

  // Home Goods
  { id: 16, name: "Desk Lamp", category: "Home Goods", price: 35, inStock: true },
  { id: 17, name: "Scented Candle", category: "Home Goods", price: 15, inStock: true },
  { id: 18, name: "Picture Frame", category: "Home Goods", price: 22, inStock: false },

  // Groceries
  { id: 19, name: "Organic Apples", category: "Groceries", price: 5, inStock: true },
  { id: 20, name: "Artisan Bread", category: "Groceries", price: 8, inStock: true }
];

// const affordableInStockProducts = products
// .filter((product) => product.price < 50 && product.inStock)
// .sort((a,b)=>a.price - b.price)
// .map((product)=>({productName:product.name, productPrice:product.price}));

// console.log(affordableInStockProducts);

// const ans = products.map((product)=>({productName:product.name, productPrice:product.price}));
// console.log(ans);

// reducer

// const total = products.reduce((sum,prod)=>{
//     if(prod.inStock){
//         return sum + prod.price;
//     }
//     return sum
// },0)

// console.log('Total Price of inStock Products:', total);

// // set 

// const arr=[1,2,6,4,5,5,4,3,2,1];
// const uniqueArr = [...new Set(arr)].sort((a,b)=>a-b);
// console.log(uniqueArr);

// map

// const m1 = new Map([
//     ["Raj", 40],
//     [2, "Raj"],
//     [true, 11],
//     [[10,30,11], "Aalok"]
// ]);

// m1.set({name:"Manish",age:20}, false);
// console.log(m1);
// console.log(m1.get(2));

// for(let[key,value] of m1){
//     console.log(`Key is: ${key} and value is: ${value}`);
// }