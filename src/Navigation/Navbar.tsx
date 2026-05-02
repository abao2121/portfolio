import './Navbar.css'

interface INavItem{
    label: string;
    targetId: string;
}

const navLinks: INavItem[] = [
    {label: 'About Me', targetId: 'home'},
    {label: 'Skills', targetId: 'skills'},
    {label: 'Projects', targetId: 'projects'},
    {label: 'Experiences', targetId: 'experiences'}
]

export const Navbar = () => {
    return (
        <nav className = "navbar-Container">

            <div className = "navbar-brand">
                <a className = "navBrandText" href = 'home'>Alan Bao</a>
            </div>

            <ul className = "navList-Container">
                {navLinks.map((link) => (
                    <li className = "navItems" key={link.targetId}>
                        <a className = "navText" href={`#${link.targetId}`}>{link.label}</a>
                    </li>
                ))}
            </ul>

        </nav>
    )
}