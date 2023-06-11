<template>
  <span class="capitalize hover:cursor-pointer">
    <NuxtLink :to="to || page">
      {{ text }}
      <slot></slot>
    </NuxtLink>
  </span>
</template>
<script lang="ts">
export default {
  props: ["text", "page", "to"],
};
</script>
