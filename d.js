// 1
 // let input = document.querySelector("#elem") 
 // let p = document.querySelector("p") 
 // elem.addEventListener("blur",func) 
 // function func(){ 
 // p.textContent = elem.value 
 // } 
 // 2 
 // document.querySelector('.btn').onclick = () => { 
 //     const a1 = document.querySelector('#a1'); 
 //     const a2 = document.querySelector('#a2'); 
 //     const a3 = document.querySelector('#a3'); 
 //     const sum = +a1.value + +a2.value + +a3.value 
 //     document.querySelector('.result').innerHTML = sum; 
 //   } 
 
 // 3 
 // let u3 = document.querySelector(".u3") 
 // n3.addEventListener("blur",func) 
 // function func(){ 
 //     let a = 0 
 //     let b = n3.value; 
 //     let arr = []; 
 //     arr.push(b); 
 //     arr = b.split(""); 
 //     for(let i = 0; i<arr.length; i++){ 
 //      a += +arr[i] 
 // } 
 //     n3.value = a 
 // } 
 
 // 4 
 // let m4 = document.querySelector(".m4") 
 // m4.addEventListener("blur",func) 
 // function func(){ 
 //     let a = 0 
 //     let b =n4.value; 
 //     let arr = []; 
 //     arr.push(b); 
 //     arr = b.split(","); 
 //     for(let i = 0; i<arr.length; i++){ 
 //      a += +arr[i] 
 //      b = a / arr.length   
 // } 
 //     m4.value = b  
 // } 
 
 // 5 
 //let c5 = document.querySelector(".c5") 
 // let c51 = document.querySelector(".c51") 
 // let c52 = document.querySelector(".c52") 
 // let c53 = document.querySelector(".c53") 
 // c5.addEventListener("blur",func) 
 // function func(){ 
 //     let a = c5.value; 
 //     let arr = []; 
 //     arr.push(a); 
 //     arr = a.split(" "); 
 //     c51.value = arr[0] 
 //     c52.value = arr[1] 
 //     c53.value = arr[2] 
 // } 
 
 //  6 
 // let n6 = document.querySelector(".n6") 
 // n6.addEventListener("blur",func) 
 // function func(){ 
 //     let a = n6.value 
 //     let arr = [] 
 //     arr.push(a) 
 //     arr = a.split(" ") 
 //    for(let i = 0; i<arr.length; i++){ 
 //     arr[i] = arr[i].slice(0,1).toUpperCase() + arr[i].slice(1) 
 // } 
 //     n6.value = arr.join(" ") 
 // } 
 
 // 7 
 // let n7 = document.querySelector("#n7") 
 // n7.addEventListener("blur",func) 
 // function func(){ 
 //         let        str = document.getElementById("n7"); 
 //         let        p = document.getElementById("p7"); 
 // let arr = str.value.split(' '); 
 //         p.innerHTML = 'slov v traktate  = '+arr.length; 
 // } 
 
 // 8 
 // let n8 = document.querySelector(".n8") 
 // n8.addEventListener("blur",func) 
 // function func(){ 
 //    let a = 0 
 //    let b = n8.value 
 //    let arr = [] 
 //    arr.push(b) 
 //    arr = b.split(".") 
 //    n8.value = arr.reverse().join("-") + "." 
 // } 
 // }; 
 
 // 9 
 // let n9 = document.querySelector(".n9") 
 // let button = document.querySelector(".btn") 
 // button.addEventListener("click",func) 
 // function func(){ 
 //    let b = n9.value 
 //    let arr1 = [] 
 //    arr1.push(b) 
 //    arr1 = b.split("") 
 //    let arr2 = [] 
 //    arr2.push(b) 
 //    arr2 = b.split("") 
 //    arr2 = arr2.reverse() 
 //    if(arr1[0] == arr2[0]){ 
 //       n9.value = 'Ошибка:Успех!' 
 //    } 
 //    else{ 
 //       n9.value = 'no' 
 //    } 
 // console.log(arr1,arr2) 
 // } 
 
 // 10 
 // let n10 = document.querySelector(".n10") 
 // n10.addEventListener("blur",func) 
 // function func(){ 
 //    let b = n10.value 
 //    let arr = [] 
 //    arr.push(b) 
 //    arr = b.split("") 
 //    for(let i = 0; i<arr.length;i++){ 
 //    if(3 == arr[i]){ 
 //       n10.value = '3 imeet tebya' 
 //    } 
 //    else{ 
 //       n10.value = 'nety 3 (' 
 //    } 
 // } 
 // console.log(arr) 
 // } 
 
 // 11 
 // let divan = document.querySelector(".divan") 
 // divan.addEventListener("mouseOver", func) 
 //    function func(){
//       divan.textContent = divan.textContent + "("+ divan.href +")" 
 // } 
 // let a = document.querySelectorAll("a")

 // 12 
//  func()
// function func(){
//    for (let i = 0; i < a.length; i++)
//    if(a[i].href.indexOf("http://") == 0){
//       a[i].textContent = a[i].textContent + '&rarr;' + a[i].href
//    }
//    else{
//       a[i].textContent = a[i].textContent + a[i].href
//    } 
// }
 
