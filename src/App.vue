<template>
  <div>
    <main-header></main-header>
    <main-todo></main-todo>
  </div>
</template>

<script>
// import img from './assets/images/bg.jpeg'
// import './assets/images/head.jpeg'
// import  './assets/styles/test.css'

import './assets/styles/global.styl'
import mainHeader from './components/mainHeader.vue'
import mainTodo from './components/MainTodo/mainTodo.vue'


export default {
  name: "App",
  methods: {},
  components: {
    mainHeader,
    mainTodo
  }
}
</script>

<style lang="stylus" scoped>

</style>
