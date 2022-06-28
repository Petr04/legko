<template>
  <div class="menu">
    <div>
      Нажмите на кнопку,
      чтобы изучить нужное приложение
    </div>

    <div class="apps">
        <div class="app">
          <img src="@/assets/icons/telegram_icon-icons.com_53603.png" alt="" width="70">
          <p>
            Telegram
          </p>
        </div>
        <div class="app">
          <img src="@/assets/icons/telegram_icon-icons.com_53603.png" alt="" width="70">
          <p>
            WhatsApp
          </p>
        </div>
        <div class="app">
          <img src="@/assets/icons/telegram_icon-icons.com_53603.png" alt="" width="70">
          <p>
            VK
          </p>
        </div>
        <div class="app">
          <img src="@/assets/icons/telegram_icon-icons.com_53603.png" alt="" width="70">
          <p>
            Настройки
          </p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main-Menu'
}
</script>

<style scoped>
.menu {
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: column;
  font-size: larger;
  margin-top: 10px;
  font-weight: bold;
}
.apps {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 30px;
  column-gap: 20px;
}
.app {
  /* margin: 10px; */
}
</style>