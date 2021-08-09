<template>
  <div class="container">
    <h1>Update Data</h1>
    <!-- <pre>
            {{ dataPost }}
        </pre> -->

    <div class="justify-content-md-center">
      <form @submit.prevent="updateData()">
        <div class="form-group row">
          <label class="col-sm-2" for="first_name">First Name</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="first_name"
              placeholder="John"
              :value="dataPost.first_name"
            />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2" for="last_name">Last Name</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="last_name"
              placeholder="Doe"
              :value="dataPost.last_name"
            />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2" for="email">Email</label>
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="email@email.com"
              :value="dataPost.email"
            />
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Update</button>
      </form>
    </div>
  </div>
</template>

<script>
import router from "../../router";
export default {
  name: "Update Users",
  data() {
    return {
      dataPost: {},
    };
  },
  mounted() {
    this.id = this.$route.query.id;
    this.getDataById(this.id);
  },
  methods: {
    getDataById(id) {
      console.log(id);
      this.axios.get("https://reqres.in/api/users/" + id).then((response) => {
        if (response.status == 200) {
          this.dataPost = response.data.data;
          console.log(this.dataPost);
        }
      });
    },
    updateData: function (id) {
      console.log("update " + id);
      this.axios
        .put("https://reqres.in/api/users/" + id, this.dataPost)
        .then((response) => {
          if (response.status == 200) {
            alert("Data Updated Successfully");
            router.go(-1);
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