import { useState, useContext, useEffect, useCallback } from "react";
// import styles from './index.module.css';
import PageLayout from "../../components/page-layout";
import Title from "../../components/title";
import Origamis from "../../components/origamis";
import UserContext from "../../Context";
// import getCookieValue from "../../utils/cookieParser";
import { useParams, useHistory } from "react-router-dom";
import ErrorBoundary from "../../ErrorBoundary";


const ProfilePage = () => {
  const [username, setUsername] = useState(null);
  const [posts, setPosts] = useState(null);
  const context = useContext(UserContext);
  const params = useParams();
  const history = useHistory();

  const getData = useCallback(async () => {
    const id = params.userid;
    const promise = await fetch(`http://localhost:9999/api/user?id=${id}`);
    if (!promise.ok) {
      history.push("/error");             // Ако не намира потребителя или има някаква друга грешка в базата, да прати към error page
    }
    const user = await promise.json();
    setUsername(user.username);
    setPosts(user.posts && user.posts.length);   // ако няма постове, искането за дължина на масива ще хвърли грешка, затова проверяваме дали има posts
  }, [params.userid, history]);

  useEffect(() => {
    getData();
  }, [getData]);

  const logOut = () => {
    context.logOut();   // 
    history.push("/");
  }

  if (!username) {
    return (
      <PageLayout>
        <div>Loading...</div>
      </PageLayout>
    )
  }
  return (
    <PageLayout>
      <Title title="Profile" />
      <div>
        <p>User: {username}</p>
        <p>Posts: {posts}</p>

        <button onClick={logOut}>Logout</button>
      </div>
      <ErrorBoundary>
        <Origamis length={3} />
      </ErrorBoundary>
    </PageLayout>
  )
}

// class Profile extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: null,
//       posts: null
//     }
//   }

//   getUser = async (id) => {
//     const promise = await fetch(`http://localhost:9999/api/user?id=${id}`);
//     if (!promise.ok) {
//       this.props.history.push("/error");             // Ако не намира потребителя или има някаква друга грешка в базата, да прати към error page
//     }
//     const user = await promise.json();
//     // console.log(`getUser: ${user.username}`);
//     this.setState({
//       username: user.username,
//       posts: user.posts && user.posts.length        //If {user.posts} can be converted to true, returns {user.posts.length}; else, returns {user.posts}
//     })
//   }

//   componentDidMount() {      // за рекуест за юзъра
//     console.log(`this.props.match.params.userid:   ${this.props.match.params.userid}`)
//     this.getUser(this.props.match.params.userid);

//     // let token = this.props.match.params.userid;
//     // if (token === "undefined") {
//     //   token = getCookieValue("x-auth-token");
//     // }
//     // this.getUser(token)
//   }

//   static contextType = UserContext;
//   logOut = () => {
//     this.context.logOut();   // 
//     this.props.history.push("/");
//   }

//   render() {
//     const { username, posts } = this.state;
//     // console.log(username, posts)

//     if (!username) {
//       return (
//         <PageLayout>
//           <div>Loading...</div>
//         </PageLayout>
//       )
//     }
//     return (
//       <PageLayout>
//         <Title title="Profile" />
//         <div>
//           <p>User: {username}</p>
//           <p>Posts: {posts}</p>

//           <button onClick={this.logOut}>Logout</button>
//         </div>
//         <Origamis length={3} />
//       </PageLayout>
//     )
//   }
// }

export default ProfilePage;
