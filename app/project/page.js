'use client'
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
          src: "https://www.youtube.com/embed/aInhxNh8aB8",
          title: "HouseHold Worker To Realtor | Successful Journey ",
        },
        {
          src: "https://www.youtube.com/embed/r9LPajesVCE",
          title: "Flight In-charge To Successful Realtor | #VisionStories | Business Journey",
        },
        {
          src: "https://www.youtube.com/embed/D3Q9sZ1m3N8",
          title: "Bike Taxi Driver to Successful Realtor | #VisionStories | Business Journey",
        },
      ];
      const slides = [

        {
          heading: "Aspiring Real Estate Professionals",
          content: `deal for individuals with a passion for real estate looking to kickstart their career.                                  `,
        },
        {
          heading: "Career Seekers",
          content: `Those in search of a rewarding and impactful profession.
          Guidance Seekers: Individuals who value personalized mentorship and guidance from a seasoned real estate expert.`,
        },
        {
          heading: "Newbies to Real Estate",
          content:
            `Tailored for those new to the field, providing a fast-track to success.
            Freelancers: Suited for those desiring the flexibility and autonomy of a freelance career.
            Career Explorers: Perfect for individuals confused about their career path or future direction.`,
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
        </div>
    )
}
