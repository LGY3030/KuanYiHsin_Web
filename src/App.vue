<template>
  <div id="app">
    
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="scss" scoped>
  #app{
    width: 100%;
    overflow: hidden;
  }
  .fade-enter, .fade-leave-to{
    opacity: 0;
    transform: translate(2em);
  }
  .fade-enter-active, .fade-leave-active{
    transition: all .3s ease;
  }
</style>
