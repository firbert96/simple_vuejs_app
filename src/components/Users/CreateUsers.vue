<template>
  <div class="container">
    <!-- <pre>
            {{ dataPost }}
        </pre> -->

    <div class="justify-content-md-center">
      <form @submit.prevent="submitLeads()">
        <div class="form-group row">
          <label class="col-sm-2" for="first_name">First Name</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control col-sm-10"
              id="first_name"
              placeholder="John"
              v-model="dataPost.first_name"
            />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2" for="last_name">Last Name</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control col-sm-10"
              id="last_name"
              placeholder="Doe"
              v-model="dataPost.last_name"
            />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2" for="email">Email</label>
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control col-sm-10"
              id="email"
              placeholder="email@email.com"
              v-model="dataPost.email"
            />
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Save</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataPost: {},
    };
  },
  methods: {
    submitLeads: function () {
      this.axios
        .post("https://reqres.in/api/users", this.dataPost)
        .then((response) => {
          if (response.status == 201) {
            alert("Data Created Successfully");
          }
        });
    },
  },
};
</script>
<style scoped>
.form-group{
  padding: 0 20%;
}
.row{
  padding: 1%;
}
</style>