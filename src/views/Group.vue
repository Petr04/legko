<template>
  <div class="group">
    <v-text-field
      v-model="search"
      placeholder="Нажмите для поиска и введите вопрос"
      solo hide-details rounded
      prepend-inner-icon="mdi-magnify"
      :clearable="true"
      clear-icon="mdi-close"
      class="search-field"
    />
    <network-warning v-if="$route.params.wifi" />

    <div class="content">
      <h2>Помощь по вопросам</h2>
      <block-question
        v-for="article in articles"
        :key="article.id"
        style="margin-left: calc(var(--margin-x) * -1)"
      >
        {{ article.title }}
      </block-question>
      <div v-if="!articles">
        Ничего не нашлось. Попробуйте переформулировать вопрос
      </div>
    </div>
  </div>
</template>

<style scoped>
.group {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
</style>

<script>
import BlockQuestion from '@/components/BlockQuestion.vue';
import NetworkWarning from '@/components/NetworkWarning.vue';

export default {
  data: () => ({
    articles: [],
    search: '',
  }),
  components: {
    BlockQuestion,
    NetworkWarning,
  },
  watch: {
    search(s) {
      this.$axios.get('articles/' + this.$route.params.id, {
        params: { search: s },
      })
        .then(response => this.articles = response.data)
        .catch(console.error);
    },
  },
  mounted() {
    this.$axios.get('articles/' + this.$route.params.id)
      .then(response => this.articles = response.data)
      .catch(console.error);
  }
};
</script>
