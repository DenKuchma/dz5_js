// function Animal(name, age, color){
//     if(new.target) {
//         this.name = name;
//         this.age = age;
//         this.color = color;
//         return this;
//     } else {
//         return new Animal(name, age, color)
//     }
// }
// const rabbit = Animal('Stive', '3', 'white');
// console.log(rabbit)




// function Calculator(){
//     this.read = function(){
//         this.number1 = Number(prompt('First number'));
//         this.number2 = Number(prompt('Second number'));
//     }
//     this.setAction = function(){
//         while(true){
//             this.action = prompt('Choose your action :(+ , - , / , * )');
//             if(this.action == '+' || this.action == '-' || this.action == '/' || this.action == '*') break
//         }
//     }
//     this.doAction = function(){
//         if(this.action == '+'){
//             return this.sum();
//         } else if (this.action == '-') {
//             return this.subtr();
//         } else if (this.action == '/') {
//             return this.div()
//         } else if (this.action == '*') {
//             return this.mult()
//         }   
//     }
//     this.sum = function() {
//         return this.number1 + this.number2
//     }
//     this.subtr = function() {
//         return this.number1 - this.number2
//     }
//     this.div = function(){
//         return this.number1 / this.number2
//     }
//     this.mult = function() {
//         return this.number1 * this.number2
//     }

// }   
// const calculator = new Calculator();
// calculator.read();
// calculator.setAction();
// const res = calculator.doAction();
// console.log(res)




// function Nums(...args){
//     this.arg = args;
//     this.getSum = function(){
//         let arr = this.arg.reduce(function(sum, elem){
//             if(Number.isInteger(elem)){
//                 return sum + elem;
//             }
//             return sum;
//         }, 0);
//         return arr;
//     }
//     this.myFilterReverse = function(){
//         var newArr = [];
//         this.arg.forEach(element => {
//             if(Number.isInteger(element)){
//                 newArr.unshift(element)
//             }
//         });
//         return newArr
//     }
// }

// const newNums = new Nums(1, -2, 4.3, 12, 0, 3.4, -4, 6);
// let Sum = newNums.getSum()
// console.log(Sum)
// let Filter = newNums.myFilterReverse()
// console.log(Filter)



// Array.prototype.getUnique = function() {
//     return this.reduce((result, element) => {
//         if (result.includes(element)==false){
//             result.push(element)
//         }
//         return result
//     }, [])
// }
// const arr = [1, 1, 2, 2, 3];
// const newArr = arr.getUnique();
// console.log(newArr)



// function removeUser(arr, index) {
//     arr.splice(index, 1)
// }
// const arr = ['Vasya', 'Petya', 'Alexey']
// removeUser(arr, 2)
// console.log(arr)




// let parentDiv = document.getElementById('parent')
// parentDiv.style.position = 'relative'
// let childDiv1 = document.createElement('div')
// childDiv1.id = 'Child'
// childDiv1.style.position = 'absolute'
// childDiv1.style.width = '100px'
// childDiv1.style.height = '100px'
// childDiv1.style.backgroundColor = 'red'
// childDiv1.style.display = 'inline-block'
// childDiv1.style.marginLeft = '50px'
// childDiv1.style.marginTop = '50px'
// let childDiv2 = document.createElement('div')
// childDiv2.id = 'Child2'
// childDiv2.style.position = 'absolute'
// childDiv2.style.width = '100px'
// childDiv2.style.height = '100px'
// childDiv2.style.backgroundColor = 'blue'
// childDiv2.style.zIndex = 1
// childDiv2.style.display = 'inline-block'
// childDiv2.style.marginLeft = '100px'
// childDiv2.style.marginTop = '100px'
// let childDiv3 = document.createElement('div')
// childDiv3.id = 'Child3'
// childDiv1.style.position = 'absolute'
// childDiv3.style.width = '100px'
// childDiv3.style.height = '100px'
// childDiv3.style.backgroundColor = 'green'
// childDiv3.style.display = 'inline-block'
// childDiv3.style.marginLeft = '150px'
// childDiv3.style.marginTop = '150px'
// parentDiv.append(childDiv1, childDiv2, childDiv3)





// let holder = document.querySelector('div.holder')
// holder.style.display = 'flex'
// holder.style.flexWrap = 'wrap'
// holder.style.width = '600px'
// holder.style.height = '200px'
// holder.style.textAlign = 'center'
// holder.style.overflow = 'hidden'
// holder.style.border = '2px solid'
// holder.style.borderRadius = '20px 20px 0px 0px'
// var d1 = document.createElement('div');
// d1.innerHTML = 1;
// var d2 = document.createElement('div');
// d2.innerHTML = 2;
// var d3 = document.createElement('div');
// d3.innerHTML = 3;
// var d4 = document.createElement('div');
// d4.innerHTML = 4;
// var d5 = document.createElement('div');
// d5.innerHTML = 5;
// holder.appendChild(d1);
// holder.appendChild(d2)
// holder.appendChild(d3)
// holder.appendChild(d4)
// holder.appendChild(d5)
// d1.style.backgroundColor = 'red'
// d1.style.width = '50%'
// d1.style.order = '1'
// d2.style.backgroundColor = 'blue'
// d2.style.width = '30%'
// d2.style.order = '4'
// d3.style.backgroundColor = 'violet'
// d3.style.width = '35%'
// d3.style.order = '3'
// d4.style.backgroundColor = 'green'
// d4.style.width = '35%'
// d4.style.order = '5'
// d5.style.backgroundColor = 'orange'
// d5.style.width = '50%'
// d5.style.order = '2'



