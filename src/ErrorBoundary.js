import { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {  // тук става хендълването на грешката

        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {

        // logErrorToMyService(error,errorInfo);     // правим си сървис, който да логва на сървъра за нас когато настъпи грешка при клиента ни.
        console.log("'componentDidCatch' is triggered!", errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // return (
            //     <h1>Something went U rekata...</h1>   // тук правя UI за грешката
            // )

            window.location.href = "/error";
            return null;
        } 

        return (this.props.children)
    }

}
export default ErrorBoundary;