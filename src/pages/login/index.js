import { Component } from "react";
import Input from "../../components/input";
import PageLayout from "../../components/page-layout";
import SubmitButton from "../../components/submit-button";
import Title from "../../components/title";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    onChange = (event, type) => {
        const newState = {};
        newState[type] = event.target.value;
        this.setState(newState);
    }

    render() {
        const { email, password } = this.state;
        return (
            <PageLayout>
                <Title title="Login" />
                <Input id="email" value={email} onChange={(e) => { this.onChange(e, "email") }} label="Email" />
                <Input id="Password" value={password} onChange={(e) => { this.onChange(e, "password") }} label="Password" />
                <SubmitButton title="Login" />
            </PageLayout>
        )
    }
}

export default Login;                 
