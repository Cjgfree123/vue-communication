import Vue from "vue";
import App from "./App.vue";


// 向上通知
Vue.prototype.$dispatch = function (eventName, value) {
    console.log(eventName);
    let parent = this.$parent;
    while (parent) {
        parent.$emit(eventName, value);
        parent = parent.$parent;
    }
};

Vue.prototype.$broadcast = function (eventName, value) {
    // 获取当前组件下的所有孙子
    const broadcast = () => {
        this.$children.forEach((child) => {
            child.$emit(eventName, value);
            if (child.$children) {
                broadcast(child.$children);
            };
        });
    };
    broadcast(this.$children);
}


const vm = new Vue({
    el: "#app",
    render: h => h(App),
});
console.log("bu", Vue)