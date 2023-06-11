<template>
  <div>
    <NInput
      :type="type"
      :name="name"
      :value="value"
      :placeholder="placeholder"
      :on-update:value="(value) => $emit('update:value', value)"
      class="focus:shadow-outline h-full w-full rounded-md border-2 bg-gray-100 focus:border-gray-300 focus:bg-white focus:outline-none"
    />
  </div>
</template>

<script lang="ts" setup>
import { NInput } from "naive-ui";
</script>

<script lang="ts">
export default {
  props: ["type", "name", "value", "placeholder"],
  emits: ["update:value"],
};
</script>
