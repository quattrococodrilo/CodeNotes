/*******************\
 * Creators clases *
\*******************/

import {Product, Student, Admin} from "./Products"


// Interfaces
// ------------------------------------------------------------

export interface configObj {
  name: string;
  enrollment: string;
  career?: string;
  grade?: number;
  group?: string;
  job?: string;
  area?: string;
}

// Classes
// ------------------------------------------------------------
export abstract class Creator {

  public abstract factoryMethod(config: configObj): Product;

  public someOperation(): string {
    return 'This a creation!'
  }

} 

export class StudentsCreator extends Creator {
  
  factoryMethod(config: configObj) {
    const { name, enrollment, career, grade, group } = config;
    return new Student(name, enrollment, career, grade, group);
  }

}

export class AdminCreator extends Creator {
  
  factoryMethod(config:configObj) {
    const { name, enrollment, job, area } = config;
    return new Admin(name, enrollment, area, job);
  }

}
