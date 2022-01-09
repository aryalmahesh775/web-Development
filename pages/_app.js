import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Navbar /> */}
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
