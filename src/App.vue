<script lang="ts">
import {provide, ref} from 'vue';
import {router} from './router';

export default {
  name: 'App',
  setup() {
    const asideVisible = ref<boolean>(false);
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

<style>
</style>
