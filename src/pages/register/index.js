import { Component } from "react";
import Input from "../../components/input";
import PageLayout from "../../components/page-layout";
import SubmitButton from "../../components/submit-button";
import Title from "../../components/title";
import authenticate from "../../utils/authenticate";

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            rePassword: ""
        }
    }

    handleChange = (event, type) => {
        const newState = {};
        newState[type] = event.target.value;
        this.setState(newState);
    }

    cookieExpiration = (timeInHours) => {
        var now = new Date();
        now.setTime(now.getTime() + timeInHours * 3600 * 1000);
        return now.toUTCString()
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { username, password, rePassword } = this.state;
        const onSuccess = () => {
            console.log("Login Successful!");
            this.props.history.push("/");
        };
        const onFailure = (err) => console.log(`Login Error: ${err}`);
        if (username && (password === rePassword)) {                         // само ако има написани някакви име и паролата съвпада с повторената, изпрати заявката
            await authenticate("http://localhost:9999/api/user/register", { username, password }, onSuccess, onFailure);
        }
    }
    render() {
        const { username, password, rePassword } = this.state;
        return (
            <PageLayout>
                <form onSubmit={this.handleSubmit}>
                    <Title title="Register" />
                    <Input id="username" value={username} onChange={(e) => { this.handleChange(e, "username") }} label="username" />
                    <Input type="password" id="Password" value={password} onChange={(e) => { this.handleChange(e, "password") }} label="Password" />
                    <Input type="password" id="Re-Password" value={rePassword} onChange={(e) => { this.handleChange(e, "rePassword") }} label="Re-Passowrd" />
                    <SubmitButton title="Register" />
                </form>
            </PageLayout>
        )
    }
}

export default Register;                 