// function sampleFunc () {
//     console.log ( `${arguments.callee.name}: ${arguments[0]} | ${arguments[1]}` )
// }
// function modificator ( func ) {
//         func('text', 'sample')
// }
// const testFunc = modificator( sampleFunc )
// testFunc();


// let animals = [ 
//     { name: 'Vasya', type: 'Cat', age: 4},
//     { name: 'Murka', type: 'Cat', age: 1.5 },
//     { name: 'Varna', type: 'Turtle', age: 21 },
//     { name: 'Kesha', type: 'Parrot', age: 3 },
//     { name: 'Nayda', type: 'Dog', age: 2.5 },
//     { name: 'Pufic', type: 'Humster', age: 2.5 },
//     { name: 'Randy', type: 'dog', age: 12 },
// ];
// document.write('<ol start="0">');
// animals.forEach( animal => {
//   document.write(`<li>${animal.type} <span style="color: #1a55cc">${animal.name}</span> 
//            is ${animal.age} years old.</li>`);
// });
// document.write('<ol>');

// let group = [{
//     name:'Vasya',
//     lastName:'Vladov',
//     age:'34',
// },
// {
//     name:'Vlad',
//     lastName:'Vovov',
//     age:'21',
// },
// {
//     name:'Vova',
//     lastName:'Vasyiev',
//     age:'22',
// }];
// let groups = group.map(function(x) { return new Students(x.name, x.lastName, x.age) });
// function Students(name, lastName, age, ) {
//     this.name = name,
//     this.lastName = lastName,
//     this.age = age,
//     this.toString = function () {
//         return `Name - ${this.name}, Last Name - ${this.lastName}, age - ${this.age}.`
//     }
// }
// function getStudentsList (arrayOfStudents) {
//     arrayOfStudents.forEach(element => {
//         console.log(String(element))
//     });
// }
// getStudentsList(groups)






// let p = document.createElement('p');
// let img = document.createElement('img')
// img.src = 'https://www.biletik.aero/upload/iblock/d72/d72f4b56c4b90f5150fa3ce507f11886.jpg'
// p.innerText = 'Click \n'
// function Click () {
//     p.append(img)
//     img.style.width = '100px';
//     img.style.height = '100px';
// }
// p.onclick = Click

// img.style.transitionDuration = '3s';
// img.onmouseover = function() {
//     img.style.width = '200px'
//     img.style.height = '200px'
// }

// document.body.append(p);
// img.onclick = function () {
//     event.stopPropagation();
//     img.remove();
// }





// let arr = [1, 2, 3, 0, 4, 5, 6];
// function sum(arr1) {
//     o = 1
//     result = 0
//     while (arr1[arr1.length - o] != 0) {
//         result += arr1[arr1.length - o]
//         o += 1
//     }
//     return result
// }
// console.log(sum(arr))




// let arr2 = [1, 2, 8, 0, 0, 1, 11];
// function counts(arr3) {
//     result = 0
//     count = 0
//     while (result < 10) {
//         result += arr3[count]
//         count += 1
//     }
//     return count
// }
// console.log(counts(arr2))




// let input = document.getElementById('input')
// let button = document.getElementById('button')

// button.onclick = function () {
//     console.log(input.value)
// }




// let links = document.getElementsByTagName('a')

// for (let link of links) {
//     link.addEventListener('mouseover', function() {
//         link.innerText += `(${link.href})`
//     })
// }



// let button2 = document.getElementById('button2')
// button2.onclick = function () {
//     button2.remove()
// }


// let input0 = document.getElementById('input0');
// let button0 = document.getElementById('button0');
// let circle = document.getElementById('circle')
// circle.style.transitionDuration = '0.5s';
// circle.style.transitionProperty = 'margin-left'
// button0.onclick = function () {
//     move = parseInt(window.getComputedStyle(circle).marginLeft.slice(0, -2))
//     if(Number.isInteger(parseInt(input0.value))){
//         if (move + parseInt(input0.value) <= 600 && move + parseInt(input0.value) >= 0) {
//             circle.style.marginLeft = `${move + parseInt(input0.value)}px`
//         } else {
//             input0.value = `Noo:), 600px max lenght`
//         }
//     } else {
//         input0.value = ''
//     }
// }