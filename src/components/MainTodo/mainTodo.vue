<template>
  <div class="main-todo">
    <input type="text"
           class="add-todo"
           placeholder="what to do"
           autofocus
    @keyup.enter="addTodo"
    v-model="content">
    <todo-item v-for="(item,index) in todoData" :key="index" :todo="item" @del="handDelItem">


    </todo-item>
  </div>
</template>

<script>
import todoItem from "./coms/todoItem.vue";
let id = 0
export default {
  name: "mainTodo",
  components: {
    todoItem
  },
  data(){
    return {
      content:'',
      todoData: []
    }
  },
  methods: {
    addTodo(){
      if (this.content === '') return
      this.todoData.unshift(
          {
            id: id++,
            content: this.content,
            completed: false
          }
      )
      this.content = ''
      console.log(this.todoData)
    },
    handDelItem(id){
      this.todoData.splice(this.todoData.findIndex(item => item.id === id ), 1)
    }
  }
}
</script>

<style lang="stylus" scoped>
.main-todo
  width: 600px
  margin 0 auto
  background-color #ffffff
  box-shadow 0 0 5px #666
  .add-todo
    padding: 16px 16px 16px 36px
    width: 100%
    font-size 24px
    font-weight inherit
    font-family inherit
    color inherit
    border none
    outline none
    box-sizing: border-box



</style>
