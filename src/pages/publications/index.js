import PageLayout from "../../components/page-layout";
import Origamis from "../../components/origamis";
import Title from "../../components/title";

const Publications = () => {
    // console.log(this.state.origamis);
    return (
        <PageLayout>
            <Title title="Publications" />
            <Origamis />
        </PageLayout>
    )
}

export default Publications;                 // Аз обаче ще го оставя Арр, за да се знае какъв е бил оригинално файла, преди да го преработим
