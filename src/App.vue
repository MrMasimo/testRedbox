<template>
  <div id="app">
    <template v-if ="!isHasEvent" >
    <Step1 />
    </template>
    <template v-else >
    <Step2 />
    </template>
  </div>
</template>

<script>
import Step1 from './components/Step1.vue'
import Step2 from './components/Step2.vue'
import {mapGetters} from 'vuex'

export default {
  name: 'App',
  components: {
    Step1,
    Step2,
  },
  computed:{
    ...mapGetters("infoEvent", ["isHasEvent"]),
  }
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
