<template>
  <div
    class="flex h-[fit-content] w-3/4 items-center justify-between rounded-lg bg-white/80 pb-3 pl-8 pr-8 pt-3"
  >
    <div class="flex items-center gap-4">
      <Logo />
      <ProjectsList />
      <NavItem text="researches" page="/researches" />
      <NavItem text="$0.00" page="/balance" />
      <Button type="primary" @click="$router.push('/balance/chip-in')">
        Пополнить
      </Button>
    </div>
    <div class="flex">
      <Settings />
      <Button class="ml-7" @click="goToLogin" type="info">login</Button>
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
