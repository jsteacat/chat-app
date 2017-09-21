<template>
  <button :class="classNames">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    props: {
      size: {
        type: String,
        required: false,
      },
      disabled: {
        type: Boolean,
        required: false,
      },
    },
    computed: {
      classNames() {
        const classNames = ['button'];

        if (this.size) {
          classNames.push(`button--${this.size}`);
        }

        if (this.disabled) {
          classNames.push('button--disabled');
        }

        return classNames;
      },
    },
  };
</script>

<style lang="scss">
  .button {
    background-color: #fff;
    color: #000;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 8px 10px;

    &--large {
      font-size: 1.25rem;
      padding: 12px 24px;
    }

    &--disabled {
      cursor: not-allowed;
      opacity: .7;
    }
  }
</style>
