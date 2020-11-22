import styles from './index.module.css';
import Link from "../link";
import bird from "../../images/white-origami-bird.png";
import getNavigations from "../../utils/navigation";
import { Component } from 'react';
import UserContext from "../../Context"; 

class Header extends Component {
    static contextType = UserContext;      // взимам информацията от контекста

    render() {
        const { loggedIn, user } = this.context;
        const links = getNavigations(loggedIn, user);    // имам различни масиви в зависимост дали съм гост/юзър

        return (
            <header className={styles.navigation}>
                <img src={bird} alt="origami" />
                {links.map(nav => {
                    return (
                        <Link key={nav.title} title={nav.title} href={nav.link} type="header" />
                    )
                })}

            </header>
        )
    }
}

// const Header = () => {
//     const links = getNavigations();
//     return (
//         <header className={styles.navigation}>
//             <img src={bird} alt="origami" />
//             {links.map(nav => {
//                 return (
//                     <Link key={nav.title} title={nav.title} href={nav.link} type="header" />
//                 )
//             })}

//         </header>
//     )
// }

export default Header;