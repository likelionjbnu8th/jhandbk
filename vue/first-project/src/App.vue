<template>
  <div>
    <!-- 꼭 / 로 닫아야한다 -->
    <cmp-weather />
    <cmp-weather />
  </div>
</template>

<script>
// .vue 파일 내에서 확장자 않써도 인식함
import Weather from "./components/Weather";
export default {
  components: {
    "cmp-weather": Weather
  }
};
</script>

<style></style>
