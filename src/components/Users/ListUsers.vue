<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in listUsers" :key="index">
            <td scope="row">{{ index + 1 }}</td>
            <td>{{ item.first_name }}</td>
            <td>{{ item.last_name }}</td>
            <td>{{ item.email }}</td>
            <td>
              <router-link
                :to="{ name: 'Update Users', query: { id: item.id } }"
                tag="button"
                class="btn btn-info"
              >
                Update Data
              </router-link>
              <button class="btn btn-danger" @click="deleteData(item.id)">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listUsers: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData: function () {
      this.axios.get("https://reqres.in/api/users").then((response) => {
        this.listUsers = response.data.data;
        console.log(this.listUsers);
      });
    },
    deleteData: function (id) {
      console.log("delete " + id);
      this.axios
        .delete("https://reqres.in/api/users/" + id)
        .then((response) => {
          if (response.status == 204) {
            alert("Data Deleted Successfully");
            this.getData();
          }
        });
    },
  },
};
</script>

<style scoped>
.btn {
  margin: 1%;
}
</style>