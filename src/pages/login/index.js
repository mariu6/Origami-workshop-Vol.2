import { useState, useContext } from "react";
import Input from "../../components/input";
import PageLayout from "../../components/page-layout";
import SubmitButton from "../../components/submit-button";
import Title from "../../components/title";
import UserContext from "../../Context";
import authenticate from "../../utils/authenticate";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const context = useContext(UserContext);
    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const onSuccess = (user) => {
            console.log(`Login Successful!`, context);
            context.logIn(user);
            history.push("/");        // вместо props.history.push("/"), добавям useHistory и пиша направо history.push("/")
        };
        const onFailure = (err) => console.log(`Login Error: ${err}`);
        if (username && password) {                         // само ако има написани някакви име и парола, изпрати заявката
            await authenticate("http://localhost:9999/api/user/login", { username, password }, onSuccess, onFailure);
        }
    }
    return (
        <PageLayout>
            <form onSubmit={handleSubmit}>
                <Title title="Login" />
                <Input id="username" value={username} onChange={(e) => setUsername(e.target.value)} label="Username" />
                <Input type="password" id="Password" value={password} onChange={(e) => setPassword(e.target.value)} label="Password" />
                <SubmitButton title="Login" />
            </form>
        </PageLayout>
    )
}

// class Login extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             username: "",
//             password: ""
//         }
//     }

//     static contextType = UserContext;   // сетвам context от UserContext

//     handleChange = (event, type) => {
//         const newState = {};
//         newState[type] = event.target.value;
//         this.setState(newState);
//     }

//     handleSubmit = async (event) => {
//         event.preventDefault();
//         const { username, password } = this.state;
//         const onSuccess = (user) => {
//             console.log(`Login Successful!`, this.context);
//             this.context.logIn(user);
//             this.props.history.push("/");
//         };
//         const onFailure = (err) => console.log(`Login Error: ${err}`);
//         if (username && password) {                         // само ако има написани някакви име и парола, изпрати заявката
//             await authenticate("http://localhost:9999/api/user/login", { username, password }, onSuccess, onFailure);
//         }
//     }

//     render() {
//         const { username, password } = this.state;
//         return (
//             <PageLayout>
//                 <form onSubmit={this.handleSubmit}>
//                     <Title title="Login" />
//                     <Input id="username" value={username} onChange={(e) => { this.handleChange(e, "username") }} label="Username" />
//                     <Input type="password" id="Password" value={password} onChange={(e) => { this.handleChange(e, "password") }} label="Password" />
//                     <SubmitButton title="Login" />
//                 </form>
//             </PageLayout>
//         )
//     }
// }

export default LoginPage;                 
