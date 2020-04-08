function shadowing_example( ){
    var val = 5;            // 변수 val을 5로 초기화
    console.log("F", val);  // F, 5 출력
    val++;                  // val = 6
}

var val = 0;                // val = 0
shadowing_example( );       // line3의 출력값 - F, 5
console.log("O", val);      // val 은 line7의 값 - O, 0

/* 
같은 이름인 val 변수를 사용했지만 
함수 밖의 변수 val는 line7,8,9에만 영향을 끼치고
함수 안의 변수 val은 line1,2,3,4,5에 영향을 끼친다
*/