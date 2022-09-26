<script lang="ts">
import Switch from '../../lib/Switch.vue';
import {ref} from 'vue';

export default {
  components: {Switch},
  setup() {
    const bool = ref(true);
    return {bool};
  }
};
</script>

<template>
  <Switch v-model:value="bool"/>
</template>

<style lang="scss" scoped>
</style>