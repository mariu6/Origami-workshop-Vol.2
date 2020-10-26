import { Component } from "react";
import Input from "../../components/input";
import PageLayout from "../../components/page-layout";
import SubmitButton from "../../components/submit-button";
import Title from "../../components/title";

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            rePassword: ""
        }
    }

    onChange = (event, type) => {
        const newState = {};
        newState[type] = event.target.value;
        this.setState(newState);
    }

    render() {
        const { email, password, rePassword } = this.state;
        return (
            <PageLayout>
                <Title title="Register" />
                <Input id="email" value={email} onChange={(e) => { this.onChange(e, "email") }} label="Email" />
                <Input id="Password" value={password} onChange={(e) => { this.onChange(e, "password") }} label="Password" />
                <Input id="Re-Password" value={rePassword} onChange={(e) => { this.onChange(e, "rePassword") }} label="Re-Passowrd" />
                <SubmitButton title="Register" />
            </PageLayout>
        )
    }
}

export default Register;                 
