// import using require

// declare class


// export class using module.exports
const Shape =require("./shape")

// declare class
class Circle extends Shape{
  super(radius){
    this.radius= radius;
  }

     calculateArea(){
    console.log('Area');
     }
  }
    
// export class using module.exports
  module.exports = Circle;
