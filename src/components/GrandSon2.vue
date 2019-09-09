<template>
  <div>孙子2 {{$attrs}}</div>
</template>

<script>
export default {
  name: "GrandSon2",
  mounted() {
    this.$listeners.son();
  }
};
</script>