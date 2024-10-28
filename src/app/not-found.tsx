import { Footer } from "#/components/footer";
import { PostList } from "#/components/post-list";
import Image from "next/image";
import { Title } from "#/components/typography";
import backgroundImage from "#/assets/docbg.png";
import logo from "#/assets/fb-banner.png";
import ErrorImage from "#/assets/404.png";
import { AlignCenter } from "lucide-react";
import { url } from "inspector";

export const dynamic = "force-static";
export const revalidate = 3600; // 1 hour

export default function Home() {
    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImage.src})`,
                backgroundRepeat: "repeat",
            }}
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-dvh p-8 pb-20 gap-16 sm:p-20">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full max-w-[600px]">
                <div>
                    <a href="/">
                        <Image
                            src={ErrorImage}
                            alt="Bad dog!"
                        />
                    </a>
                </div>
                Page Not Found
            </main>
            <Footer />
        </div>
    );
}
