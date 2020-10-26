import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Publications from "./pages/publications";      // в Publications е всъщност Апп, но това е силата на export default
import ShareThoughtsPage from "./pages/share-thoughts";

const Navigation = () => {

    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Publications} />
                <Route path="/share" component={ShareThoughtsPage} />
            </Switch>
        </Router>
    )
}

export default Navigation;