<template>
  <div class="stats">
    <p>There are currently {{ countGames }} games</p>
  </div>
</template>

<script>
import { mapGetters} from 'vuex';

export default {
  name: 'Stats',
  computed: {
    ...mapGetters([
      'countGames',
    ]),
  }
};
</script>
<style scoped lang="scss">
.stats {
  font-size: 15px;
	font-weight: bold;
	padding: 9px 24px;
}
</style>