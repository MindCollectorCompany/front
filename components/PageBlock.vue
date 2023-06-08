<template>
  <div class="flex flex-col gap-4 border-2">
    <div class="flex items-center justify-between">
      <span>{{ title }}</span>
      <span>
        <Button @click="onBtn" type="info">
          {{ buttonText }}
        </Button>
      </span>
    </div>
    <div><slot></slot></div>
  </div>
</template>

<script lang="ts">
export default {
  props: ["title", "buttonText", "onBtn"],
};
</script>
