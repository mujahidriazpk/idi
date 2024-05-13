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
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
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
      <div className="flex flex-wrap bg-white">
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h2 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
            What is Litigation Scanning?
            </h2>
            
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
          <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Nextly is a free landing page & marketing website
              template for startups and indie projects. Its built with
              Next.js & TailwindCSS. And its completely open-source.
            </p>
          </div>
        </div>
      </Container>
      </div>
      <SectionTitle>
        <Image
              src={files}
              width="880"
              height="330"
              alt="Files Images"
              loading="eager"
              placeholder="blur"
            />
      </SectionTitle>
      <Container>
      <h1 className="flex w-full flex-col text-center mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">Why you need this?</h1>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <h5>Increased Efficiency</h5>
            <p className="text-2xl leading-normal">
              Saves time and effort, allowing to focus on more strategic tasks.
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <h5>Improved Accuracy</h5>
            <p className="text-2xl leading-normal">
              OCR technology ensures that documents are scanned and indexed accurately.
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
          <h5>Enhanced Accessibility</h5>
            <p className="text-2xl leading-normal ">
              Digitized documents can be accessed from anywhere, anytime, on any device.
            </p>
          </div>
        </div>
      </div>
    </Container>
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <h5>Reduced Costs</h5>
            <p className="text-2xl leading-normal">
              Saves money on physical storage space and paper costs.
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <h5>Simplified Discovery</h5>
            <p className="text-2xl leading-normal">
              Makes it easier to find and produce relevant documents for legal proceedings.
            </p>
          </div>
        </div>
      </div>
    </Container>
      <Benefits data={benefitOne} />
      <Container>
      <h1 className="flex w-full flex-col text-center mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
      All Services Include</h1>
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
            <h5 className="text-white text-center">All Services Include</h5>
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
            <h5 className="text-white text-center">NDA Protection</h5>
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
          <h5 className="text-white text-center">Encryption Secured</h5>
          </div>
        </div>
      </div>
    </Container>
      <SectionTitle
        pretitle=""
        title="Trusted by the biggest and the best">
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="" title="We Digitized the Constitution of the United States">
      <div>We Will Use the Same State of the Art Technology to Preserve Your Precious Memories</div>
      <div><a href="/" className="px-4 py-3 font-thin text-white bg-sky-900 rounded-sm  w-auto">
          Learn More
      </a></div>
      </SectionTitle>
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;
