import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';

const NavBar = () => {

    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Blog', path: '/blog' }
    ];




    return (
        <nav>


            <div className="text-2xl md:hidden" onClick={() => setOpen(!open)}>

                {
                    open === true
                        ? <AiOutlineMenuUnfold></AiOutlineMenuUnfold>
                        : <AiOutlineMenuFold></AiOutlineMenuFold>
                }

            </div>


            <ul className={`md:flex items-center justify-center gap-8 absolute ${open === true ? '' : 'hidden'}`}>

                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)

                }

            </ul>

        </nav>
    );
};

export default NavBar;