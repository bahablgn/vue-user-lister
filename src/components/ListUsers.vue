<template>
  <div>
    <h1>{{ msg }}</h1>
    Filter Users:
    <select @change="filterUsers($event)">
      <option value="10">10</option>
      <option value="7">7</option>
      <option value="5">5</option>
      <option value="3">3</option>
      <option value="1">1</option>
    </select>
    <ol>
      <li v-for="user in filteredUsers" :key="user.id">
        <div>
          {{ user.name }}
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'ListUsers',
  props: {
    msg: String
  },
  methods: {
    ...mapActions(['fetchUsers', 'filterUsers'])
  },
  computed: {
    ...mapGetters(['filteredUsers'])
  },
  async created() {
    await this.fetchUsers()
    this.filterUsers(10)
  }
}
</script>
