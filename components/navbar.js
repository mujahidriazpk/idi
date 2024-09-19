import Link from "next/link";
import Image from "next/image"
import Logo from "../public/img/logo.svg"

const Navbar = ({formId}) => {
  const navigation = [
    "Product",
    "Features",
    "Pricing",
    "Company",
    "Blog",
  ];

  return (
    <div className="w-full absolute">
      <div className=" bg-[#141414] w-full text-white flex justify-center uppercase text-xs md:text-sm lg:text-base">
        <div className="flex w-full lg:w-1/2 justify-around items-center">
          <p>HIGHEST QUALITY</p>
          <Image src={require("../public/img/dot.png")} />
          <p>Fastest Turnaround</p>
          <Image src={require("../public/img/dot.png")} />
          <p>Most Affordable</p>
        </div>
      </div>
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-14">
        {/* Logo  */}
        <Link href="/">
          <Image
            src={Logo}
            alt="logo"
            width={170}
            height={150}
          />
        </Link>

        <div className="flex mr-3 space-x-4 nav__item justify-center items-center">
          <div className="hidden gap-x-3 justify-center items-center md:flex">
            <div className="flex flex-col grey clear-both w-auto text-sm items-center text-[#BEBDBD] font-semibold uppercase">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, index) => {
                  return (
                    <>
                      <img src="/img/star.png" key={index} />
                    </>
                  )
                })}
              </div>
              <div className={"h-[1px] border-b-[1px] w-full border-primary"} />
              <p>5 Star Google Rating</p>
            </div>
            <div className="uppercase flex flex-col grey clear-both w-auto text-sm items-center text-[#BEBDBD] font-semibold">
              <Link href="tel:1-800-380-9058" className="text-base text-white">1-800-380-9058</Link>
              <div className={"h-[1px] border-b-[1px] w-full border-primary"} />
              <p>Free Consultation</p>
            </div>
          </div>
          <Link href={"#" + formId} className="px-4 py-2 text-sm uppercase text-white bg-[#2164A1] w-auto font-semibold">
            Get Quote
          </Link>
        </div>
      </nav>
      <div className="flex gap-x-3 justify-between items-center md:hidden px-7 py-6 bg-black bg-opacity-40">
        <div className="flex flex-col grey clear-both w-auto text-sm items-center text-[#BEBDBD] font-semibold uppercase">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, index) => {
              return (
                <>
                  <img src="/img/star.png" key={index} />
                </>
              )
            })}
          </div>
          <div className={"h-[1px] border-b-[1px] w-full border-primary"} />
          <p>5 Star Google Rating</p>
        </div>
        <div className="uppercase flex flex-col grey clear-both w-auto text-sm items-center text-[#BEBDBD] font-semibold">
          <Link href="tel:1-800-380-9058" className="text-base text-white">1-800-380-9058</Link>
          <div className={"h-[1px] border-b-[1px] w-full border-primary"} />
          <p>Free Consultation</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
