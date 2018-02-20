<template>
  <div id="app">
    <!-- <MainFrame/> -->
    <RuleTree/>



  </div>
</template>

<script>
import MainFrame from './components/MainFrame'
import RuleTree from './components/RuleTree'

export default {
  name: 'App',
  components: {
    MainFrame,
    RuleTree
  }
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/

</style>
