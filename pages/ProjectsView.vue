<template>
  <section class="container wrapper">
    <Header :isCreator="false" />
    <div class="project-container">
      <!--button @click="isEmpty=!isEmpty" style="margin-top:200px;z-index:99999">getp</button-->
      <div class="project-table">
        <project
          v-for="project in projects"
          v-bind:key="project.id"
          v-bind:project_id="project.id"
          v-bind:name="project.name"
          v-bind:active="project.is_active"
          v-bind:logo="project.logo_url"
        />
      </div>
    </div>
    <div v-bind:class="{ hide: hideEmptyState }" class="empty-state">
      <h1>{{ title }}</h1>
      <p>{{ text }}</p>

      <button v-bind:class="{ rentry: rentry }" @click="getProjects()">
        Retry
      </button>
    </div>
  </section>
</template>

<script>
import Header from "../components/Header.vue";
import Project from "../components/ProjectCard.vue";
export default {
  name: "Projects-view",
  middleware: "auth",

  async fetch() {
    this.getProjects();
  },

  components: {
    Header,
    Project,
  },
  data: function () {
    return {
      projects: [],
      hideEmptyState: false,
      rentry: false,
      title: "",
      text: "",
    };
  },
  methods: {
    getProjects: function () {
      this.hideState();

      this.$axios.setToken(this.$auth.getToken("local"), "Bearer");
      this.$axios
        .$get("/projects")
        .then((response) => {
          var f = response.projects[0].logo_url;
          this.projects = response.projects.reverse();

          this.hideEmptyState = !(this.projects.length == 0);
          if (!this.hideEmptyState) {
            this.showState("Oops!", "No project yet", false);
          }
          this.$notification.hide();
        })
        .catch((e) => {
          if (e.message) {
            this.showState("Oops!", e.message + ", Try again", false);
          } else {
            var error = "";

            switch (err.response.status) {
              case 404:
                error = "Internal error has occured";
                break;
            }
            this.showState("Oops!", error + ", Try again", false);
          }
        });
    },

    showState: function (title, text, canRentry = false) {
      this.hideEmptyState = false;
      this.rentry = canRentry;
      this.title = title;
      this.text = text;
      this.$notification.hide();
    },

    hideState: function () {
      this.hideEmptyState = true;

      this.$notification.show({
        text: "Fetching projects...",
        duration: 20000,
        closeWait: 20000,
      });
    },
  },
};
</script>

<style>
.wrapper {
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
  height: 100vh;
  background-color: rgb(248, 248, 248);
}
.project-container {
  background-color: transparent;
  width: 600px;
  max-width: 100%;
  margin: auto;
}

.hide {
  display: none !important;
}
.project-table {
  margin-top: 100px;
  margin-bottom: 100px;
}
.empty-state {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-flow: column;
  position: absolute;

  top: 0;
}

.rentry {
  display: none;
}

.empty-state button {
  margin-top: 20px;
  background-color: #03162f;
  text-transform: uppercase;
  color: white;
  padding: 8px 12px;
}
h1 {
  font-weight: normal;
  font-size: 4rem;
}
</style>
