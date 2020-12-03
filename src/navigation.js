import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// import Publications from "./pages/publications";      // в Publications е всъщност Апп, но това е силата на export default
// import ShareThoughtsPage from "./pages/share-thoughts";
// import RegisterPage from "./pages/register";
// import LoginPage from "./pages/login";
// import ProfilePage from "./pages/profile";
// import ErrorPage from "./pages/error";
import React, { Suspense, useContext } from 'react';
import UserContext from "./Context";

const LazyPublications = React.lazy(() => import("./pages/publications"));
const LazyShareThoughtsPage = React.lazy(() => import("./pages/share-thoughts"));
const LazyRegisterPage = React.lazy(() => import("./pages/register"));
const LazyLoginPage = React.lazy(() => import("./pages/login"));
const LazyProfilePage = React.lazy(() => import("./pages/profile"));
const LazyErrorPage = React.lazy(() => import("./pages/error"));

const LazyNavigation = () => {
    const context = useContext(UserContext);
    // console.log(context);
    const loggedIn = context.user.loggedIn;
    return (
        <Router>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Switch>
                    <Route path="/" exact component={LazyPublications} />
                    <Route path="/share">
                        {loggedIn ? (<LazyShareThoughtsPage />) : (<Redirect to="/login" />)}
                    </Route>
                    <Route path="/register">
                        {loggedIn ? (<Redirect to="/" />) : (<LazyRegisterPage />)}
                    </Route>
                    <Route path="/login">
                        {loggedIn ? (<Redirect to="/" />) : (<LazyLoginPage />)}
                    </Route>
                    <Route path="/profile/:userid">
                        {loggedIn ? (<LazyProfilePage />) : (<Redirect to="/login" />)}
                    </Route>
                    <Route component={LazyErrorPage} />
                </Switch>
            </Suspense>
        </Router>
    )
}


// const Navigation = () => {

//     return (
//         <Router>
//             <Switch>
//                 <Route path="/" exact component={Publications} />
//                 <Route path="/share" component={ShareThoughtsPage} />
//                 <Route path="/register" component={RegisterPage} />
//                 <Route path="/login" component={LoginPage} />
//                 <Route path="/profile/:userid" component={ProfilePage} />
//                 <Route component={ErrorPage} />
//             </Switch>
//         </Router>
//     )
// }

export default LazyNavigation;