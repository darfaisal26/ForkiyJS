console.log("map fiter reduce")

const obj ={
    name:'faisal',
    lastname:'naxir',
    age:24,
}
const arr = [1,2,3,4]
const newarr =arr.map((el) => el * 2)
// const [a,b]= newarr
// console.log(a,b)
// console.log(newarr)


  
//   // Prints "name Jean-Luc Picard" followed by "rank Captain"
//   Object.keys(obj).forEach(value => {
//     console.log( obj[value]);
//   });
//   const obj1 = {
//     name: 'Jean-Luc Picard',
//     rank: 'Captain',
//     age:''
//   };
  
//   // Prints "name Jean-Luc Picard" followed by "rank Captain"
//   Object.entries(obj1).forEach(entry => {
//     const [key, value = 28] = entry;
//     console.log(key, value);
//   });