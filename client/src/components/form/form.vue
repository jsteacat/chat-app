<template>
  <form class="form">
    <slot></slot>
  </form>
</template>

<script>
  export default {};
</script>

<style lang="scss">
  .form {
    display: flex;
    flex-direction: column;
  }
</style>
