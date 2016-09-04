export const deleteAccount = (currentUser, success, error) => {
  $.ajax({
    method: "DELETE",
    url: `/api/users/${currentUser.id}`,
    dataType: "json",
    success,
    error
  });
};
export const editAccount = (credentials, success, error) => {
  $.ajax({
    method: "PATCH",
    url: "api/session",
    dataType: "json",
    data: {user: credentials},
    success,
    error
  });
};

export const createHost = (host, currentUser, success, error) => {
  $.ajax({
    method: "PATCH",
    url: `/api/users/${currentUser.id}`,
    dataType: "json",
    data: {user: host},
    success,
    error
  });
};
