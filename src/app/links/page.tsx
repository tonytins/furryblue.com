import { Footer } from "#/components/footer";
import { Banner } from "#/components/banner";
import {
    siHtml5 as Html5Icon,
    siInternetarchive as ArchveIcon,
    siBluesky as BlueskyIcon
} from "simple-icons";
import { Code, Paragraph, Title } from "#/components/typography";
import Link from 'next/link'

export const dynamic = "force-static";
export const revalidate = 3600; // 1 hour

export default function Page() {
    const linkStyle = "hover:underline hover:underline-offset-4";
    const linkLayout = "flex grid grid-cols-3 gap-4 w-full max-w-[600px] overflow-hidden content-center text-center";
    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-dvh p-8 pb-20 gap-16 sm:p-20">
            <Banner />
            <main className="max-w-[600px]">
                <div className="mb-5">
                    <p>Search engines help you find what you're looking for, which is great, but they'll never show you something new.</p>
                </div>
                <div className="mb-10 mt-1">
                    <div className="mb-5">
                         <Title level="h2">Web</Title>
                    </div>
                    <div className={linkLayout}>
                        <Link className={linkStyle}
                            href="https://sheezy.art">
                            Sheezy Art
                        </Link>
                        <Link className={linkStyle}
                            href="https://soatok.blog">
                            Dhole Moments
                        </Link>
                        <Link className={linkStyle}
                            href="https://blog.theheart.land">
                            Stefen's Blog
                        </Link>
                        <Link className={linkStyle}
                            href="https://mozzius.dev">
                            Mozzius
                        </Link>
                        <Link className={linkStyle}
                            href="https://somafm.com">
                            Soma FM
                        </Link>
                        <Link className={linkStyle}
                            href="https://wikifur.com">
                            WikiFur
                        </Link>
                        <Link className={linkStyle}
                            href="https://zgfgaming.com">
                            ZGF Gaming
                        </Link>
                        <Link className={linkStyle}
                            href="https://patentsexpiringtoday.com">
                            Expatents
                        </Link>
                        <Link className={linkStyle}
                            href="https://bdtwo.com">
                            BDTwo
                        </Link>
                    </div>
                </div>
                <div className="mb-10 mt-5">
                    <div className="mb-5">
                    <Title level="h2">Bluesky</Title>
                    </div>
                    <div className={linkLayout}>
                        <Link className={linkStyle}
                            href="https://frontpage.fyi">
                            Frontpage
                        </Link>
                        <Link
                            className={linkStyle}
                            href="https://whtwnd.com"
                        >
                            WhiteWind
                        </Link>
                        <Link className={linkStyle}
                            href="https://smokesignal.events">
                            SmokeSignal
                        </Link>
                        <Link className={linkStyle}
                            href="https://linkat.blue">
                            Linkat
                        </Link>
                        <Link className={linkStyle}
                            href="https://blueskyfeedcreator.com">
                            Feed Creator
                        </Link>
                        <Link className={linkStyle}
                            href="https://www.bluesky-labelers.io">
                            Labelers
                        </Link>
                        <Link className={linkStyle}
                            href="https://pinksea.art">
                            Labelers
                        </Link>
                        <Link className={linkStyle}
                            href="https://internect.info">
                            Resolve Handle
                        </Link>
                    </div>
                </div>
                <div className="mb-10 mt-5">
                    <div className="mb-5">
                    <Title level="h2">Archives</Title>
                    </div>
                    <div className={linkLayout}>
                        <Link className={linkStyle}
                            href="https://web.archive.org/web/20040615010309/http://www.dcfdengine32truck16.com">
                            DCFD Engine 32
                        </Link>
                        <Link className={linkStyle}
                            href="https://tonytins.neocities.org/doc">
                            Furry Blue DOC
                        </Link>
                        <Link className={linkStyle}
                            href="https://tonytins.neocities.org">
                            Furry Blue DJ
                        </Link>
                        <Link className={linkStyle}
                            href="https://web.archive.org/web/20050603022350/http://www.generationtrance.com">
                            Generation Trance
                        </Link>
                        <Link className={linkStyle}
                            href="https://web.archive.org/web/20240621020802/http://travisuped.com">
                            Travisuped
                        </Link>
                        <Link className={linkStyle}
                            href="https://web.archive.org/web/20041012013958/http://www.creekradio.net">
                            Creek Radio
                        </Link>
                        <Link className={linkStyle}
                            href="https://web.archive.org/web/20191221215234/http://www.wufflecomics.com">
                            Wuffle Comics
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div >
    );
}
