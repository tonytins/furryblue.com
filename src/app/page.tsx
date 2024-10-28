import { Footer } from "#/components/footer";
import { PostList } from "#/components/post-list";
import Image from "next/image";
import logo from "#/assets/fb-banner-white.svg";
import backgroundImage from "#/assets/docbg.png";

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
          <Image
            src={logo}
            alt="The Furry Blue DJ"
          />
        </div>
        <div className="flex flex-col gap-4 w-full">
          <PostList />
        </div>
      </main>
      <Footer />
    </div>
  );
}
