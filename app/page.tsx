import Reveal from "@/components/Reveal";

const contact = {
  phone: "+31 (0)6 39 45 61 78",
  phoneHref: "tel:+31639456178",
  email: "info@gebreshuistransport.nl",
  addressLines: ["Engelsstraat 83", "7671 BR Vriezenveen"],
  mapsUrl: "https://maps.google.com/?q=Vriezenveen",
  kvk: "72714727",
};

const fotos = [
  {
    src: "/fotos/foto-1.jpg",
    alt: "Twee Scania's van Gebr. Eshuis op het erf",
    caption: "Klaar voor vertrek",
  },
  {
    src: "/fotos/foto-2.jpg",
    alt: "Twee Scania's van Gebr. Eshuis met containers",
    caption: "Onderweg met containers",
  },
  {
    src: "/fotos/foto-3.jpg",
    alt: "De familie achter Gebr. Eshuis voor drie Scania's",
    caption: "De familie achter de trucks",
  },
];

// TODO: pas de bestemmingen aan naar waar jullie echt rijden
const routes = [
  "Rotterdam",
  "Antwerpen",
  "Hamburg",
  "Parijs",
  "München",
  "Kopenhagen",
  "Stockholm",
  "Madrid",
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <RouteMarquee />
        <Diensten />
        <Hairline />
        <Fotos />
        <Hairline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- Zilveren haarlijn, zoals het chassis-skirt ---------- */

function Hairline() {
  return (
    <div
      aria-hidden
      className="h-px w-full bg-gradient-to-r from-transparent via-steel-500/35 to-transparent"
    />
  );
}

/* ---------- Navigatie ---------- */

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-cream-50/10 bg-espresso-950/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-6">
        <a href="#top" className="font-script text-2xl text-cream-50">
          Gebr. Eshuis
        </a>
        <div className="flex items-center gap-7">
          <a
            href="#diensten"
            className="hidden text-sm text-cream-300 transition-colors hover:text-cream-50 sm:inline"
          >
            Diensten
          </a>
          <a
            href="#contact"
            className="hidden text-sm text-cream-300 transition-colors hover:text-cream-50 sm:inline"
          >
            Contact
          </a>
          <a
            href={contact.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-cream-50 transition-colors hover:text-glow-400"
          >
            <PhoneIcon className="h-4 w-4" />
            <span className="hidden md:inline">{contact.phone}</span>
            <span className="md:hidden">Bel ons</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-5 pt-16"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/fotos/hero.jpg"
          alt=""
          className="hero-zoom h-full w-full object-cover object-[50%_30%]"
        />
        <div className="absolute inset-0 bg-espresso-950/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso-950/70 via-espresso-950/40 to-espresso-950" />
      </div>

      <div className="relative flex w-full max-w-3xl flex-col items-center text-center">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-steel-400 sm:text-xs">
          Transport · Vriezenveen, Holland
        </p>
        <h1 className="mt-6 font-script text-7xl leading-none text-cream-50 sm:text-9xl">
          Gebr. Eshuis
        </h1>
        <p className="mt-8 max-w-md text-balance leading-relaxed text-cream-300 sm:text-lg">
          Nationaal en internationaal transport. Al generaties een vertrouwd
          gezicht op de Europese wegen.
        </p>

        <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:gap-8">
          <a
            href="#contact"
            className="w-full rounded-full bg-glow-500 px-8 py-3 text-center text-sm font-bold text-espresso-950 transition-colors hover:bg-glow-400 sm:w-auto"
          >
            Neem contact op
          </a>
          <a
            href="#diensten"
            className="text-sm font-semibold text-cream-300 transition-colors hover:text-cream-50"
          >
            Onze diensten →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Route-marquee ---------- */

function RouteMarquee() {
  return (
    <section aria-hidden className="select-none">
      <Hairline />
      <div className="overflow-hidden py-5">
        <div className="marquee-track flex w-max items-center gap-10 pr-10">
          {[0, 1].map((copy) =>
            routes.map((route) => (
              <span
                key={`${copy}-${route}`}
                className="flex items-center gap-10"
              >
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-steel-500">
                  {route}
                </span>
                <span className="h-1 w-1 rounded-full bg-glow-500/60" />
              </span>
            )),
          )}
        </div>
      </div>
      <Hairline />
    </section>
  );
}

/* ---------- Diensten ---------- */

const diensten = [
  {
    icon: ContainerIcon,
    title: "Containertransport",
    text: "Containervervoer van en naar de zeehavens, snel en flexibel geregeld.",
  },
  {
    icon: RouteIcon,
    title: "Nationaal & internationaal",
    text: "Dagelijks onderweg in Nederland en de rest van Europa. Afgesproken is afgesproken.",
  },
  {
    icon: HandshakeIcon,
    title: "Vaste vervoerder",
    text: "Als charter rijden we dag in dag uit voor collega-transportbedrijven — met vaste chauffeurs en korte lijnen.",
  },
];

function Diensten() {
  return (
    <section id="diensten" className="scroll-mt-16 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <Reveal>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-glow-400 sm:text-xs">
            Diensten
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-cream-50 sm:text-3xl">
            Wat we doen
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 sm:mt-16 sm:grid-cols-3 sm:gap-10">
          {diensten.map((dienst, i) => (
            <Reveal key={dienst.title} delay={i * 100}>
              <div className="flex items-center justify-between border-t border-steel-500/25 pt-6">
                <dienst.icon className="h-6 w-6 text-glow-400" />
                <span className="text-xs font-semibold tracking-[0.3em] text-steel-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 font-semibold text-cream-50">
                {dienst.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream-300">
                {dienst.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Foto's ---------- */

function Fotos() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <Reveal>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-glow-400 sm:text-xs">
            Onderweg
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-cream-50 sm:text-3xl">
            Ons materieel
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:mt-16 sm:grid-cols-3 sm:gap-6">
          {fotos.map((foto, i) => (
            <Reveal key={foto.src} delay={i * 100}>
              <figure className="group">
                <div className="overflow-hidden rounded-xl border border-steel-500/25">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={foto.src}
                    alt={foto.alt}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] w-full object-cover grayscale-[35%] transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
                  />
                </div>
                <figcaption className="mt-4 flex items-baseline gap-4">
                  <span className="text-xs font-semibold tracking-[0.3em] text-steel-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-cream-300">{foto.caption}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */

function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <Reveal>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-glow-400 sm:text-xs">
            Contact
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-cream-50 sm:text-3xl">
            Kom in contact
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-cream-300">
            Vracht te vervoeren of een vraag? Bel of mail ons — we denken graag
            met u mee.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-12 sm:mt-16 sm:grid-cols-3 sm:gap-10">
          <ContactItem delay={0} label="Telefoon">
            <a
              href={contact.phoneHref}
              className="transition-colors hover:text-glow-400"
            >
              {contact.phone}
            </a>
          </ContactItem>
          <ContactItem delay={100} label="E-mail">
            <a
              href={`mailto:${contact.email}`}
              className="transition-colors hover:text-glow-400"
            >
              {contact.email}
            </a>
          </ContactItem>
          <ContactItem delay={200} label="Adres">
            <a
              href={contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-glow-400"
            >
              {contact.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </a>
          </ContactItem>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  label,
  children,
  delay,
}: {
  label: string;
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <h3 className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-steel-400">
        {label}
      </h3>
      <div className="mt-3 font-medium text-cream-50">{children}</div>
    </Reveal>
  );
}

/* ---------- Footer ---------- */

function Footer() {
  return (
    <footer>
      <Hairline />
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-5 py-10 text-center text-sm text-steel-400 sm:flex-row sm:justify-between sm:px-6 sm:text-left">
        <a href="/" className="font-script text-xl text-cream-50">
          Gebr. Eshuis
        </a>
        <p>
          © {new Date().getFullYear()} Gebr. Eshuis Transport V.O.F. ·
          Vriezenveen · KvK {contact.kvk}
        </p>
      </div>
    </footer>
  );
}

/* ---------- Iconen ---------- */

type IconProps = { className?: string };

function PhoneIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ContainerIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="6" width="20" height="12" rx="1" />
      <path d="M7 6v12M12 6v12M17 6v12" />
    </svg>
  );
}

function RouteIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="6" cy="19" r="3" />
      <circle cx="18" cy="5" r="3" />
      <path d="M12 19h4.5a3.5 3.5 0 0 0 0-7h-9a3.5 3.5 0 0 1 0-7H12" />
    </svg>
  );
}

function HandshakeIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m11 17 2 2a1 1 0 1 0 3-3" />
      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
      <path d="m21 3 1 11h-2" />
      <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
      <path d="M3 4h8" />
    </svg>
  );
}
