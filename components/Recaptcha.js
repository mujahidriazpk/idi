import React, { useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Recaptcha = ({ onChange, recaptchaRef }) => {
  return (
    <ReCAPTCHA
      ref={recaptchaRef}
      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
      onChange={onChange}
    />
  );
};

export default Recaptcha;
