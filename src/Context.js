import React from "react";

const UserContext = React.createContext({
    loggedIn: false,
    user: null,
    logIn: () => {},        // сетват се в App.js
    logOut: () => {}
});

export default UserContext;