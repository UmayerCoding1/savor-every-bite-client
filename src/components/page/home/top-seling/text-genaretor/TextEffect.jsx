import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
    return (
        <div>
            <TypeAnimation
  sequence={[
    'Top',
    500,
    'Top Selling', //  Continuing previous Text
    500,
    'Top',
    500,
    '',
    500,
  ]}
  style={{ fontSize: '36px' }}
  repeat={Infinity}
/>
        </div>
    );
};

export default TextEffect;