<!-- Game List is the parent of Game -->
<template>
  <div class="game-list">
    <div class="options">
      <form @submit.prevent="addGame">
        <input class="game-input" type="text" placeholder="Add a game" v-model="newGame" />
      </form>
      <Stats />
      <button class="rm-button" v-on:click="removeAllGames">Remove all Games</button>
    </div>
  <Games />
  </div>

</template>

<script>
import Games from "@/components/Games";
import Stats from "@/components/Stats";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "GameList",
    data() {
    return {
      newGame: ""
    };
  },
  components: {
    Games,
    Stats
  },
  computed: {},
  methods: {
    ...mapMutations(["ADD_GAME", "REMOVE_ALL"]),
    ...mapActions(["", "removeAll"]),
    addGame: function() {
      this.ADD_GAME({ name: this.newGame });
      this.newGame = "";
    },
    removeAllGames() {
      this.removeAll().then(() => {
        this.msg = "All Games have been removed";
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

input { 
  background: #efefef;
  color: #000000;
	font-size: 15px;
	font-weight: bold;
	padding: 9px 24px;
  border: none;
  outline: none;
  border-radius: 3px;
  transition: 200ms ease-in-out;

  &:hover {
    margin-bottom: -10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
  }
}

.rm-button {
  background: #e13c4c;
  color: #ffffff;
	font-size: 15px;
	font-weight: bold;
	padding: 9px 24px;
  border: none;
  outline: none;
  border-radius: 3px;
  transition: 200ms ease-in-out;

  &:hover {
    margin-bottom: -10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
  }
}

.options {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;  
}

@media screen and (max-width:600px) {
  .options{
    flex-direction: column;
    flex-direction: column-reverse;
  }
}
</style>
