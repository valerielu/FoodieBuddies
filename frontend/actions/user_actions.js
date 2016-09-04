export const UserConstants = {
  DELETE_ACCOUNT: "DELETE_ACCOUNT",
  CREATE_HOST: "CREATE_HOST"
};

export const deleteAccount = (currentUser) => ({
  type: UserConstants.DELETE_ACCOUNT,
  currentUser
});

export const createHost = (host, currentUser) => ({
  type: UserConstants.CREATE_HOST,
  host,
  currentUser
});
