/**
 *  工厂模式创建对象
 * @param name
 * @param age
 * @param job
 * @returns {Object}
 */
function createPerson(name, age, job) {
  var obj = new Object()
  obj.name = name
  obj.age = age
  obj.job = job
  obj.sayName = function () {
    console.log('Hi I am', this.name);
  }
  return obj
}

let person1 = createPerson('Gene', 15, '软件开发工程师')
let person2 = createPerson('YY', 25, 'teacher')
console.log(person1, person2);
person1.sayName()
person2.sayName()
