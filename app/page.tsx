import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css'
import styles from "./page.module.css";

import Whyus from "./component/home/whyus";
import Counter from "./component/home/counter";
import Menu from "./component/home/menu";
import Testimonial from "./component/home/testimonial";
import Chef from "./component/home/chef";
import Booking from "./component/home/booking";
import Gallery from "./component/home/gallery";
import Header from "./component/home/header";
import Hero from "./component/home/hero";
import ContactUs from "./component/home/contactUs";
import Footer from "./component/home/footer";
import Event from "./component/home/event";
import About from "./component/home/about";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main id="main" className={styles.main}>
        <About/>
        <Whyus />
        <Counter />
        <Menu />
        <Testimonial />
        <Event />
        <Chef />
        <Booking />
        <Gallery />
        <ContactUs />
      </main>

      <Footer />
    </>
  );
}
