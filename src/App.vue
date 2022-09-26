<script lang="ts">
import {provide, ref} from 'vue';
import {router} from './router';

export default {
  name: 'App',
  setup() {
    const width = document.documentElement.clientWidth;
    const asideVisible = ref(width > 500);
    provide('asideVisible', asideVisible);

    router.afterEach(() => {
      asideVisible.value = false;
    });
  }
};

</script>

<template>
  <router-view/>
</template>

<style lang="scss">
</style>
