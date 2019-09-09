<template>
  <div>
    <span>儿子1: {{value}}</span>
    <span style="color: red;">{{this.parent.smoke}}</span>
    <button @click="change">点击修改</button>
    <GrandSon1 :value="value"></GrandSon1>
  </div>
</template>

<script>
import GrandSon1 from "./GrandSon1";
export default {
  name: "Son1",
  inject: ["parent"],
  components: {
    GrandSon1
  },
  props: {
    value: {
      type: Number,
      default: 1
    }
  },
  methods: {
    change() {
      this.$emit("input", 300);
    }
  }
};
</script>