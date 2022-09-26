<script lang="ts">
import TopNav from '../shared/Topnav.vue';

export default {
  components: {TopNav}
};

</script>
<template>
  <div>
    <TopNav/>
    <div class="banner">
      <h1>猫头鹰UI</h1>
      <h2>一个简便、特别的UI框架</h2>
      <p class="action">
        <a href="https://github.com/lemon19961007/owl-ui">GitHub</a>
        <a>
          <router-link to="/doc">开始</router-link>
        </a>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  height: 92vh;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    padding-bottom: 7px;
  }

  h2 {
    padding-bottom: 7px;
  }

  .action {
    padding: 8px 0;

    a {
      background-color: #553704;
      padding: 5px 10px;
      border-radius: 14px;
      color: white;
      margin: 0 8px;
    }
  }
}
</style>