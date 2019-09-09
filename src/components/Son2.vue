<template>
  <div>
    <!-- <div>儿子二 {{$attrs}}</div> -->
    儿子二 
    <GrandSon2 v-bind="$attrs" v-on="$listeners"></GrandSon2>
  </div>
</template>

<script>
import GrandSon2 from "./GrandSon2";
export default {
  name: "son2",
  inheritAttrs: false, // 继承但不挂载
  components: {
    GrandSon2
  },
  data() {
    return {};
  }
};
</script>