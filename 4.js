function f( ) {
    console.log(this);
    console.log("f is called");
}
function setName(name) { // 새 함수 추가
    this.name = name;    // this의 이름을 name으로 변경
}
// 객체 o를 만들고 setName 속성에 방금 정의한 함수를 지정
var o = {name: "object", method: f, setName: setName};
// 비슷한 객체 o2를 만들고 name 속성의 값은 비워 둠
var o2 = {name: "", setName: setName};

// console.log(o2.name);
o.setName("object1");  // 첫 번째 객체의 메서드 호출
o2.setName("object2"); // 두 번째 객체의 메서드 호출

console.log(o, o2);

//this는 객체에 대한 접근을 주는 것