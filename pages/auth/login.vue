<template>
  <div class="m-auto flex max-w-xs flex-col gap-3">
    <div class="grid grid-cols-2 gap-2">
      <span>login:</span>
      <Input label="login" name="login" v-model:text="loginValue" />
      <span>password:</span>
      <Input label="password" name="pass" v-model:text="passValue" />
    </div>
    <Button @click="onSubmit">Send</Button>
  </div>
</template>
<script>
const API = "http://api.mindcollector.io/api/token/";

export default {
  data() {
    return {
      loginValue: "",
      passValue: "",
    };
  },
  methods: {
    async onSubmit() {
      const payload = {
        username: this.loginValue,
        password: this.passValue,
      };

      // console.log("payload ", payload);

      const { data, error } = await useFetch(API, {
        method: "POST",
        body: JSON.stringify(payload),
      });

      if (error) {
        console.error("onSubmit ", error);
        alert("Login Error");
        return;
      }

      console.log("data ", data);
    },
  },
};
</script>
