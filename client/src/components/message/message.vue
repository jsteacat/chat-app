<template>
  <div :class="classNames">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      isSelf: {
        type: Boolean,
        required: false,
      },
    },
    computed: {
      classNames() {
        const classNames = ['message'];

        if (this.isSelf) {
          classNames.push('message--self');
        }

        return classNames;
      },
    },
  };
</script>

<style lang="scss">
  .message {
    display: inline-block;
    background-color: #000;
    color: #fff;
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }

    &--self {
      background-color: #4b4b4b;
      align-self: flex-end;
    }

    &__user {
      display: flex;
      width: 100%;
      padding: 16px 16px 0;
      color: #FF9800;
    }

    &__content {
      padding: 16px;
      display: flex;
      width: 100%;
    }
  }
</style>
