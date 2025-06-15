import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { services } from '../Components/Services';
import { ArrowLeftCircle, CheckCircle2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const service = services.find((s) => s.route === `/services/${serviceId}`) || {
    name: 'Service Not Found',
    desc: 'The requested service could not be found.',
    details: '',
    bulletPoints: [],
    img: '/fallback-image.png',
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f5f3ff] via-[#ede9fe] to-[#e0e7ff] py-20 px-4 md:px-10 lg:px-20">
      {/* SEO Metadata */}
      <Helmet>
        <title>{`${service.name} | Infonet Systems`}</title>
        <meta name="description" content={service.desc} />
        <meta property="og:title" content={service.name} />
        <meta property="og:description" content={service.desc} />
        <meta property="og:image" content={service.img} />
        <meta property="og:url" content={`https://infonetsystems.in/services/${serviceId}`} />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <article className="max-w-7xl mx-auto bg-white border border-purple-200 shadow-2xl rounded-3xl p-6 md:p-12 flex flex-col lg:flex-row items-center gap-12 transition-all duration-300">
        
        {/* Image Section */}
        <figure className="w-full lg:w-1/2">
          <img
            src={service.img}
            alt={`Image for ${service.name}`}
            className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover object-center rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
          <figcaption className="sr-only">{service.name}</figcaption>
        </figure>

        {/* Content Section */}
        <section className="w-full lg:w-1/2 flex flex-col gap-6 text-gray-800">
          <header>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#4c1d95] text-center lg:text-left leading-tight">
              {service.name}
            </h1>
          </header>

          <p className="text-lg text-gray-700 leading-relaxed">{service.desc}</p>

          {service.details && (
            <p className="text-base text-gray-600">{service.details}</p>
          )}

          {service.bulletPoints.length > 0 && (
            <ul className="mt-4 space-y-4 list-none">
              {service.bulletPoints.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 bg-purple-50 border border-purple-100 rounded-xl p-3 shadow-sm hover:shadow-md transition-all"
                >
                  <CheckCircle2 className="text-purple-600 w-5 h-5 mt-1" aria-hidden="true" />
                  <span className="text-gray-800 text-base">{point}</span>
                </li>
              ))}
            </ul>
          )}

          <button
            onClick={() => navigate('/#services')}
            className="mt-10 px-6 py-3 bg-gradient-to-r from-[#7c3aed] to-[#6b21a8] text-white font-medium rounded-xl hover:from-[#6b21a8] hover:to-[#5b21b6] transition-all flex items-center gap-2 w-fit self-center lg:self-start shadow-md"
            aria-label="Back to Services"
          >
            <ArrowLeftCircle size={20} />
            Back to Services
          </button>
        </section>
      </article>
    </main>
  );
};

export default ServiceDetails;
