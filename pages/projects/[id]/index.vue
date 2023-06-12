<template>
  <div class="flex flex-col gap-4">
    <PageBlock
      :title="`Researches: ${projectName}`"
      buttonText="Create research"
      :onBtn="onOpenModal"
      blockType="header"
    >
      <TableResearches :rows="list" />
    </PageBlock>
  </div>
  <!-- modal  -->
  <ModalCreateResearch v-model:isOpen="isModalOpen" />
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useProjectStore } from "~/store/project";
import { useResearchStore } from "~/store/research";

const projectName = useProjectStore().record.name;
const researchStore = useResearchStore();
const { list } = storeToRefs(researchStore);

useHeadSafe({
  title: `Project ${projectName}`,
});
</script>

<script lang="ts">
export default {
  data() {
    return {
      isModalOpen: false,
    };
  },
  methods: {
    onOpenModal() {
      this.isModalOpen = true;
    },
  },
};
</script>
