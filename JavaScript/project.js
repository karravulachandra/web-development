// alert("Hello Who you are")
// a="Chandra"
// console.log(a)
// var b="singing"
// console.log(b)
// var b="dancing"
// console.log(b)
//Data Types
// const a="Chandra"
// document.write("Hello World")
// document.write("<h1>Hello World</h1>")
// document.write(23456789)
// document.write(a)
//[] if we write dat in between this consider it as array
//{} if we write data in between this consider it as object
// let fruits=["Apple","Banana","Mango","Orange",55,{name:"Chandra",age:25}]
// console.log(fruits)
// document.write(fruits)
// const sn={
//     cric:"hiell",
//     vig:"hjbvfghy"
// }
// document.writeln(sn.cric+"<br>")
// document.writeln(sn.vig+"<br>")
// document.writeln(typeof(sn)+"<br>")
// document.writeln(Array.isArray(fruits)+"<br>")

// Operators

// var a=20
// var b=30
// document.writeln(a+b+"<br>")
// var a=["chandra","sai","sri","ram",{name:"chandra",age:25}]
// document.writeln(a[4].name+"<br>"+a[4].age+"<br>"+a[0]+a[1]+a[2]+a[3]+"<br>")
// document.writeln(a.length+"<br>")
// const a1={
//     name:"Chandra",
//     age:24
// }
// document.writeln(a1.name+"<br>"+a1.age+"<br>")   
// document.writeln(typeof(a)+"<br>"+typeof(a1)+"<br>") 
// document.writeln(Array.isArray(a)+"<br>")
// document.writeln(Object.isobject(a1)+"<br>")
// isarray is used to check whether the given data is array or not
// isobject is used to check whether the given data is object or not
// var a=20
// var b=20
// document.writeln("Addtion of two number ",a+b)
// document.writeln("subtraction",a-b)
// document.writeln("Division",a/b)
// document.writeln("multiplication",a*b)
// document.writeln("Modulus",a%b)
// document.writeln("Increment",a++)
// document.writeln("Decrement",b--+"<br>")
// if(a>b){
//     document.writeln("a is greater than b",a)
// }else if(b==a){
//     document.writeln("b is equal  to a : ",b)
// }
// else{
//     document.writeln("b is greater than a -",b)
// }
//dailog box
// document.writeln(alert("Hello World"))
// document.writeln(prompt("Do you want to continue"))
// prompt
// alert
// confirm

// var a=confirm("woman")
// if(a){
//     let woman=prompt("Welcome")
//     document.writeln("Hello World your welcome"+woman+"<br>")
//     alert("Hello World")    
// }else{
//     let woman=prompt("Do you want to continue")
//     document.writeln("Hello World"+woman+"<br>")
// }

// Type Conversion
// let a="39"
// let b=30
// let c=parseInt(a)
// document.writeln(typeof(c)+" "+(c + b)+"<br>")
// document.write(c+b+"<br>")
// // string to Int
// let a=20
// document.writeln("<br>"+typeof(a))
// let b=String(a)
// document.writeln("<br>"+typeof(b))
// let a=1
// switch(a){
//     case 20:
//         document.writeln("Hello World")
//         break;
//     case 30:
//         document.writeln("Fort_knox_box")
//         break;
//     default:
//         document.writeln("Hello default")
//         break;    
// }
//     let a=parseInt(prompt("enter number of students in your class"))
//     for(let i=0;i<a;i++){
//         let marks=parseInt(prompt("Enter the marks of student"))
//         let name=prompt("Enter the name of student")
//         switch(marks){
//             case (marks>20 && marks< 30):
//                 document.writeln("Hello World ",name +"<br>")
//                 break; 
                
//             case (marks>30 && marks<40):
//                 document.writeln("Fort_knox_box",name+ "<br>   ")
//                 break;

//             case (marks>40 && marks<50):
//                 document.writeln("Hello your got pass marks Mr  ",name,marks+"<br>")
//                 break;
//             case (marks>50 && marks<60):
//                 document.writeln("Hello ",name,marks+ "<br>")
//                 break; 
//             default:
//                 document.writeln("Hello default ",name + " " + marks+ "<br> ")
//                 break; 
                
//         }
// }
// Function
// function help(){
//     document.writeln("Hello World hkjnbv")
// }
// help()
//scopes
//Global scope
//Local scope
//Block scope
// let a =10
// var b=1
// const s=23
// function nj(){
// document.writeln(a)
// }
// nj()
// function hj(){
//     document.writeln(b)
// }
// hj()
// let ghmc=["chandar","mani"]
// ghmc.push("sai")
// ghmc.push("srija manu",890)
// document.writeln(ghmc+"<br>")
// document.writeln(ghmc.length+"<br>")
// document.writeln(ghmc.pop()+"deleted last element"+"<br>")
let fruits=[1,2,3,4,"chandra","sai","sri","ram"]
// document.writeln(fruits+"<br>")
// document.writeln(fruits.push("cvhfdcvb")+"<br>")
// document.writeln(fruits.length+"<br>")
// document.writeln(fruits.pop()+"<br>")
// document.writeln(fruits.shift()+"<br>")
// document.writeln(fruits+"<br>")
// document.writeln(fruits.unshift("ramanjan")+"<br>")
// document.writeln(fruits+"<br>")
// document.writeln(fruits[0].slice(0,3)+"<br>")
// document.writeln(fruits+"<br>")
// let frd=[56,5,68,9,9,0,0,0]
// let cnc=frd.concat(fruits)
// document.writeln(cnc+"<br>")
// document.writeln(fruits+"<br>")
// let m=fruits.join(":")
// document.writeln(m+"<br>")
// document.writeln(fruits.splice(1,0,"chandra-mani")+"<br>")
// document.writeln(fruits+"<br>")
// document.writeln(fruits.splice(1,3)+"<br>")
// document.writeln(fruits+"<br>")
// document.writeln("<br>")
// document.writeln("<br>")

// document.writeln(fruits.indexOf("ram")+"<br>")
// document.writeln("<br>")
// document.writeln("<br>")

// document.writeln(fruits+"<br>") 
// fruits.forEach(function(value, index){
//     key = 'index'
//     document.writeln(value+"<br>")
// })
// let c=[1,2,3,4,5,6,7,8,9,10]
// document.writeln(c+"<br>")
// let b=[[1,2,3,4,5,6,7,8,9,10],[11,12,13,14,15,16,17,18,19,20],[21,22,23,24,25,26,27,28,29,30]]
// document.writeln(b[1]+"<br>")
// document.writeln(b[1][2]+"<br>")
// let a=[[1,2,3,4,5,6,7,8,9,10],[11,12,13,14,15,16,17,18,19,20],[21,22,23,24,25,26,27,28,29,30]]
document.writeln(2-"3"+4+"<br>")