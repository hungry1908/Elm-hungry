<!--
 * @Description: 
 * @Author: losn
 * @Date: 2019-11-09 15:06:42
 * @LastEditors: losn
 * @LastEditTime: 2019-11-13 16:01:35
 -->


<template>
 <div>
    <div class="rate">
        <img @click="back()" class="back" src="../assets/img/jtzuo.png" alt="">
        <h2>请评分</h2><br/>
        <el-rate class="elemet" :texts="texts" v-model="value" :icon-classes="iconClasses" :show-text="true" :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
            
        </el-rate>
    </div>
 </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      value: null,
      texts:["弱爆","一般","可以","我可","赞爆"],
      //text: [1,2,3,4,5],
        iconClasses: 
        [
            'el-icon-star-on', "el-icon-star-on",'el-icon-star-on', 'el-icon-star-on','el-icon-star-on'
        ]      
    }
  },
  components:{

  },
  methods:{
      back:function(){
      this.$router.go(-1);
      }
  }
}
</script>

<style scoped>
.rate{
    width: 100%;
    height: 3rem;
    margin: auto;
    /* display: flex; */
    align-items: center;
    justify-content: center;
    /* background-color: pink; */
}
.back{
    width: .25rem;
    height: .25rem;
    position: fixed;
    left: .3rem;
    top: .3rem;
}
h2{
    /* line-height: 1.5rem; */
    margin-top: 1rem;
    text-indent: 1.5rem;
}
.elemet{
    margin-left: 1.15rem;
    margin-top: .3rem;
    width: 1.5rem;
}
</style>