<template>
  <div>
    <div>
      <span class="text-lg">Research {{ researchName }}</span>
    </div>
    <div class="mt-8 flex justify-center">
      <div class="grid max-w-sm grid-cols-2 gap-4">
        <span>Research name</span>
        <Input name="name" v-model:value="store.record.name" />
        <span>Research description</span>
        <Input
          name="description"
          v-model:value="store.record.description"
          type="textarea"
        />
        <Button type="primary" @click="onCreate"> Create </Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMessage } from "naive-ui";
import { useResearchesStore } from "~/store/researches";
const store = useResearchesStore();
const message = useMessage();

function onCreate() {
  message.success("Research created successfully");
}

const researchName = store.record.name;

useHeadSafe({
  title: `Research ${researchName}`,
});
</script>
