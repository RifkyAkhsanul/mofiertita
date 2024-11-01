import React from 'react';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <h2 className="text-primary text-4xl font-semibold text-center mt-10 mb-6">
      {title}
    </h2>
  );
};

export default SectionTitle;
