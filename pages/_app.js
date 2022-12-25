import "../styles/globals.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Button } from "react-bootstrap";

export default function App({ Component, pageProps }) {
  return (
    <div className="componentst">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
