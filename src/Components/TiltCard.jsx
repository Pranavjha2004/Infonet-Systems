import React, { memo } from 'react';
import Tilt from 'react-parallax-tilt';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const TiltCard = ({ ServiceImg, ServiceName, ServiceDesc, bulletPoints = [], route }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (route) {
      navigate(route);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={route ? 'cursor-pointer' : ''}
      id={ServiceName.replace(/\s+/g, '-').toLowerCase()}
    >
      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        perspective={1000}
        scale={1.05}
        transitionSpeed={2000}
        glareEnable={true}
        glareMaxOpacity={0.5}
        glareColor="#f472b6"
        glarePosition="all"
        aria-label={`Interactive card for ${ServiceName || 'service'}`}
      >
        <div className="relative w-full max-w-[1100px] min-h-[380px] bg-gradient-to-br from-[#1e3a8a] via-[#7c3aed] to-[#f472b6] rounded-xl shadow-2xl overflow-hidden mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7c3aed]/30 to-transparent opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
          <div className="flex flex-col sm:flex-row text-white h-full">
            <img
              src={ServiceImg || '/fallback-image.png'}
              alt={ServiceName || 'Service Image'}
              className="w-full sm:w-[300px] md:w-[350px] lg:w-[400px] h-[240px] sm:h-[300px] md:h-[340px] lg:h-[380px] object-cover rounded-e-xl sm:rounded-none sm:rounded-s-xl"
              loading="lazy"
            />
            <div className="flex flex-col p-4 sm:p-6 lg:p-4 flex-1 max-h-[380px] overflow-y-auto">
              <h2 className="mx-auto mt-4 sm:mt-6 lg:mt-8 text-xl sm:text-2xl font-bold text-center">
                {ServiceName}
              </h2>
              <p className="mx-4 sm:mx-8 lg:mx-12 mt-4 text-sm sm:text-base line-clamp-3">
                {ServiceDesc}
              </p>
              {bulletPoints.length > 0 && (
                <ul
                  className={`mx-4 sm:mx-8 lg:mx-12 mt-1 sm:mt-6 lg:mt-8 pl-5 text-sm sm:text-base columns-1 ${bulletPoints.length > 5 ? 'md:columns-2 lg:columns-2 gap-8' : ''} list-disc`}
                >
                  {bulletPoints.map((point, index) => (
                    <li key={index} className="text-white/90 mb-2 break-all">
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

TiltCard.propTypes = {
  ServiceImg: PropTypes.string.isRequired,
  ServiceName: PropTypes.string.isRequired,
  ServiceDesc: PropTypes.string.isRequired,
  bulletPoints: PropTypes.arrayOf(PropTypes.string),
  route: PropTypes.string,
};

TiltCard.defaultProps = {
  bulletPoints: [],
  route: null,
};

export default memo(TiltCard);