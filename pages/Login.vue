    <template>
  <div>
    <LoginWidget />
    <Footer />
  </div>
</template>
    <script>
import LoginWidget from "../components/LoginWidget.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    LoginWidget,
    Footer,
  },
  mounted:function(){
  
     this.$router.app.refresh();
  },
 
};
</script>
  
