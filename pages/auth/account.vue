<template>
  <div>
    <div>
      <span class="text-lg">Account</span>
    </div>
    <div class="mt-8 flex justify-center">
      <div class="grid max-w-sm grid-cols-2 gap-4">
        <span>Name</span>
        <Input name="name" v-model:text="name" />
        <span>Surname</span>
        <Input name="surname" v-model:text="surname" type="textarea" />
        <Button type="primary" @click="onSave"> Save </Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMessage } from "naive-ui";
const message = useMessage();

function onSave() {
  message.success("Account data saved");
}
</script>

<script lang="ts">
export default {
  data() {
    return {
      name: "",
      surname: "",
    };
  },
  methods: {},
};
</script>
