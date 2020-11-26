
const getCookieValue = (name) => {
    // console.log(`document.cookie = ${document.cookie}`);
    const cookieValue = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
    // console.log(cookieValue ? cookieValue[2] : null);
    return cookieValue ? cookieValue[2] : null;
}

export default getCookieValue;