import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <nav>
        <div className="mx-auto px-8 py-2 flex items-center justify-between">
          <img
            src="/images/clam-logo.png"
            alt="The Silver Clam Logo"
            width="105px"
            height="93px"
          />
          <div>
            <a href="/" className="px-4">
              Instagram
            </a>
            <a href="/about" className="px-4">
              AirBNB
            </a>
            <a href="/gallery" className="px-4">
              Contact
            </a>
          </div>
        </div>
      </nav>
      <section>
        <div className="mx-auto p-8">
          <div className="grid grid-cols-5 gap-10">
            <div className=" col-span-3 max-w-[820px]">
              <h1 className="text-[122px] leading-[100%]">
                Welcome to the Sliver Clam
              </h1>
              <p className="text-[16px] leading-[120%] max-w-[550px]">
                There’s something special about waking up to the stillness of
                the lake, coffee in hand, as the morning light dances on the
                water. The Silver Clam is a place to slow down, breathe deeply,
                and enjoy the simple moments— paddling on a beautiful lake,
                gathering around the fire under a starry sky, or curling up by
                the fireplace with a good movie after a day outdoors.
              </p>
            </div>
            <img
              className=" col-span-2"
              src="/images/IMG_8701.jpg"
              alt="Lake and dock view from The Silver Clam"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto p-8">
          <img
            className=" col-span-2"
            src="/images/IMG_8710.jpg"
            alt="The Silver Clam House"
            width="100%"
            height="100%"
          />
        </div>
      </section>
    </div>
  );
}
