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
          <div className="flex gap-x-4">
            <a href="/">Instagram</a>
            <a href="/about">AirBNB</a>
            <a href="/gallery">Contact</a>
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
              <p className="text-[16px] leading-[140%] max-w-[550px]">
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
      <section>
        <div className="mx-auto p-8">
          <div className="grid grid-cols-5 gap-40">
            <img
              className=" col-span-2"
              src="/images/IMG_8701.jpg"
              alt="Living room view at The Silver Clam"
              width="100%"
              height="100%"
            />
            <div className=" col-span-3 max-w-[820px]">
              <div className="max-w-[320px] ml-auto mb-20">
                <img
                  className=" col-span-2"
                  src="/images/IMG_8710.jpg"
                  alt="The Silver Clam House"
                  width="100%"
                  height="100%"
                />
              </div>
              <p className="text-[16px] leading-[140%] max-w-[450px] mb-6">
                Just north of Huntsville and a short drive from Algonquin Park,
                your lakeside retreat is waiting for you - surrounded by quiet
                woods and steps from the water, The Silver Clam is the balance
                of nature and comfort you have been searching for. Spend your
                days swimming, kayaking, or exploring nearby ATV trails, then
                unwind on the wraparound deck with dinner and a stunning lake
                view. Inside, you’ll find warm wood interiors, a crackling
                wood-burning fireplace, and all the cozy touches that make you
                feel at home—board games to bring out your competitive side,
                smart TVs to stream your favorite content, and space to simply
                relax. <br /> <br />
                Sleeping up to 6 guests between the main cottage and bunkie,
                it’s ideal for families, friends, or couples looking to
                reconnect and recharge. Whether you’re looking for a peaceful
                weekend escape, a family getaway filled with lake adventures, or
                a cozy spot to reconnect with nature, The Silver Clam Lake is
                ready to welcome you.
              </p>
              <a
                href="/"
                className="cursor-pointer text-[18px] px-10 py-3 border rounded-full uppercase"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto p-8 ">
          <h2 className="text-[60px]">Gallery</h2>
        </div>
      </section>
      <footer className="border-t border-[#22211E]">
        <div className="mx-auto p-8 flex items-center justify-between">
          <img
            src="/images/clam-logo.png"
            alt="The Silver Clam Logo"
            width="105px"
            height="93px"
          />
          <div>
            <div className="flex justify-end gap-x-4">
              <a href="/">Instagram</a>
              <a href="/about">AirBNB</a>
              <a href="/gallery">Contact</a>
            </div>
            <p>2024 The Silver Clam. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
