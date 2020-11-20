/**********\
 * Client *
\**********/

import { configObj, AdminCreator, StudentsCreator } from "./Creators"

const productTypes = {
  'student': StudentsCreator,
  'admin': AdminCreator,
}

const client = (productType: string, config: configObj) => {
  const creator = productTypes[productType];
  return new creator().factoryMethod(config);
}

// Tests
// ------------------------------------------------------------

const a = client("admin", {
  name: "Fernando Cruz",
  enrollment: "1313",
  area: "SIT",
  job: "Chief",
})

console.log(a.info())

const s = client("student", {
  name: "Jaime Camil",
  enrollment: "486453",
  career: "IMA",
  grade: 6,
  group: "G",
})

console.log(s.info())
