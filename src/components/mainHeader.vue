<template>
  <header class="main-header">
    <h1>To do list</h1>
  </header>
</template>

<script>


export default {
  name: "mainHeader"
}
</script>

<style lang="stylus" scoped>
@import "~styles/theme.styl"
.main-header
  text-align: center
  h1
    margin 20px
    font-weight: 100
    font-size: 100px
    color: $lightred
    text-shadow 5px 5px 5px  rgba(0,0,0,0.1)

</style>
