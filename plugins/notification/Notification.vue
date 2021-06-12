<template>
    <div v-bind:class="{show:toast}" class="notification">
        <p>{{options.text}}</p>
    </div>
</template>
<script>
import notification from "./notification"
export default {
  name:"Notification",
 
  data:function(){
return{
   options:{
       text:"",
       type:"",
   },
    toast:false,
    duration:0
}
  },
  beforeMount:function(){
      notification.event.$on("show",options=>{
          this.options = options;
          this.toast=true;
        
      })
       notification.event.$on("hide",()=>{
         this.toast = false;
           clearTimeout(0)
      })

  }
 

  
}
</script>

<style scoped>

</style>