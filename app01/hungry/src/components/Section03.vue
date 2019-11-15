<!--
 * @Author: losn
 * @Date: 2019-11-06 19:49:51
 * @LastEditTime: 2019-11-09 10:20:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day13e:\myhungry\src\components\Mypage.vue
 -->
<template>
<div class="section03" >
            <div class="package">
                <p>
                    红包
                </p>
                <p>
                    <span>3</span>
                    <span>个未使用</span>
                </p>
            </div><div class="package">
                <p>
                        津贴
                </p>
                <p>
                    <span>￥20</span>
                    <span>可用</span>
                </p>
            </div><div class="package">
                <p>
                        钱包
                </p>
                <p>
                    
                    <span>金币，借钱</span>
                </p>
            </div>

</div>
</template>

<script>
export default {
  name: 'section03',
  data () {
    return {
    
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section03{
    width:100%;
    height:1.3rem;
    /* background-color: pink; */
    display: flex;
    justify-content: space-around;
}
.package{
    width: 33.3%;
    border-radius: 10px;
    /* background-color: pink; */
    text-indent: .2rem;
}
p{
    font-size: .25rem;
    line-height: .4rem;
    margin-top: .2rem;
}
.package :nth-child(2) :nth-child(1){
    font-size: .2rem;
    color: red;
}
.package :nth-child(2) :nth-child(2){
    font-size: .15rem;
    color: black;
}
.section03 :nth-child(3) :nth-child(2) :nth-child(1){
    font-size: .15rem;
    color: black;
}
</style>
