function greet(name){
    return"Hello, "+ name +"!";
}
console.log(greet("Alice")); //Output:Hello, Alice!

//Hàm không có tham sô và không trả về giá trị
function sayHello(){
    console.log("Hello World!");
}
sayHello(); //Output:Hello, world!

//Hàm có tham số và rả về giá trị
function add(a,b){
    return a+b;
}
console.log(add(5,3));//Output:8