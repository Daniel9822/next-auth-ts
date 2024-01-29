'use client'
import { TypeAnimation } from 'react-type-animation';

const TypeComponent = () => {
  return (
    <TypeAnimation
      className='typeAnimation'
      sequence={[
        'Blog Auth',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'lorem itsum',
        1500,
        'We Guinea Pigs',
        1500,
        'We produce food',
        1500
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};

export default TypeComponent