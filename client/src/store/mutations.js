import Vue from 'vue';

export default {
  NEW_MESSAGE: (state, message) => {
    state.messages.push(message);
  },
  SEND_MESSAGE: (state, message) => {
    message = {
      message,
      username: state.username,
    };

    Vue.socket.emit('newMessage', message);
  },
  JOIN: (state, { username, room }) => {
    Vue.socket.emit('enterRoom', room);

    state.room = room;
    state.username = username;
    state.hasJoined = true;

    Vue.router.push({
      name: 'room.index',
    });
  },
  LEAVE: (state) => {
    Vue.socket.emit('leaveRoom', state.room);

    state.messages = [];
    state.hasJoined = false;
  },
};
