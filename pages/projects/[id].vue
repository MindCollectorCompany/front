<template>
  <div>
    <div>
      <span class="text-lg">Project {{ $route.params.id }}</span>
    </div>
    <div class="mt-8 flex justify-center">
      <div>
        <div class="mb-4 text-base">Common settings</div>

        <div class="grid max-w-sm grid-cols-2 gap-4">
          <span>Project name</span>
          <Input name="name" v-model:text="name" />
          <span>Project description</span>
          <Input
            name="description"
            v-model:text="description"
            type="textarea"
          />
          <Button type="primary" @click="onSave"> Save </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMessage } from "naive-ui";
const message = useMessage();

function onSave() {
  message.success("Project created successfully");
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
