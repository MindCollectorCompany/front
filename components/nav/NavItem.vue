<template>
  <span class="capitalize hover:cursor-pointer">
    <NuxtLink :to="page">
      {{ text }}
    </NuxtLink>
  </span>
</template>
<script lang="ts">
export default {
  props: ["text", "page"],
};
</script>
