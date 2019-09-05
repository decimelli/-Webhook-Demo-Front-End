<template>
  <div class="people container">
    <h1 class="mt-5">Manage People</h1>
    <table class="table table-striped">
      <thead>
      <tr>
        <th>Name</th>
        <th>age</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="person in people">
          <td>{{person.name}}</td>
          <td>{{person.age}}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'people',
    data() {
      return {
        people: []
      }
    },
    methods: {
      fetchCustomers() {
        this.$http.get('http://localhost:8080/api/persons').then(function (response) {
          console.log(response.body);
          this.people = response.body._embedded.persons;
        })
      }
    },
    created() {
      this.fetchCustomers();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
