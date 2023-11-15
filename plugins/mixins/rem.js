import Vue from 'vue'

const rem = {
    install(Vue, options){
        Vue.mixin({
            computed:{
                rem: function(){
                    return process.client ? parseFloat(getComputedStyle(document.documentElement).fontSize) : 0;
                }
            }
        });
    }
}

Vue.use(rem);