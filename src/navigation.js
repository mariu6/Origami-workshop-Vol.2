import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Publications from "./pages/publications";      // в Publications е всъщност Апп, но това е силата на export default
// import ShareThoughtsPage from "./pages/share-thoughts";
// import RegisterPage from "./pages/register";
// import LoginPage from "./pages/login";
// import ProfilePage from "./pages/profile";
// import ErrorPage from "./pages/error";
import React, { Suspense } from 'react';

const LazyPublications = React.lazy(() => import("./pages/publications"));
const LazyShareThoughtsPage = React.lazy(() => import("./pages/share-thoughts"));
const LazyRegisterPage = React.lazy(() => import("./pages/register"));
const LazyLoginPage = React.lazy(() => import("./pages/login"));
const LazyProfilePage = React.lazy(() => import("./pages/profile"));
const LazyErrorPage = React.lazy(() => import("./pages/error"));

const LazyNavigation = () => {

    return (
        <Router>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Switch>
                    <Route path="/" exact component={LazyPublications} />
                    <Route path="/share" component={LazyShareThoughtsPage} />
                    <Route path="/register" component={LazyRegisterPage} />
                    <Route path="/login" component={LazyLoginPage} />
                    <Route path="/profile/:userid" component={LazyProfilePage} />
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