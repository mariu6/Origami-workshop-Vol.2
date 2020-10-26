const getNavigation = (userId) => {

    const links = [
        {
            title: "Publications",
            link: "/"
        },
        {
            title: "Share your thoughts",
            link: "/share"
        },
        {
            title: "Login",
            link: "/login"
        },
        {
            title: "Profile",
            link: `/profile/${userId}`
        },
        {
            title: "Register",
            link: "/register"
        }
    ];

    return links;
}

export default getNavigation;