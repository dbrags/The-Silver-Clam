import { useState } from "react";
import { IBM_Plex_Mono } from "next/font/google";
import Lightbox from "yet-another-react-lightbox";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const images = [
  { src: "/images/IMG_8701.jpg", alt: "Lake and dock view" },
  { src: "/images/IMG_8710.jpg", alt: "The Silver Clam house" },
  { src: "/images/DSCF9107.jpg", alt: "Stairs up to the Silver Clam Cottage" },
  { src: "/images/IMG_8343.jpg", alt: "Bunk beds" },
  { src: "/images/IMG_8356.jpg", alt: "Shower and bathroom" },
  { src: "/images/IMG_8395.jpg", alt: "Kitchen" },
  { src: "/images/IMG_8457.jpg", alt: "Bedroom" },
  { src: "/images/IMG_8473.jpg", alt: "Dining Area" },
  { src: "/images/IMG_8529.jpg", alt: "Silver Clam Key" },
  { src: "/images/IMG_8549.jpg", alt: "Couch" },
  { src: "/images/IMG_8823.jpg", alt: "BBQ Area" },
  { src: "/images/IMG_8838.jpg", alt: "Deck looking onto water" },
  { src: "/images/IMG_9219.jpg", alt: "Fireplace" },
  { src: "/images/IMG_9294.jpg", alt: "Fire Pit" },
  { src: "/images/IMG_9281.jpg", alt: "Second Building at Silver Clam" },
  { src: "/images/IMG_9259.jpg", alt: "Silver Clam Lounge Area" },
  { src: "/images/IMG_9268.jpg", alt: "Silver Clam beds" },
];

