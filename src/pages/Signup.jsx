// import {
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
// } from "firebase/auth";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import Background from "../components/Background";
// import Header from "../components/Header";
// import { firebaseAuth } from "../utils/firebase-config";

// const Signup = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [formValues, setFormValues] = useState({
//     email: "",
//     password: "",
//   });
//   const navigate = useNavigate();

//   const handleSignIn = async () => {
//     try {
//       const { email, password } = formValues;
//       await createUserWithEmailAndPassword(firebaseAuth, email, password);
//     } catch (error) {
//       console.log(error);
//     }
    
//   };

//     onAuthStateChanged(firebaseAuth, (currentUser) => {
//       if (currentUser) navigate("/");
//     });
//   return (
//     <Container showPassword={showPassword}>
//       <Background />
//       <div className="content">
//         <Header login />
//         <div className="body flex column a-center j-center">
//           <div className="text flex column">
//             <h1>Unlimited Movies</h1>
//             <h4>Watch anywhere. Cancel anytime.</h4>
//             <h6>Ready to watch? Enter your email to create an account</h6>
//           </div>
//           <div className="form">
//             <input
//               type="email"
//               placeholder="Email Address"
//               onChange={(e) =>
//                 setFormValues({
//                   ...formValues,
//                   [e.target.name]: e.target.value,
//                 })
//               }
//               name="email"
//               value={formValues.email}
//             />
//             {showPassword && (
//               <input
//                 type="password"
//                 placeholder="Password"
//                 onChange={(e) =>
//                   setFormValues({
//                     ...formValues,
//                     [e.target.name]: e.target.value,
//                   })
//                 }
//                 name="password"
//                 value={formValues.password}
//               />
//             )}
//             {!showPassword && (
//               <button onClick={() => setShowPassword(true)}>Get Started</button>
//             )}
//           </div>
//           {showPassword && <button onClick={handleSignIn}>Sign Up</button>}
//         </div>
//       </div>
//     </Container>
//   );
// };
// const Container = styled.div`
//   position: relative;
//   .content {
//     position: absolute;
//     top: 0;
//     left: 0;
//     background-color: rgba(0, 0, 0, 0.5);
//     //   background: linear-gradient(90deg, #000000cf, #3533cd42);
//     height: 100vh;
//     width: 100vw;
//     display: grid;
//     grid-template-rows: 15vh 85vh;
//     .body {
//       gap: 1rem;
//       .text {
//         gap: 1rem;
//         text-align: center;
//         font-size: 2rem;
//         h1 {
//           padding: 0 25rem;
//         }
//       }
//       .form {
//         display: grid;
//         grid-template-columns: ${({ showPassword }) =>
//           showPassword ? "1fr 1fr" : "2fr 1fr"};
//         width: 60%;
//         input {
//           color: black;
//           border: none;
//           padding: 1.5rem;
//           font-size: 1.2rem;
//           border: 1px solid black;
//           &:focus {
//             outline: none;
//           }
//         }
//         button {
//           padding: 0.5rem 1rem;
//           background: linear-gradient(90deg, #000000, #3533cd);
//           border: 1px solid white;
//           cursor: pointer;
//           color: white;
//           font-weight: bolder;
//           font-size: 1.05rem;
//         }
//       }
//       button {
//         padding: 0.5rem 1rem;
//         background: linear-gradient(90deg, #000000, #3533cd);
//         border: 1px solid white;
//         cursor: pointer;
//         color: white;
//         border-radius: 0.2rem;
//         font-weight: bolder;
//         font-size: 1.05rem;
//       }
//     }
//   }
// `;
// export default Signup;









import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { createUserWithEmailAndPassword, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { firebaseAuth, provider } from "../utils/firebase-config";
import Background from "../components/Background";
import Header from "../components/Header";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) navigate("/");
    });
    return unsubscribe;
  }, [navigate]);

  const handleSignIn = async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(firebaseAuth, provider);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container showPassword={showPassword}>
      <Background />
      <div className="content">
        <Header login />
        <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h1>Unlimited Movies</h1>
            <h4>Watch anywhere. Cancel anytime.</h4>
            <h6>Ready to watch? Enter your email to create an account</h6>
          </div>
          <div className="form">
            <input
              type="email"
              placeholder="Email Address"
              onChange={handleInputChange}
              name="email"
              value={formValues.email}
            />
            {showPassword && (
              <input
                type="password"
                placeholder="Password"
                onChange={handleInputChange}
                name="password"
                value={formValues.password}
              />
            )}
            {!showPassword && (
              <button onClick={() => setShowPassword(true)}>Get Started</button>
            )}
          </div>
          {showPassword && <button onClick={handleSignIn}>Sign Up</button>}
          <button onClick={handleGoogleSignIn}>Sign Up with Google</button>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .body {
      gap: 1rem;
      .text {
        gap: 1rem;
        text-align: center;
        font-size: 2rem;
        h1 {
          padding: 0 25rem;
        }
      }
      .form {
        display: grid;
        grid-template-columns: ${({ showPassword }) =>
          showPassword ? "1fr 1fr" : "2fr 1fr"};
        width: 60%;
        input {
          color: black;
          border: none;
          padding: 1.5rem;
          font-size: 1.2rem;
          border: 1px solid black;
          &:focus {
            outline: none;
          }
        }
        button {
          padding: 0.5rem 1rem;
          background: linear-gradient(90deg, #000000, #3533cd);
          border: 1px solid white;
          cursor: pointer;
          color: white;
          font-weight: bolder;
          font-size: 1.05rem;
        }
      }
      button {
        padding: 0.5rem 1rem;
        background: linear-gradient(90deg, #000000, #3533cd);
        border: 1px solid white;
        cursor: pointer;
        color: white;
        border-radius: 0.2rem;
        font-weight: bolder;
        font-size: 1.05rem;
      }
    }
  }
`;

export default Signup;

