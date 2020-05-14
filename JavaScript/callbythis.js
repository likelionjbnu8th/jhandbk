function f( ) {
    console.log(this);
    console.log("f is called");
}

var o = {name: "object", method: f}; //함수 밖에서 o의 객체를 생성



f( );        //객체: window
o.method();  //객체: object

//함수에 this를 넣으면, 함수가 호출 될 때 어떤 객체로 부터 호출 됐는지 파악할 수 있다  