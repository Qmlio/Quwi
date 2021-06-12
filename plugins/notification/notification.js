import notification from './Notification.vue'
const Plugin={
    install(Vue, options={}){

        if(this.installed){
            return
        }
        this.installed=true;

        this.event = new Vue();
        Vue.prototype.$notification = {
            show(options = {}){
                Plugin.event.$emit("show",options,true);
            },
            hide(){
                Plugin.event.$emit("hide",true);
            }
        };

        Vue.component("notification",notification)
    }
}
export default Plugin;