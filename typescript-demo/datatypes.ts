let swapn:[number,number];

function swapnum(num1:number,num2:any):[number,any]{
  return [num2,num1]
}

swapn=swapnum(10,"hello");

console.log(swapn);