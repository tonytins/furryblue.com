import Image from "next/image";

import LogoDark from "#/assets/fb-banner-white.svg";
import Logo from "#/assets/fb-banner.svg";

export function Banner() {
    return (
        <div>
            <Image
                className="hidden dark:block"
                src={LogoDark}
                alt="The Furry Blue DJ"
            />
            <Image
                className="dark:hidden"
                src={Logo}
                alt="The Furry Blue DJ"
            />
        </div>
    );
}