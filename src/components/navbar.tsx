import Link from 'next/link'
import { HouseIcon, AppWindowIcon, GlobeIcon } from "lucide-react";

export function NavBar() {
    return (
        <div className="navbar">
            <Link href="/"><HouseIcon className="text-inherit inline size-3.5 mb-0.5" /> Home</Link>
            <Link href="/links"><GlobeIcon className="text-inherit inline size-3.5 mb-0.5" /> Links</Link>
            <Link href="/apps"><AppWindowIcon className="text-inherit inline size-3.5 mb-0.5" /> Apps</Link>
        </div>
    );
}