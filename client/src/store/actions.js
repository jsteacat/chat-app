/**
 *
 * @param commit
 * @param payload
 */
export const sendMessage = ({ commit }, payload) => {
  commit('SEND_MESSAGE', payload);
};

/**
 *
 * @param commit
 * @param payload
 */
export const newMessage = ({ commit }, payload) => {
  commit('NEW_MESSAGE', payload);
};

/**
 *
 * @param commit
 * @param payload
 */
export const join = ({ commit }, payload) => {
  commit('JOIN', payload);
};

/**
 *
 * @param commit
 * @param payload
 */
export const leave = ({ commit }, payload) => {
  commit('LEAVE', payload);
};
