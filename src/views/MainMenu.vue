<template>
  <div class="menu">
    <h1 class="header">
      Нажмите на иконку,<br>чтобы изучить нужное приложение
    </h1>

    <!--
      TODO: Поменять иконки:
      1. Дефолтные иконки мессенджеров (так людям привычнее)
      2. Другая иконка настроек (эта не центрированная)
    -->
    <!-- TODO: Добавить градиент -->

    <div class="apps">
      <router-link to="/telegram">
        <div class="app">
          <img src="@/assets/icons/telegram.png">
          <p>Telegram</p>
        </div>
      </router-link>
      
      <router-link to="/whatsapp">
        <div class="app">
          <img src="@/assets/icons/whatsapp.png">
          <p>WhatsApp</p>
        </div>
      </router-link>

      <router-link to="/vk">
        <div class="app">
          <img src="@/assets/icons/vk.png">
          <p>ВКонтакте</p>
        </div>
      </router-link>

      <router-link to="/wi-fi"> <!-- Поменять -->
        <div class="app">
          <img src="@/assets/icons/settings.png">
          <p>Настройки</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.header {
  font-size: 1.5em;
  font-weight: 500;
}

.menu {
  justify-content: center;
  height: 100%;
  align-items: flex-start;
  text-align: center;
  flex-direction: column;
  font-size: 1em;
}

.apps {
  display: grid;
  grid-template-columns: repeat(auto-fit, 70px);
  justify-content: center;
  margin-top: 40px;
  column-gap: 30px;
}

.app {
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  font-size: .9em;
}

.app img {
  width: 70px;
}

a {
  color: #000 !important;
  text-decoration: none
}
</style>