import roseDetail from "./imports/343718.png";
import diamonds from "./imports/343717.png";
import ribbonBow from "./imports/343716.png";
import messageRibbon from "./imports/343715.png";
import smallButterflies from "./imports/343714.png";
import largeButterflies from "./imports/343713.png";
import pinkBouquet from "./imports/343582.jpg";
import bouquetPortrait from "./imports/343575.jpg";
import bouquetCollection from "./imports/343576.jpg";

const WHATSAPP = "https://wa.me/27765949553";

const prices = [
  { roses: 7, price: 70 },
  { roses: 10, price: 100 },
  { roses: 15, price: 150, featured: true },
  { roses: 20, price: 200 },
  { roses: 25, price: 250 },
];

const addOns = [
  { name: "Diamonds", price: "R2 each", image: diamonds },
  { name: "Ribbon With Bow", price: "FREE", image: ribbonBow },
  { name: "Message Ribbon", price: "R30", image: messageRibbon },
  { name: "Small Butterflies (3)", price: "R10", image: smallButterflies },
  { name: "Large Butterflies (2)", price: "R20", image: largeButterflies },
  { name: "Mixed Colours", price: "R25", image: pinkBouquet },
];

const gallery = [
  { src: bouquetPortrait, alt: "Pink and blue handmade artificial rose bouquets", className: "gallery-tall" },
  { src: pinkBouquet, alt: "Hot pink artificial rose bouquet with colourful butterfly", className: "gallery-tall" },
  { src: bouquetCollection, alt: "Red, red and black, blue and purple artificial rose bouquets", className: "gallery-wide" },
  { src: messageRibbon, alt: "Personalised message ribbon add-on", className: "gallery-wide" },
  { src: smallButterflies, alt: "Small golden butterfly bouquet add-ons", className: "gallery-wide" },
  { src: largeButterflies, alt: "Large golden butterfly bouquet add-ons", className: "gallery-wide" },
  { src: ribbonBow, alt: "Free red ribbon bow add-on", className: "gallery-square" },
  { src: diamonds, alt: "Decorative diamond bouquet add-ons", className: "gallery-wide" },
  { src: roseDetail, alt: "Red artificial decorative rose", className: "gallery-square" },
];

