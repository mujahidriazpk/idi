"use client";
import Image from "next/image";
import Link from "next/link";
import bird from "../public/img/bird.png";
import hands from "../public/img/hands.png";
import lock from "../public/img/lock.png";
import doc from "../public/img/documents.png";
import book from "../public/img/books.png";
import news from "../public/img/newspapers.png";
import film from "../public/img/microfilms.png";
import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import React from "react";
import Container from "../components/container";
import Form2 from "../components/form_quote";

const Home = () => {
    const formId = "scanning_quote_form"
    return (
        <>
            <Head>
                <title>Document Scanning Services | Indexing Digital Information</title>
                <meta
                    name="description"
                    content="Innovative Document Imaging is a world leader in document imaging and document management solutions. IDI maintains a state-of-the-art document conversion facility in East Brunswick, New Jersey. Our company mission is to supply the best service possible at a reasonable"
                />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <Navbar formId={formId}/>

            <Hero
                bgUrl={"/img/tablet1.png"}
                block1={["23+ years", "of experience"]}
                block2={["Responsible for Digitizing", "Priceless Documents"]}
                block3={["A+ Better Business Bureau", "Rating"]}
            >
                <div className="flex flex-col justify-center w-full md:w-2/3">
                    <div className="text-4xl lg:text-5xl text-left text-white font-extralight mb-5 mt-52 md:mt-44">
                        <p className="mb-7">Leader in Document Scanning Services</p>
                        <ul
                            role="list"
                            className="list-disc ml-10"
                        >
                            <li className="text-3xl lg:text-4xl text-left text-white">Documents</li>
                            <li className="text-3xl lg:text-4xl text-left text-white">Books</li>
                            <li className="text-3xl lg:text-4xl text-left text-white">Newspapers</li>
                            <li className="text-3xl lg:text-4xl text-left text-white">Microfilm</li>
                        </ul>
                    </div>
                    <div className="flex gap-x-10">
                        <img src="/img/a-rating.png" className="w-20 h-full" />
                        <img src="/img/footerlogo2.png" className="w-16 h-full" />
                    </div>
                </div>
            </Hero>

            {/* <Container className="flex flex-wrap">
                <div className="text-center m-auto text-base w-full md:w-2/3 leading-normal py-14 flex flex-col gap-y-5">
                    <div className="text-[#333333] text-4xl font-bold">
                        Expertise in Document Scanning Services
                    </div>
                    <div>
                        For over 23 years, libraries, museums, historical societies, and pharmaceutical companies have relied on the IDI team to deliver high profile and high volume scanning projects at a reasonable cost.
                    </div>
                    <div className="text-[#333333]">
                        Transform your physical documents into digital assets with our comprehensive scanning services. Whether it's documents, newspapers, books, microfilms, or utilizing advanced optical character recognition, we ensure high-quality, secure, and efficient digitization to meet all your needs.
                    </div>
                </div>
            </Container> */}

            <Container>
                <div>
                    <div className="text-center m-auto text-base w-full md:w-2/3 leading-normal py-14 flex flex-col gap-y-5">
                    <div className="text-[#333333] text-4xl font-bold">
                        Preserving the World's Precious History
                    </div>
                    <div>
                        For over 23 years, libraries, museums, historical societies, and pharmaceutical companies have relied on the IDI team to deliver high profile and high volume scanning projects at a reasonable cost.
                    </div>
                    <div className="text-[#333333]">
                        Transform your physical documents into digital assets with our comprehensive scanning services. Whether it's documents, newspapers, books, microfilms, or utilizing advanced optical character recognition, we ensure high-quality, secure, and efficient digitization to meet all your needs.
                    </div>
                    <div className="flex w-full flex-col text-center leading-snug tracking-tight text-gray-800 lg:leading-tight">
                        Below are some of the formats we digitize. If you don't see it below please give us a call.
                    </div>
                    </div>
                    <div className="grid gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <div>
                            <div className="flex flex-col justify-between text-center w-full h-full p-7">
                                <Image
                                    src={doc}
                                    alt="Documents"
                                    loading="lazy"
                                    placeholder="blur"
                                    className="m-auto "
                                />
                                <p className="mt-5">Documents</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col justify-between text-center w-full h-full p-7">
                                <Image
                                    src={book}
                                    alt="Books"
                                    loading="lazy"
                                    placeholder="blur"
                                    className="m-auto "
                                />
                                <p className="mt-5">Books</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col justify-between text-center w-full h-full p-7">
                                <Image
                                    src={news}
                                    alt="Newspapers"
                                    loading="lazy"
                                    placeholder="blur"
                                    className="m-auto "
                                />
                                <p className="mt-5">Newspapers</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col justify-between text-center w-full h-full bg-transparent p-7">
                                <Image
                                    src={film}
                                    alt="Microfilms"
                                    loading="lazy"
                                    placeholder="blur"
                                    className="m-auto "
                                />
                                <p className="mt-5">Microfilms</p>
                            </div>
                        </div>
                    </div>
                    <div className="font-bold py-5 text-center">
                        <Link href={"#" + formId} className="px-4 py-2 mt-4 text-sm uppercase text-white bg-[#2164A1] w-auto font-semibold">
                            Get Quote
                        </Link>
                    </div>
                </div>
            </Container>

            <div className="flex flex-wrap bg-[url('/img/tablet2.png')] bg-no-repeat bg-center bg-cover">
                <Container>
                    <div className="flex flex-col justify-center gap-y-5">
                        <div className="text-3xl text-center m-auto my-0 w-full md:w-2/3 leading-normal  text-white">
                            Extract Text from Scanned Documents with OCR
                        </div>
                        <div className="text-center m-auto my-0 text-base w-full md:w-2/3 leading-normal  text-white">
                            The Optical Character Recognition technology services enable you to extract text from scanned documents. Convert images of text into searchable and editable digital content, making information retrieval and management easier and more efficient.
                        </div>
                    </div>
                    <div className="flex flex-col justify-center gap-y-5 mt-5">
                        <div className="text-3xl text-center m-auto my-0 w-full md:w-2/3 leading-normal  text-white">
                            Imagine having all your content at your fingertips.
                        </div>
                        <div className="text-center m-auto my-0 text-base w-full md:w-1/2 leading-normal  text-white">
                            Anytime. Anywhere.
                        </div>
                        <div className="text-center m-auto my-0 text-base w-full md:w-1/2 leading-normal  text-white">
                            Imagine having access to all your notebooks, records, and documents wherever and whenever you want.
                        </div>
                    </div>
                </Container>
            </div>

            <Container className="pb-0">
                <div className="flex w-full flex-col text-center my-4 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-3xl">
                    All Services Include
                </div>
                <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
                    <div className="lg:col-span-2 xl:col-auto">
                        <div className="flex flex-col justify-center text-center w-full h-full px-14 rounded-none py-16 bg-gray-100">
                            <Image
                                src={bird}
                                alt="Files Images"
                                loading="eager"
                                placeholder="blur"
                                className="m-auto"
                            />
                            <div className="text-[#333333] text-center text-lg font-bold">HIPAA Compliant</div>
                            <div className="text-[#333333] text-center text-sm">{"(if applicable)"}</div>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex flex-col justify-center w-full h-full px-14 rounded-none py-16 bg-gray-100">
                            <Image
                                src={hands}
                                alt="Files Images"
                                loading="eager"
                                placeholder="blur"
                                className="m-auto"
                            />
                            <div className="text-[#333333] text-center text-lg font-bold">NDA Protection</div>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex flex-col justify-center w-full h-full px-14 rounded-none py-16 bg-gray-100">
                            <Image
                                src={lock}
                                alt="Files Images"
                                loading="eager"
                                placeholder="blur"
                                className="m-auto"
                            />
                            <div className="text-[#333333] text-center text-lg font-bold">Encryption Secured</div>
                        </div>
                    </div>
                </div>
            </Container>

            <Form2 formId={formId}/>

            
        </>
    );
}

export default Home;
