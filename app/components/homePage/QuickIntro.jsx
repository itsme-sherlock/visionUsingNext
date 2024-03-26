
import door from "@/public/assets/door.png";
import quickIntro from '@/public/assets/quickIntro.png'
import Image from "next/image";

const QuickIntro = () => {
  return (
    <section className="flex flex-wrap">
    
      <div className="flex bg-visionBlue py-20 items-center px-10" style={{ backgroundImage: `url(${quickIntro})` }}>
        {/* left */}
        <div className="flex flex-col items-center">
          {/* svg */}
          <Image src={door} alt="door" className="object-contain w-10"></Image>
          {/* headding */}
          <h1 className="text-visionGold text-6xl">Quick Intro</h1>
        </div>
        {/* right */}
        <ul className="flex flex-col gap-16 text-xl justify-center text-white">
          <li>
            Founded in 2005, Vision Properties has become the most trusted real
            estate agency in Tamilnadu
          </li>
          <li>
            We have a team of experienced professionals who are passionate about
            helping our clients find the perfect property that matches their
            needs.
          </li>
          <li>
            We are committed to providing the highest level of customer service
            and satisfaction.
          </li>
        </ul>
        <div></div>
      </div>
    </section>
  );
};

export default QuickIntro;
