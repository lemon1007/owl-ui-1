<script lang="ts">
import {inject, Ref} from 'vue';

export default {
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible');
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
  <div class="topNav">
    <div class="logo">
      <svg class="icon">
        <use xlink:href="#icon-owl"></use>
      </svg>
    </div>
    <ul class="menu">
      <li>
        <a href="https://github.com" class="owl-topNav-a">
          <svg class="icon">
            <use xlink:href="#icon-menu"></use>
          </svg>
        </a>
      </li>
      <li>
        <router-link to="/doc">
          <svg class="icon">
            <use xlink:href="#icon-menu"></use>
          </svg>
        </router-link>
      </li>
    </ul>
    <span class="toggleAside" @click="toggleAside">
      <svg class="icon">
        <use xlink:href="#icon-menu"></use>
      </svg>
    </span>
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
  justify-content: center;
  align-items: center;
  z-index: 8;

  .logo {
    padding-left: 16px;
    margin-right: auto;

    > svg {
      width: 45px;
      height: 45px;
    }
  }

  .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      padding-right: 16px;
    }
  }

  .toggleAside {
    position: absolute;
    top: 50%;
    left: 16px;
    width: 24px;
    height: 24px;
    transform: translateY(-50%);
    display: none;

    > svg {
      width: 23px;
      height: 23px;
    }
  }

  @media (max-width: 500px) {
    .logo {
      margin: 0 auto;
    }
    .menu {
      display: none;
    }
    .toggleAside {
      display: inline-block;
    }
  }
}

</style>