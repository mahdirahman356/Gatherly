import { Categories } from "@/components/modules/Home/Categories";
import { CTA } from "@/components/modules/Home/CTA";
import { Hero } from "@/components/modules/Home/Hero";
import { HowItWorks } from "@/components/modules/Home/HowItWorks";
import { PopularEvents } from "@/components/modules/Home/PopularEvents";
import { TestimonialsSection } from "@/components/modules/Home/Testimonials";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gatherly | Discover & Host Events</title>
        <meta
          name="description"
          content="Gatherly helps you discover local events, join activities, meet like-minded people, and host your own events with secure payments and smart matching."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <HowItWorks />
        <PopularEvents />
        <Categories />
        <TestimonialsSection />
        <CTA />
      </main>
    </>
  );
}
