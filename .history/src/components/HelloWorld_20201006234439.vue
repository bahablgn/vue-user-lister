<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>{{ message }}</h3>
    <h3>{{ username }}</h3>
    <h3>{{ welcomeMessage }}</h3>
    <input v-model="userNameInp" />
    <button @click="updateWelcomeTextName">update name</button>
    <ul>
      <li v-for="user in allUsers" :key="user.id">{{ user.title }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      userNameInp: "aaa",
      www: "eee"
    };
  },
  computed: {
    ...mapState(["message", "username"]),
    ...mapGetters(["welcomeMessage", "allUsers"])
  },
  methods: {
    ...mapActions(["updateUserName", "fetchUsers"]),
    updateWelcomeTextName() {
      this.updateUserName(this.userNameInp);
    }
    // updateWelcomeTextName() {
    //   this.$store.dispatch("updateUserName", this.userNameInp);
    // }
  },
  created() {
    this.fetchUsers();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
