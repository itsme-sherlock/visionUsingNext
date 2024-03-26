import Image from "next/image";
import landing from '@/public/assets/hero/landing.png'

const Hero = () => {
  return (
    <section className=" h-screen flex flex-wrap">
    <div className="flex items-end">
      {/* Image */}

      <Image
        src={landing}
        alt="landing"
        className="hidden sm:flex w-[40%] h-[70%] "
      />
      {/* Text Container */}
      <div className="flex flex-col ">
        <div className="my-5 font-playfair font-extrabold text-4xl sm:text-8xl text-visionGold">
          welcome to <br />
          vision properties
        </div>
        {/* small content */}
        <div className="my-5 text">
          Your one-stop destination for finding your dream property in
          Tamilnadu. We are a team of expert real estate agents dedicated to
          helping our clients find the perfect property that matches their
          needs and budget.
        </div>
        <div className="flex justify-center">
          <button className="my-5 p-3 w-fit text-2xl bg-visionBlue rounded-md text-white ">
            Book your dream plot for just Rs 5000
          </button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero