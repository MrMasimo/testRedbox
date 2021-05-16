<template>
  <div id="app">
    <Step1 />
  </div>
</template>

<script>
import Step1 from './components/Step1.vue'

export default {
  name: 'App',
  components: {
    Step1
  },
  methods:{
  },
}
</script>

<style>
  @font-face {
    font-family: Montserrat;
    src: url('./assets/fonts/Montserrat.ttf');
  }
  #app {
    font-family: Montserrat, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #F8F8FA;
  }
</style>
