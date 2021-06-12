<template>
  <section class="container wrapper">
    <div class="empty-state">
      <h1>Logout now</h1>
      <p>Do you really want to logout?</p>

      <div class="btn-group">
        <button @click="logout()" v-bind:class="{ disable: running }">
          Yes
        </button>
        <button @click="cancel()" v-bind:class="{ disable: running }" >No</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Logout",

  data: function () {
    return {
      running: false,
    };
  },
  methods: {
    logout: function () {
      if (this.running) return;
      this.running = true;

      this.$auth.logout().then((r) => {
        this.running = false;
       
      });
    },
    cancel: function () {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped >
.empty-state {
  background-color: white;
}
.btn-group {
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: stretch;
}
.btn-group button {
  margin-left: 8px;
  margin-right: 8px;
}
.btn-group button:first-child {
  color: rgb(2, 20, 43, 1);

  background-color: rgb(2, 20, 43, 0.12);
  border-radius: 2px;
  border: 0.6px solid rgb(2, 20, 43, 0.12);
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
