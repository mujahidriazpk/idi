"use client";
import Image from "next/image";
import Link from "next/link";
import bird from "../public/img/bird.png";
import hands from "../public/img/hands.png";
import lock from "../public/img/lock.png";
import doc from "../public/img/documents.jpg";
import book from "../public/img/books.jpg";
import news from "../public/img/newspapers.jpg";
import film from "../public/img/microfilms.jpg";
import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import React from "react";
import Container from "../components/container";
import Form2 from "../components/form_quote";
import Footer from "../components/footer";

const Home = () => {
    const formId = "scanning_quote_form"
    return (
        <>
            <Head>
                <title>Litigation Scanning Services | Indexing Digital Information</title>
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
                block2={["Digitizing priceless", "documents"]}
                block3={["OCR", "Technology"]}
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

            <Container className="flex flex-wrap">
                <div className="text-center m-auto text-base w-full md:w-2/3 leading-normal py-14 flex flex-col gap-y-5">
                    <div className="text-[#333333]">
                        Transform your physical documents into digital assets with our comprehensive scanning services. Whether it's documents, newspapers, books, microfilms, or utilizing advanced optical character recognition, we ensure high-quality, secure, and efficient digitization to meet all your needs.
                    </div>
                    <div className="text-[#333333] text-lg font-bold">
                        We are Experts Document Management
                    </div>
                    <div>
                        For over 23 years, libraries, museums, historical societies, and pharmaceutical companies have relied on the IDI team to deliver high profile and high volume scanning projects at a reasonable cost
                    </div>
                    <div className="font-bold py-5">
                        <Link href={"#"+formId} className="px-4 py-2 mt-4 text-sm uppercase text-white bg-[#2164A1] w-auto font-semibold">
                            Get FREE ESTIMATE
                        </Link>
                    </div>
                </div>
            </Container>

            <Container>
                <div className="flex w-full flex-col text-center my-4 text-4xl leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4x">
                    Preserving the World's Precious History
                </div>
                <div className="flex w-full flex-col text-center my-4 text-sm leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4x">
                    Below are some of the formats we digitize. If you don't see it below please give us a call.
                </div>
                <div className="grid gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div className="lg:col-span-2 xl:col-auto">
                        <div className="flex flex-col justify-between text-center w-full h-full bg-white p-7">
                            {/* <img src={doc} className="shadow-2xl"/> */}
                            <Image
                                src={doc}
                                alt="Documents"
                                loading="lazy"
                                placeholder="blur"
                                className="m-auto shadow-2xl"
                            />
                            <p className="mt-5">Documents</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex flex-col justify-between text-center w-full h-full bg-white p-7">
                            {/* <img src={book} className="shadow-2xl" /> */}
                            <Image
                                src={book}
                                alt="Books"
                                loading="lazy"
                                placeholder="blur"
                                className="m-auto shadow-2xl"
                            />
                            <p className="mt-5">Books</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex flex-col justify-between text-center w-full h-full bg-white p-7">
                            <Image
                                src={news}
                                alt="Newspapers"
                                loading="lazy"
                                placeholder="blur"
                                className="m-auto shadow-2xl"
                            />
                            <p className="mt-5">Newspapers</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex flex-col justify-between text-center w-full h-full bg-white p-7">
                            <Image
                                src={film}
                                alt="Microfilms"
                                loading="lazy"
                                placeholder="blur"
                                className="m-auto shadow-2xl"
                            />
                            <p className="mt-5">Microfilms</p>
                        </div>
                    </div>
                </div>
                <div className="font-bold py-5 text-center">
                    <Link href={"#"+formId} className="px-4 py-2 mt-4 text-sm uppercase text-white bg-[#2164A1] w-auto font-semibold">
                        Get Quote
                    </Link>
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
            {/* <div className="flex flex-wrap bg-[url('/img/book.png')] bg-no-repeat bg-center bg-cover my-2">
                <Container>
                    <div className="flex flex-col justify-center h-96">
                        <div className="text-3xl text-center m-auto my-0 w-full md:w-2/3 leading-normal  text-white">
                            Trusted with Digitizing Priceless Documents
                        </div>
                        <div className="text-center m-auto my-0 text-base w-2/3 md:w-1/2 leading-normal  text-white">
                            We have been entrusted with priceless, one of a kind, documents such as the US Constitution and other historical works so you can be confident that your files will be handled and maintained with the level of care and accountability.
                        </div>
                    </div>
                </Container>
            </div> */}
            {/* <div className="flex flex-wrap bg-[url('/img/jet.png')] bg-no-repeat bg-center bg-cover">
                <Container>
                    <div className="flex flex-col justify-center h-96">
                        <div className="text-3xl text-center m-auto my-0 pb-5 w-full md:w-2/3 leading-normal  text-white">
                            We provide Unmatched Quality, Speed, and Value
                        </div>
                        <div className="text-center m-auto my-0 text-base w-2/3 md:w-1/2 leading-normal  text-white">
                            <Link href="#quote_form" className="px-4 py-2 mt-4 text-sm uppercase text-white bg-[#2164A1] w-auto font-semibold">
                                Get FREE ESTIMATE
                            </Link>
                        </div>
                    </div>
                </Container>
            </div> */}
            {/* <div className="flex flex-wrap bg-[#F5F6F8]">
                <Container className="flex flex-wrap py-14 w-full md:w-2/3">
                    <div className="flex items-center w-full lg:w-1/2">
                        <div className="text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-3xl xl:leading-tight">
                            What is<br />Litigation Scanning?
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-full lg:w-1/2">
                        <div className="py-5 text-base leading-normal text-gray-500">
                            Litigation scanning services are designed to streamline the document management process for law firms and legal teams. These services use advanced technology to scan, digitize, and index legal documents, making them easily searchable and accessible.
                        </div>
                    </div>
                    <div className="flex items-center w-full lg:w-1/2">
                        <div className="text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-3xl xl:leading-tight">
                            What is OCR?
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-full lg:w-1/2">
                        <div className="py-5 text-base leading-normal text-gray-500">
                            OCR (Optical Character Recognition) technology converts scanned documents into editable, searchable data. At Indexing Digital, we use advanced OCR to streamline document retrieval, enhance accuracy, and improve accessibility for law firms.
                        </div>
                    </div>
                </Container>
            </div> */}
            {/* <Container>
                <div className="flex w-full flex-col text-center my-4 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4x">
                    Why you need this?</div>
                <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
                    <div className="lg:col-span-2 xl:col-auto">
                        <div className="flex flex-col justify-between text-center w-full h-full bg-gray-100 px-14 py-14">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 m-auto inline-block text-red-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <div className="text-lg font-bold">Increased Efficiency</div>
                            <div className="text-sm leading-normal">
                                Saves time and effort, allowing to focus on more strategic tasks.
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex flex-col justify-between text-center w-full h-full bg-gray-100 px-14 py-14">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 m-auto inline-block text-red-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
                            </svg>
                            <div className="text-lg font-bold">Improved Accuracy</div>
                            <div className="text-sm leading-normal">
                                OCR technology ensures that documents are scanned and indexed accurately.
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex flex-col justify-between text-center w-full h-full bg-gray-100 px-14 py-14">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 m-auto inline-block text-red-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64" />
                            </svg>
                            <div className="text-lg font-bold">Enhanced Accessibility</div>
                            <div className="text-sm leading-normal ">
                                Digitized documents can be accessed from anywhere, anytime, on any device.
                            </div>
                        </div>
                    </div>
                </div>
            </Container> */}
            {/* <Container className="py-0 pb-8">
                <div className="lg:flex gap-10  justify-center">
                    <div className="mb-14 lg:my-0 w-full lg:w-1/3">
                        <div className="flex flex-col justify-between text-center w-full h-full bg-gray-100 px-14 py-14">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 m-auto inline-block text-red-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                            </svg>
                            <div className="text-lg font-bold">Reduced Costs</div>
                            <div className="text-sm leading-normal">
                                Saves money on physical storage space and paper costs.
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3">
                        <div className="flex flex-col justify-between text-center w-full h-full bg-gray-100 px-14 py-14">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 m-auto inline-block text-red-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                            <div className="text-lg font-bold">Simplified Discovery</div>
                            <div className="text-sm leading-normal">
                                Makes it easier to find and produce relevant documents for legal proceedings.
                            </div>
                        </div>
                    </div>
                </div>
            </Container> */}

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
            {/* <Container >
                <div className="flex w-full flex-col text-center my-4 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-3xl">
                    Additional services
                </div>
                <div className="grid gap-0 w-2/3 justify-center m-auto lg:grid-cols-2 xl:grid-cols-4 items-center">
                    <div className="flex-row">
                        <Image
                            src={doc}
                            alt="Document Scanning Images"
                            loading="eager"
                            placeholder="blur"
                            className="m-auto"
                        />
                        <div className="text-center w-full text-base font-semibold py-2">Document Scanning</div>
                    </div>
                    <div className="flex-row">
                        <Image
                            src={book}
                            alt="Book Scanning Images"
                            loading="eager"
                            placeholder="blur"
                            className="m-auto"
                        />
                        <div className="text-center w-full text-base font-semibold py-2">Book Scanning</div>
                    </div>
                    <div className="flex-row">
                        <Image
                            src={news}
                            alt="Newspaper Scanning Images"
                            loading="eager"
                            placeholder="blur"
                            className="m-auto"
                        />
                        <div className="text-center w-full text-base font-semibold py-2">Newspaper Scanning</div>
                    </div>
                    <div className="flex-row">
                        <Image
                            src={flim}
                            alt="Flim Scanning Images"
                            loading="eager"
                            placeholder="blur"
                            className="m-auto"
                        />
                        <div className="text-center w-full text-base font-semibold py-2">Microfilm Scanning</div>
                    </div>
                </div>
            </Container> */}
            <Footer />
        </>
    );
}

export default Home;
