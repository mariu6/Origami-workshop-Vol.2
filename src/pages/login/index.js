import { Component } from "react";
import Input from "../../components/input";
import PageLayout from "../../components/page-layout";
import SubmitButton from "../../components/submit-button";
import Title from "../../components/title";
import authenticate from "../../utils/authenticate";
// import axios from "axios";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        }
    }

    handleChange = (event, type) => {
        const newState = {};
        newState[type] = event.target.value;
        this.setState(newState);
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { username, password } = this.state;
        const onSuccess = () => {
            console.log("Login Successful!");
            this.props.history.push("/");
        };
        const onFailure = (err) => console.log(`Login Error: ${err}`);
        if (username && password) {                         // само ако има написани някакви име и парола, изпрати заявката
            await authenticate("http://localhost:9999/api/user/login", { username, password }, onSuccess, onFailure);
        }
    }

    render() {
        const { username, password } = this.state;
        return (
            <PageLayout>
                <form onSubmit={this.handleSubmit}>
                    <Title title="Login" />
                    <Input id="username" value={username} onChange={(e) => { this.handleChange(e, "username") }} label="Username" />
                    <Input type="password" id="Password" value={password} onChange={(e) => { this.handleChange(e, "password") }} label="Password" />
                    <SubmitButton title="Login" />
                </form>
            </PageLayout>
        )
    }
}

export default Login;                 
