// Adding contact in footer instead. Leaving this in for posterity and to later add a contact form Component.

// import React, { Component, useState } from 'react';

// function Contact() {
//   const [formState, setFormState] = useState({ name: '', email: '', message: '' });
//   const { name, email, message } = formState
//   const [errorMessage, setErrorMessage] = useState('');

//   function handleChange(e) {
//     setFormState({ ...formState, [e.target.name]: e.target.value })
//     if (e.target.name === 'email') {
//       // best email regex https://emailregex.com/
//       // eslint-disable-next-line
//       const isValid = e.target.value.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/);
//       if (!isValid) {
//         setErrorMessage('Your email is invalid.');
//       } else {
//         setErrorMessage('');
//       }
//     } else {
//       if (!e.target.value.length) {
//         setErrorMessage(`${e.target.name} is required.`);
//       } else {
//         setErrorMessage('');
//       }
//     }
//     if (!errorMessage) {
//       setFormState({ ...formState, [e.target.name]: e.target.value });
//     }
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (!formState.name.length || !formState.email.length || !formState.message.length) {
//       setErrorMessage(`
//         ${!formState.name.length && formState.email.length && formState.message.length ? 'name is required' :
//           !formState.name.length && !formState.email.length && formState.message.length ? 'name and email are required' :
//           !formState.name.length && formState.email.length && !formState.message.length ? 'name and message are required' :
//           formState.name.length && !formState.email.length && formState.message.length ? 'email is required' :
//           formState.name.length && !formState.email.length && !formState.message.length ? 'email and message are required' :
//           formState.name.length && formState.email.length && !formState.message.length ? 'message is required' :
//           'name, email, and message are required'
//       }`)
//     }
//     if (formState.name.length && formState.email.length && formState.message.length) {
//       alert(`Hi ${formState.name}. This is a proof of concept and currently not hooked up, but you can use ${formState.email} to email me at alisker@protonmail.com with your message, '${formState.message}'.`);
//     }
//   }

//   return (
//     <section id="contact" className="contact">
//       <div className="flex-row">
//         <div className="section-title">
//           <h2>
//             Reach Out
//           </h2>
//         </div>
//         <div className="content flex-row">
//           <form id="contact-form" onSubmit={handleSubmit}>
//             <div className="input-group">
//               <label
//                 className="contact-label"
//                 htmlFor="name"
//               >Name:</label>
//               <div>
//                 <input type="text" name="name" className="input-area"
//                   defaultValue={name} onBlur={handleChange} />
//               </div>
//             </div>
//             <div className="input-group">
//               <label
//                 className="contact-label"
//                 htmlFor="email"
//               >Email address:</label>
//               <div>
//                 <input type="email" name="email" className="input-area"
//                   defaultValue={email} onBlur={handleChange} />
//               </div>
//             </div>
//             <div className="input-group">
//               <label
//                 className="contact-label"
//                 htmlFor="message"
//               >Message:</label>
//               <div>
//                 <textarea name="message" rows="5" className="input-area"
//                   defaultValue={message} onBlur={handleChange} />
//               </div>
//             </div>
//             {errorMessage && (
//               <div>
//                 <p className="error-text">{errorMessage}</p>
//               </div>
//             )}
//             <button className="submit-btn" type="submit">Submit</button>
//           </form>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Contact;