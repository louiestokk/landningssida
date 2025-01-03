import React, { useState } from "react";
import MainComp from "../../components/MainComp/MainComp";
import { BsHouseDoor } from "react-icons/bs";
import { getCustomerData } from "../../redux-toolkit/customer/customerSlice";
import { useSelector } from "react-redux";
import AboutUs from "../../components/AboutUs/AboutUs";
import Tips from "../../components/Tips/Tips";
import Nav from "../../components/Nav/Nav";
import Erbjuder from "../../components/Erbjuder/Erbjuder";
import Kostnadsfri from "../../components/Kostnadsfri/Kostnadsfri";
import { Helmet } from "react-helmet-async";
import { getNewsData } from "../../redux-toolkit/news/newsSlice";
import LottieBooking from "../../LottieAnimation/LottieBooking";
import booking from "../../utils/animation/booking.json";
import BookingModal from "../../components/BookingModal";

const Home = ({ videoText }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const mainquery = "dödsbo eller bohag";
  const newsData = useSelector(getNewsData);
  const [content, setContent] = useState({
    metaTitle:
      "Få hjälp med tömning, städning och uppköp av dödsbon och bohag.",
    metaContent:
      "Få professionell hjälp med tömning, städning och uppköp av dödsbon - Vi erbjuder allt från värdering till försäljning och bortforsling av bohagsartiklar.",
    query: "dödsbo eller bohag",
    formTitle: "Tömma dödsbo",
    subTitle2:
      "Din auktoriserade dödsbo hanterare av dödsbo, bohag, uppköp, försäljning, tömning, bortforsling, sanering, flytt och städ",
    subTitle3: `Behöver du hjälp med ditt ${mainquery}?`
  });
  const customerData = useSelector(getCustomerData);
  const services =
    "uppköp, bortforsling, sanering, flytt, städning och försäljning av dödsbon och bohag.";

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "RecyclingCenter",
    name: "Trygga Dödsbon",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hisingsgatan 10",
      addressLocality: "Göteborg",
      addressRegion: "Sweden",
      postalCode: "41702",
      addressCountry: "SE"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "57.71659765082482",
      longitude: "11.94740491088092"
    },
    url: "www.trygga-dodsbon.com",
    telephone: "+46317539060",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        opens: "08:00",
        closes: "18:00"
      }
    ],
    priceRange: "1000kr-20000kr",
    image: [
      "https://images.pexels.com/photos/18799930/pexels-photo-18799930/free-photo-of-stad-manniskor-trottoar-trad.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ]
  };
  return (
    <div>
      <script type="application/ld+json">
        {JSON.stringify(articleStructuredData)}
      </script>

      <Helmet>
        <meta charSet="utf-8" />
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaContent} />
        <meta property="og:url" content="https://trygga-dodsbon" />
        <meta property="og:description" content={content.metaContent} />
        <meta
          property="og:image"
          content="https://images.pexels.com/photos/18799930/pexels-photo-18799930/free-photo-of-stad-manniskor-trottoar-trad.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <link hrefLang="sv" rel="canonical" href="https://trygga-dodsbon.com" />
      </Helmet>
      <div className="Nav">
        <Nav />
      </div>
      <div className="Hem">
        <MainComp
          query={content.query}
          formTitle={content.formTitle}
          icon={<BsHouseDoor />}
          subTitle={`Välkommen till ${customerData.business}`}
          subTitle2={content.subTitle2}
          subTitle3={content.subTitle3}
          text={`Vi är en firma som verkligen kan allt kring ${mainquery}. Vi kan också hjälpa dig med ${services}. Vi erbjuder en full helhetslösning med målet att ge det bästa valet för dig och din plånbok. Som kund hos har du allt samlat hos ett och samma företag.`}
          subTitle4={`Helhetslösning för ${mainquery}`}
          text1={`Vårt företag har varit i branschen i över 20år. Vi har flera samarbeten med auktionsfirmor, olika typer va hjälp boenden, och hjälp organisationer. Vi skänker lösöre och möbler samt sorterar och och värnar om miljön`}
          subTitle5={"Våra tjänster"}
          text2={`Vi kan hjälpa dig med ${services}`}
        />
      </div>

      <div className="Om">
        <AboutUs
          query={mainquery.toUpperCase()}
          oss={`Vilka är vi? Och hur gör vi för att kunna hjälpa dig med ditt ${mainquery}?`}
          om={`är det självklara valet för hantering av bohag och dödsbo med 20 års erfarenhet.`}
        />
      </div>
      <div className="Tjänster">
        <Erbjuder />
      </div>
      {newsData && (
        <div className="Tips">
          <Tips query={mainquery.toUpperCase()} newsData={newsData} />
        </div>
      )}

      <div className="booking-lottie">
        <div className="booking-content">
          <h2>Hjälp {mainquery}?</h2>
          <h4>
            Vi erbjuder helt kostnadfritt besök/genomgång för att kunna hjälpa
            dig som kund med ditt {mainquery}. Besöket/genomgången tar ca 25 min
            och du som kund får en offert på plats om hur vi kan hjälpa dig med
            ditt
            <strong style={{ fontWeight: "700" }}> {mainquery}.</strong>
          </h4>
          <button
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
            style={{ display: modalOpen ? "none" : "block",background:'#a7c957' }}
          >
            BOKA
          </button>
        </div>
        <LottieBooking lotti={booking} height={320} width={320} />
        {modalOpen && (
          <BookingModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        )}
      </div>

      <div className="Kostnadsfri">
        <Kostnadsfri
          vad={"genomgång"}
          mainquery={mainquery}
          text={`${videoText}${mainquery}.`}
        />
      </div>
    </div>
  );
};

export default Home;
