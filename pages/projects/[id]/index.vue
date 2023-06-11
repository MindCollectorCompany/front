<template>
  <div class="flex flex-col gap-4">
    <PageBlock
      :title="`Project ${projectName}`"
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
import { useProjectsStore } from "~/store/projects";
import { useResearchesStore } from "~/store/researches";

const projectName = useProjectsStore().record.name;
const researchStore = useResearchesStore();
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
