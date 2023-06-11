<template>
  <NuxtErrorBoundary>
    <NMessageProvider>
      <NNotificationProvider>
        <div class="h-screen bg-[#E5E5E5]">
          <NuxtLoadingIndicator />
          <Header />
          <PageWrapper>
            <NuxtPage />
          </PageWrapper>
        </div>
      </NNotificationProvider>
    </NMessageProvider>
    <!--  -->
    <template #error="{ error }">
      <p>An error occurred: {{ error }}</p>
    </template>
  </NuxtErrorBoundary>
</template>

<script lang="ts" setup>
import { NMessageProvider, NNotificationProvider } from "naive-ui";
</script>
