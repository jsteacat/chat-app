<template>
  <div id="app">
    <router-view></router-view>
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
      this.$socket.on('newMessage', (message) => {
        store.dispatch('newMessage', message);
      });
    },
  };
</script>
