'use client'
import VideoSection from "../components/bom page/VideoSection";
import Features from "../components/bom page/features/Features";
import Button from "../components/button";
import Title from "../components/title";
import clubHouse from '../../public/assets/club house.png';
import WhyVision from "../components/bom page/WhyVision";
import WhoBenefits from "../components/bom page/WhoBenefits/WhoBenefits";
import VideoTemplate from "../components/bom page/VideoTemplate";
import ContactForm from "../components/ContactForm";

export default function bom(){
  const details = [
    {
      heading: '24/7 Personal Guidance',
      csvg: clubHouse, // Updated relative path
      content: `
      Access to 24 hours of one-on-one mentoring with a seasoned real estate expert.`
    },
    {
      heading: 'Two Months Free Training',
      csvg: clubHouse, // Updated relative path
      content: `
      Comprehensive and intensive training to equip you with the necessary skills.
      
      `
    },
    {
      heading: 'High Incentives',
      csvg: clubHouse, // Updated relative path
      content: `
      Earn more compared to others in the industry as you progress.`
    },
    {
      heading: 'Freelancer Flexibility:',
      csvg: clubHouse, // Updated relative path
      content: `
      Work on your terms and pace, providing the freedom you crave.`
    },
    {
      heading: 'Career Clarity',
      csvg: clubHouse, // Updated relative path
      content: `
      Receive guidance on your career path and future trajectory.
       .`
    },
    {
      heading: 'Team Support',
      content: `
      Be a part of a supportive team, fostering a collaborative and encouraging environment.`
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
            <Title mainHeading={'Want Successful Real Estate Career ?'}/>
            <VideoSection src={"https://www.youtube.com/embed/aEUjESsg93s"} />
            <Button content={"Contact us"} onClick={handleContactUsClick} />
            <Features details={details}/>
            <Button content={"Contact us"} onClick={handleContactUsClick} />
            <WhyVision />
            <Button content={"Contact us"} onClick={handleContactUsClick} />
            <WhoBenefits slides={slides}/>
            {/* <VideoTemplate videos={videos}/> */}
            <ContactForm minimalForm={false}/>
      
        </div>
    )
}