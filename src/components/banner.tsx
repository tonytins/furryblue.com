import Image from "next/image";
import { NavBar } from "#/components/navbar";

import FbLogoDark from "#/assets/fb-banner-white.svg";
import FbLogo from "#/assets/fb-banner.svg";

export function Banner() {
    return (
        <header>
            <div>
                <Image
                    className="hidden dark:block"
                    src={FbLogoDark}
                    alt="The Furry Blue DJ"
                />
                <Image
                    className="dark:hidden"
                    src={FbLogo}
                    alt="The Furry Blue DJ"
                />
            </div>
            <NavBar />
        </header>
    );
}