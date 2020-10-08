<template>
  <div>
    <h1>{{ msg }}</h1>
    Filter Users:
    <select @change="filterUsersToDisplay($event)">
      <option value="10">10</option>
      <option value="7">7</option>
      <option value="5">5</option>
      <option value="3">3</option>
      <option value="1">1</option>
    </select>
    <ol>
      <li v-for="user in usersToDisplay" :key="user.id">
        <div>
          {{ user.name }}
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    ...mapActions(['fetchUsers', 'filterUsersToDisplay'])
  },
  computed: {
    ...mapState(['usersToDisplay', 'userDisplayLimit']),
    ...mapGetters(['users'])
  },
  async created() {
    await this.fetchUsers()
    this.filterUsersToDisplay(this.userDisplayLimit - 1)
  }
}
</script>
