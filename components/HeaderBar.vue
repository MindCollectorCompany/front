<template>
  <div
    class="flex h-[fit-content] w-full items-center justify-between rounded-lg bg-white/80 pb-3 pl-8 pr-8 pt-3"
  >
    <div class="flex items-center gap-4">
      <Logo />
      <NavItem text="Projects" page="/projects" />
    </div>
    <div class="item-center flex gap-4">
      <NavItem text="Account" page="/auth/account" />
      <NavItem text="Log out" page="/auth/log-out" />
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
