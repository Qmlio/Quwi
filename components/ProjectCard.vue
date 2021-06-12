<template>
  <nuxt-link
    :to="{
      name: 'project',
      params: { project: { id: project_id, name: name } },
    }"
    class="project-container hoverable content-child"
  >
    <div class="content-child">
      <div class="project-logo">
        <img v-bind:src="logo" alt="project logo" />
      </div>
    </div>
    <h5 class="project-title content-child">{{ name }}</h5>

    <div class="content-child">
      <p class="project-state active" v-if="active">Active</p>
      <p class="project-state passive" v-else>Passive</p>
    </div>

    <div class="project-schedule">
      <table class="content-child">
        <tbody>
          <tr>
            <td><p>time this week</p></td>
            <td><p>00:00:00</p></td>
          </tr>

          <tr>
            <td><p>this month</p></td>
            <td><p>00:00:00</p></td>
          </tr>

          <tr>
            <td><p>total</p></td>
            <td><p>00:00:00</p></td>
          </tr>
        </tbody>
      </table>
    </div>
  </nuxt-link>
</template>
<script>
export default {
  name: "Project",
  data() {
    return {
      joke: 4,
    };
  },
  props: ["project_id", "active", "name", "logo", "this_week", "this_month"],
};
</script>

<style scoped>
.project-container {
  padding: 16px;
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
  margin: 16px 0;
  cursor: pointer;
}
.content-child {
  flex-grow: 3;
}
.project-container::before {
  border-radius: 2px;
}
.project-container:hover {
  border: 0.5px solid rgb(2, 20, 43, 1);
}

.project-logo {
  width: 40px;
  height: 40px;
  flex-grow: 1;
  background-color: rgb(247, 247, 247);
}
.project-logo img {
  width: inherit;
  height: inherit;
  object-fit: contain;
}
.project-container h5 {
  font-weight: 500;
  max-width: 150px;
  font-size: 1rem;
  word-wrap: break-word;
}
.project-state {
  font-size: 1rem;
}

.project-schedule {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
td {
  text-align: left;
  padding: 0 8px;
}
td p {
  margin: 0;
  font-size: 1rem;
}
.active,
.passive {
  padding-left: 16px;
}
.active {
  color: green;
}
.passive {
  color: red;
}
</style>


