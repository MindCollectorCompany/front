<template>
  <div>
    <div>
      <span class="text-lg">Project settings</span>
    </div>
    <div class="mt-8 flex justify-center">
      <div>
        <div class="mb-4 text-base">Common settings</div>

        <div class="grid max-w-sm grid-cols-2 gap-4">
          <span>Project name</span>
          <Input name="name" v-model:value="store.record.name" />
          <span>Project description</span>
          <Input
            name="description"
            v-model:value="store.record.description"
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
import { useProjectStore } from "~/store/project";
const store = useProjectStore();
const message = useMessage();

useHeadSafe({
  title: `Project ${store.record.name}`,
});

function onSave() {
  message.success("Project created successfully");
}
</script>
