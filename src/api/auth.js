// save a user to database
export const saveUser = (user) => {
  const currentUser = {
    email: user.email,
    name: user.displayName,
    img: user.photoURL,
    role: "user",
  };
  fetch(`${import.meta.env.VITE_API_URL}/users/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

// make a user a admin
// export const becomeAdmin = (email) => {
//   const currentUser = {
//     role: "admin",
//   };

//   return fetch(`${import.meta.env.VITE_API_URL}/users/${email}`, {
//     method: "PUT",
//     headers: {
//       "content-type": "application/json",
//     },
//     body: JSON.stringify(currentUser),
//   }).then((res) => res.json());
// };

// Get role of user
export const getRole = async (email) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/users/${email}`
  );
  const user = await response.json();
  return user?.role;
};
