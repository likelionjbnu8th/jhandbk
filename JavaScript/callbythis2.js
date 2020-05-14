function f( ) {
    console.log(this);
    console.log("f is called");
}
function setName(name) { 
    this.name = name;                                   // this의 이름을 입력받은 name으로 변경
}

var o = {name: "object", method: f, setName: setName};  // 객체 o를 만들고 setName 속성에 방금 정의한 함수를 지정
var o2 = {name: "", setName: setName};                  // 비슷한 객체 o2를 만들고 name 속성의 값은 비워 둠

o.setName("object1");                                   // 객체 o의 이름 바꾸기 메서드 호출
o2.setName("object2");                                  // 객체 o2의 이름 바꾸기 메서드 호출

console.log(o);                                         // 객체: object1
console.log(o2);                                        // 객체: object2