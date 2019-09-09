<template>
  <div>
    parent
    父组件 {{mny}}
    <!-- <Son1 :value="mny" @update:value="(value) => this.mny=value"></Son1> -->
    <!-- 这个是上面写法的语法糖 -->
    <!-- <Son1 :value.sync="mny"></Son1> -->

    <Son1 :value="mny" @input="mny=>this.mny=mny"></Son1>
    <!-- <Son1 v-model="mny"></Son1> -->

    <Son2 name="cc" age="10" @son="son"></Son2>
  </div>
</template>

<script>
import Son1 from "./Son1.vue";
import Son2 from "./Son2.vue";
export default {
  provide() {
    return {
      parent: this
    };
  },
  components: {
    Son1,
    Son2
  },
  data() {
    return {
      mny: 100,
      smoke: "抽烟",
    };
  },
  mounted() {
    this.$broadcast("say");
  },
  methods: {
    son() {
      console.log("有人点我");
    },
    change(val) {
      this.mny = val;
    }
  }
};
</script>