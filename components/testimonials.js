import Image from "next/image";
import React from "react";
import Container from "./container";
import testimonial from "../public/img/testimonial.png";
import userOneImg from "../public/img/user1.jpg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";

const Testimonials  = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full text-white bg-[#2164A1] p-8">
            <p className="text-base leading-normal font-normal">
            These collections are being digitized into a product where they are including other collections, similar collections, from repositories all over the world. So by indexing & making them searchable, it really gives such a great context, a very rich context, for our collections, when you see it along with all these other collections all over the world. For the researcher, that’s just indispensable.
            </p>

            <Avatar
              image={testimonial}
              name="Patti Williams"
              title="Supervisory Archivist"
            />
          </div>
        </div>
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full text-white bg-[#2164A1] p-8">
            <p className="text-base leading-normal font-normal">
            These collections are being digitized into a product where they are including other collections, similar collections, from repositories all over the world. So by indexing & making them searchable, it really gives such a great context, a very rich context, for our collections, when you see it along with all these other collections all over the world. For the researcher, that’s just indispensable.
            </p>

            <Avatar
              image={testimonial}
              name="Patti Williams"
              title="Supervisory Archivist"
            />
          </div>
        </div>
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full text-white bg-[#2164A1] p-8">
            <p className="text-base leading-normal font-normal">
            These collections are being digitized into a product where they are including other collections, similar collections, from repositories all over the world. So by indexing & making them searchable, it really gives such a great context, a very rich context, for our collections, when you see it along with all these other collections all over the world. For the researcher, that’s just indispensable.
            </p>

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
    <div className="flex items-center mt-8 space-x-3">
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-white">{props.title}</div>
      </div>
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="60"
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