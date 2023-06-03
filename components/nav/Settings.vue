<template>
  <NDropdown
    trigger="hover"
    placement="bottom-start"
    :options="options"
    @select="handleSelect"
  >
    <NButton>Settings</NButton>
  </NDropdown>
</template>

<script lang="ts" setup>
import { NDropdown, NButton } from "naive-ui";
</script>

<script lang="ts">
enum KeyKind {
  PROJECT_SETTINGS = "project-settings",
  ACCOUNT = "account",
  LOG_OUT = "log-out",
}

export default {
  data() {
    return {
      options: [
        {
          label: "Project settings",
          key: KeyKind.PROJECT_SETTINGS,
        },
        {
          label: "Account",
          key: KeyKind.ACCOUNT,
        },
        {
          label: "Log out",
          key: KeyKind.LOG_OUT,
        },
      ],
    };
  },
  methods: {
    handleSelect(key: string | number) {
      switch (key) {
        case KeyKind.PROJECT_SETTINGS: {
          navigateTo(`/project-settings`);
          break;
        }
        case KeyKind.ACCOUNT: {
          navigateTo(`/auth/account`);
          break;
        }
        case KeyKind.LOG_OUT: {
          navigateTo(`/auth/log-out`);
          break;
        }
        default: {
          navigateTo(`/`);
        }
      }
    },
  },
};
</script>
