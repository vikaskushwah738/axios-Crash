// const arr = [2,3,4,5,6,7];

//Map
//const output = arr.map((x) => x * 2);

//Filter
//const output = arr.filter((x) => x > 4)

//Reduce 
// const output = arr.reduce(function(acc, curr) {
//     acc = acc + curr;
//     return acc;
// }, 0);

// const output = arr.reduce(function(acc, curr) {
//     if (acc < curr){
//        acc = curr
//     }
//     return acc;
// }, 0);

// console.log(output);


// const users = [
//   {
//     id: 1,
//     name: "Vikas Kushwah",
//     email: "vikas@example.com",
//     age: 30,
//     skills: ["JavaScript", "React", "Node.js"]
//   },
//   {
//     id: 2,
//     name: "Amit Sharma",
//     email: "amit@example.com",
//     age: 28,
//     skills: ["Python", "Django", "Flask"]
//   },
//   {
//     id: 3,
//     name: "Sneha Verma",
//     email: "sneha@example.com",
//     age: 26,
//     skills: ["UI/UX", "Figma", "Photoshop"]
//   },
//   {
//     id: 4,
//     name: "Ravi Mehta",
//     email: "ravi@example.com",
//     age: 32,
//     skills: ["Java", "Spring Boot", "MySQL"]
//   },
//   {
//     id: 5,
//     name: "Neha Singh",
//     email: "neha@example.com",
//     age: 29,
//     skills: ["HTML", "CSS", "JavaScript"]
//   },
//   {
//     id: 6,
//     name: "Arjun Roy",
//     email: "arjun@example.com",
//     age: 25,
//     skills: ["C++", "Data Structures", "Algorithms"]
//   },
//   {
//     id: 7,
//     name: "Pooja Jha",
//     email: "pooja@example.com",
//     age: 29,
//     skills: ["React", "Redux", "Tailwind CSS"]
//   },
//   {
//     id: 8,
//     name: "Karan Kapoor",
//     email: "karan@example.com",
//     age: 30,
//     skills: ["PHP", "Laravel", "MySQL"]
//   },
//   {
//     id: 9,
//     name: "Anjali Rao",
//     email: "anjali@example.com",
//     age: 31,
//     skills: ["Python", "Pandas", "Data Visualization"]
//   },
//   {
//     id: 10,
//     name: "Manish Tiwari",
//     email: "manish@example.com",
//     age: 30,
//     skills: ["TypeScript", "Next.js", "GraphQL"]
//   }
// ];

//find name
//const output = users.map((x) => x.name)

// const output = users.reduce((acc, curr) => {
//     if(acc[curr.age]){
//         acc[curr.age] = ++acc[curr.age];
//     } else{
//         acc[curr.age] = 1
//     }
//      return acc
// }, {})
// result { '25': 1, '26': 1, '28': 1, '29': 2, '30': 3, '31': 1, '32': 1 }

// const output = users.reduce((acc, curr) => {
//     if(curr.age < 30){
//        acc.push(curr.name) 
//     } 
//      return acc
// }, [])


// const output = users.filter((x) => x.age > 30)
// .map((x) => x.name)



// console.log(output)

//  Sure, Vikas! Here's a **slide-wise breakdown** of those 5 important JavaScript higher-order functions — perfect for a presentation or carousel-style display.

// ---

// ### 🎯 Slide 1: `map()`

// #### ✅ Purpose:

// Transform each element of the array and return a **new array**.

// #### 💡 Example:


// const numbers = [1, 2, 3];
// const doubled = numbers.map(num => num * 2);
// console.log(doubled); 

//output : [2, 4, 6]


// ---

// ### 🎯 Slide 2: `filter()`

// #### ✅ Purpose:

// Keep only elements that **match a condition**, returning a **new array**.

// #### 💡 Example:


// const numbers = [1, 2, 3, 4, 5];
// const even = numbers.filter(num => num % 2 === 0);
// console.log(even); 

// //output [2, 4]


// ### 🎯 Slide 3: `reduce()`

// #### ✅ Purpose:

// Reduce the array to a **single value** by accumulating results.

// #### 💡 Example:


const numbers = [1, 2, 3, 4];
const total = numbers.reduce((acc, curr) => {
    acc = acc + curr;
    return acc
 }, 0);

console.log(total); 

//output 10


// ---

// ### 🎯 Slide 4: `forEach()`

// #### ✅ Purpose:

// Run a function on each array element (like `map`), but **does not return** a new array.

// #### 💡 Example:


const number = [3, 4, 5];
number.forEach(num => console.log(num * 2));

//output 1 
//output 2
//output 3

// ---

// ### 🎯 Slide 5: `find()`

// #### ✅ Purpose:

// Returns the **first element** in the array that **matches a condition**.

// #### 💡 Example:

// ```js
// const users = [
//   { id: 1, name: "Vikas" },
//   { id: 2, name: "Amit" }
// ];

// const user = users.find(u => u.id === 2);
// console.log(user); // { id: 2, name: "Amit" }
// ```

// ---

// Would you like these slides exported as:

// * ✅ PowerPoint (`.pptx`)
// * ✅ PDF
// * ✅ HTML/JS Carousel (e.g. Swiper.js or React component)

// Let me know!

