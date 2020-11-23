<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import("@/assets/scss/reset.css");
import("@/assets/scss/base.scss");
import("@/assets/scss/common.scss");

export default {};
</script>
<style lang="scss">
  @import '@/assets/scss/variable.scss';
  @import '@/assets/scss/mixin.scss';
  html, body{
    @include inlineBox($display: block);
    overflow: hidden;
    line-height: 1em;
  }
  body {
    font-size: 14px;
  }
  #app {
    @include inlineBox($display: block);
    background: $bg-normal;
    overflow: hidden;
  }

</style>
