import Reveal from "@/components/Reveal";

// TODO: vervang deze placeholders door de echte gegevens
const contact = {
  phone: "+31 (0)546 12 34 56",
  phoneHref: "tel:+31546123456",
  email: "info@gebreshuistransport.nl",
  addressLines: ["Transportweg 1", "7671 AB Vriezenveen"],
  mapsUrl: "https://maps.google.com/?q=Vriezenveen",
  kvk: "12345678",
  socials: [
    { name: "Facebook", href: "https://facebook.com/", icon: FacebookIcon },
    { name: "Instagram", href: "https://instagram.com/", icon: InstagramIcon },
    { name: "LinkedIn", href: "https://linkedin.com/", icon: LinkedInIcon },
    { name: "YouTube", href: "https://youtube.com/", icon: YouTubeIcon },
  ],
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
  "Vriezenveen",
  "Rotterdam",
  "Antwerpen",
  "Hamburg",
  "Parijs",
  "München",
  "Milaan",
  "Kopenhagen",
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

        <Reveal delay={200} className="mt-16">
          <div className="flex items-center gap-5 border-t border-steel-500/25 pt-8">
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-steel-400">
              Volg ons
            </span>
            <div className="flex gap-4">
              {contact.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-steel-400 transition-colors hover:text-cream-50"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
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
        <p className="font-script text-xl text-cream-50">Gebr. Eshuis</p>
        <p>
          © {new Date().getFullYear()} Gebr. Eshuis Transport · Vriezenveen ·
          KvK {contact.kvk}
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

function FacebookIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

function LinkedInIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function YouTubeIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}
