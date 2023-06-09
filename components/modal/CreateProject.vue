<template>
  <Modal
    title="Create project"
    :isOpen="isOpen"
    :onClose="onCloseModal"
    :onAccept="onCreateProject"
    acceptText="Create"
  >
    <div class="grid grid-cols-2 gap-4">
      <span>Name</span>
      <Input name="name" v-model:text="name" />
      <span>Description</span>
      <Input name="description" v-model:text="description" />
    </div>
  </Modal>
</template>

<script lang="ts">
import { storeToRefs } from "pinia";
import { useProjectsStore } from "@/store/projects";

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
    const store = useProjectsStore();
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
      this.addRecord(this.name);
    },
  },
};
</script>
