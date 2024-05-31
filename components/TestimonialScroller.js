// components/TestimonialScroller.js
import Image from "next/image";
import React from "react";
import { useState } from 'react';
import Container from "./container";
import testimonial from "../public/img/testimonial.png";
import styles from './TestimonialScroller.module.css';

const TestimonialScroller = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={styles.scroller} 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    ><Container className="pb-0">
    <div className="flex w-full flex-col text-center my-4 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-3xl">
      Trusted by the biggest and the best</div>
      </Container>
      <div className={`${styles.scrollerInner} ${isHovered ? styles.paused : ''}`}>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-5 px-8">
        <div className="lg:col-span-2 xl:col-auto testimonialContainer">
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
        <div className="lg:col-span-2 xl:col-auto testimonialContainer">
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
        <div className="lg:col-span-2 xl:col-auto testimonialContainer">
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
        <div className="lg:col-span-2 xl:col-auto testimonialContainer">
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
        <div className="lg:col-span-2 xl:col-auto testimonialContainer">
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
      </div>
    </div>
  );
};
function Avatar(props) {
    return (
      <div className="w-full items-center mt-8">
        <div className="float-left w-1/3">
          <div className="text-lg font-medium">{props.name}</div>
          <div className=" text-white text-xs border-b-2 pb-2">{props.title}</div>
        </div>
        <div className="float-right w-8/12 flex justify-end">
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
export default TestimonialScroller;
