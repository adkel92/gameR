<template>
    <div class="game-wrapper">
      <div class="game-box" v-for="(game, index) in games" v-bind:key="index">
        <h3 class="game-title">{{ game.name }} </h3>
        <img class='game-cover' :alt="game.name+' cover'" :src="getImageUrl(game.id)"/>
      </div>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";

export default {
  name: "Games",
  async mounted() {
    this.isBusy = true;
    try {
      await this.$store.dispatch("loadGames");
    } catch (ex) {
      this.error = "Failed to load data";
    } finally {
      this.isBusy = false;
    }
  },
  computed: {
    ...mapState(["games"]),
    ...mapGetters(["getImageUrl"])
  },
  methods: {
    ...mapActions(["loadGames"]),
    ...mapMutations(["SAVE_GAMES"]),
  }
};
</script>
<style scoped lang="scss">
button {
  padding: 10px;
  margin-top: 30px;
  width: 10%;
  background: none;
  border: 1px solid lightgray;
  outline: 0;
  cursor: pointer;
}


.game-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.game-box {
  margin: 20px;
  width: 5%;
  max-height: 270px;
  min-width: 200px;
  text-align: center;
  border-radius: 3px;
  transition: 200ms ease-in-out;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);

  &:hover {
    margin-bottom: -10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
  }
}

.game-title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0 auto;
  font-size: 90%;
}

.game-cover {
 width: 100%;
 height:250px;
}

</style>