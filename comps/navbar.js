import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2 className="nav-logo"><Link href="/">Logo</Link></h2>
            <div className="nav-menu">
                <Link href="fruits">Fruits</Link>
                <Link href="vegies">Vegies</Link>
                <Link href="grains">Grains</Link>
                <Link href="diary">Diary</Link>
            </div>
        </nav>
    )
}

export default Navbar;