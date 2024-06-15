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