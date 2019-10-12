<template>
  <div class="header" :style="{background:$store.state.color}">
      {{$store.state.title}}
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  height: 50px;
  background: red;
  line-height: 50px;
  position: fixed;
  top:0px;
  width: 100%;
}
</style>