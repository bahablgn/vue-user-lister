<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>{{ message }}</h3>
    <h3>{{ username }}</h3>
    <h3>{{ welcomeMessage }}</h3>    
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    userName: "aaa",
    www: "eee"
  },
  computed: {
    ...mapState(["message", "username"]),
    ...mapGetters(["welcomeMessage"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
