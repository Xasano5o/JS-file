//  if elss ,  if true bo`lganda , else  flase bo`lganda ishleydi, elseif  true bo`lganda u xam ishlaydi

// var age =18
// if (age >= 18) {
// console.log( 'sssss');
// }
// else {age <= 0
// console.log('xsa' );}

// trunery 2 xolatni tekshiradi undan xam ko`b tekshirse bol`adi unda chalkashib ketadi

//  switich 3 ta xollatda tekshiradi 1chisi true xoladda  , 2 chisi false xolladda , 3chisi default xolatni
// 1 chisidan kegin break uzidan kegini tuxtadi break berilmasa uzindan kegin xam terminaldamn chiqarib yuboradi
// var num = 'true';

// switch ( num) {
//     case true :
//     {
//         console.log('true');
//         break
//     }
//     case false : {
//         console.log('false ');
//     }
//     break
// default : {console.log( 'nether');}

// while loop
// while ochishdan oldin varibil name berib tenglab olamz  oxirisida tuxtashligi uchun i++ berib qo`yamz
// while qachonki qavs ichidagi stekmind true bulsa ichidagi stekmind ishlaydi

//  var i =0 ;
//  while ( i < 5 ) {
//      console.log(i) ;
//     i = 5
//  }

// do whilr 1 chi variblega tengalab olamiz  qiymatni kegin do ichida { log } tagidan tuxtatish uchun i++ berib qo`yamz  oxurdan tepadan berib bo`lmaydi

// i=0

// do  { i++
//     console.log(i);
// }
// while(i<=199)

// for ( let i = 0 ; i<=10; i++ )
// {
//     console.log(i);
// }

// let i =0
// do {
// console.log(i);
// i++
// }
// while (i<=10)

// let i = 0

// while (i <= 10){
//     console.log(i);
//     i++

// var age =18
// if (age >= 18) {
// console.log( 'sssss');
// }
// else {age <= 0
// console.log('xs')

// 1- masala faqad tuqlardagi xarflar chiqishi kere

// var  one = 'ja4543883'
// console.log( one.match(/[0-9]/g).join(''));

//   var one = 'Aa122*'
//   console.log(  typeof one);

// let sum = 0;
// console.log(one.length);

// var str = "1112131415kkg";



// var number = 12131415;
// console.log(number.length);

// console.log(sum);

// sum = 0;
// for (let i = 0; i < str.length; i++) {
//       if (Number(str[i])) {
//             sum += parseInt(str[i]);
//           }
//         }
//         console.log(sum);
// // console.log(typeof "1");

// var str = "B1C2D3E4F5";
// var  sum = 0

// for (let i = 0; i < str.length; i++) {
// if (Number (str [i]))
// sum += parseInt  (str[i] )

// }
// console.log(sum);

// function text(str, type) {
//         var res = '';
//         if (type === 'odd') {
//             for (let i = 0; i < str.length; i = i + 2) {
//                 res += str[i];
//             }
//         }
//             if (type === "even") {
//                 for (let i = 1; i < str.length; i = i + 2) {
//                   res += str[i];
//              }
//         }

//         console.log(res);
//     }
//     text('xasanabdurazakov', 'odd');

// let id= Symbol('')
// let one = {
//     name : ' xasan '
//   , age: 20,
//   [id]:" bazi qiymat  "

// }

// console.log(sum);

// var phone ={
//     window: {one: 'nest'} ,
//     tepaqismi: 'kamera',
//     ichkiqismi: 'plata sxema'
//    , dasturiy:  'setting'
// }

//  console.log('dasturiy' in phone);
// masala

// function one (str) {
//     var res =''
//     for (let i = 0; i < str.length; i++) {
//        if (str[i].toUpperCase()===str[i]) {
//        res+=str[i].toLowerCase();
//     }
//     else {  res+= str[i] .toUpperCase()}

//     }
//     console.log(res);

// }

// one('xxAxfc')

// var one= {name: 'xasan',  students: [
//     {infinete: 9999 , name:  'xusan' ,  too: [{ hova: 'xasan'}] } ,
//     {infinete: 9999  , name:  'xusan'  },
//     {infinete: 9999 ,  name: 'xusan' ,     }

// ]  }
// Object.seal (one)

