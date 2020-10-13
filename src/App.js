import React from "react";

// Example is creating a user with a password
// Example code is taken from here >> https://firebase.google.com/docs/auth/web/password-auth

function App({ firebase }) {
  const createAccount = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword("yasmikash@gmail.com", "yasmikash")
      .then((res) => {
        // Whoo-hoo! User signed in!!
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>Creating a new account</h2>
      <button onClick={createAccount}>Create Account</button>
    </div>
  );
}

export default App;
