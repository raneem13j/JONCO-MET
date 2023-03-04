// import { Redirect } from "react-router-dom";
// import { useEffect, useState, useHistory } from "react";
// import axios from "axios";

// const PrivateRoute = ({ login, children }) => {
//   const [loading, setLoading] = useState(true);
//   const [auth, setAuth] = useState(false);
//   const history = useHistory();

//   const authenticate = async (login) => {
//     setLoading(true);

//     try {
//       const { data } = await axios({
//         method: 'post',
//         url: `${process.env.REACT_APP_API_URL}/admin`,
//         data: {
//           logged: login,
//         },
//       });

//       setAuth(data.success);
//       console.log(data);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     authenticate(login);
//   }, []);

//   if (loading) return <h1>Loading...</h1>;
//   console.log(auth);

//   // return auth ? children : <Redirect to="/dashboard/clients" />;
//   return auth ? children : history.push("/dashboard/clients");
// };


// export default PrivateRoute;
