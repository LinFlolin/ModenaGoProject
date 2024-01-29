// import React, { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';
// import axios from 'axios';

// const client = axios.create({
//   baseURL: "http://127.0.0.1:8000"
// });

// const LoginPage = ({ setCurrentUser }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const submitLogin = (e) => {
//     e.preventDefault();
//     client.post(
//       "/api/login",
//       {
//         email: email,
//         password: password
//       }
//     ).then(function(res) {
//       setCurrentUser(true);
//     });
//   };

//   return (
//     <div className="center">
//       <Form onSubmit={submitLogin}>
//         {/* Form fields here */}
//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default LoginPage;


// /*
// import React from 'react'

// export const LoginPage = () => {
//   return (
//     <div>LoginPage</div>
//   )
// }
// */
import React from 'react'

export const LogInPage = () => {
  return (
    <div>LogInPage</div>
  )
}
