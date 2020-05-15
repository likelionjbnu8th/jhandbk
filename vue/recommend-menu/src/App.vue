<template>
  <div>
    <div class="header">
      <h1>메뉴 추천</h1>
      <h3 class="subtitle">메뉴 추천 서비스</h3>

      <Navbar />
    </div>

    <div class="main">
      <Allchoices />
      <Suggestion />
    </div>
  </div>
</template>

<script>
import AllChoices from "./components/AllChoices";
import Suggestion from "./components/Suggestion";

export default {
  components: {
    AllChoices,
    Suggestion
  },
  data() {
    return {};
  }
};
</script>

<style>
.header {
  text-align: center;
}
.subtitle {
  color: gray;
}
</style>
