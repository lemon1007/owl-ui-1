<script lang="ts">
import {provide, ref} from 'vue';

export default {
  name: 'App',
  setup() {
    const asideVisible = ref<boolean>(false);
    provide('x', asideVisible);
  }
};

</script>

<template>
  <router-view/>
</template>

<style>
</style>
