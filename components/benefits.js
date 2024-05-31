import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "./container";

const Benefits = (props) => {
  const { data } = props;
  return (
    <>
      <div className="flex flex-wrap lg:gap-10 lg:flex-nowrap bg-[#2164A1] text-white">
        <Container className="flex flex-wrap lg:gap-10 lg:flex-nowrap py-0">
          <div
            className={`flex flex-wrap items-center w-full lg:w-1/2 ${data.imgPos === "right" ? "lg:justify-end" : ""
              }`}>
            <div>
              <div className="flex flex-col w-full">
                <div className="flex w-full py-10 flex-col text-3xl font-bold leading-snug tracking-tight lg:leading-tight lg:text-3xl lg:py-0">
                  {data.title}
                </div>

                <div className="max-w-2xl text-lg leading-normal text-white-500 lg:text-xl xl:text-xl text-white">
                  {data.desc}
                </div>
              </div>

              <div className="w-full pb-4">
                {data.bullets.map((item, index) => (
                  <Benefit key={index} title={item.title} icon={item.icon}>
                    {item.desc}
                  </Benefit>
                ))}
              </div>
              <Link href="#quote_form" className="px-4 py-2 mt-8 text-sm uppercase text-[#2164A1] bg-gray-100 w-auto font-semibold">
                Get Quote
              </Link>
            </div>
          </div>
          <div
            className={`flex items-center justify-center w-full lg:w-1/2 ${props.imgPos === "right" ? "lg:order-1" : ""
              }`}>
            <div>
              <Image
                src={data.image}
                width="auto"
                height="auto"
                alt="Benefits"
                className={"object-cover"}
                placeholder="blur"
                blurDataURL={data.image.src}
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

function Benefit(props) {
  return (
    <>
      <div className="flex items-start space-x-3 border-b-2 py-4">
        <div className="flex items-center justify-center flex-shrink-0 w-7 h-7 ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </div>
        <div>
          <h4 className="text-xl font-medium text-white-800">
            {props.title}
          </h4>
          <p className="text-white-500">
            {props.children}
          </p>
        </div>
      </div>
    </>
  );
}

export default Benefits;
