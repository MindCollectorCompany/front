<template>
  <NButton :type="type" class="bg-[--n-color]">
    <slot></slot>
  </NButton>
</template>

<script setup>
import { NButton } from "naive-ui";
// export default {
//   props: ["name", "text"],
//   emits: ["update:text"],
// };
// const props = use
</script>

<script>
export default {
  // props: ["name", "text"],
  props: ["type"],
  // emits: ["update:text"],
};
</script>
