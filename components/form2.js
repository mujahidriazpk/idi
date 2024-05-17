// pages/index.js
import { useState } from 'react';

const Form2 = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        /*
      const response = await fetch('https://idiimage.com/wp-json/gf/v2/forms/9/submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + btoa('ck_ba40709a64c3d489942f765d2feacdb5bf3e8d74:cs_c4df27132d4d1fd17be10f96b1ff0bd8bd541af5'),
        },
        body: JSON.stringify({
          input_values: {
            1: formData.name,  // Replace 1 with the actual field ID for 'name'
            2: formData.email, // Replace 2 with the actual field ID for 'email'
            9: formData.number, // Replace 3 with the actual field ID for 'number'
          }
        }),
      });
*/
    const response = await fetch('https://idiimage.com/wp-json/custom/v1/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
         body: JSON.stringify({
            input_values: {
              1: formData.name,  // Replace 1 with the actual field ID for 'name'
              2: formData.email, // Replace 2 with the actual field ID for 'email'
              9: formData.number, // Replace 3 with the actual field ID for 'number'
            }
          }),
      });
      if (response.ok) {
        alert('Form submitted successfully!');
        setFormData({
          name: '',
          email: '',
          number: '',
        });
      } else {
        alert('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="number" name="number" value={formData.number} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Form2;
