<template>
  <div>
    <h1>To do list</h1>
    <input type="text" v-model="content"/>
    <button @click="add">添加</button>
    <ul>
      <li v-for="(item,index) in todoData" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
// import img from './assets/images/bg.jpeg'
// import './assets/images/head.jpeg'
// import  './assets/styles/test.css'

import './assets/styles/global.styl'

export default {
  name: "App",
  data(){
    return {
      content:'',
      todoData:[
          "todo1",
          "todo2",
          "todo3"
      ]
    }
  },
  methods: {
    add(){
      if (this.content === "") return
      this.todoData.push(this.content)
      this.content = ""
    }
  }
}
</script>

<style lang="stylus" scoped>
li:nth-of-type(odd)
  color: #bbffaa
</style>