<template>
  <div
    class="rounded-lg border-0 border-solid border-black bg-red-300 p-1 pl-3 pr-3 capitalize hover:cursor-pointer"
  >
    {{ text }}
  </div>
</template>

<script>
export default {
  props: ["text"],
};
</script>
