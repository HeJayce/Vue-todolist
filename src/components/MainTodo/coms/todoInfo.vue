<template>
<div class="todo-info">
  <span>{{total}} item left</span>
  <div class="tag">
    <a
       v-for="(item,index) in states"
       :class="[ state==item ? 'actived':'' ]"
       :key="index"
       @click="checkstates(item)"
    >{{item}}


    </a>
  </div>
  <button @click="delcompleted">Clear Completed</button>
</div>
</template>

<script>
export default {
  name: "todoInfo",
  data() {
    return {
      states: ['all' ,'active','completed'],
      state: 'all'

    }
  },
  props: ['total'],
  methods: {
    checkstates(state) {
      this.state = state
      this.$emit('checkstates', state)

    },
    delcompleted(){
      this.$emit('delcompleted')
    }
  },
}
</script>

<style lang="stylus" scoped>
//@import "~styles/reset.css"
@import "~styles/theme.styl"
@import "~styles/mixins.styl"
.todo-info
  display flex
  justify-content space-between
  font-weight 400
  padding 5px 10px
  border-top 1px solid black
  text-align center
  line-height 30px

  span
    color red

  .tag
    display flex
    justify-content space-between
    width 180px

    a
      margin 0 3px
      padding 0 5px
      text-decoration none
      color black
      border 1px solid pink
      border-radius 5px
      //background-color pink
      &.actived
        background-color pink
        color white
      &:hover
        background-color pink
        color white

  button
    padding 0 10px
    width 80px
    background-color $green
    cleanDefaultStyle()
    border-radius 5px
    color white
    &:active
      background-color aquamarine


    //cursor: pointer



</style>
