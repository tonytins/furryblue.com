import { Footer } from "#/components/footer";
import { Banner } from "#/components/banner";
import Link from 'next/link'
import Image from "next/image";
import ErrorImage from "#/assets/404.png";

export const dynamic = "force-static";
export const revalidate = 3600; // 1 hour

export default function Home() {
    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-dvh p-8 pb-20 gap-16 sm:p-20">
            <Banner />
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full max-w-[600px]">

                <div className="grid grid-cols-3 content-center">
                    <div>
                        <Image
                            src={ErrorImage}
                            alt="Bad dog!"
                        />
                        <p> Page Not Found</p>
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
}
