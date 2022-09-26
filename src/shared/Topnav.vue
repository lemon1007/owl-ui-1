<script lang="ts">
</script>

<template>
  <div>
    <div class="topNav">
      <div class="logo">LOGO</div>
      <ul class="menu">
        <li>菜单1</li>
        <li>菜单2</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.topNav {
  width: 100%;
  background-color: #553704;
  color: white;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

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