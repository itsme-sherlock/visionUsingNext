import React from "react";
import whyLogo from '@/public/assets/whyLogo.png';
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <section className="flex flex-wrap">
      <div className="flex py-10 pl-10 items-center">
        {/* left */}
        <div>
          <h1 className="text-6xl font-bold text-visionBlue">Why choose us</h1>
          <ul className="grid gap-16 pt-16 text-xl">
            <li>
              <span className="custom-span">Expertise</span> <br/>Our team has years of experience in the real estate
              industry, providing you with the right guidance and advice.
            </li>
            <li>
              <span className="custom-span">Trustworthy</span><br/> We are committed to building strong relationships with
              our clients through transparency and honesty.
            </li>
            <li>
              <span className="custom-span">Personalized Attention</span><br/> We provide personalized attention to every
              client to ensure that they find the perfect property that matches
              their needs.
            </li>
          </ul>
        </div>
        {/* right */}
        <div>
          <Image src={whyLogo} alt="logo"></Image>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
