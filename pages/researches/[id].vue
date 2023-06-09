<template>
  <div>
    <div>
      <span class="text-lg">Research {{ $route.params.id }}</span>
    </div>
    <div class="mt-8 flex justify-center">
      <div class="grid max-w-sm grid-cols-2 gap-4">
        <span>Research name</span>
        <Input name="name" v-model:text="name" />
        <span>Research description</span>
        <Input name="description" v-model:text="description" type="textarea" />
        <Button type="primary" @click="onSuccess"> Create </Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMessage } from "naive-ui";

const message = useMessage();

function onSuccess() {
  message.success("Research created successfully");
}
</script>

<script lang="ts">
export default {
  data() {
    return {
      name: "",
      description: "",
    };
  },
  methods: {},
};
</script>
