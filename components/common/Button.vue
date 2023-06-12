<template>
  <NButton
    :type="type === 'light' ? 'tertiary' : type"
    class="rounded-lg bg-[--n-color]"
    :theme-overrides="buttonThemeOverrides"
  >
    <slot></slot>
  </NButton>
</template>

<script lang="ts" setup>
import { NButton, ButtonProps } from "naive-ui";
</script>

<script lang="ts">
type ButtonThemeOverrides = NonNullable<ButtonProps["themeOverrides"]>;

const buttonThemeOverrides: ButtonThemeOverrides = {
  // heightMedium: "40px",
  // textColor: "rgba(24, 127, 231, 1)",
  // primary
  colorPrimary: "#E91F63",
  textColorPrimary: "white",
  colorFocusPrimary: "#E91F63",
  colorHoverPrimary: "#FB3F85",
  colorPressedPrimary: "#E91F63", // .active
  borderPrimary: "0px solid #fff",
  borderFocusPrimary: "#E91F63",
  borderHoverPrimary: "#FB3F85",
  borderPressedPrimary: "#E91F63",
  // secondary
  // info
  // success
  // warning
  // danger
  // light == tertieary
  colorTertiary: "#DEE2E8",
  textColorTertiary: "#344767",
  // dark
  // white
};

export default {
  props: ["type"],
};
</script>
