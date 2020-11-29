import React from "react";

const UserContext = React.createContext({
    user: null,
    logIn: () => {},        // сетват се в App.js
    logOut: () => {}
});

export default UserContext;