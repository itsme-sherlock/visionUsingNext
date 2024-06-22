'use client'
import ContactForm from "../components/ContactForm";
import VideoSection from "../components/bom page/VideoSection";
import VideoTemplate from "../components/bom page/VideoTemplate";
import WhoBenefits from "../components/bom page/WhoBenefits/WhoBenefits";
import WhyVision from "../components/bom page/WhyVision";
import Features from "../components/bom page/features/Features";
import Button from "../components/button";
import clubHouse from '@/public/assets/club house.png';
export default function green(){
    const details = [
        {
          heading: 'Schools',
          csvg: clubHouse, // Updated relative path
          content: `
          One of the standout features of this neighborhood is the abundance of quality schools in the nearby surroundings. for instance,st marys matricualtion school is just 15 min away ,goverment elementary school is just 7 min away`
        },
        {
          heading: 'Colleges ',
          csvg: clubHouse, // Updated relative path
          content: `
          For those pursuing higher education or professional development, there are several esteemed colleges and universities nearby. for instance,christ arts and science college is just 5 km away.
          `
        },
        {
          heading: 'Hosptials',
          csvg: clubHouse, // Updated relative path
          content: `
          When considering the purchase of a new home, one of the key aspects to evaluate is the proximity and availability of quality healthcare services. there are multiple hospitals nearer with 5-10km of radius`
        },
        {
          heading: 'Religious places',
          csvg: clubHouse, // Updated relative path
          content: `
          his property is surrounded by a variety of religious places that enrich the communitys cultural tapestry. Within close proximity, you'll find serene temples, peaceful churches, and welcoming mosques`
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
          heading: "State Highway   ",
          content: `Tiruvallur and Kancheepuram districts may provide a convenient route
          from Chennai to Karnataka.The
          two-lane road from Sunguvarchatram to Mappedu is currently being
          expanded into a four-lane road, making it simple to travel and then
          from there to Chennai and Andhra Pradesh.`,
        },
        {
          heading: "Multi-Modal Logistics Parks",
          content:
            `MMLP Chennai is India's first multi-modal logistics park (MMLP). It's
            being built on 184.27 acres of land in Mappedu, Thiruvallur district,
            Tamil Nadu. Reliance Industries Ltd (RIL) is the private developer
            building the MMLP`,
        },
        {
          heading: "logistics corridor",
          content:
            `A particular region is dedicated to developing logistics and all other
            logistic oriented business and companies by the state and central
            government of India.`,
        },
        {
          heading: "Green field airport",
          content:
            `The Chennai Greenfield International Airport is a proposed airport project for
            the city of Chennai, India. It will be built near Parandur in the Kanchipuram
            district, about 40 kilometers from the city center. The airport will serve the city
            alongside the existing Chennai International Airport`,
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
          
            <VideoSection src={"https://www.youtube.com/embed/TnOGWUy93zI"} />
            <Button content={"Book Your Dream plot For Just 10,000 RS"} onClick={handleContactUsClick} />
            <Features details={details}/>
            <Button content={"Book Your Dream plot For Just 10,000 RS"} onClick={handleContactUsClick} />
            <WhyVision />
            <Button content={"Book Your Dream plot For Just 10,000 RS"} onClick={handleContactUsClick} />
            <WhoBenefits slides={slides}/>
            <VideoTemplate videos={videos}/>
            <ContactForm minimalForm={true}/>
        </div>
    )
}