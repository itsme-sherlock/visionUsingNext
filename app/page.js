import Head from "next/head";
import HappyCustomers from "./components/homePage/HappyCustomers";
import Hero from "./components/homePage/Hero";
import QuickIntro from "./components/homePage/QuickIntro";
import WhyChooseUs from "./components/homePage/WhyChooseUs";
import Properties from "./components/homePage/properties/Properties";


export default function Home() {
  return(
  <div>
    <Head>
        <title>Vision Properties</title>
        <meta name="description" content="Your one-stop destination for finding your dream property in Tamilnadu. We are a team of expert real estate agents dedicated to helping our clients find the perfect property that matches their needs and budget." key="desc" />
        <meta property="og:title" content="Your one-stop destination for finding your dream property in Tamilnadu. We are a team of expert real estate agents dedicated to helping our clients find the perfect property that matches their needs and budget." />
        <meta
          property="og:description"
          content="Your one-stop destination for finding your dream property in Tamilnadu. We are a team of expert real estate agents dedicated to helping our clients find the perfect property that matches their needs and budget."
        />
      </Head>
    <Hero/>
    <QuickIntro/>
    <WhyChooseUs/>
    <Properties/>
    <HappyCustomers/>
  </div>
  )
}
