<script lang="ts">
import TopNav from '../shared/Topnav.vue';
import {inject, Ref} from 'vue';

export default {
  components: {TopNav},
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    return {asideVisible};
  }
};
</script>

<template>
  <div>
    <TopNav/>
    <div class="content">
      <aside v-if="asideVisible">
        <h2>组件列表</h2>
        <ol class="componentsList">
          <li>
            <router-link to="/doc/switch">Switch组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
aside {
  width: 150px;
  padding: 73px 16px 16px 16px;
  background-color: #553704;
  color: white;
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;

  > h2 {
    margin-bottom: 4px;
  }

  > ol {
    > li {
      padding: 4px 0;
    }
  }

  @media (max-width: 500px) {
    position: fixed;
    top: 0;
    left: 0;
    padding: 73px 16px 16px 16px;
  }
}
</style>