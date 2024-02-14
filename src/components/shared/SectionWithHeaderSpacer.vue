<template>
  <div class="section-spacer">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SpacerWithHeaderSpacer",
};
</script>

<style lang="scss" scoped>
.section-spacer {
  padding-top: 120px;
}
</style>
