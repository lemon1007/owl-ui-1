<script lang="ts">
import {inject, Ref} from 'vue';

export default {
  setup() {
    const asideVisible = inject<Ref<boolean>>('x');
    const toggleAside = () => {
      if (asideVisible) {
        asideVisible.value = !asideVisible.value;
      }
    };
    return {toggleAside};
  }
};
</script>

<template>
  <div>
    <div class="topNav">
      <div class="logo" @click="toggleAside">LOGO</div>
      <ul class="menu">
        <li>菜单1</li>
        <li>菜单2</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.topNav {
  position: relative;
  width: 100%;
  background-color: #553704;
  color: white;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 8;

  .logo {
    padding-left: 16px;
  }

  .menu {
    display: flex;
    flex-direction: row;

    > li {
      padding-right: 16px;
    }
  }
}
</style>