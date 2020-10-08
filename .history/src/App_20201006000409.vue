<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapState(["message", "username"])
  }
};
</script>

<style scoped>
#app {
  color: black;
}
</style>
