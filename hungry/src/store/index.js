/*
 * @Author: your name
 * @Date: 2019-11-14 18:38:53
 * @LastEditTime: 2019-11-14 18:41:45
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \app\src\store\index.js
 */
import Vue from 'vue'
import VueX from 'vueX'

Vue.use(VueX)

export default new VueX.Store({
    state:{
        footerCls:[
            true,
            false,
            false,
            false
          ]
    },
    getters:{

    },
    mutations:{
        changeFooterCls(state,index){
            if(index<0 || index>state.footerCls.length-1){
                return;
            }
            state.footerCls.forEach((item,index,arr)=>{
                arr[index] = false;
            })
            state.footerCls[index] = true;
        }
    },
    actions:{

    }
})

