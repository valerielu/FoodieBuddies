export const UserConstants = {
  DELETE_ACCOUNT: "DELETE_ACCOUNT",
  UPDATE_USER: "UPDATE_USER",
  REQUEST_SINGLE_USER: "REQUEST_SINGLE_USER",
  RECEIVE_SINGLE_USER: "RECEIVE_SINGLE_USER"
};

export const deleteAccount = (currentUser) => ({
  type: UserConstants.DELETE_ACCOUNT,
  currentUser
});

export const updateUser = (host, currentUser) => ({
  type: UserConstants.UPDATE_USER,
  host,
  currentUser
});

export const requestSingleUser = (userId) => ({
  type: UserConstants.REQUEST_SINGLE_USER,
  userId
});

export const receiveSingleUser = (user) => ({
  type: UserConstants.RECEIVE_SINGLE_USER,
  user
});
