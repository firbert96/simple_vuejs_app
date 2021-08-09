<template>
  <div id="app">
    <div id="nav">
      <h1>Choose Menu</h1>
      <br>
      <span class="border border-primary" id="nav-border">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> | 
        <router-link to="/hello_world">Hello World</router-link> | 
        <router-link to="/list_users">List Users</router-link> | 
        <router-link to="/create_users">Create Users</router-link> | 
        <router-link to="/block">Block</router-link>
      </span>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#nav-border{
  padding: 1em;
}

</style>
