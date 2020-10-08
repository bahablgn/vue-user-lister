<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>{{ message }}</h3>
    <h3>{{ username }}</h3>
    <h3>{{ welcomeMessage }}</h3>
    <input v-model="userNameInp" />
    <button @click="updateWelcomeTextName">update name</button>
    Filter Users:
    <select @change="filterUsers($event)">
      <option value="10">10</option>
      <option value="7">7</option>
      <option value="5">5</option>
      <option value="3">3</option>
      <option value="1">1</option>
    </select>
    <ol>
      <li v-for="user in usersDisp" :key="user.id">{{ user.name }}</li>
    </ol>
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
    ...mapGetters(["welcomeMessage", "users", "usersDisp"])
  },
  methods: {
    ...mapActions(["updateUserName", "fetchUsers", "filterUsers"]),
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
