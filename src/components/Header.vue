<template>
  <div class="header">
    <img class="logo" alt="Vue logo" width='160' src="../assets/logo.svg">
    <h1>{{title}}</h1>
     <nav class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: 'Header',
  computed: {
    ...mapState(["title"])
  }
};
</script>
<style scoped lang="scss">
.logo {
  width: 10%;
  min-width: 100px;
}

.header {
  position: sticky;
  top: 0;
	height: 20%;
  width: 100vw; 
	background: rgba(255,255,255,1);
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
}

nav {
  padding: 30px;
  display: flex;
  justify-content: space-around;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

@media screen and (max-width:600px) {
  header, nav a{
    flex-direction: column;
  }
}
</style>