import Vue from "vue";

const Focus = {
    install(Vue, options){
        Vue.mixin({
            directives: {
                focus: {
                  // directive definition
                  inserted: function (el) {
                    el.focus()
                  }
                }
            }
        });
    }
};

Vue.use(Focus);