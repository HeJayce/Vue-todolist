<template>
  <div class="main-todo">
    <input type="text" class="add-todo" placeholder="what to do" autofocus>
  </div>
</template>

<script>
export default {
name: "mainTodo"
}
</script>

<style lang="stylus" scoped>
.main-todo
  width: 600px
  margin 0 auto
  background-color #ffffff
  box-shadow 0 0 5px #666
  .add-todo
    width: 100%
    font-size 24px
    font-weight inherit
    font-family inherit
    color inherit
    border none
    outline none


</style>
