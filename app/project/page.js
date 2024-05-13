'use client'
import ContactForm from "../components/ContactForm";
import VideoSection from "../components/bom page/VideoSection";
import VideoTemplate from "../components/bom page/VideoTemplate";
import WhoBenefits from "../components/bom page/WhoBenefits/WhoBenefits";
import WhyVision from "../components/bom page/WhyVision";
import Features from "../components/bom page/features/Features";
import Button from "../components/button";
import clubHouse from '@/public/assets/club house.png';

export default function Project(){
    const details = [
        {
          heading: 'Economical Investment',
          csvg: clubHouse, // Updated relative path
          content: `
          Take advantage of redwood farming's potential to generate substantial returns on your capital. Redwoods are prized for their pricey wood, which translates to the possibility of big profits`
        },
        {
          heading: '1OX Returns ',
          csvg: clubHouse, // Updated relative path
          content: `
          Redwood is a highly valued asset with a dramatically greater return on investment (ROI) of 1OX times.Don't purchase vacant land. purchase a piece of land with passive income
          `
        },
        {
          heading: 'Having a Look at Peace',
          csvg: clubHouse, // Updated relative path
          content: `
          Escape the bustle of the city and spend some time in your own private redwood paradise. Imagine waking up to the tranquil sounds of wind rustling through majestic trees.`
        },
        {
          heading: 'Long-Term Investment',
          csvg: clubHouse, // Updated relative path
          content: `
          Watch your redwood trees grow over time, potentially producing both personal fulfillment and an attractive financial future.`
        },
        {
          heading: 'Eco-Friendly Profits',
          csvg: clubHouse, // Updated relative path
          content: `
          Your investment isn't just about financial gain; it's about making a positive impact. Generate income while contributing to reforestation and environmental well-being..
           .`
        },
        {
          heading: 'Growing Demand',
          content: `
          The demand for sustainable, high-quality wood is on the rise. Your redwood trees could be a sought-after resource for eco-conscious industries, ensuring a consistent revenue stream.`
        },
      ];

      const videos = [
        {
          src: "https://www.youtube.com/embed/EyXsg6w35KI",
          title: "HouseHold Worker To Realtor | Successful Journey ",
        },
        {
          src: "https://www.youtube.com/embed/nFODZpS0er0",
          title: "Flight In-charge To Successful Realtor | #VisionStories | Business Journey",
        },
        {
          src: "https://www.youtube.com/embed/SxhuGJfsRQ4",
          title: "Bike Taxi Driver to Successful Realtor | #VisionStories | Business Journey",
        },
      ];
      const slides = [

        {
          heading: "Clubhouse",
          content: `Designed as an ideal homestay, the Clubhouse offers a cozy retreat for a family of six. With thoughtful amenities and spacious accommodations, it promises a comfortable and enjoyable stay experience..                                  `,
        },
        {
          heading: "Near NHW",
          content: `Situated within a 3 km radius from major National Highways, the location provides convenient accessibility to key transportation routes, ensuring easy travel and connectivity for residents and businesses.`,
        },
        {
          heading: "Gunman Security",
          content:
            `We offer round-the-clock Gunman Security services, safeguarding for all properties. Our dedicated team ensures constant protection, enhancing security and peace of mind for clients at all times.`,
        },
        {
          heading: "Solar Fencing",
          content:
            `Our services include the installation of solar fencing systems. This advanced technology enhances security by utilizing solar power to electrify fences, effectively deterring intruders and ensuring safety.`,
        },
        {
          heading: "CCTV",
          content:
            `We offer comprehensive CCTV facilities, bolstering surveillance and safety. Our state-of-the-art cameras and monitoring systems provide continuous coverage, deterring potential threats and enhancing security across various environments.`,
        },
        {
          heading: "Accessibility",
          content:
            `Conveniently situated within a 30 km radius of Trichy city's airport and railway station, the property offers easy access to major transportation hubs, ensuring seamless travel connections for residents and visitors.`,
        },
        
      ];
    const handleContactUsClick = () => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        });
      };
    return(
        <div>
            <VideoSection src={"https://www.youtube.com/embed/BHIdfB_QE4c"} />
            <Button content={"Book Your Dream Forest For Just 10,000 RS"} onClick={handleContactUsClick} />
            <Features details={details}/>
            <Button content={"Book Your Dream Forest For Just 10,000 RS"} onClick={handleContactUsClick} />
            <WhyVision />
            <Button content={"Book Your Dream Forest For Just 10,000 RS"} onClick={handleContactUsClick} />
            <WhoBenefits slides={slides}/>
            <VideoTemplate videos={videos}/>
            <ContactForm minimalForm={true}/>
        </div>
    )
}
