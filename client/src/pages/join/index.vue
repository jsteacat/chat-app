<template>
  <div class="section section--black section--full">
    <form class="form" @submit.prevent="join(room, username)">
      <div class="form__group">
        <input
          class="text-field text-field--large"
          type="text"
          placeholder="Room"
          v-model="room"
        >
      </div>
      <div class="form__group">
        <input
          class="text-field text-field--large"
          type="text"
          placeholder="Username"
          v-model="username"
        >
      </div>
      <div class="form__group">
        <button
          class="button button--large"
          :class="{ 'button--disabled': !isValid }"
          type="submit"
          :disabled="!isValid"
        >Войти</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        room: null,
        username: null,
      };
    },
    computed: {
      isValid() {
        let isValid = true;

        if (!this.room || !this.username) {
          isValid = false;
        }

        return isValid;
      },
    },
    methods: {
      join(room, username) {
        if (this.isValid) {
          this.$store.dispatch('join', { username, room });
        }
      },
    },
  };
</script>
