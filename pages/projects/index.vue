<template>
  <div class="flex flex-col gap-4">
    <PageBlock title="Page title" buttonText="main btn" :onBtn="onOpenModal">
      some content 1
    </PageBlock>
    <PageBlock title="Sub title" buttonText="main btn" :onBtn="onOpenModal">
      Some content 2
    </PageBlock>
    <PageBlock title="Sub title" buttonText="main btn" :onBtn="onOpenModal">
      Some content 3
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
