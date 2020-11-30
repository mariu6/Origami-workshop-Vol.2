import PageLayout from "../../components/page-layout";
import Origamis from "../../components/origamis";
import Title from "../../components/title";
// import { Component } from "react";

const PublicationsPage = () => {
    return (
        <PageLayout>
            <Title title="Publications" />
            <Origamis />
        </PageLayout>
    )
}

// class Publications extends Component {
//     static contextType = UserContext;   // за да можем да достъпим каквото сме подали в контекста (в случая - user и _id)

//     render() {
//         console.log(`publications`,this.context);
//         return (
//             <PageLayout>
//                 <Title title="Publications" />
//                 <Origamis />
//             </PageLayout>
//         )
//     }
// }

export default PublicationsPage;
