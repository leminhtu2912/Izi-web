  // Module: main.js
  import Student from './student.js';
  import { COURSE_NAME } from './course.js';
  
  const student1 = new Student('Ngô Quang Trường', '51648', '21', '0386974705', 'Thanh Khê, Đà Nẵng');
  student1.displayInfo();
  console.log(`Course: ${COURSE_NAME}`);