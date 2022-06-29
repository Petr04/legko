<template>
  <div class="wifi-container">
    <h2 class="badge">Подключение интернета</h2>
    <div class="h-container" style="gap: 1.2em; margin: 1.3em 0">
      <img src="@/assets/wifi.svg">
      <h2 style="font-weight: 500">Wi-Fi</h2>
    </div>
    <!-- TODO: увеличить размер текста (проконсультироваться со всеми) -->
    <big-numbers-list
      color="#7a85e5"
    >
      <!-- TODO: Поменять надписи под Android и добавить изображения -->
      <!-- Можно потом сделать 2 списка инструкций для Android и iOS -->
      <big-numbers-li title="Зайдите в настройки">
        <img src="@/assets/image1.png">
        <p>
          Нажмите на иконку с механизмом, так вы сможете перейти в настройки вашего телефона
        </p>
      </big-numbers-li>
      <big-numbers-li title="Найдите надпись Wi-Fi и нажмите на неё">
        <!-- TODO: Вставить изображение -->
      </big-numbers-li>
      <big-numbers-li title="Нажмите на ползунок">
        <!-- TODO: Вставить изображение -->
      </big-numbers-li>
      <big-numbers-li title="Найдите название вашей сети">
        <!-- TODO: Вставить изображение -->
      </big-numbers-li>
    </big-numbers-list>
  </div>
</template>

<style scoped>
.wifi-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
</style>

<script>
import BigNumbersList from '@/components/BigNumbersList.vue';
import BigNumbersLi from '@/components/BigNumbersLi.vue';

export default {
  components: {
    BigNumbersList,
    BigNumbersLi,
  },
};
</script>
