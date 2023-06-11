<template>
  <div class="flex flex-col gap-4">
    <PageBlock
      title="Projects"
      buttonText="Create project"
      :onBtn="onOpenModal"
      blockType="header"
    >
      <TableProjects :rows="list" />
    </PageBlock>
  </div>
  <!-- modal  -->
  <ModalCreateProject v-model:isOpen="isModalOpen" />
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useProjectStore } from "~/store/project";

const store = useProjectStore();
const { list } = storeToRefs(store) as any;

useHeadSafe({
  title: `Projects`,
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
