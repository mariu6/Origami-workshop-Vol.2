import styles from './index.module.css';
import Link from '../link';
import getNavigations from "../../utils/navigation";
import { Component } from 'react';
import UserContext from "../../Context"; 

class Aside extends Component {

    static contextType = UserContext;      // взимам информацията от контекста

    render() {
        const { loggedIn, user } = this.context;
        const links = getNavigations(loggedIn, user);    // имам различни масиви в зависимост дали съм гост/юзър

        return (
            <aside className={styles.aside}>
                {links.map(nav => {
                    return (
                        <Link key={nav.title} title={nav.title} href={nav.link} type="aside" />
                    )
                })}
            </aside>
        )
    }
}

// const Aside = () => {
//     const links = getNavigations();
//     return (
//         <aside className={styles.aside}>
//             {links.map(nav => {
//                 return (
//                     <Link key={nav.title} title={nav.title} href={nav.link} type="aside" />
//                 )
//             })}

//         </aside>
//     )
// }

export default Aside;