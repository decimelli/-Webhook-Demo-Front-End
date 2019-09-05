<template>
  <div class="about container">
    <h1 class="mt-5">Add Person</h1>
    <form v-on:submit="addCustomer">
      <div class="well">
        <h4>Customer Info</h4>
        <div class="form-group">
          <label>Name</label>
          <label>
            <input type="text" class="form-control" placeholder="name" v-model="person.name"/>
          </label>
        </div>
        <div class="form-group">
          <label>Age</label>
          <label>
            <input type="text" class="form-control" placeholder="name" v-model="person.age"/>
          </label>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'add',
    data () {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
