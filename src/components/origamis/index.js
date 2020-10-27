import styles from './index.module.css';
import { Component } from 'react';
import Origami from "../origami";

class Origamis extends Component {
    constructor(props) {
        super(props);
        this.state = {
            origamis: []
        };
    }

    getOrigamis = async () => {
        const promise = await fetch("http://localhost:9999/api/origami/")    // за лимитиране от бекенда логиката е там, а тук се променя феча: `http://localhost:9999/api/origami/?lengh=${length}`
        const origamis = await promise.json();

        this.setState({
            origamis: origamis         // или само origamis
        })
    }

    componentDidMount() {
        this.getOrigamis()        // при зареждане на компонента извиква феч функцията
    }

    renderOrigamis(number) {
        const { origamis } = this.state

        return origamis.map((origami, index) => {
            return (
                <Origami key={origami._id} index ={index} {...origami} />    // ключът трябва да работи тук и не може да се предаде направо като пропс, а обектът огригами се предава към Оригами, но там се взема само дескрипшън
            )
        }).slice(origamis.length - number, origamis.length);
    }

    render() {
        // console.log(this.state.origamis);
        return (
            <div className={styles.main}>
                <div className={styles.posts}>
                    {this.renderOrigamis(this.props.length || this.state.origamis.length)}
                </div>
            </div>
        )
    }
}

export default Origamis;