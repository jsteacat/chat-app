<template>
  <div id="app">
    Hello Vue Chat!
  </div>
</template>

<script>
  import store from './store';
  import { router } from './bootstrap';

  export default {
    name: 'ChatApp',
    router,
    store,
    mounted() {
      this.$socket.emit('newMessage', 'Send new message!');
    },
  };
</script>
