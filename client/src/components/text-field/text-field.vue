<template>
    <input
      :class="classNames"
      type="text"
      :value="value"
      @input="updateInput($event.target.value)"
    >
</template>

<script>
  export default {
    props: {
      size: {
        type: String,
        required: false,
      },
      value: {
        type: String,
        required: false,
      },
    },
    computed: {
      classNames() {
        const classNames = ['text-field'];

        if (this.size) {
          classNames.push(`text-field--${this.size}`);
        }

        return classNames;
      },
    },
    methods: {
      updateInput(value) {
        this.$emit('input', value);
      },
    },
  };
</script>

<style lang="scss">
  .text-field {
    font-size: 1rem;
    color: #fff;
    background-color: transparent;
    border: none;
    outline: none;
    width: 100%;
    padding: 8px 6px 6px;
    border-bottom: 2px solid #fff;

    &--large {
      padding: 16px 8px 12px;
      font-size: 1.25rem;
      border-width: 4px;
    }
  }
</style>
