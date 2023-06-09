<template>
  <NMessageProvider>
    <div class="h-screen bg-[#E5E5E5]">
      <NuxtLoadingIndicator />
      <Header />
      <PageWrapper>
        <NuxtPage />
      </PageWrapper>
    </div>
  </NMessageProvider>
</template>

<script lang="ts" setup>
import { NMessageProvider } from "naive-ui";
</script>
