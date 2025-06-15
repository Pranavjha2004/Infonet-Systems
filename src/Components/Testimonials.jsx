import React from 'react';
import TestimonialCard from './TestimonialCard';
import { Helmet } from 'react-helmet-async';

const Testimonials = () => {
  return (
    <section
      className="flex flex-col items-center justify-center w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mt-6 sm:mt-10 md:mt-14 lg:mt-16"
      id="testimonials"
    >
      <Helmet>
    <title>Infonet Systems | Reliable IT Services in Delhi NCR</title>
  < meta name="description" content="Learn about Infonet Systems, a trusted provider of IT infrastructure and services." />
    </Helmet>
      <h2 className="main-head text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 sm:mb-8 md:mb-10">
        Testimonials
      </h2>

      <div className="w-full max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
        <TestimonialCard
          CompanyName="Sample"
          TestimonialText="Our complete business IT hardware and networking set up and support is managed by Infonet Systems and we find them professional and reliable. Mr.Manish has guided and helped us get the best IT solutions within our defined budget. We appreciate his support."
          rating={5}
        />
        <TestimonialCard
          CompanyName="Sample"
          TestimonialText="Infonet Systems expertly guided us in selecting and installing a budget-friendly CCTV setup for our campus, delivering efficient service and thorough training for our security team. We highly recommend their exceptional work."
          rating={5}
        />
        <TestimonialCard
          CompanyName="Sample"
          TestimonialText="Infonet Systems has provided us the Video Conferencing equipment and software which helps us stay connected with our offices across India. It is supported by Infonet Systems, so we have complete peace of mind."
          rating={4}
        />
        <TestimonialCard
          CompanyName="Sample"
          TestimonialText="We had to upgrade our school infrastructure to incorporate digital learning in our classrooms. Mr.Manish guided us on the best digital learning solutions available in the market, features and helped us with procurement, installation and support. We truly appreciate his sincerity and goodwill. We recommend Infonet Systems to all."
          rating={4}
        />
        <TestimonialCard
          CompanyName="Sample"
          TestimonialText="Infonet Systems provided expert guidance and secured a cost-effective deal on computers, networking equipment, and VoIP devices for our call center. Their professional setup was completed within a week, ensuring a hassle-free start for our business. We highly recommend their efficient and knowledgeable services."
          rating={5}
        />
        <TestimonialCard
          CompanyName="Sample"
          TestimonialText="Our computer systems are supported by Infonet Systems AMCs. It covers everything and we don’t need to bother about anything. Infonet Systems takes care of it all. We appreciate their support."
          rating={4}
        />
      </div>
    </section>
  );
};

export default Testimonials;