function HeartIcon({ filled = false }: { filled?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path
        d="M20.8 4.7a5.5 5.5 0 0 0-7.8 0L12 5.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.4 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2.1Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="10" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function App() {
  return (
    <div className="site">
      <header className="nav-wrap">
        <nav className="nav container" aria-label="Main navigation">
          <a className="brand" href="#home" aria-label="Uzwothe’s Bouquets Flowers home">
            <span className="brand-mark">U</span>
            <span><strong>Uzwothe’s</strong><small>Bouquets Flowers</small></span>
          </a>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#bouquets">Bouquets</a>
            <a href="#prices">Prices</a>
            <a href="#add-ons">Add-Ons</a>
            <a href="#gallery">Gallery</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="nav-cta" href={WHATSAPP} target="_blank" rel="noreferrer">Order now <ArrowIcon /></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-glow" />
          <img className="hero-rose hero-rose-one" src={roseDetail} alt="" />
          <img className="hero-rose hero-rose-two" src={roseDetail} alt="" />
          <div className="hero-inner container">
            <div className="hero-copy">
              <span className="hero-kicker"><span>Artificial roses</span><i /> handcrafted in Duthuni</span>
              <h1>Beautiful Bouquets, <em>Made With Love</em> <span className="heart">♥</span></h1>
              <p>Handcrafted artificial rose bouquets for birthdays, anniversaries, celebrations, special occasions and thoughtful gifts.</p>
              <div className="hero-actions">
                <a className="button button-primary" href={WHATSAPP} target="_blank" rel="noreferrer">Order on WhatsApp <HeartIcon filled /></a>
                <a className="button button-secondary" href="#bouquets">View our bouquets <ArrowIcon /></a>
              </div>
              <div className="location"><PinIcon /><span><small>Made locally in</small>Duthuni, South Africa</span></div>
            </div>
            <div className="hero-visual">
              <div className="hero-image-main"><img src={bouquetPortrait} alt="Uzwothe’s pink and blue artificial rose bouquets" /></div>
              <div className="hero-image-small"><img src={pinkBouquet} alt="Hot pink bouquet with butterfly detail" /></div>
              <div className="hero-badge"><span>Made</span><strong>with love</strong><HeartIcon filled /></div>
              <div className="butterfly" aria-hidden="true">♡</div>
            </div>
          </div>
          <div className="hero-note"><span>Artificial roses</span><i>◆</i><span>Custom colours</span><i>◆</i><span>Thoughtful details</span></div>
        </section>

        <section className="about section" id="about">
          <div className="container about-grid">
            <div className="about-image">
              <img src={pinkBouquet} alt="Handcrafted hot pink artificial rose bouquet" />
              <div className="about-frame" />
              <span className="vertical-note">Handmade in Duthuni</span>
            </div>
            <div className="about-copy">
              <SectionHeading eyebrow="Our story" title="Thoughtful blooms that last" />
              <p>Welcome to Uzwothe’s Bouquets Flowers, where beautiful artificial rose bouquets are made with love and attention to detail. Choose your favourite rose colour, bouquet size and decorative extras. Customisation is subject to availability.</p>
              <div className="about-points">
                <div><HeartIcon /><span><strong>Handcrafted</strong><small>Each bouquet is carefully arranged</small></span></div>
                <div><span className="spark">✦</span><span><strong>Made for you</strong><small>Choose colours, size and extras</small></span></div>
              </div>
              <a className="text-link" href="#prices">Explore our bouquet sizes <ArrowIcon /></a>
            </div>
          </div>
        </section>

        <section className="styles section" id="bouquets">
          <div className="container">
            <SectionHeading eyebrow="Find your favourite" title="A colour for every feeling" text="Choose your favourite style, then make it your own with beautiful decorative extras." />
            <div className="styles-layout">
              <div className="style-photo"><img src={bouquetCollection} alt="Artificial rose bouquets in red, black, blue, white and purple" /></div>
              <div className="style-list">
                {[
                  ["RED", "red"],
                  ["HOT PINK", "hotpink"],
                  ["LIGHT PINK", "lightpink"],
                  ["BLUE", "blue"],
                  ["PURPLE", "purple"],
                  ["RED & BLACK", "redblack"],
                  ["BUTTERFLY DESIGNS", "gold"],
                ].map(([name, color], index) => (
                  <div className="style-row" key={name}>
                    <span className={`colour-dot ${color}`} />
                    <span className="style-number">0{index + 1}</span>
                    <strong>{name}</strong>
                    {index === 6 ? <span className="tiny-butterfly">✦</span> : <ArrowIcon />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="pricing section" id="prices">
          <div className="container">
            <SectionHeading eyebrow="Bouquet prices" title="Choose your perfect size" text="Beautiful artificial rose bouquets for every celebration and every budget." />
            <div className="price-grid">
              {prices.map((item) => {
                const href = `${WHATSAPP}?text=${encodeURIComponent(`Hi Uzwothe’s Bouquets Flowers, I would like to order the ${item.roses} roses bouquet for R${item.price}.`)}`;
                return (
                  <article className={`price-card ${item.featured ? "featured" : ""}`} key={item.roses}>
                    {item.featured && <span className="popular">Popular choice</span>}
                    <div className="price-rose"><img src={roseDetail} alt="" /></div>
                    <span className="count">{item.roses}</span>
                    <h3>Artificial Roses</h3>
                    <div className="price">R{item.price}</div>
                    <a className="button buy-button" href={href} target="_blank" rel="noreferrer">Buy now <ArrowIcon /></a>
                  </article>
                );
              })}
            </div>
            <p className="price-note"><span>♡</span> Decorative extras can be added to any bouquet. Customisation is subject to availability.</p>
          </div>
        </section>

        <section className="addons section" id="add-ons">
          <div className="container">
            <SectionHeading eyebrow="The finishing touch" title="Make it extra special" text="Add a little sparkle, a meaningful message, or a flutter of colour." />
            <div className="addons-grid">
              {addOns.map((item, index) => (
                <article className="addon-card" key={item.name}>
                  <div className="addon-image"><img src={item.image} alt={`${item.name} bouquet add-on`} /></div>
                  <div className="addon-info">
                    <span>0{index + 1}</span>
                    <div><h3>{item.name}</h3>{item.name === "Mixed Colours" && <small>Golden, pink & mixed-colour butterflies</small>}</div>
                    <strong>{item.price}</strong>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="gallery section" id="gallery">
          <div className="container">
            <SectionHeading eyebrow="Made by us" title="The bouquet gallery" text="Real bouquets, thoughtful details and beautiful finishes — handcrafted right here in Duthuni." />
            <div className="gallery-grid">
              {gallery.map((image, index) => (
                <figure className={image.className} key={image.src}>
                  <img src={image.src} alt={image.alt} loading="lazy" />
                  <figcaption>{index < 3 ? "Real bouquet" : "Decorative detail"}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="perfect section">
          <div className="container perfect-inner">
            <div>
              <span className="eyebrow light">Made for every moment</span>
              <h2>Say it beautifully, <em>whatever the occasion.</em></h2>
            </div>
            <div className="occasion-list">
              {["Birthdays", "Anniversaries", "Celebrations", "Special occasions", "Thoughtful gifts"].map((occasion, index) => (
                <div key={occasion}><span>0{index + 1}</span><strong>{occasion}</strong><HeartIcon /></div>
              ))}
            </div>
          </div>
        </section>

        <section className="why section">
          <div className="container">
            <SectionHeading eyebrow="Why choose us" title="Small business, big heart" />
            <div className="why-grid">
              {[
                "Made With Love",
                "Beautiful Decorative Designs",
                "Affordable Bouquet Options",
                "Personalised Touches",
                "Different Colours & Styles",
                "Perfect For Special Occasions",
                "Support A Local Small Business",
              ].map((reason, index) => (
                <div className="why-item" key={reason}><span>{String(index + 1).padStart(2, "0")}</span><strong>{reason}</strong><HeartIcon /></div>
              ))}
            </div>
          </div>
        </section>

        <section className="order section">
          <div className="container">
            <SectionHeading eyebrow="Simple & personal" title="How to order" text="Your perfect bouquet is only three easy steps away." />
            <div className="steps">
              {[
                ["01", "Choose your bouquet", "Pick the size and your favourite artificial rose colour."],
                ["02", "Choose your extras", "Add ribbons, diamonds or beautiful butterflies."],
                ["03", "Order through WhatsApp", "Send us your choices and we’ll take it from there."],
              ].map(([number, title, text]) => (
                <article className="step" key={number}>
                  <span>{number}</span><div className="step-line" /><HeartIcon />
                  <h3>{title}</h3><p>{text}</p>
                </article>
              ))}
            </div>
            <div className="order-action"><a className="button button-primary" href={WHATSAPP} target="_blank" rel="noreferrer">Start your order <ArrowIcon /></a></div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="container contact-card">
            <div className="contact-copy">
              <span className="eyebrow light">Let’s create something beautiful</span>
              <h2>Ready to order your bouquet?</h2>
              <p>Tell us your bouquet size, favourite colour and decorative extras on WhatsApp.</p>
              <div className="contact-actions">
                <a className="button button-white" href="tel:+27673098983"><PhoneIcon /> Call us</a>
                <a className="button button-outline-white" href={WHATSAPP} target="_blank" rel="noreferrer"><HeartIcon filled /> WhatsApp us</a>
              </div>
            </div>
            <div className="contact-details">
              <span>Uzwothe’s Bouquets Flowers</span>
              <div><small>Visit us in</small><strong>Duthuni, South Africa</strong></div>
              <div><small>Call</small><a href="tel:+27673098983">067 309 8983</a></div>
              <div><small>WhatsApp</small><a href={WHATSAPP}>076 594 9553</a></div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-top">
          <a className="brand footer-brand" href="#home"><span className="brand-mark">U</span><span><strong>Uzwothe’s</strong><small>Bouquets Flowers</small></span></a>
          <p>Made With Love, Just For You <span>♥</span></p>
          <a href={WHATSAPP} target="_blank" rel="noreferrer">Order on WhatsApp <ArrowIcon /></a>
        </div>
        <div className="container footer-bottom"><span>Thank You For Supporting Our Small Business!</span><span>Duthuni, South Africa</span></div>
      </footer>

      <a className="sticky-order" href={WHATSAPP} target="_blank" rel="noreferrer">Order on WhatsApp <HeartIcon filled /></a>
    </div>
  );
}

export default App;
