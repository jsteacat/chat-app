<template>
  <div :class="classNames">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      inline: {
        type: Boolean,
        required: false,
      },
      full: {
        type: Boolean,
        required: false,
      },
    },
    computed: {
      classNames() {
        const classNames = ['form__group'];

        if (this.inline) {
          classNames.push('form__group--inline');
        }

        if (this.full) {
          classNames.push('form__group--full');
        }

        return classNames;
      },
    },
  };
</script>

<style lang="scss">
  .form__group {
    display: flex;
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }

    &--inline {
      margin-bottom: 0;
      margin-left: 16px;

      &:first-child {
        margin-left: 0;
      }
    }

    &--full {
      flex: 1;
      align-self: stretch;
    }
  }
</style>
