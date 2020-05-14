function f( ) {
    console.log("f is called");
}

var o = {name: "object", method: f}; //함수 밖에서 o의 객체를 생성



f( );        //함수 직접 호출
o.method();  //객체 o의 속성에 들어간 f함수 호출