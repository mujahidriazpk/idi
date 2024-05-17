import Image from "next/image";
import React from "react";
import Container from "./container";
import testimonial from "../public/img/testimonial.png";
import userOneImg from "../public/img/user1.jpg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";

const Testimonials = () => {
  return (
    <Container className="pb-0">
      <div className="flex w-full flex-col text-center my-4 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
        Trusted by the biggest and the best</div>
        
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full text-white bg-[#2164A1] p-8">
            <div className="text-base leading-normal font-normal">
              These collections are being digitized into a product where they are including other collections, similar collections, from repositories all over the world. So by indexing & making them searchable, it really gives such a great context, a very rich context, for our collections, when you see it along with all these other collections all over the world. For the researcher, that’s just indispensable.
            </div>

            <Avatar
              image={testimonial}
              name="Patti Williams"
              title="Supervisory Archivist"
            />
          </div>
        </div>
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full text-white bg-[#2164A1] p-8">
            <div className="text-base leading-normal font-normal">
              These collections are being digitized into a product where they are including other collections, similar collections, from repositories all over the world. So by indexing & making them searchable, it really gives such a great context, a very rich context, for our collections, when you see it along with all these other collections all over the world. For the researcher, that’s just indispensable.
            </div>

            <Avatar
              image={testimonial}
              name="Patti Williams"
              title="Supervisory Archivist"
            />
          </div>
        </div>
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full text-white bg-[#2164A1] p-8">
            <div className="text-base leading-normal font-normal">
              These collections are being digitized into a product where they are including other collections, similar collections, from repositories all over the world. So by indexing & making them searchable, it really gives such a great context, a very rich context, for our collections, when you see it along with all these other collections all over the world. For the researcher, that’s just indispensable.
            </div>

            <Avatar
              image={testimonial}
              name="Patti Williams"
              title="Supervisory Archivist"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8">
      <div className="justify-start">
        <div className="text-lg font-medium">{props.name}</div>
        <div className=" text-white text-xs border-b-2 pb-2">{props.title}</div>
      </div>
      <div className="flex-shrink-0 overflow-hidden flex justify-end">
        <Image
          src={props.image}
          width="auto"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Testimonials;