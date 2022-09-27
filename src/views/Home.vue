<script lang="ts">
import TopNav from '../components/Topnav.vue';

export default {
  components: {TopNav}
};

</script>
<template>
  <div>
    <div class="topNavAndBanner">
      <TopNav/>
      <div class="banner">
        <h1>猫头鹰UI</h1>
        <h2>一个简便、特别的UI框架</h2>
        <p class="action">
          <router-link to="/doc" class="start">开启旅途</router-link>
        </p>
      </div>
      <div class="features">
        <ul>
          <li>
            <svg>
              <use xlink:href="#icon-vue"></use>
            </svg>
            <h3>基于 Vue 3</h3>
            <p>骄傲地使用了 Vue 3 Composition API</p>
          </li>
          <li>
            <svg>
              <use xlink:href="#icon-ts"></use>
            </svg>
            <h3>基于 TypeScript </h3>
            <p>源代码采用 TypeScript 书写（非严格检查）</p>
          </li>
          <li>
            <svg>
              <use xlink:href="#icon-light"></use>
            </svg>
            <h3>代码易读</h3>
            <p>每个组件的源代码都极其简洁</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  height: 42vh;
  background-color: #f5f5f5;
  clip-path: ellipse(80% 60% at 50% 40%);
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
    margin-top: 5px;

    .start {
      background-color: #553704;
      padding: 8px 24px;
      border-radius: 14px;
      color: white;

      &:hover {
        border: none;
      }
    }
  }
}

.features {
  margin: 64px auto;
  width: 400px;

  @media (min-width: 800px) {
    width: 800px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }

  > ul {
    display: flex;
    flex-wrap: wrap;

    > li {
      width: 400px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;

      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }

      > h3 {
        grid-area: title;
        font-size: 28px;
      }

      > p {
        grid-area: text
      }
    }
  }
}
</style>