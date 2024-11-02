import Link from 'next/link'
import { HouseIcon, GlobeIcon, CircleHelpIcon } from "lucide-react";

export function NavBar() {
    return (
        <div className="navbar">
            <Link href="/"><HouseIcon className="text-inherit inline size-3.5 mb-0.5" /> Home</Link>
            <Link href="/links"><GlobeIcon className="text-inherit inline size-3.5 mb-0.5" /> Links</Link>
            <Link href="about"><CircleHelpIcon className="text-inherit inline size-3.5 mb-0.5" /> About</Link>
        </div>
    );
}