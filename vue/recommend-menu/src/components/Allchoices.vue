<template>
  <div>
    <h3>모든 선택지</h3>

    <div v-for="choice in choices">
      <span>{{choice.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      choices: [
        { name: "A", selected: true },
        { name: "B", selected: false },
        { name: "C", selected: false },
        { name: "D", selected: true },
        { name: "E", selected: false },
        { name: "F", selected: true }
      ]
    };
  }
};
</script>