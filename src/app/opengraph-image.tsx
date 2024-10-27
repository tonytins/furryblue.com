import { ImageResponse } from "next/og";

import { loadGoogleFont } from "#/lib/google-font";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const fontData = await loadGoogleFont(
    "Libre+Baskerville:ital@1",
    "Furry Blue Bog, ramblings of a furry blue fennec",
  );

  return new ImageResponse(
    (
      <div tw="h-full w-full bg-white flex flex-col justify-center items-center">
        <h1
          style={{
            fontFamily: '"Libre Baskerville"',
            fontSize: 80,
            fontWeight: 700,
            fontStyle: "italic",
          }}
        >
          Furry Blue Blog
        </h1>
        <h1
          style={{
            fontSize: 32,
            fontStyle: "italic",
            fontFamily: '"Libre Baskerville"',
          }}
        >
          ramblings of a furry blue fennec
        </h1>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Libre Baskerville",
          data: fontData,
        },
      ],
    },
  );
}
