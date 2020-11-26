// Actions

export const setUser = (payload) => ({
  type: 'SET_USER',
  payload,
});

export const deleteUser = (payload) => ({
  type: 'DELETE_USER',
  payload,
});

export const loginRequest = (payload) => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const logoutRequest = (payload) => ({
  type: 'LOGOUT_REQUEST',
  payload,
});
