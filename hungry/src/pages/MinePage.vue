<!--
 * @Description: 
 * @Author: losn
 * @Date: 2019-11-06 20:18:57
 * @LastEditors: 熊小兜
 * @LastEditTime: 2019-11-14 21:07:36
 -->

<template>
 <div class="box">
     <MyHead></MyHead>
     <Section></Section>
     <Section02></Section02>
     <Section03></Section03>
     <section04></section04>
     <Footer></Footer>
  

 </div>
</template>

<script>
import  MyHead from '../components/MyHead';
import  Section from '../components/Section';
import  Section02 from '../components/Section02';
import  Section03 from '../components/Section03';
import  section04 from '../components/section04';
import  Footer from '../components/Footer';


export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  },
  components:{
     MyHead,Section,Section02,Section03,section04,Footer
  }
}
</script>

<style scoped>

</style>
