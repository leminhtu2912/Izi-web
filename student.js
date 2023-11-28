// Module: student.js
class Student {
    constructor(name, id, age, phone, address) {
      this.name = name;
      this.id = id;
      this.age = age;
      this.phone = phone;
      this.address = address;
      }
    displayInfo() {
      console.log(`Student: ${this.name}, ID: ${this.id}, Age${this.age}, Phone${this.phone}, Address${this.address}`);
    }
  }
  
  export default Student;
  