export default function Home() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className={ibmPlexMono.variable}>
      {/* Navbar */}
      <nav>
        <div className="mx-auto px-8 py-2 flex items-center justify-between">
          <img
            src="/images/clam-logo.png"
            alt="The Silver Clam Logo"
            width="105px"
            height="93px"
          />
          <div className="hidden lg:flex gap-x-4 font-mono font-medium uppercase">
            <a
              className="hover:text-[#6B645A]"
              href="https://instagram.com/thesilverclam"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              className="hover:text-[#6B645A]"
              href="https://airbnb.ca/h/thesilverclam"
              target="_blank"
              rel="noopener noreferrer"
            >
              AirBNB
            </a>
            <a
              className="hover:text-[#6B645A]"
              href="mailto:thesilverclam@gmail.com"
            >
              Contact
            </a>
          </div>
          <div className="flex lg:hidden gap-x-5 font-mono font-medium uppercase items-center">
            <a
              href="https://instagram.com/thesilverclam"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.0286 0C12.1536 0.003 12.7246 0.009 13.2176 0.023L13.4116 0.03C13.6356 0.038 13.8566 0.0479999 14.1236 0.0599999C15.1876 0.11 15.9136 0.278 16.5506 0.525C17.2106 0.779 17.7666 1.123 18.3226 1.678C18.8313 2.17773 19.2248 2.78247 19.4756 3.45C19.7226 4.087 19.8906 4.813 19.9406 5.878C19.9526 6.144 19.9626 6.365 19.9706 6.59L19.9766 6.784C19.9916 7.276 19.9976 7.847 19.9996 8.972L20.0006 9.718V11.028C20.003 11.7574 19.9953 12.4868 19.9776 13.216L19.9716 13.41C19.9636 13.635 19.9536 13.856 19.9416 14.122C19.8916 15.187 19.7216 15.912 19.4756 16.55C19.2248 17.2175 18.8313 17.8223 18.3226 18.322C17.8228 18.8307 17.2181 19.2242 16.5506 19.475C15.9136 19.722 15.1876 19.89 14.1236 19.94L13.4116 19.97L13.2176 19.976C12.7246 19.99 12.1536 19.997 11.0286 19.999L10.2826 20H8.97357C8.24383 20.0026 7.51409 19.9949 6.78457 19.977L6.59057 19.971C6.35318 19.962 6.11584 19.9517 5.87857 19.94C4.81457 19.89 4.08857 19.722 3.45057 19.475C2.7834 19.2241 2.17901 18.8306 1.67957 18.322C1.17051 17.8224 0.776678 17.2176 0.525569 16.55C0.278569 15.913 0.110569 15.187 0.0605687 14.122L0.0305688 13.41L0.0255689 13.216C0.00713493 12.4868 -0.00119929 11.7574 0.000568797 11.028V8.972C-0.0021991 8.2426 0.00513501 7.5132 0.0225689 6.784L0.0295688 6.59C0.0375688 6.365 0.0475688 6.144 0.0595688 5.878C0.109569 4.813 0.277569 4.088 0.524569 3.45C0.776263 2.7822 1.17079 2.17744 1.68057 1.678C2.17972 1.16955 2.78376 0.776074 3.45057 0.525C4.08857 0.278 4.81357 0.11 5.87857 0.0599999C6.14457 0.0479999 6.36657 0.038 6.59057 0.03L6.78457 0.0239999C7.51376 0.00623271 8.24316 -0.0014347 8.97257 0.000999928L11.0286 0ZM10.0006 5C8.67449 5 7.40272 5.52678 6.46503 6.46447C5.52735 7.40215 5.00057 8.67392 5.00057 10C5.00057 11.3261 5.52735 12.5979 6.46503 13.5355C7.40272 14.4732 8.67449 15 10.0006 15C11.3267 15 12.5984 14.4732 13.5361 13.5355C14.4738 12.5979 15.0006 11.3261 15.0006 10C15.0006 8.67392 14.4738 7.40215 13.5361 6.46447C12.5984 5.52678 11.3267 5 10.0006 5ZM10.0006 7C10.3945 6.99993 10.7847 7.07747 11.1487 7.22817C11.5127 7.37887 11.8434 7.5998 12.122 7.87833C12.4007 8.15686 12.6217 8.48754 12.7725 8.85149C12.9233 9.21544 13.001 9.60553 13.0011 9.9995C13.0011 10.3935 12.9236 10.7836 12.7729 11.1476C12.6222 11.5116 12.4013 11.8423 12.1227 12.121C11.8442 12.3996 11.5135 12.6206 11.1496 12.7714C10.7856 12.9223 10.3955 12.9999 10.0016 13C9.20592 13 8.44286 12.6839 7.88025 12.1213C7.31764 11.5587 7.00157 10.7956 7.00157 10C7.00157 9.20435 7.31764 8.44129 7.88025 7.87868C8.44286 7.31607 9.20592 7 10.0016 7M15.2516 3.5C14.92 3.5 14.6021 3.6317 14.3677 3.86612C14.1333 4.10054 14.0016 4.41848 14.0016 4.75C14.0016 5.08152 14.1333 5.39946 14.3677 5.63388C14.6021 5.8683 14.92 6 15.2516 6C15.5831 6 15.901 5.8683 16.1355 5.63388C16.3699 5.39946 16.5016 5.08152 16.5016 4.75C16.5016 4.41848 16.3699 4.10054 16.1355 3.86612C15.901 3.6317 15.5831 3.5 15.2516 3.5Z"
                  fill="#22211E"
                />
              </svg>
            </a>
            <a
              href="https://airbnb.ca/h/thesilverclam"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.85149 0C9.88524 0 10.8039 0.462942 11.5644 1.165C12.9488 2.44326 14.1578 4.62762 15.1223 6.74098C16.1111 8.90467 16.9301 11.196 17.4775 12.8527C18.1508 14.8897 17.2672 17.0507 15.4801 18.1213C14.5529 18.6797 13.4588 18.8945 12.3893 18.7281C11.3197 18.5616 10.3427 18.0245 9.62905 17.2107C9.38095 16.9266 9.11847 16.6264 8.85149 16.318C8.58451 16.6264 8.32113 16.9266 8.07393 17.2107C7.36034 18.0249 6.38321 18.5623 5.31345 18.7289C4.24369 18.8956 3.1494 18.6808 2.22198 18.1222C0.435831 17.0498 -0.447805 14.8897 0.225484 12.8527C0.772925 11.196 1.59184 8.90467 2.58065 6.74008C3.54518 4.62762 4.75423 2.44326 6.13856 1.165C6.89904 0.463841 7.81863 0 8.85149 0ZM10.6251 14.2478C11.0898 13.6941 11.4835 13.2123 11.728 12.886C12.6593 11.6446 12.9065 10.0526 12.4337 8.70781C11.9366 7.29291 10.6565 6.23399 8.85149 6.23399C7.04647 6.23399 5.76641 7.29291 5.26931 8.70781C4.79648 10.0526 5.04458 11.6446 5.97496 12.886C6.21946 13.2123 6.61319 13.695 7.07793 14.2478C6.72915 14.6505 6.37767 15.0533 6.04417 15.4344C5.74694 15.7727 5.34019 15.9956 4.89514 16.0641C4.4501 16.1326 3.99513 16.0424 3.60991 15.8093C2.85212 15.3544 2.52761 14.4789 2.7865 13.6986C3.31866 12.0877 4.10251 9.89977 5.03379 7.86103C5.98754 5.77105 7.0132 4.02805 7.96875 3.14621C8.57013 2.59068 9.13285 2.59068 9.73423 3.14621C10.6898 4.02805 11.7154 5.77105 12.6692 7.86103C13.6005 9.89977 14.3843 12.0877 14.9165 13.6986C15.1754 14.4798 14.8509 15.3544 14.0931 15.8093C13.7078 16.0424 13.2529 16.1326 12.8078 16.0641C12.3628 15.9956 11.956 15.7727 11.6588 15.4344C11.3253 15.0533 10.9738 14.6505 10.6251 14.2478ZM8.85149 12.165C8.60521 11.8713 8.36544 11.5722 8.13236 11.2679C7.71526 10.7106 7.65323 10.0562 7.81324 9.60223C7.94808 9.22019 8.24023 8.93074 8.85149 8.93074C9.46275 8.93074 9.7549 9.22019 9.88974 9.60223C10.0497 10.0562 9.98862 10.7115 9.57062 11.2679C9.40612 11.4873 9.15622 11.7983 8.85149 12.165Z"
                  fill="#22211E"
                />
              </svg>
            </a>
            <a href="mailto:thesilverclam@gmail.com">
              <svg
                width="23"
                height="18"
                viewBox="0 0 23 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.7 0H2.3C1.035 0 0.0115 1.0125 0.0115 2.25L0 15.75C0 16.9875 1.035 18 2.3 18H20.7C21.965 18 23 16.9875 23 15.75V2.25C23 1.0125 21.965 0 20.7 0ZM20.7 4.5L11.5 10.125L2.3 4.5V2.25L11.5 7.875L20.7 2.25V4.5Z"
                  fill="#22211E"
                />
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section>
        <div className="mx-auto p-4 md:p-8">
          <div className="grid lg:grid-cols-5 gap-10 grid-cols-1">
            <div className="col-span-3 max-w-[750px]">
              <h1 className="text-[50px] md:text-[80px] lg:text-[110px] xl:text-[122px] leading-[100%] mb-6">
                Welcome to The Silver Clam
              </h1>
              <p className="text-[15px] md:text-[16px] mb-8 leading-[140%] max-w-[550px] font-mono tracking-tight">
                There’s something special about waking up to the stillness of
                the lake, coffee in hand, as the morning light dances on the
                water. The Silver Clam is a place to slow down, breathe deeply,
                and enjoy the simple moments— paddling on a beautiful lake,
                gathering around the fire under a starry sky, or curling up by
                the fireplace with a good movie after a day outdoors.
              </p>
              <a
                href="https://airbnb.ca/h/thesilverclam"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono font-medium cursor-pointer text-[18px] px-10 py-2 border rounded-full uppercase hover:bg-[#6B645A] hover:text-white hover:border-[#6B645A]"
              >
                Book Now
              </a>
            </div>
            <img
              className="col-span-3 lg:col-span-2"
              src="/images/IMG_8701.jpg"
              alt="Lake and dock view from The Silver Clam"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </section>

      {/* Mid-section */}
      <section>
        <div className="mx-auto p-4 md:p-8">
          <img
            className="col-span-2"
            src="/images/IMG_8710.jpg"
            alt="The Silver Clam House"
            width="100%"
            height="100%"
          />
        </div>
      </section>

      {/* Info + Book Now */}
      <section>
        <div className="mx-auto p-4 md:p-8">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-6 gap-10 lg:gap-40">
            <img
              className="col-span-3"
              src="/images/IMG_9219.jpg"
              alt="Fireplace at The Silver Clam"
              width="100%"
              height="100%"
            />
            <div className="col-span-3 max-w-[820px]">
              <div className="max-w-[370px] ml-auto mb-20">
                <img
                  className="col-span-2"
                  src="/images/DSCF9107.jpg"
                  alt="The Silver Clam House"
                  width="100%"
                  height="100%"
                />
              </div>
              <p className="text-[15px] md:text-[16px]leading-[140%] max-w-[450px] mb-6 font-mono tracking-tight">
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
                relax.
                <br />
                <br />
                Sleeping up to 6 guests between the main cottage and bunkie,
                it’s ideal for families, friends, or couples looking to
                reconnect and recharge. Whether you’re looking for a peaceful
                weekend escape, a family getaway filled with lake adventures, or
                a cozy spot to reconnect with nature, The Silver Clam Lake is
                ready to welcome you.
              </p>
              <a
                href="https://airbnb.ca/h/thesilverclam"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono font-medium cursor-pointer text-[18px] px-10 py-2 border rounded-full uppercase hover:bg-[#6B645A] hover:text-white hover:border-[#6B645A]"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section>
        <div className="mx-auto p-4 md:p-8">
          <h2 className="text-[60px] mb-12">Gallery</h2>

          {/* Grid-style gallery thumbnails */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {images.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition aspect-square"
                onClick={() => setLightboxIndex(i)} // open lightbox
              />
            ))}
          </div>

          {/* Lightbox */}
          {lightboxIndex !== null && (
            <Lightbox
              open={lightboxIndex !== null}
              index={lightboxIndex}
              close={() => setLightboxIndex(null)}
              slides={images.map((img) => ({ src: img.src, alt: img.alt }))}
            />
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#22211E]">
        <div className="mx-auto p-4 md:p-8 flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-6">
          <img
            src="/images/clam-logo.png"
            alt="The Silver Clam Logo"
            width="105px"
            height="93px"
          />
          <div>
            <div className="flex lg:justify-end gap-x-4 font-mono font-medium uppercase mb-4">
              <a
                className="hover:text-[#6B645A]"
                href="https://instagram.com/thesilverclam"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                className="hover:text-[#6B645A]"
                href="https://airbnb.ca/h/thesilverclam"
                target="_blank"
                rel="noopener noreferrer"
              >
                AirBNB
              </a>
              <a
                className="hover:text-[#6B645A]"
                href="mailto:thesilverclam@gmail.com"
              >
                Contact
              </a>
            </div>
            <p className="font-mono">The Silver Clam. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
