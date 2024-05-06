// const submitButton = document.querySelector(".submit-btn");
// // submitButton.style.backgroundColor = "blue"

// let toggler = false;

// submitButton.addEventListener("click",()=>{
//     if(toggler==false){
//         toggler=true;
//         submitButton.style.backgroundColor = "lightseagreen";
//     }else{
//         submitButton.style.backgroundColor = "blue";
//         toggler = false;
//     }
// })

// let a = 90;
// let b=30
// console.log(a+b);

// if(a%2==0){
//     console.log("even");
// }
// else{
//     console.log("Odd");
// }



//Arrays in JS
// const arr = [1,2,3,4,5];
// console.log(arr);
// // arr.forEach((ele)=>{
// //     console.log(2*ele);
// // })

// //Filter method 
// const arr2 = arr.filter(ele=>{
//     return (ele % 2 )!=0;
// })
// //Map method
// const arr3 = arr.map(ele=>{
//     return ele*4;
// })

// console.log(arr2);
// console.log(arr3);

// //Reduce method 
// const num = arr.reduce((accumulator,element)=>{
//      return accumulator + element;
// },10);

// console.log(num);



//Analogy ----> Dictionary in Python
// const object = {
//     name:"anurag",
//     id:"12",
//     occupation:"Web Developer",
//     power:(a)=>{
//         return a*a;
//     },
//     arr:[1,23,3],
//     subordinateObject:{
//         title:"I am another object inside the main object"
//     }
// }

// //There are two ways to access elements inside the object 
// console.log(object["name"]);
// console.log(object.name);
// object.name ="abhinav";
// object["name"] ="Batman";
// console.log(object);
// console.log(object.power(8));
// console.log(object.arr);

// console.log(object.subordinateObject.title);

for (let a = 1; a <= 5; a++) {
    for (let b = 1; b <= a; b++) {
        process.stdout.write("*");
    }
    process.stdout.write("\n");
}



