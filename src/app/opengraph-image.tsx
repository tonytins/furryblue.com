import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div tw="h-full w-full bg-white flex flex-col justify-center items-center">
        <h1 style={{ fontFamily: '"Libre Baskerville"', fontSize: 64 }}>
          mozzius.dev
        </h1>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Libre Baskerville",
          data: await fetch(
            new URL("./fonts/LibreBaskerville-Bold.ttf", import.meta.url),
          ).then((res) => res.arrayBuffer()),
        },
      ],
    },
  );
}