// 13 
 // let a = document.querySelectorAll("a") 
 // func() 
 //    function func(){ 
 //       for (let i = 0; i < a.length; i++) 
 //       if(a[i].href.indexOf("http://") == 0){ 
 //          a[i].innerHTML = a[i].innerHTML + '&rarr;' + a[i].href 
 //       } 
 //       else{ 
 //          a[i].innerHTML = a[i].innerHTML + a[i].href 
 //       }  
 // } 
 
 // 14 
 // let drive = document.querySelector('.drive') 
 // let drive1 = document.querySelector('.drive1') 
 // let drive2 = document.querySelector('.drive2') 
 // drive.addEventListener('click',func1) 
 // drive1.addEventListener('click',func2) 
 // drive2.addEventListener('click',func3) 
 // function func1(){ 
 //   drive.textContent = drive.textContent ** 2; 
    
 // } 
 // function func2(){ 
 //   drive1.textContent = drive1.textContent ** 2; 
   
 // } 
 // function func3(){ 
 //   drive2.textContent = drive2.textContent ** 2; 
   
 // } 
 
 // 15 
 // let n15 = document.querySelector(".n15") 
 // n15.addEventListener("blur", func) 
 // function func(){ 
 //   let dayWeak = ['вс', 'пн', 'вт', 'cр', 'чт', 'пт', 'c6']; 
 //   let str = n15.value; 
 //  let arr = str.split('.'); 
 //  let arr2 = arr.reverse(); 
 //  let str1 = arr2.join(',') 
 //  let date = new Date(str1); 
 //  let day = date.getDay(); 
 //  let p = document.getElementById('text'); 
 //  p.innerHTML = dayWeak[day]; 
 // } 
 
 // // 16 
 // let nn = document.querySelector(".nn") 
 // let button = document.querySelector(".btn") 
 // let button1 = document.querySelector(".btn1") 
 // button.addEventListener("click", func1) 
 // button1.addEventListener("click", func2) 
 // function func1(){ 
 //    n16.value++ 
 // } 
 // function func2(){ 
 //    let a = nn.value 
 //    if(a > 0){ 
 //       nn.value-- 
 //    } 
 // } 
 
 // 17 
 // let n17 = document.querySelector("#n17") 
 // let p1 = document.querySelector("#p1") 
 // let p2 = document.querySelector("#p2") 
 // let p3 = document.querySelector("#p3") 
 // p1.addEventListener("click", func1) 
 // p2.addEventListener("click", func2) 
 // p3.addEventListener("click", func3) 
 // function func1(){ 
 //    n17.value = +n17.value + 1 
 // } 
 // function func2(){ 
 //     n17.value = +n17.value + 1 
 //  } 
 //  function func3(){ 
 //     n17.value = +n17.value + 1 
 //  } 
 
 // 18 
 // let elem = document.querySelectorAll("div") 
 // let button = document.querySelector(".btn") 
 // button.addEventListener('click',func) 
 // function func(){ 
 //    for(let i = 0; i < elem.length ;i++){ 
 //    elem[i].textContent = elem[i].textContent.slice(0,10) + "..." 
 //    } 
 // } 
 // } 
 
 // 19 
 // let n19 = document.querySelector("#n19") 
 // n19.addEventListener("blur",func) 
 // function func(){ 
 //   let a = +n19.value 
 //   if( a > 1  && a < 101){ 
 //    n19.style.color = 'green' 
 //   } 
 //   else{ 
 //    n19.style.color = 'red' 
 //   } 
 // }

 //   20
//  // let elem = document.querySelector("#elem")
// let button = document.querySelector("#button")
// button.addEventListener("click",func)
// function func(){
//   let a = ""
//   let b = "awodkaosk092u83urij9u8he8734tvbdushbzIug87f1r209i9jfgae987rq3vbouphgvbpia;scnjUVBYUdf  [[[pnfa iub"
//   for(let i = 0; i<8; i++){
//     a += b.charAt(Math.floor(Math.random() * b.length))
//   }
//   elem.value = a
// }
 
//21
// let n21 = document.querySelector("#n21") 
 // let button = document.querySelector(".btn") 
 // button.addEventListener("click",func) 
 // function func(){ 
 //   let a = "" 
 //   let b = n21.value 
 //   for(let i = 0; i<b.length; i++){ 
 //     a += b.charAt(Math.floor(Math.random() * b.length)) 
 //   } 
 //   n21.value = a 
 // } 
 
 // 22 
 // let n22 = document.querySelector("#n22") 
 // let n222 = document.querySelector("#n222") 
 // let button = document.querySelector(".btn") 
 // button.addEventListener("click",func) 
 // function func(){ 
 //   n222.textContent = 5/9 * (n22.value - 32) 
 // } 
 
 // 23 
 // let n23 = document.querySelector("#n23") 
 // let n223 = document.querySelector("#n223") 
 // let button = document.querySelector(".btn") 
 // button.addEventListener("click",func) 
 // function func() { 
 //     let a = n23.value 
 //     for (let i = a - 1; i >= 1; i--) { 
 //       a= a * i;  
 //     } 
 //     n223.textContent = a 
 //   }
//  24
//  let elem1 = document.querySelector("#elem1")
// let elem2 = document.querySelector("#elem2")
// let elem3 = document.querySelector("#elem3")
// let p = document.querySelector("#p")
// let button = document.querySelector("#button")
// button.addEventListener("click",func)
// function func(){
//  p.textContent = String(Math.sqrt(elem1.value)) +" "+ String(Math.sqrt(elem2.value))+" " + String(Math.sqrt(elem3.value))

// } 