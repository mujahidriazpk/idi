"use client";
import Image from "next/image";
import Link from "next/link";
import bird from "../public/img/bird.png";
import hands from "../public/img/hands.png";
import lock from "../public/img/lock.png";
import doc from "../public/img/doc_scan.png";
import book from "../public/img/book_scan.png";
import news from "../public/img/news_scan.png";
import flim from "../public/img/flim_scan.png";
import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import React from "react";
import Container from "../components/container";
import Form2 from "../components/form_quote";

const Home = () => {
  const formId = "quote_form"
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
        bgUrl={"/img/hero_bg1.png"}
        block1={["23+ years", "of experience"]}
        block2={["Digitizing priceless", "documents"]}
        block3={["unparalleled quality,", "speed & value"]}
      >
        <div className="flex flex-col justify-center w-full md:w-1/2">
          <div className="text-4xl lg:text-5xl text-left text-white font-extralight mb-5 mt-52">
            Litigation Document Scanning & Indexing Services.
          </div>
          <div className="flex gap-x-10">
            <img src="/img/a-rating.png" className="w-20 h-full" />
            <img src="/img/footerlogo2.png" className="w-16 h-full" />
          </div>
        </div>
      </Hero>
      <div className="flex flex-wrap bg-gray-100">
      <Container className="flex flex-wrap">
        <div className="text-center m-auto text-xl font-[500] w-full md:w-2/3 leading-normal">
          <div className="text-[#333333]">
            For law firms, efficient document management is crucial. Our comprehensive legal document scanning and indexing services convert paper records into a text-searchable digital archive, enhancing security, accessibility, and compliance.
          </div>
          <div className="font-bold py-5">
            With expertise in legal scanning, OCR, and litigation support, we optimize your law firm’s document management processes.
          </div>
          <div className="font-normal text-base py-5">
            <Link href={"#" + formId} className="px-4 py-2 mt-4 text-sm uppercase text-white bg-[#2164A1] w-auto font-semibold">
              Get FREE ESTIMATE
            </Link>
          </div>
        </div>
      </Container>
      </div>
      <Container className='xl:py-0'>
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
      </Container>
      <Container className="py-0 pb-8">
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
      </Container>
      <div className="flex flex-wrap bg-[url('/img/hunters-race.png')] bg-no-repeat bg-center bg-cover">
        <Container>
          <div className="flex flex-col justify-center h-96">
            <div className="text-3xl text-center m-auto my-0 pb-5 w-full md:w-2/3 leading-normal  text-white">
            Expertise in Legal Document Management
            </div>
            <div className="text-center m-auto my-0 text-base w-2/3 md:w-1/2 leading-normal  text-white">
            Indexing Digital Information has been in business for over 23 years and is a world leader in Legal Document Management. And Secure Scanning Services
            </div>
            <div className="text-center m-auto my-8 text-base w-2/3 md:w-1/2 leading-normal  text-white">
              <Link href={"#" + formId} className="px-4 py-2 mt-4 text-sm uppercase text-white bg-[#2164A1] w-auto font-semibold">
              CONTACT OUR EXPERTS TEAM
              </Link>
            </div>
          </div>
        </Container>
      </div>
      <Container className="xl:py-0">
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
    </>
  );
}

export default Home;