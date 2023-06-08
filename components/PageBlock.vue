<template>
  <div class="flex flex-col gap-4">
    <div class="flex items-center justify-between">
      <span :class="blockType === 'header' ? 'text-xl' : 'text-lg'">{{
        title
      }}</span>
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
  props: ["title", "buttonText", "onBtn", "blockType"],
};
</script>
