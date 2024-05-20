export default async (req, res) => {
    if (req.method === 'POST') {
      const { recaptchaValue } = req.body;
  
      const secret = process.env.RECAPTCHA_SECRET_KEY;
      const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${recaptchaValue}`;
  
      const response = await fetch(verificationUrl, {
        method: 'POST',
      });
  
      const data = await response.json();
  
      if (data.success) {
        // reCAPTCHA verified successfully
        res.status(200).json({ success: true });
      } else {
        // reCAPTCHA verification failed
        res.status(400).json({ success: false });
      }
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  };
  