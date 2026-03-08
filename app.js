let a = 0;
let b = 1;

console.log("Fibonacci series between 0 and 50:");

while (a <= 50) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
}