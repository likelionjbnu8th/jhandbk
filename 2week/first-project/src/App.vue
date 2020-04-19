<template>

  <div>
    <h1>뷰에서는 App.vue가 Root components이지</h1>
    <p>오늘의 날씨는 {{weather}}입니다.</p>
      <hr>
    <button @click="changeweather">날씨업데이트</button>
    <div class='header'>
      <h1>전북대학교 음식 추천</h1>
      <h3 class='subtitle'>8기 운영진 스터디</h3>
    </div>

    <div class='main'>
      <All :choices='choices' @delete='deleteAChoice' />
      <Sug :choices='choices' />
      <!--데이터 옮기는 과정--><!--v-bind라는 과정을 :로 표현-->
    </div>
    

  </div>
  <!-- 꼭 div 태그로 감싸안어야 한다 -->
  <!-- div 태그로 감싸안지 않으면 어느 영역을 말하는 것인지 모른다 -->
 
</template>


<script>
  import All from './components/AllChoices'
  import Sug from './components/Suggestion'
  export default{
    data(){
      return{
        choices:[
          {name:'범기집',selected:true},
          {name:'후생관',selected:false},
          {name:'준혁이네',selected:false},
          {name:'종현이네',selected:false},
          {name:'현희네',selected:false},
        ],
        // boolean 타입을 누가 문자형 형태로 쓰니?
        weather: '비옴' 
      }
    },
    // reference type 이기에 꼭 return문을 사용해야 한다.
    // 근데 왜? reference type 이면 마치 주소 참조마냥 사용하는 것이라 
    methods:{
      changeweather(){
        this.weather='맑음'
      },
      deleteAChoice(payload){
            this.choices = this.choices.filter(choice => {
            return choice.name !== payload.name
          })
          // 운영진들이랑 payload에 대해 얘기해보기
      }
    },
    components:{
      All,
      Sug,
    }
  }
</script>

<style>
  .header{
    text-align: center;
  }
  .subtitle{
    color:red;
  }
</style>`