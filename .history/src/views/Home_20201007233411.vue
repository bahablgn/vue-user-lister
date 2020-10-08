<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <ListUsers msg="Welcome to Your Vue.js App" />
    <ListUsers msg="Welcome to Your Vue.js App 2" />
  </div>
</template>

<script>
// @ is an alias to /src
import ListUsers from '@/components/ListUsers.vue'

export default {
  name: 'Home',
  components: {
    ListUsers
  }
}
</script>
