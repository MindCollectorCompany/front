<template>
  <div>
    <NTable :bordered="false" :single-line="false">
      <thead>
        <slot name="thead"></slot>
      </thead>
      <tbody>
        <slot name="tbody"></slot>
      </tbody>
    </NTable>
  </div>
</template>

<script lang="ts" setup>
import { NTable } from "naive-ui";
</script>
