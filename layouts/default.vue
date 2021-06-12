<template>
  <div>
    <Notification />
    <Nuxt />
  </div>
</template>
<script>

import Notification from "../plugins/notification/Notification.vue";
export default {
  components: {
    Notification,
  },
};
</script>

