import React from 'react';

const TestimonialCard = ({ CompanyName, TestimonialText, rating = 5 }) => {
  return (
    <div className="card mt-6 sm:mt-10 md:mt-16 lg:mt-20 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl min-h-[18rem] sm:min-h-[20rem] md:min-h-[22rem] lg:min-h-[24rem] xl:min-h-[26rem] p-4 sm:p-6 md:p-8 bg-gray-800 rounded-xl flex flex-col transition-all duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-2 hover:rotate-1 hover:shadow-2xl cursor-pointer">
      
      {/* Company Name and Testimonial */}
      <div className="text-white flex flex-col items-center text-center flex-grow gap-3">
        <span className="main-head text-xl sm:text-2xl md:text-3xl font-semibold">
          {CompanyName}
        </span>

        {/* Clamp testimonial to 5 lines without scroll */}
        <p className="paragraph text-sm sm:text-base md:text-lg px-2 sm:px-4 line-clamp-5">
          {TestimonialText}
        </p>
      </div>

      {/* Divider */}
      <hr className="mt-4 border-gray-600" />

      {/* Star rating */}
      <div className="flex gap-1 sm:gap-2 justify-center mt-3 mb-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={star <= rating ? '#d4b3ff' : 'none'}
            stroke={star <= rating ? '#d4b3ff' : '#6b7280'}
            strokeWidth="2"
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
