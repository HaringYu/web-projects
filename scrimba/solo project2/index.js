// 定义生成器
const generator = document.getElementById("generator")
// 定义显示密码的区域
const passwordHolder = document.getElementsByTagName("input")
// 将密码存入array
let password = []

// 生成随机密码
const getRandomString = () => { 
  return (randomString = Math.random().toString(36).slice(-8))
}
// 将随机密码存入数组 
const generatePassword = () => { 
  for (let i = 0; i < passwordHolder.length; i++) { 
    password.push(getRandomString())
  } 
}
// 把password当作变量传入函数 
const showPassword = passwords => {
    passwords.forEach((onePassword, index) => { 
                       //callback
        passwordHolder[index].setAttribute("value", password[index])
    })                      //              name      value
}
/*
showPassword = function(passwords) // 1. 这个passwords是哪来的？直接上一个参数吗，后面都不用了？
array.forEach(callback(currentValue))
callback函数: function(onePassword, index) // 2. onePassword也是一个参数吗,index是第二个参数，是这个意思吗
*/

 // 再次生成前把密码清空 
generator.addEventListener("click", function(){
    password = [] // 3. 为啥要再一遍呀，这样这个数列就重新从null开始往里填了是吗
    showPassword(password) // 4. 这里的作用是？
    generatePassword()
    showPassword(password) 
})
