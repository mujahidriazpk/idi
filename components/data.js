import {
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/law-firm.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Why Us?",
  desc: "",
  image: benefitOneImg,
  bullets: [
    {
      title: "",
      desc: "Over 23 years experience working with the most prestigious class action firms as well as small and medium sized firms.",
      icon: <CheckCircleIcon />,
    },
    {
      title: "",
      desc: "Trusted with Priceless Documents",
      icon: <CheckCircleIcon />,
    },
    {
      title: "",
      desc: "We provide unparalleled quality, turnaround time and overall value",
      icon: <CheckCircleIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
