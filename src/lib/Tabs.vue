<script lang="ts">
import Tab from './Tab.vue';
import {computed, onMounted, onUpdated, ref} from 'vue';

export default {
  props: {
    selected: {
      type: String
    }
  },
  setup(props: any, context: any) {
    // @ts-ignore */
    const selectedItem = ref<HTMLDivElement>(null);
    // @ts-ignore */
    const indicator = ref<HTMLDivElement>(null);
    // @ts-ignore */
    const container = ref<HTMLDivElement>(null);
    const underline = () => {
      const {width} = selectedItem.value.getBoundingClientRect();
      indicator.value.style.width = width + 'px';
      const {left: left1} = container.value.getBoundingClientRect();
      const {left: left2} = selectedItem.value.getBoundingClientRect();
      const left = left2 - left1;
      indicator.value.style.left = left + 'px';
    };
    onMounted(underline);
    onUpdated(underline);

    const defaults = context.slots.default();
    defaults.forEach((tag: any) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs的子组件必须是Tab');
      }
    });

    const current = computed(() => {
      return defaults.find((tag: any) => tag.props.title === props.selected);
    });

    const titles = defaults.map((tag: any) => {
      return tag.props.title;
    });

    const select = (title: string) => {
      context.emit('update:selected', title);
    };
    return {defaults, titles, select, current, selectedItem, indicator, container};
  }
};
</script>

<template>
  <div class="owl-tabs">
    <div class="owl-tabs-nav" ref="container">
      <div class="owl-tabs-nav-item"
           :class="{selected:title===selected}"
           @click="select(title)"
           v-for="(title,index) in titles"
           :ref="el => {if(title===selected) selectedItem = el}"
           :key="index">{{ title }}
      </div>
      <div class="owl-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="owl-tabs-content">
      <component :is="current" :key="current.props.title"/>
    </div>
  </div>
</template>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.owl-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;

    &-item {
      display: none;

      &.selected {
        display: block;

      }
    }
  }
}
</style>