// one.name= 'boburjan'

// push ('xasan) oxurdan qo`shib beradi beradi qiymad
// pop () oxurdagi  berilgandagi lenght qiymatni ayrib beradi
// unshift() boshidan qo`shib beradi qiymad
// shift () boshidagi lenght qiymadni olib tashlab beradi

// var one =new Array('dhsjfdh' ,1243234)
// one.push('xasan') ;
// one.pop()
// one.unshift('xusan') ;
// one.shift()
// console.log( one[0]  ,one[1] );

// console.log(Array.from('hchshds')); string ichidagi ma`lumotni from orqali arreyga olib olsag bo`ladi
// console.log(   Array.of(36)); 1 ta qiymat bersag arreyga o`tqazib beradi

//  sort( ) oldiga eng kichik sonlarni oladi
// var one =[74748 ]
// console.log(one.sort());

//  sort fucrtion orqali xam(a,b) return a-b
// var one =[32, 3, ,4,64,3,74]
// console.log(one.sort( (a,b) => a-b ));

// some i oladi  varebilga bergan qiymatimizni ichida aylantiradi  i==='27' agr 27 bergan bulsag true qaytardi yuq bulsa false bu xammasini tekshiradi agr 1tasi tu`gri chiqsa b`oldi
// evrey i oladi varebilda bergan qiymatimizni tekshiradi agar xammasi tru bulsa chiqadi varebildagi bulmasa false chiqaradi

// var one =[12, 12, 34,76 ,13 , 'xasan']
// console.log( one.some( (i) => i===  'xasan'  )  );

// var one =[87,84 ,89 ,90 ,'dah']

// var filted =one.filter( (i)=>i===toString) && '';
// console.log(filted);

// filter for loop uxshaydi faqad qisqartirilgani
// flat child parentga chiqarib beradi yaxtitlab xam beradi parametrni nechtaligi yozamiz ko`b parametr bulsa infinte berib qo`yaz cheksiz marta

// var one =[72,47 ,[3] ,[74],48]
// console.log(one.flat(Infinity));

// var one =[ 757, 31,3,1,]

// var maped =one .map((value,index ,arrey)=>{
//     console.log(one);
// })

// map 3 ta  argumenti b`oladi value ,index ,arrey  map vazifasi arrey ichidagi ma`lumotlar yoyib chiqar berishlik

// var one =[8,6,7]

// console.log(one.reduce((prev, init)=>prev+init, 5));

// var one =[28,17,11,12,11,754,5,4]
// console.(passlog(one.sort());

// function one (str) {
//     var res =''
//     for (let i = 0; i < str.length; i++) {
//        if (str[i].toUpperCase()===str[i]) {
//        res+=str[i].toLowerCase();
//     }
//     else {  res+= str[i] .toUpperCase()}fi

// const arr = [
//   {
//     name: "ajsfdl",
//     age: 17,
//   },
//   {
//     name: "ewopgk",
//     age: 18,
//   },
//   {
//     name: "ajs45l",
//     age: 19,
//   },
// ];

// const test = arr.map((value, index, array) => value.name);

// console.log(test);
 
// var str ='xx112'

// sum=0PPPP
// for (let i = 0; i < str.length; i++) {
// if (Number (str [i]))
// sum += parseInt  (str[i] )

// }
// console.log(sum);





// function mergeSortdArray(a,b){
// 	for(var i=0;i<b.length;i++){
// 		a.push(b[i]);
// 	}
// 	//console.log(a);
// for(i=0;i<a.length;i++)
//     {
//         for(j=i+1;j<a.length;j++)
//         {
//             if(a[i]>a[j])
//             {
//                 temp=a[i];
//                 a[i]=a[j];
//                 a[j]=temp;
//             }
//         }
//     }
//     return a;
// }
// console.log(mergeSortedArray([1,2,3,5,9],[4,6,7,8]));

// var str = "B1C2D3E4F5";
// var  sum = 0

// for (let i = 0; i < str.length; i++) {
// if (parseInt (str [i]))
// sum += parseInt  (str[i] )

// }
// console.log(sum);

// var one =[1,2,3,4,5,6,7,8,]
// console.log(one.splice(2,4,"x"));
var one ='673674887'

console.log(eval(one));