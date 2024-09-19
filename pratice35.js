// // 2. Sum of Two Numbers
// let a,b,sum;
// a=parseInt(prompt("enter no"));
// b=parseInt(prompt("enter no1;"))
//   sum=a+b;
// console.log("Addition is",sum);
  
// 3. Largest of Two Numbers

// let a=40;
// let b=53;
// if(a>b){
//     console.log("largest num is",a);
    
// }else{
//     console.log("largest num is",b);
// }

// 4. Even or Odd
// let a=335;

// if(a%2==0){
//     console.log("is even num",a);
   
// }else{
//     console.log("it is odd num",a);
// }

// 5. Factorial of a Number
// let a=5;
// let fact=1;
//  for(i=1;i<=a;i++){
//      fact=fact*i
//  }
//      console.log("fact is",fact);
    
 // 8. Sum of Digits

//  let a=27;
// let sum=0;
// let num;
//  while(a!=0){
//      num=a%10;
//      sum=sum+num;
//      a=Math.floor(a/10); //to ensure integer division
//  }
//      console.log("sum is ",sum);

//  9. Prime Number Check
// let a=parseInt(prompt("enter  a num : "));
// let flag=0;
// for(i=2;i<a;i++){
//    if(a%i==0){
//        flag=1;
//        break;
//    }
// }if(flag==0){
//    console.log("prime")
// }else{
//    console.log("not prime")
   
// }
    
 // 10. Fibonacci Sequence
// let c;
// let n=10
// let a=0;
// let b=1;
// for(i=1;i<n;i++){
//    c=a+b;
//    console.log(",",c);
//    a=b;
//    b=c;
// }

// 11. Swapping Two Numbers without 3rd var
// let a=5;
// let b=4;
// a=a+b
// b=a-b
// a=a-b
// console.log("a=",a  +"\nb=",b)

// 12. Swap Two Numbers Using Third Variable

// let a=10;
// let b=4;
// let c;
// c=a;
// a=b;
// b=c;
// console.log("a=",a  +"\nb=",b)

// 13. Leap Year Check
// let year=700
// if((year%4==0 && year%100!=0)||(year%400==0)){
//     console.log("leap");
    
// }else{
//     console.log("not leap")
// }


// 14. Simple Calculator

// let num1=4;
// let num2=2;
// let result;
// let opr=prompt("enter your opreator");
// if(opr=='+'){
//     result=num1+num2;
    
// }else if(opr=='-'){
//     result=num1-num2;
// }else if(opr=='*'){
//     result=num1*num2;
// }else if(opr=='/'){
//     result=num1/num2;}
//     console.log(result

// 15. Sum of Array Elements
// let arr=[1,2,3,4,5]
// let sum=0;
// for(i=0;i<arr.length;i++){
//     sum=sum+arr[i];
// }
// console.log(sum)

// Q=to calculate num of digits in any num
// let a=546746547
// let flag=0
// for(i=a;i>0;i=Math.floor(i/10)){
//     flag++
// }console.log(flag)

// Q=To print the prime number bet 2 num 1 to 100
// let flag=0;
// for(j=50;j<100;j++){
//     flag=0;
//     for(i=2;i<j;i++){
//         if(j%i==0){
//             flag=1;
//             break;
//         }
        
//     }
// if(flag==0){
//     console.log(j)
// }}
// Q=Armstrong Number
// let a=407
// let num,cube,arm=0;
// let ori=a;
// while(a>0){
//     num=a%10
//     cube=num*num*num
//     arm=arm+cube
//     a=Math.floor(a/10)
// }if(arm==ori){
//     console.log("armstrong num")
// }else{
//   console.log(" not armstrong num")   
// }


