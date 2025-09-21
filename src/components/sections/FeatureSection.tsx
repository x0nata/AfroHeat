import React from 'react';

interface FeatureSectionProps {
  title: string;
  description: string;
  imageSrc: string;
 imagePosition: 'left' | 'right';
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  description,
  imageSrc,
  imagePosition
}) => {
  return (
    <div className="grid grid-cols-2 w-full min-h-[20px] sm:min-h-[520px] gap-0">
      <div className={`flex items-center justify-center p-6 sm:p-8 md:p-16 ${imagePosition === 'left' ? 'col-start-2' : 'col-start-1'}`}>
        <div className="max-w-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-600">{description}</p>
        </div>
      </div>
      <div className={`${imagePosition === 'left' ? 'col-start-1' : 'col-start-2'} relative min-h-[294px] sm:min-h-[364px]`}>
        <img
          src={imageSrc}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default FeatureSection;