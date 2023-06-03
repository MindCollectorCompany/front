<template>
  <NDropdown
    trigger="hover"
    placement="bottom-start"
    :options="options"
    @select="handleSelect"
  >
    <NButton>Projects</NButton>
  </NDropdown>
</template>

<script lang="ts" setup>
import { NDropdown, NButton } from "naive-ui";
</script>

<!-- TODO add props support -->
<script lang="ts">
export default {
  data() {
    return {
      options: [
        {
          label: "Project 1",
          key: "p-1",
        },
        {
          label: "Project 2",
          key: "p-2",
        },
        {
          label: "Add new project",
          key: "new",
        },
      ],
    };
  },
  methods: {
    handleSelect(key: string | number) {
      navigateTo(`/projects/${key}`);
    },
  },
};
</script>
