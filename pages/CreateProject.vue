<template>
  <section class="container wrapper">
    <Header :isCreator="true" title="Create a project" />
    <div class="project-container">
      <div class="form-container content-child">
        <h3>Name</h3>
      </div>
      <div class="content-child input-container">
        <input
          v-model="projectname"
          v-bind:class="{ error: hasError }"
          class="outline"
          type="text"
          placeholder=""
        />
      </div>

      <div class="content-child">
        <button
          class="hoverable"
          v-bind:class="{ disable: running }"
          @click="createProject()"
        >
          OK
        </button>
      </div>

      <p v-bind:class="{ hide: !hasError }" class="errorText">
        {{ errorText }}
      </p>
    </div>
  </section>
</template>

<script>
import Header from "../components/Header.vue";
import FormData from "form-data";

export default {
  name: "CreateProject",
  middleware: "auth",
  components: {
    Header,
  },

  data: function () {
    return {
      projectname: "",
      hasError: false,
      errorText: "",
      running: false,
    };
  },

  methods: {
    createProject: function () {

      if (this.projectname != "" && !this.running) {
        
        this.setRunning(true);

        var data = new FormData();
        data.append("name", this.projectname);
        data.append("id_users_add[]", "16");
        data.append("id_users_add[]", "2");
        data.append("is_active", "1");
        data.append("is_owner_watcher", "1");

        this.$axios.setToken(this.$auth.getToken("local"), "Bearer");

        this.$axios.setHeader("Content-Type", "multipart/form-data");

        this.$axios
          .$post("/projects-manage", data)
          .then((response) => {
         
         
            this.setRunning(false);

            this.$router.push("ProjectsView");
          })
          .catch((error) => {
            if (error.message == "Network Error") {
              this.setError("Network Error, Try again later.");
            } else {
              this.setError("Failed to create project");
            }
          });

      } else {
        if (this.projectname == "") {
          this.setRunning(false);

          this.setError("Enter project name");
        }
      }
    },

    setRunning: function (running) {
      this.running = running;
      if (running) {
        this.$notification.show({
          text: "Creating project...",
          duration: 1200000,
          closeWait: 1200000,
        });
        this.hasError = false;
      } else {
        this.$notification.hide();
      }
    },
    
    setError: function (error) {
      this.hasError = true;
      this.errorText = error;
      this.setRunning(false);
    },
  },
};
</script>

<style scoped >
.errorText {
  position: absolute;
  bottom: 20%;
  left: 25%;
}
.project-container {
  padding: 12px;
  height: auto;
  max-height: 200px;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  border: 0.6px solid rgba(0, 0, 0, 0.12);
  border-radius: 2px;
  background-color: rgb(255, 255, 255);
  position: relative;
  cursor: pointer;
}
.wrapper {
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
  height: 100vh;
  background-color: rgb(248, 248, 248);
}
.content-child {
  flex-grow: 3;
}
.project-container {
  background-color: white;
  width: 600px;
  min-width: 30%;
  margin-top: 100px;
  padding-bottom: 50px;
}
.input-container {
  flex-grow: 1;
}
input {
  width: 300px;
}
h3 {
  font-weight: 500;
  max-width: 150px;
  padding-left: 16px;
  word-wrap: break-word;
}
button {
  padding: 8px 12px;
  border-radius: 4px;
  background-color: rgb(2, 20, 43, 1);
  color: white;
  cursor: pointer;
  font-size: 1rem;
}
</style>
