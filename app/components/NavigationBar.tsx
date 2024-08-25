'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function NavigationBar() {
    const pathname = usePathname();
    const links = [
        { href: '/', text: 'About' },
        { href: '/applications', text: 'Applications' },
        { href: '/assets', text: 'Assets' },
        { href: '/guidelines', text: 'Guidelines' },
        { href: '/team', text: 'Team' },
    ];
    return (
        <section>
            <hr />
            <div className=" bg-navigation-gradient-light bg-navigation-radial-light bg-navigation-size dark:bg-navigation-gradient-dark dark:bg-navigation-radial-dark">
                <ul className="text-center text-navigation grid grid-cols-navigation-grid">
                    {links.map((link, index) => (
                        <Link key={index} href={link.href}>
                            <li style={pathname === link.href ? { backgroundColor: '#ec6363'} : {}}
                            className="text-navigation block pointer rounded-xl m-inner hover:bg-hover">
                                {link.text}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
            <hr />
        </section>
    );
}