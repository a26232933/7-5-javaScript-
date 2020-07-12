console.log("我是 JS!!!");

// DOM 文件物件模式
// 文件.透過 ID 搜尋元素("ID 名稱").插入 HTML = "文字訊息";
document.getElementById("box1").innerHTML = "哈囉~";

// 變數 variable
// 用於儲存資料
// 資料類型
var a = 10;         // 整數
var b = 1.5;        // 浮點數
var c = "文字";     // 字串
var d = true;       // 布林值 true 是、false 否

console.log(a);

// 運算子
// 數學 加減乘除餘 + - * / %

// 程式內的 = 指定符號
// = 右邊先執行再指定給左邊
a = a % 3;

console.log(a);

// HTML 5，CSS 3，JS ES6
// ++ 遞增1 -- 遞減1
var e = 7;
e++;
console.log(e);

// ES6 指數符號 **
var f = 5;
f = f**3;
console.log(f);

// 指定運算子，適用於 + - * / % **
var num1 = 10;
// num1 = num1 + 5;
num1 **= 5;
console.log("指定運算子：" + num1);

// 自訂函式(方法) function、method
// 語法：
// 函式 函式名稱(參數1，參數2，...) { 程式內容 }
function functionA(){
    console.log("我是函式 A");
}

// 需要呼叫才會執行
functionA();
functionA();

function addTen(number){

    number += 10;

    console.log("加十：" + number);
}

addTen(7);
addTen(100);

function mul(a, b){
    console.log("數字相乘的結果：" + (a * b));
}

mul(999, 7);

// 物件 { 物件資料名稱：物件資料值 }
var car = {
    brand: "BWM",
    cc: 2000,
    color: "gold",
    
    drive: function() {
        console.log("開車中...");
    }
}

console.log("汽車的牌子：" + car.brand);

car.drive();

// 練習事件
var box2 = document.getElementById("box2");

box2.onclick = () => {
    console.log("點擊!");
}

box2.onmouseenter = () => {
    console.log("滑入!");
}

box2.onmouseleave = () => {
    console.log("滑出!");
}

// 陣列 Array

var numberA = 10;
var numberB = 100;
var numberC = 40;

var numberObject = {
    A: 10,
    B: 100,
    C: 40
}

// 陣列資料
var numbers = [10, 100, 40, 9];

console.log("陣列第三筆資料：" + numbers[2]);

numbers[0] = 999;

console.log("陣列第一筆資料：" + numbers[0]);

console.log("陣列的數量：" + numbers.length);

// 比較運算子 > < >= <= == !=
var testA = 100;
var testB = 50;

console.log(testA != testB);

// == 與 === 的差異
var testC = 7;
var testD = "7";

console.log("== 的結果：" + (testC == testD));   // 比較值
console.log("=== 的結果：" + (testC === testD)); // 比較值與類型

// 邏輯運算子
var testE = true;

console.log("顛倒：" + !testE);

// 並且 &&
// 只要有一個 false 結果就是 false
console.log(true && true);          // t
console.log(true && false);         // f
console.log(false && true);         // f
console.log(false && false);        // f

// 或者 ||
// 只要有一個 true 結果就是 true
console.log(true || true);          // t
console.log(true || false);         // t
console.log(false || true);         // t
console.log(false || false);        // f

// 判斷式 IF
//  語法 Syntax
// if(布林值) { 當布林值為true會執行 }
if(true){
    console.log("我是判斷式");
}

// else 否則
// if(布林值){ 當布林值為false會執行 }
// else { 當布林值為 false 會執行 }

var boolTest = false;

if (boolTest) {
    console.log("布林值為 true!");
} else {
    console.log("布林值為 false!");
}

// 如果分數>=60 :及格
// 如果分數<=60 :補考
// 如果分數<=40 :被當
var score = document.getElementById("score");
var result = document.getElementById("result");

score.onchange=() =>{
    var s = parseInt(score.value);//文字轉整數

    if(s >=60){
        result.innerText="分數"+ s + "-及格";
    }
    if(s <=60){
        result.innerText="分數"+ s + "-補考";
    }
    if(s <=40){
        result.innerText="分數"+ s + "-被當";
    }
    
}

// 迴圈 for
// 語法
// for (初始值; 條件-布林值; 迭代器-迴圈結束會執行的區塊) {}

// 初始值：迴圈開始的值
// 條　件：迴圈會執行的條件 - 當條件為 true 執行，false 結束迴圈
// 迭代器：初始值處理 - 遞增 ++

for (let i = 0; i < 100; i++) {
    console.log("迴圈：" + i);
}

// 陣列
var products = ["冰美式", "卡布奇諾", "摩卡"];

// products.length 陣列.長度(數量) 3

for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
}

// 透過類別取得複數元素 - 結果為陣列
var ps = document.getElementsByClassName("product");

console.log(ps);

for (let i = 0; i < ps.length; i++) {
    ps[i].innerText = products[i];
}

/// 常數 const constant
// 不能變更
const pi = 3.14159;

// pi = 4.123456;
// pi = pi + 10;

// let 與 var 差異
// let 在同樣的區塊內不能重複 - 安全
// 只在區塊內有效

var countA = 10;
var countA = 7;
// let countA = 5; // 重複瀏覽器顯示錯誤

{
    let countA = 5;
    console.log(countA);
}

console.log(countA);

var countB = 99;

{
    var countB= 77;
}

console.log(countB);

let countC = 99;

{
    let countC = 77;
}

console.log(countC);