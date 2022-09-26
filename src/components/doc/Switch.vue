<script lang="ts">
import SwitchDemo from '../../lib/SwitchDemo.vue';
import {ref} from 'vue';

export default {
  components: {SwitchDemo},
  setup() {
    const bool = ref(true);
    return {bool};
  }
};
</script>

<template>
  <SwitchDemo v-model:value="bool"/>
</template>

<style lang="scss" scoped>
</style>