import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';
import placeholderImage from '../assets/placeholder.png';
import config from '../config.js';

Vue.use(Vuex);

const apiHeaders = { 'Accept': 'application/json', 'user-key': config.API_KEY,};
const apiQuery = 'fields name,cover.*,rating,first_release_date; sort rating desc ; where first_release_date > 1577836800; where rating >70; limit 50;'
const imageCoverBaseUrl = 'https://images.igdb.com/igdb/image/upload/t_cover_big/';

export default new Vuex.Store({
  state: {
    title: 'gameR',
    games: [],
  },
  getters: {
    countGames: state => state.games.length,
    getImageUrl: (state) => (id) => {
      let imageId = state.games.find(x => x.id == id);
      let url = imageId.cover != undefined ? imageCoverBaseUrl + imageId.cover.image_id + '.jpg' : placeholderImage;
      return url
    }
  },
  mutations: {
    ADD_GAME: (state, game) => state.games.push(game),
    SAVE_GAMES: (state, games) => {state.games = games},
    REMOVE_ALL: (state) => {state.games = []},
  },
  actions: {
    async loadGames(context) {
      let game = await Axios({
        method: 'POST',
        url: '/api/games',
        headers: apiHeaders,
        data: apiQuery,
      });
      context.commit("SAVE_GAMES", game.data)
    },
    removeGame: (context, game) => context.commit("REMOVE_GAME", game),
    removeAll ({commit}) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('REMOVE_ALL')
          resolve()
        }, 100)
      })
    }
  },
  modules: {
  },
});