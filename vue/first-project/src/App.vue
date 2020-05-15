<template>
  <div>
    <p>오늘의 날씨는 {{ weather }}입니다</p>
    <hr />
    <button @click="changeWeather">날씨 업데이트</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weather: "맑음"
    };
  },

  methods: {
    changeWeather() {
      this.weather = "흐림";
    }
  }
};
</script>

<style></style>
