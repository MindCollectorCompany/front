<template>
  <div class="flex flex-col gap-4">
    <PageBlock
      title="Page title"
      buttonText="main btn"
      :onBtn="onOpenModal"
      blockType="header"
    >
      <Table :cols="titleBlock.cols" :rows="titleBlock.rows" />
    </PageBlock>
    <PageBlock title="Sub title" buttonText="main btn" :onBtn="onOpenModal">
      <Table :cols="secondBlock.cols" :rows="secondBlock.rows" />
    </PageBlock>
    <PageBlock title="Sub title" buttonText="main btn" :onBtn="onOpenModal">
      <Table />
    </PageBlock>
  </div>
  <!-- modal  -->
  <Modal
    title="Modal title"
    :isOpen="isModalOpen"
    :onClose="onCloseModal"
    :onAccept="onModalAccept"
    acceptText="Button"
  >
    content
  </Modal>
</template>

<script lang="ts">
export default {
  data() {
    return {
      isModalOpen: false,
      titleBlock: {
        cols: ["#", "name", "actual", "options"],
        rows: [
          { id: 1, name: "research 1", balance: 7 },
          { id: 2, name: "research 2", balance: 30 },
          { id: 3, name: "research 3", balance: 2 },
        ],
      },
      secondBlock: {
        cols: ["#", "name", "actual", "options"],
        rows: [{ id: 7, name: "research 7", balance: 42 }],
      },
    };
  },
  methods: {
    onModalAccept() {
      this.isModalOpen = false;
    },
    onCloseModal() {
      this.isModalOpen = false;
    },
    onOpenModal() {
      this.isModalOpen = true;
    },
  },
};
</script>
