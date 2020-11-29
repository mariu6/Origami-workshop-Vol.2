import styles from './index.module.css';
import Link from "../link";
import bird from "../../images/blue-origami-bird-flipped.png";
import getNavigations from "../../utils/navigation";
import { Component } from 'react';
import UserContext from "../../Context";

class Footer extends Component {
    static contextType = UserContext;      // взимам информацията от контекста

    render() {
        const { user } = this.context;
        const links = getNavigations(user);    // имам различни масиви в зависимост дали съм гост/юзър

        return (
            <footer className={styles.footer}>
                {links.map(nav => {
                    return (
                        <Link key={nav.title} title={nav.title} href={nav.link} type="footer" />
                    )
                })}
                <img src={bird} alt="origami" />
                <p>Software University 2020</p>
            </footer>
        )
    }
}
    // const Footer = () => {
    //     const links = getNavigations();
    //     return (
    //         <footer className={styles.footer}>
    //             {links.map(nav => {
    //                 return (
    //                     <Link key={nav.title} title={nav.title} href={nav.link} type="footer" />
    //                 )
    //             })}
    //             <img src={bird} alt="origami" />
    //             <p>Software University 2020</p>
    //         </footer>
    //     )
    // }

    export default Footer; 