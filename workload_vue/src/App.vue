<template>
  <div id="app">
    <!-- <MainFrame/> -->
    <!-- <RuleTree/> -->
    <!-- <Footer/> -->
    <!-- <CountRuleLog/> -->
    <TeacherProject/>
    <!-- <Footer/> -->
    <!-- <CountRuleLog/> -->




  </div>
</template>

<script>
import MainFrame from './components/MainFrame'
import RuleTree from './components/RuleTree'
import Footer from './components/Footer'
import CountRuleLog from './components/CountRuleLog'
import TeacherProject from './components/TeacherProject'

export default {
  name: 'App',
  components: {
    MainFrame,
    RuleTree,
    Footer,
    CountRuleLog,
    TeacherProject
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
