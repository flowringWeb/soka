<script>
import PropTest from "@/components/PropTest.vue";
export default {
  components: {
    PropTest
  },
  data() {
    return {
        msg: 'aaa'
    }
  }
}
</script>
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/Step1">Step1</router-link> |
      <router-link to="/Step2">Step2</router-link> |
      <router-link to="/Step3">Step3</router-link> |
      <router-link to="/Step4">Step4</router-link> |
      <router-link to="/Step5">Step5</router-link> |
      <router-link to="/Step6">Step6</router-link> |
      <router-link to="/Step7">Step7</router-link> |
      <router-link to="/Step8">Step8</router-link>
      <!-- <PropTest :sample="msg"></PropTest> -->
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
* {
  &::before, &::after{
    box-sizing: border-box;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
