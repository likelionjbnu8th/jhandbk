function makeCounterFunction(initVal) {
    var count = initVal;
    function Increase( ) {
        count++;
        console.log(count);
    }
    return Increase;
}

var counter1 = makeCounterFunction(0);
var counter2 = makeCounterFunction(10);

counter1( );
counter2( );

/* 
makeCounterFunction은 Increase만을 return해서 count에 직접 접근할 수 없다.
그렇기 때문에 같은 count 변수를 쓰지만 다른 변수값을 지정할 수 있다.
makeCounterFunction을 호출할 때마다 새로운 환경이 만들어지는 셈이다.
*/