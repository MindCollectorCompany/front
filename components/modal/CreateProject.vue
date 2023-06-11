<template>
  <Modal
    title="Create project"
    :isOpen="isOpen"
    :onClose="onCloseModal"
    :onAccept="onCreateProject"
    acceptText="Create"
  >
    <div class="grid grid-cols-1 gap-4">
      <span>Name</span>
      <Input name="name" v-model:value="name" />
      <span>Description</span>
      <Input type="textarea" v-model:value="description" />
    </div>
  </Modal>
</template>

<script lang="ts">
import { storeToRefs } from "pinia";
import { useProjectStore } from "~/store/project";

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
    const store = useProjectStore();
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
