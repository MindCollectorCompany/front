<template>
  <div class="flex flex-col gap-4">
    <PageBlock
      title="Researches"
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
import { useResearchStore } from "~/store/research";
import { StatusKind } from "~/types/generic";

const store = useResearchStore();
const { list } = storeToRefs(store) as any;

useHeadSafe({
  title: `Researches`,
});
</script>

<script lang="ts">
export default {
  data() {
    return {
      isModalOpen: false,
      titleBlock: {
        rows: [
          {
            id: 1,
            name: "name 1",
            keywords: ["a", "b", "c"],
            status: StatusKind.ACCEPTED,
          },
          {
            id: 2,
            name: "name 2",
            keywords: ["d1", "d2", "d3"],
            status: StatusKind.PENDING,
          },
          {
            id: 3,
            name: "name 3",
            keywords: ["key 1", "key 2"],
            status: StatusKind.DECLINED,
          },
        ],
      },
      secondBlock: {
        rows: [
          {
            id: 7,
            name: "name 100",
            keywords: ["key A", "key B", "key B"],
            status: StatusKind.PENDING,
          },
        ],
      },
    };
  },
  methods: {
    onOpenModal() {
      this.isModalOpen = true;
    },
  },
};
</script>
