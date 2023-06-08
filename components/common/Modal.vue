<template>
  <div>
    <n-modal
      :show="isOpen"
      :mask-closable="false"
      preset="dialog"
      :on-close="onClose"
      class="min-w-fit"
      :icon="() => null"
    >
      <template #header>
        <div class="-m-8">{{ title }}</div>
      </template>
      <div class="min-w-fit">
        <slot></slot>
      </div>
      <template #action>
        <div class="w-full text-left">
          <Button @click="onAccept" type="info">
            {{ acceptText }}
          </Button>
        </div>
      </template>
    </n-modal>
  </div>
</template>

<script lang="ts" setup>
import { NModal } from "naive-ui";
</script>

<script lang="ts">
export default {
  props: ["isOpen", "onClose", "title", "onAccept", "acceptText"],
};
</script>
