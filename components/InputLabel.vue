<template>
  <div class="flex gap-2">
    <span v-if="label">{{ label }}</span>
    <input
      type="text"
      :name="name"
      class="focus:shadow-outline rounded-md border-2 bg-gray-100 focus:border-gray-300 focus:bg-white focus:outline-none"
      :value="text"
      @input="$emit('update:text', $event.target.value)"
    />
  </div>
</template>
<script>
export default {
  props: ["label", "name", "text"],
  emits: ["update:text"],
};
</script>
