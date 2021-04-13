<template>

  <div :class="['todo-item',todo.completed ? 'completed' : '']">
    <input type="checkbox" v-model="todo.completed"/>
    <label>{{todo.content}}</label>
    <button @click="delItem"></button>
  </div>

</template>

<script>
export default {
  name: "todoItem",
  props: {
    todo: Object
  },
  methods: {
    delItem(){
      this.$emit('del',this.todo.id)

    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/theme.styl"
@import "~styles/mixins.styl"
//@import "~styles/reset.css"

.todo-item

  display flex
  justify-content space-between
  padding 10px
  font-size 24px
  border-top 1px solid rgba(0,0,0,0.1)

  &:hover
    button:after
      content 'x'
      font-size 24px
      color $lightred
  &.completed
    label
      color #57fb43
      text-decoration line-through


  input
    width: 50px
    height: 30px
    cleanDefaultStyle()
    //appearance none
    //border none
    //outline none
    text-align center
    &:after
      content url('~images/arrow-right-circle.svg')
    &:checked:after
      content url('~images/success.svg')

  label
    flex 1
    line-height 30px
    transition color 0.4s

  button
    width: 40px
    background-color transparent
    //appearance none
    //border none
    //outline none
    cleanDefaultStyle()
    cursor: pointer

.v-enter,
.v-leave-active
  opacity: 0;
  transform: translateX(30px)

.v-leave-active,
.v-enter-active
  transition: all 0.2s ease

.v-move
  transition: all 0.2s ease

.v-leave-active
  position: absolute








</style>
