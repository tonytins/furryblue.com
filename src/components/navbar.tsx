import Link from 'next/link'

export function NavBar() {
    return (
        <div className="navbar">
            <Link href="/">Home</Link>
            <Link href="links">Links</Link>
            <Link href="#">About</Link>
        </div>
    );
}