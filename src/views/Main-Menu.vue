<template>
  <div class="menu">
    <div>
      Нажмите на кнопку,
      чтобы изучить нужное приложение
    </div>

    <div class="apps">
      <router-link to="/telegram">
        <div class="app">
          <img src="@/assets/icons/telegram.png" alt="" width="70">
          <p>
            Telegram
          </p>
        </div>
      </router-link>
      
      <router-link to="/whatsapp">
        <div class="app">
          <img src="@/assets/icons/whatsapp.png" alt="" width="70">
          <p>
            WhatsApp
          </p>
        </div>
      </router-link>

      <router-link to="/vk">
        <div class="app">
          <img src="@/assets/icons/vk.png" alt="" width="70">
          <p>
            VK
          </p>
        </div>
      </router-link>

      <router-link to="/settings">
        <div class="app">
          <img src="@/assets/icons/settings.png" alt="" width="70">
          <p>
            Настройки
          </p>
        </div>
      </router-link>
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
  margin-top: 70px;
  font-weight: bold;
}
.apps {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 50px;
  column-gap: 20px;
}

a {
  color: #000 !important;
  text-decoration: none
}
</style>