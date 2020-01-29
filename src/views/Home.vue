<template>
  <div class="home">
    <Header />
    <GameList />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header";
import GameList from '@/components/GameList.vue';

export default {
  name: 'home',
  components: {
    GameList,
    Header
  },
};
</script>
