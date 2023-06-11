<template>
  <NButton :type="type" class="rounded-lg bg-[--n-color]">
    <slot></slot>
  </NButton>
</template>

<script lang="ts" setup>
import { NButton } from "naive-ui";
</script>

<script lang="ts">
export default {
  props: ["type"],
};
</script>
