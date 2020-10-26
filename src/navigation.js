import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Publications from "./pages/publications";      // в Publications е всъщност Апп, но това е силата на export default
import ShareThoughtsPage from "./pages/share-thoughts";
import RegisterPage from "./pages/register";
import LoginPage from "./pages/login";

const Navigation = () => {

    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Publications} />
                <Route path="/share" component={ShareThoughtsPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/login" component={LoginPage} />
            </Switch>
        </Router>
    )
}

export default Navigation;