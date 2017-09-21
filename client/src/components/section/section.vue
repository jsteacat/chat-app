<template>
  <div :class="classNames">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      color: {
        type: String,
        required: false,
      },
      full: {
        type: Boolean,
        required: false,
      },
    },
    computed: {
      classNames() {
        const classNames = ['section'];

        if (this.color) {
          classNames.push(`section--${this.color}`);
        }

        if (this.full) {
          classNames.push('section--full');
        }

        return classNames;
      },
    },
  };
</script>

<style lang="scss">
  .section {
    display: flex;
    flex-direction: column;
    padding: 16px;

  &--black {
     background-color: #000;
   }

  &--full {
     align-items: baseline;
     align-self: stretch;
     flex: 1;
     overflow: auto;
   }
  }
</style>
