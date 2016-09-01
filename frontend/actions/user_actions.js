export const UserConstants = {
  DELETE_ACCOUNT: "DELETE_ACCOUNT"
};

export const deleteAccount = (currentUser) => ({
  type: UserConstants.DELETE_ACCOUNT,
  currentUser
});
