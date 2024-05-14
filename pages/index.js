import Image from "next/image";
import heroImg from "../public/img/hero.png";
import files from "../public/img/files.png";
import bird from "../public/img/bird.jpg";
import hands from "../public/img/hands.png";
import lock from "../public/img/lock.png";
import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Container from "../components/container";

import { benefitOne, benefitTwo } from "../components/data";
import Benefits from "../components/benefits";
import Form from "../components/form";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>Innovative Document Imaging</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <div className="flex flex-wrap bg-[#F5F6F8]">
        <Container className="flex flex-wrap py-0">
          <div className="flex items-center w-full lg:w-1/2">
            <div className="max-w-2xl mb-8">
              <div className="text-xl font-bold leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-3xl xl:leading-tight dark:text-white">
                What is Litigation Scanning?
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full lg:w-1/2">
            <div className="">
              <div className="py-20 text-base leading-normal text-gray-500 dark:text-gray-300">
                Litigation scanning services are designed to streamline the document management process for law firms and legal teams. These services use advanced technology to scan, digitize, and index legal documents, making them easily searchable and accessible.
              </div>
            </div>
          </div>
          <Image
            src={files}
            width="880"
            height="330"
            alt="Files Images"
            loading="eager"
            placeholder="blur"
            className="inline m-auto"
          />
        </Container>
      </div>
      <Container>
        <div className="flex w-full flex-col text-center my-4 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          Why you need this?</div>
        <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
          <div className="lg:col-span-2 xl:col-auto">
            <div className="flex flex-col justify-between text-center w-full h-full bg-gray-100 px-14 py-14 dark:bg-trueGray-800">
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
            <div className="flex flex-col justify-between text-center w-full h-full bg-gray-100 px-14 py-14 dark:bg-trueGray-800">
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
            <div className="flex flex-col justify-between text-center w-full h-full bg-gray-100 px-14 py-14 dark:bg-trueGray-800">
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
        <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3 justify-center">
          <div className="lg:col-span-2 xl:col-auto">
            <div className="flex flex-col justify-between text-center w-full h-full bg-gray-100 px-14 py-14 dark:bg-trueGray-800">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 m-auto inline-block text-red-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
              </svg>
              <div className="text-lg font-bold">Reduced Costs</div>
              <div className="text-sm leading-normal">
                Saves money on physical storage space and paper costs.
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col justify-between text-center w-full h-full bg-gray-100 px-14 py-14 dark:bg-trueGray-800">
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
      <Benefits data={benefitOne} />
      <Container className="pb-0">
        <div className="flex w-full flex-col text-center my-4 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          All Services Include</div>
        <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
          <div className="lg:col-span-2 xl:col-auto">
            <div className="flex flex-col justify-center text-center w-full h-full px-14 rounded-none py-16 bg-[#2164A1]">
              <Image
                src={bird}
                alt="Files Images"
                loading="eager"
                placeholder="blur"
                className="m-auto"
              />
              <div className="text-white text-center text-lg">All Services Include</div>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col justify-center w-full h-full px-14 rounded-none py-16 bg-[#2164A1]">
              <Image
                src={hands}
                alt="Files Images"
                loading="eager"
                placeholder="blur"
                className="m-auto"
              />
              <div className="text-white text-center text-lg">NDA Protection</div>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col justify-center w-full h-full px-14 rounded-none py-16 bg-[#2164A1]">
              <Image
                src={lock}
                alt="Files Images"
                loading="eager"
                placeholder="blur"
                className="m-auto"
              />
              <div className="text-white text-center text-lg">Encryption Secured</div>
            </div>
          </div>
        </div>
      </Container>
      <Testimonials />
      <Container className="pb-0">
        <div className="flex w-full flex-col text-center my-4 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          We Digitized the Constitution of the United States</div>
        <div className="flex w-full flex-col text-center">We Will Use the Same State of the Art Technology to Preserve Your Precious Memories</div>
        <div className="my-4 flex-col text-center"><a href="/" className="bg-[#2164A1] w-auto px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#2164A1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Learn More
        </a></div>
      </Container>
      <Form />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;
