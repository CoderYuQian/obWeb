/**
 * 深拷贝
 */

const obj1 = {
  name: "小明",
  age: 18,
  address: {
    city: "北京"
  },
  hobby: ["唱", "跳", "rap"]
}

const obj2 = deepClone(obj1)
obj2.address.city = "上海"
console.log(obj1)

function deepClone(obj = {}) {
  // 判断obj是null，或者不是对象或数组，直接返回
  if (typeof obj !== "object" || typeof obj == null) {
    return obj
  }
  // 初始化返回结果
  let result
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }

  for (let key in obj) {
    // 保证key不是原型的属性
    if (obj.hasOwnProperty(key)) {
      // 递归调用
      result[key] = deepClone(obj[key])
    }
  }

  // 返回结果
  return result
}