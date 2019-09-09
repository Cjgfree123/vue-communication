<template>
  <div>
    <span>孙子:{{value}}</span>
    <button @click="changeParent">按钮</button>
  </div>
</template>

<script>
export default {
  name: "GrandSon1",
  props: {
    value: {
      default: 0,
      type: Number
    }
  },
  methods: {
    changeParent() {
      //  this.$parent.$emit("input", 400);
      this.$dispatch("input", 500);
      console.log("this", this);
    },
    say() {
      console.log("加油");
    }
  }
};
</script>