<template>
  <Modal
    title="Create research"
    :isOpen="isOpen"
    :onClose="onCloseModal"
    :onAccept="onCreateProject"
    acceptText="Create"
  >
    <div class="grid grid-cols-1 gap-4">
      <span>Name</span>
      <Input name="name" v-model:text="name" />
      <span>Description</span>
      <Input type="textarea" v-model:value="description" />
    </div>
  </Modal>
</template>

<script lang="ts">
import { storeToRefs } from "pinia";
import { useResearchesStore } from "@/store/researches";

export default {
  props: ["isOpen"],
  emits: ["update:isOpen"],
  data() {
    return {
      name: "",
      description: "",
    };
  },
  setup() {
    const store = useResearchesStore();
    const { list, record } = storeToRefs(store);

    return {
      list,
      record,
      addRecord: store.addRecord,
    };
  },
  methods: {
    closeModal() {
      this.$emit("update:isOpen", false);
    },
    onModalAccept() {
      this.closeModal();
    },
    onCloseModal() {
      this.closeModal();
    },
    onCreateProject() {
      this.closeModal();
      const kw: String[] = [""];
      this.addRecord(this.name, kw);
    },
  },
};
</script>
