<template>
  <div
    class="flex h-[fit-content] w-3/4 items-center justify-between rounded-lg bg-white/80 pb-3 pl-8 pr-8 pt-3"
  >
    <div class="flex items-center gap-4">
      <Logo />
      <!-- <Select label="project" :items="['Project 1', 'Project 2']" /> -->
      <NavItem label="researches" page="/researches" />
    </div>
    <div class="flex">
      <!-- <NavList /> -->
      <Button class="ml-7 text-white" @click="goToLogin">login</Button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goToLogin() {
      navigateTo("/auth/login");
    },
  },
};
</script>
