import { Footer } from "#/components/footer";
import { Banner } from "#/components/banner";
import Image from "next/image";
import ErrorImage from "#/assets/404.png";

export const dynamic = "force-static";
export const revalidate = 3600; // 1 hour

export default function Home() {
    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-dvh p-8 pb-20 gap-16 sm:p-20">
            <Banner />
            <main>
                <Image
                    src={ErrorImage}
                    alt="Bad dog!"
                />
                <p className="mt-10 text-center"> Page Not Found</p>
            </main>
            <Footer />
        </div>
    );
}
