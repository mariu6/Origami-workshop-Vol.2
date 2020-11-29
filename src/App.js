import {  useState, useEffect } from "react";
// import { ThemeProvider } from "styled-components";
import UserContext from './Context';
// import loadingGif from "./images/RGCloeg.gif";
import loadingPic from "./images/loadingHeaderPic.png";
import getCookieValue from "./utils/cookieParser";

const App = (props) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const logIn = (user) => {
        setUser({
            loggedIn: true,
            ...user
        });
        // console.log(`this.state: loggedIn (true), user: ${this.state.user.username}`)
    }

    const logOut = () => {
        document.cookie = "x-auth-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;"  // правя кукито=нищо. Ако искам и да го изтрия - задавам му да експайърне през 1970 година  
        setUser({
            loggedIn: false    // setUser презаписва (не мърджва), затова ако не го напишем, ще бъде като user: null т.е. няма да съществува
        })
    }

    useEffect(() => {               // При първоначално зареждане или рефреш влиза тук - в края слагаме празни квадратни скоби, т.е. няма да следи нищо, за да се ъпдейтне
        const token = getCookieValue("x-auth-token");   // взимам от браузъра стойността на посочения токен ("x-aut-token")

        if (!token) {      // ако няма токен (първо влизане или логаутнат или изтекло куки), излизаме от профила и връщаме     
            console.log("No token!!!!!!");
            logOut();
        }

        fetch("http://localhost:9999/api/user/verify", {  // проверявам на сървъра дали срещу това куки има потребител
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        }).then((promise) => {
            console.log(promise);
            return promise.json();
        }).then(response => {
            if (response.status) {
                console.log(`resp user: ${response.user.username}`);
                logIn({
                    username: response.user.username,
                    id: response.user._id
                });
            } else {
                logOut();
            }
            setLoading(false);   // за да махнем спинъра
            // console.log(`loading: ................` + loading);
        })
    }, [])

    if (loading) {      // слагаме спинър по подразбиране, който ще се махне, когато феча приключи
        return (
            // <img src={loadingGif} alt="" />  
            <img src={loadingPic} alt="" /> // може да е копие на страницата, но като снимка
        )
    }

    return (
        <UserContext.Provider value={{    // ползвам провайдер на топ ниво, за да може всички нестнати компоненти (или до следващият провайдер) да имат достъп.
            user,
            logIn,
            logOut
        }}>
            {props.children}
        </UserContext.Provider>
    )
}


// class App extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             loggedIn: null,     // може да ползваме false или стринг, например "user", "guest", "admin" и прочее...
//             user: null,
//         }
//     }

//     componentDidMount() {               // При първоначално зареждане или рефреш влиза тук
//         const token = getCookieValue("x-auth-token");   // взимам от браузъра стойността на посочения токен ("x-aut-token")
//         // console.log("Token:"+token);
//         // console.log(`user: ${this.state.user}`);

//         if (!token) {      // ако няма токен (първо влизане или логаутнат или изтекло куки), излизаме от профила и връщаме     
//             console.log("No token!!!!!!");
//             this.logOut();
//             return;
//         }

//         fetch("http://localhost:9999/api/user/verify", {  // проверявам на сървъра дали срещу това куки има потребител
//             method: "POST",
//             body: JSON.stringify({ token }),   // тук слагам токена в бодито, за да го пратя на бекенда за верификация, когато рефрешвам страниците (алтернативно - чрез куки)
//             headers: { "Content-Type": "application/json" }
//         }).then((promise) => {
//             console.log(promise);
//             return promise.json();
//         }).then(response => {
//             if (response.status) {
//                 console.log(`resp user: ${response.user.username}`);
//                 this.logIn({
//                     username: response.user.username,
//                     id: response.user._id
//                 });
//             } else {
//                 this.logOut();
//             }
//         })
//     }

//     logIn = (user) => {
//         this.setState({
//             loggedIn: true,
//             user
//         })
//         console.log(`this.state: loggedIn (true), user: ${this.state.user.username}`)
//     }

//     logOut = () => {
//         document.cookie = "x-auth-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;"  // правя кукито=нищо. Ако искам и да го изтрия - задавам му да експайърне през 1970 година  
//         this.setState({
//             loggedIn: false,
//             user: null
//         })
//     }

//     render() {
//         const { loggedIn, user } = this.state;

//         if (loggedIn === null) {        // докато проверява дали loggedIn е false или true да не показва никакви страници/раутове, само един спинер
//             return (
//                 <div>
//                     <img src={loadingGif} alt="" />
//                 </div>
//             )
//         }
//         return (
//             <UserContext.Provider value={{    // ползвам провайдер на топ ниво, за да може всички нестнати компоненти (или до следващият провайдер) да имат достъп.
//                 loggedIn,
//                 user,
//                 logIn: this.logIn,
//                 logOut: this.logOut
//             }}>
//                 {this.props.children}
//             </UserContext.Provider>
//         )
//     }
// }

export default App;