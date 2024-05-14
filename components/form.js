import Image from "next/image";
import React from "react";
import Container from "./container";

const Form = (props) => {
    return (
        <Container >
            <div className="flex w-full flex-col text-center my-4 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
            Request a quote</div>
            <form action="#" method="POST" className="mx-auto">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="full-name" className="block text-sm font-semibold leading-6 text-gray-900">First name</label>
                        <div className="mt-2.5">
                            <input placeholder="Name" type="text" name="full-name" id="full-name" autoComplete="given-name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                        <div className="mt-2.5">
                            <input placeholder="Email" type="email" name="email" id="email" autoComplete="email"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
                        <div className="relative mt-2.5">
                            <input placeholder="Phone Number" type="text" name="phone-number" id="phone-number" autoComplete="tel"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="documents_count" className="block text-sm font-semibold leading-6 text-gray-900">How many documents?</label>
                        <div className="mt-2.5">
                            <input placeholder="Eg. 10" type="documents_count" name="documents_count" id="documents_count"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="documents_type" className="block text-sm font-semibold leading-6 text-gray-900">What Type of Documents?</label>
                        <div className="relative mt-2.5">
                            <input placeholder="Eg. 10" type="text" name="documents_type" id="documents_type" autoComplete="tel"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="documents_count" className="block text-sm font-semibold leading-6 text-gray-900">Image enhancement required?</label>
                        <div className="mt-2.5">
                        <div className="flex h-6 items-center">
                            <button type="button"
                                className="bg-gray-200 flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                role="switch" aria-checked="false" aria-labelledby="switch-1-label">
                                <span className="sr-only">Agree to policies</span>
                                <span aria-hidden="true"
                                    className="translate-x-0 h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"></span>
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <button type="submit"
                        className="block w-full rounded-md bg-[#2164A1] uppercase px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#2164A1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get Quote</button>
                </div>
            </form>
        </Container>
    );
}
export default Form;