/************\
 * Products *
\************/

// Parent class
export abstract class Product {
  name: string; 
  enrollment: string;

  constructor(name: string, enrollment: string) {
    this.name = name;
    this.enrollment = enrollment;
  }

  abstract operation(): string;

  abstract info(): string;
}

// Student class
export class Student extends Product {
  career: string;
  grade: number;
  group: string;

  constructor(name: string, enrollment: string, career: string, 
    grade: number, group: string) {
    super(name, enrollment);
    this.career = career;
    this.grade = grade;
    this.group = group;
  }

  operation() {
    return "Study";
  }

  info() {
    return `Student: ${this.name} - ${this.enrollment}`;
  }
}

// Admin class
export class Admin extends Product {
  area: string;
  job: string;
  
  constructor(name: string, enrollment: string, 
    area: string, job: string) {
    super(name, enrollment);
    this.area = area;
    this.job = job;
  }

  operation() {
    return 'Work';
  }

  info() {
    return `Admin: ${this.name} - ${this.enrollment}`;
  }
}
