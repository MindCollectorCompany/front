<template>
  <div class="min-w-full">
    <v-select :label="label" :items="items" :variant="variant" hide-details />
  </div>
</template>
<script>
export default {
  // props: ["name", "text"],
  props: {
    items: {
      type: Array,
      default: [],
      required: false,
    },
    label: {
      type: String,
      default: undefined,
      required: false,
    },
    variant: {
      type: String,
      default: "outlined",
      required: false,
    },
  },
  // emits: ["update:text"],
};
</script>
