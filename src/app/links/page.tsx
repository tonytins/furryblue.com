import { Footer } from "#/components/footer";
import { Banner } from "#/components/banner";
import { siBluesky as BlueskyIcon, siHtml5 as Html5Icon } from "simple-icons";

import Link from 'next/link'

export const dynamic = "force-static";
export const revalidate = 3600; // 1 hour

export default function Page() {
    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-dvh p-8 pb-20 gap-16 sm:p-20">
            <Banner />
            <main className="text-center content-center max-w-[600px]">
                <div className="mb-10">
                    <h2 className="text-2xl font-extrabold mb-5">Checkout these Websites <svg width={16} height={16} viewBox="0 0 24 24" className="fill-black dark:fill-white inline-flex">
                        <path d={Html5Icon.path} />
                    </svg></h2>
                    <div className="flex grid grid-cols-3 gap-4 w-full max-w-[600px] overflow-hidden">
                        <Link className="hover:underline hover:underline-offset-4"
                            href="https://soatok.blog">
                            Dhole Moments
                        </Link>
                        <Link className="hover:underline hover:underline-offset-4"
                            href="https://blog.theheart.land/">
                            Stefen's Blog
                        </Link>
                    </div>
                </div>
                <div className="mb-10">
                    <h2 className="text-2xl font-extrabold mb-5">Find me on the ATmosphere <svg width={16} height={16} viewBox="0 0 24 24" className="fill-black dark:fill-white inline-flex">
                        <path d={BlueskyIcon.path} />
                    </svg></h2>
                    <div className="flex grid grid-cols-3 gap-4 w-full max-w-[600px] overflow-hidden">
                        <Link className="hover:underline hover:underline-offset-4"
                            href="https://frontpage.fyi/profile/tonybark.com" >Frontpage
                        </Link>
                        <Link
                            className="hover:underline hover:underline-offset-4"
                            href="https://whtwnd.com/tonybark.com"
                        >
                            WhiteWind
                        </Link>
                        <Link className="hover:underline hover:underline-offset-4"
                            href="https://smokesignal.events/did:plc:adgodmx5hrrdiz4bvgcbfas3">
                            SmokeSignal
                        </Link>
                    </div>
                </div>
                <div>
                    <p>Search engines help you find what you're looking for based on past knowledge, but they'll never show you something new.</p>
                </div>
            </main>
            <Footer />
        </div >
    );
}
