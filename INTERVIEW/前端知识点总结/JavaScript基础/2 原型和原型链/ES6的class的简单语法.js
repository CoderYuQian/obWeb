//父类
class People {
  constructor(name) {
    this.name = name
  }
  eat() {
    console.log(`${this.name} eat something`)
  }
}

// 子类
class Student extends People {
  constructor(name, number) {
    super(name)//super的作用是将参数交给父类去初始化
    this.number = number
  }
  say() {
    console.log(`${this.name}说自己的学号是${this.number}`)
  }
}

const stu1 = new Student('jack', 123456)
console.log(stu1.name)
console.log(stu1.number)
stu1.eat()
stu1.say()
