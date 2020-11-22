import PageLayout from "../../components/page-layout";
import Origamis from "../../components/origamis";
import Title from "../../components/title";
import UserContext from "../../Context";
import { Component } from "react";

class Publications extends Component {
    static contextType = UserContext;   // за да можем да достъпим каквото сме подали в контекста (в случая - user и _id)

    render() {
        console.log(`publications`,this.context);
        return (
            <PageLayout>
                <Title title="Publications" />
                <Origamis />
            </PageLayout>
        )
    }
}

export default Publications;                 // Аз обаче ще го оставя Арр, за да се знае какъв е бил оригинално файла, преди да го преработим
