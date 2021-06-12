<template>
  <header>
    <nuxt-link class="logo hoverable" to="https://quwi.com/" v-if="!isCreator">
      <img src="../static/quwi-logo.png" alt="quwi logo" />
    </nuxt-link>
    <div class="spacer"></div>
    <nav v-if="!isCreator">
      <ul>
        <li></li>

        <li title="Create a project">
          <nuxt-link class="link text" to="/CreateProject"
            >Create Project
          </nuxt-link>
        </li>
        <li title="Log out">
          <nuxt-link class="link text" to="/Logout"> Logout </nuxt-link>
        </li>
      </ul>
    </nav>

    <div class="back-button outline hoverable" @click="$router.go(-1)" v-else>
      <nuxt-link class="back-link text" to="/ProjectsView">Back</nuxt-link>
    </div>

    <div class="project-title">
      <p>{{ title }}</p>
    </div>
  </header>
</template>
<script>
export default {
  name: "Header",
  props: ["isCreator", "title"],
};
</script>

<style scoped>
.project-title {
  align-self: center;
}
.project-title p {
  font-size: 1.2rem;
}
.back-button {
  width: 70px;
  height: 28px;
  background-color: rgb(2, 20, 43, 0.12);
  position: absolute;
  left: 0;
  top: 8px;
  margin: 4px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  border: 0.6px solid rgb(2, 20, 43, 0.12);
}
.back-button::before {
  border-radius: 2px;
  cursor: pointer;
}
.back-link {
  font-size: 13px;
  word-wrap: unset;
}
header {
  background-color: white;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-content: center;
  height: 56px;
  z-index: 999;
  border-bottom: 1px solid rgba(1, 10, 22, 0.12);
}
ul {
  list-style-type: none;
  margin: 0;

  right: 16px;
  top: 10px;
  position: absolute;
  padding: 0;
}
ul li {
  display: inline;
  padding: 0px;
  margin: 0 4px;
}
ul li:hover {
  opacity: 0.5;
}

ul li .link {
  margin: 32px 8px;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 0.1rem;
  padding-top: -8px;
  line-height: 34px;
}

.logo {
  width: 40px;
  height: 40px;
  align-self: flex-start;
  left: 16px;
  top: 6px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
}

.logo img {
  width: 30px;
  height: 30px;
  display: block;
  margin: auto;
}
.spacer {
  background-color: pink;
}
</style>


