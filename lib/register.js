export function register({ name, email }) {
    if (!name  || !email) {
      return errorMessage("WRONG_CREDENTIAL", `Username, password and email is required.`);
    }
  
    // Ref: https://stackoverflow.com/a/46181
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email)) {
      return errorMessage("WRONG_CREDENTIAL", `${email} is wrong.`);
    }
  
    if (isUserExists(name)) {
      return errorMessage(
        "DUPLICATE_USER",
        `${name} has already registered. Try another username(But never mind, don't do this.)`
      );
    }
  
    const lastUser = users[users.length - 1];
    console.log(lastUser);
    const id = lastUser ? lastUser.id + 1 : 0;
    console.log("users:before", users.length);
    users = users.concat([
      {
        name,
        email,
        id,
      },
    ]);
    console.log("users:after", users.length);
    console.log("users", JSON.stringify(users, null, 2));
  
    return {
      isSuccessful: true,
      payload: {},
    };
  }
  