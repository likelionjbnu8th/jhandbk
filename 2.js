function se(){
    var val=0;
    console.log("F",val);
    val++;
    return val;
}

var val=0;
se();
console.log("무엇일까요?", val)

// function shadowing_example( ) {
//     console.log("F", val); // 함수 안에서 변수 val의 값 출력 ➊
//     val++;                 // val 값을 1 증가
// }

// var val = 0;               // 함수의 바깥에서는 변수 val을 선언하고 0으로 초기화
// shadowing_example( );      // 함수 호출
// console.log("O", val);     // 가장 바깥에서 변수 val의 값 출력