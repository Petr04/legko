<template>
  <div class="article">
<!--     <div class="h-container" style="gap: 1.2em; margin: 1.3em 0">
      <img :src="'data:image/png;base64, ' + $route.params.icon" width="60">
      <h1 style="font-weight: 500">{{ $route.params.groupTitle }}</h1>
    </div>
 -->
    <h2
      class="badge"
      :style="'background: ' + $route.params.color"
    >
      {{ $route.params.title }}
    </h2>
    <network-warning v-if="$route.params.wifi" />
    <big-numbers-list :color="$route.params.color" v-if="steps">
      <big-numbers-li
        v-for="step in steps"
        :key="step.id"
        :title="step.title"
      >
        <div v-html="step.content"></div>
      </big-numbers-li>
    </big-numbers-list>
    <div v-else>Загрузка...</div>
  </div>
</template>

<style scoped>
.article {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;
}
</style>

<script>
import BigNumbersList from '@/components/BigNumbersList.vue';
import BigNumbersLi from '@/components/BigNumbersLi.vue';
import NetworkWarning from '@/components/NetworkWarning.vue';

export default {
  components: {
    BigNumbersList,
    BigNumbersLi,
    NetworkWarning,
  },
  data: () => ({
    steps: null,
  }),
  mounted() {
    this.$axios.get('steps/' + this.$route.params.id)
      .then(response => this.steps = response.data);
  },
};
</script>
