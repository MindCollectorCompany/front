<template>
  <span class="capitalize hover:cursor-pointer">
    {{ text }}
  </span>
</template>
<script>
export default {
  props: ["text"],
};
</script>
