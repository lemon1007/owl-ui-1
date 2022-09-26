<script lang="ts">
import SwitchDemo from '../../lib/SwitchDemo.vue';
import {ref} from 'vue';

export default {
  components: {SwitchDemo},
  setup() {
    const checked = ref(true);
    return {checked};
  }
};
</script>

<template>
  <SwitchDemo v-model:value="checked"/>
</template>

<style lang="scss" scoped>
</style>