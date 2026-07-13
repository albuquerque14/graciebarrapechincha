import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView, useMotionValue, useTransform, animate, useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  ChevronDown,
  Globe2,
  ShieldCheck,
  Users,
  MapPin,
  Sparkles,
  Star,
  Clock,
  Trophy,
  Baby,
  Heart,
  Flame,
} from "lucide-react";

import { FloatingWhatsApp, WhatsAppCTA } from "@/components/whatsapp-button";
import heroImg from "@/assets/hero-jiujitsu.jpg";
import beltImg from "@/assets/belt-detail.jpg";
import gbLogo from "@/assets/gb-logo.png.asset.json";
import kidsImg from "@/assets/program-kids.jpg";
import womenImg from "@/assets/program-women.jpg";
import adultsImg from "@/assets/program-adults.jpg";
import compImg from "@/assets/program-competition.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <AboutGB />
      <Programs />
      <WhyGB />
      <Testimonials />
      <Location />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-black"
    >
      {/* Background image with parallax */}
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="Atletas de Jiu-Jitsu treinando"
          className="h-full w-full object-cover opacity-60"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black/50" />
        {/* red scan line */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-40">
          <div className="animate-scan absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#cc0000] to-transparent" />
        </div>
        {/* Particles */}
        <Particles />
      </motion.div>

      {/* Top bar */}
      <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3"
        >
          <img
            src={gbLogo.url}
            alt="Gracie Barra Pechincha — Jiu-Jitsu & Defesa Pessoal"
            className="h-14 w-14 object-contain md:h-16 md:w-16"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="hidden items-center gap-2 text-xs uppercase tracking-widest text-white/60 md:flex"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <MapPin className="h-4 w-4 text-[#cc0000]" />
          Center Shopping Pechincha
        </motion.div>
      </div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-white/80 backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#cc0000] shadow-[0_0_10px_#cc0000]" />
          Zona Oeste — Rio de Janeiro
        </motion.div>

        <h1
          className="mx-auto max-w-4xl text-4xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <RevealText text="Jiu-Jitsu que" delay={0.5} />
          <br />
          <RevealText text="transforma." delay={0.9} className="text-[#cc0000]" />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="mt-4 block text-lg font-normal normal-case tracking-normal text-white/70 md:text-xl"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            No coração da Zona Oeste.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mx-auto mt-6 max-w-xl text-sm uppercase tracking-[0.25em] text-white/60"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Gracie Barra Pechincha · Center Shopping
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.8 }}
          className="mt-10 flex flex-col items-center justify-center gap-4"
        >
          <WhatsAppCTA size="lg">Aula experimental gratuita</WhatsAppCTA>
          <p className="text-xs uppercase tracking-widest text-white/50">
            Sem compromisso · Resposta em minutos
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]" style={{ fontFamily: "var(--font-display)" }}>
            Role para descobrir
          </span>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function RevealText({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) {
  const words = text.split(" ");
  return (
    <span className={`inline-block ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="mr-[0.25em] inline-block overflow-hidden align-bottom">
          <motion.span
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: delay + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

function Particles() {
  const dots = Array.from({ length: 25 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((_, i) => {
        const left = (i * 37) % 100;
        const dur = 6 + (i % 5);
        const delay = (i % 7) * 0.5;
        return (
          <motion.span
            key={i}
            className="absolute h-[3px] w-[3px] rounded-full bg-[#cc0000]/60"
            style={{ left: `${left}%`, bottom: "-10px" }}
            animate={{ y: [-0, -900], opacity: [0, 1, 0] }}
            transition={{ duration: dur, delay, repeat: Infinity, ease: "linear" }}
          />
        );
      })}
    </div>
  );
}

/* ---------- ABOUT / COUNTERS ---------- */
function AboutGB() {
  const stats = [
    { value: 40, suffix: "+", label: "Anos de história" },
    { value: 900, suffix: "+", label: "Unidades no mundo" },
    { value: 200, suffix: "k+", label: "Alunos formados" },
    { value: 6, suffix: "", label: "Continentes" },
  ];
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-[#0a0a0a] py-24 md:py-32">
      <div className="absolute inset-0 opacity-20">
        <img src={beltImg} alt="" className="h-full w-full object-cover" width={1200} height={800} loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <FadeIn>
          <span className="text-xs uppercase tracking-[0.4em] text-[#cc0000]" style={{ fontFamily: "var(--font-display)" }}>
            Sobre a Gracie Barra
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2
            className="mt-4 max-w-3xl text-3xl font-bold uppercase leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            A maior organização de <span className="text-[#cc0000]">Jiu-Jitsu</span> do mundo. Agora no Center Shopping Pechincha.
          </h2>
        </FadeIn>

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={0.2 + i * 0.1}>
              <div className="border-l-2 border-[#cc0000] pl-4">
                <div
                  className="text-5xl font-bold text-white md:text-6xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <Counter to={s.value} />
                  <span className="text-[#cc0000]">{s.suffix}</span>
                </div>
                <div className="mt-2 text-xs uppercase tracking-widest text-white/60" style={{ fontFamily: "var(--font-display)" }}>
                  {s.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.7}>
          <p className="mt-16 max-w-2xl text-sm uppercase tracking-widest text-white/50" style={{ fontFamily: "var(--font-display)" }}>
            ↓ Escolha o seu caminho
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.floor(v)),
    });
    return () => controls.stop();
  }, [inView, to, mv]);
  return <span ref={ref}>{display}</span>;
}

/* ---------- PROGRAMS ---------- */
function Programs() {
  const programs = [
    {
      code: "GBK",
      title: "Kids",
      img: kidsImg,
      icon: Baby,
      tagline: "4 a 13 anos",
      benefits: ["Disciplina e foco", "Autoconfiança", "Anti-bullying", "Coordenação motora"],
    },
    {
      code: "GBF",
      title: "Feminino",
      img: womenImg,
      icon: Heart,
      tagline: "Defesa pessoal",
      benefits: ["Turmas exclusivas", "Ambiente seguro", "Autodefesa real", "Condicionamento"],
    },
    {
      code: "GB1",
      title: "Iniciantes",
      img: adultsImg,
      icon: Flame,
      tagline: "Adultos",
      benefits: ["Zero experiência", "Progressão clara", "Alívio do estresse", "Comunidade forte"],
    },
    {
      code: "COMP",
      title: "Competição",
      img: compImg,
      icon: Trophy,
      tagline: "Alta performance",
      benefits: ["Treinos avançados", "Estratégia de luta", "Preparação física", "Circuito nacional"],
    },
  ];
  return (
    <section className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-[#cc0000]" style={{ fontFamily: "var(--font-display)" }}>
                Programas
              </span>
              <h2
                className="mt-3 text-3xl font-bold uppercase leading-tight tracking-tight text-white md:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Escolha o seu <span className="text-[#cc0000]">caminho</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm text-white/60">
              Todos os níveis. Todas as idades. Uma metodologia mundial ensinada por professores certificados pela Gracie Barra.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p, i) => (
            <ProgramCard key={p.code} program={p} delay={i * 0.1} />
          ))}
        </div>

        <FadeIn delay={0.6}>
          <p className="mt-16 text-center text-sm uppercase tracking-widest text-white/50" style={{ fontFamily: "var(--font-display)" }}>
            ↓ Por que treinar com a gente
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function ProgramCard({
  program,
  delay,
}: {
  program: {
    code: string;
    title: string;
    img: string;
    icon: React.ComponentType<{ className?: string }>;
    tagline: string;
    benefits: string[];
  };
  delay: number;
}) {
  const Icon = program.icon;
  return (
    <FadeIn delay={delay}>
      <motion.div
        whileHover="hover"
        initial="rest"
        animate="rest"
        className="group relative aspect-[3/4] overflow-hidden rounded-sm border border-white/5 bg-[#111]"
      >
        <motion.img
          src={program.img}
          alt={program.title}
          className="absolute inset-0 h-full w-full object-cover opacity-70"
          variants={{ rest: { scale: 1 }, hover: { scale: 1.08 } }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          width={800}
          height={1000}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        <motion.div
          className="absolute inset-x-0 top-0 h-1 bg-[#cc0000]"
          variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
          transition={{ duration: 0.4 }}
          style={{ transformOrigin: "left" }}
        />

        <div className="relative z-10 flex h-full flex-col justify-between p-6">
          <div className="flex items-start justify-between">
            <span className="rounded-sm border border-white/20 bg-black/40 px-2 py-1 text-[10px] uppercase tracking-widest text-white/80 backdrop-blur-sm" style={{ fontFamily: "var(--font-display)" }}>
              {program.code}
            </span>
            <Icon className="h-5 w-5 text-[#cc0000]" />
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-white/60" style={{ fontFamily: "var(--font-display)" }}>
              {program.tagline}
            </div>
            <h3
              className="mt-2 text-3xl font-bold uppercase leading-none tracking-tight text-white md:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {program.title}
            </h3>

            <motion.ul
              variants={{
                rest: { height: 0, opacity: 0 },
                hover: { height: "auto", opacity: 1 },
              }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-3 overflow-hidden text-sm text-white/80"
            >
              <div className="space-y-1 pt-2">
                {program.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="h-1 w-3 bg-[#cc0000]" />
                    {b}
                  </li>
                ))}
              </div>
            </motion.ul>
          </div>
        </div>
      </motion.div>
    </FadeIn>
  );
}

/* ---------- WHY GB ---------- */
function WhyGB() {
  const items = [
    { icon: Globe2, title: "Metodologia mundial", desc: "O mesmo programa ensinado em mais de 900 escolas ao redor do mundo." },
    { icon: ShieldCheck, title: "Professores certificados", desc: "Faixas-pretas formados diretamente pela sede da Gracie Barra." },
    { icon: Users, title: "Ambiente familiar", desc: "Um espaço acolhedor para toda a família treinar com segurança." },
    { icon: MapPin, title: "Localização premium", desc: "Dentro do Center Shopping Pechincha. Estacionamento, praça de alimentação, segurança." },
    { icon: Sparkles, title: "Estrutura completa", desc: "Tatames profissionais, vestiários e ambiente climatizado o ano todo." },
  ];
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-24 md:py-32">
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#cc0000]/5 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6">
        <FadeIn>
          <span className="text-xs uppercase tracking-[0.4em] text-[#cc0000]" style={{ fontFamily: "var(--font-display)" }}>
            Diferenciais
          </span>
          <h2
            className="mt-3 max-w-3xl text-3xl font-bold uppercase leading-tight tracking-tight text-white md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Por que a GB <span className="text-[#cc0000]">Pechincha</span>
          </h2>
        </FadeIn>

        <div className="mt-16 divide-y divide-white/5 border-y border-white/5">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ x: 12, backgroundColor: "rgba(204,0,0,0.03)" }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col gap-4 py-8 md:flex-row md:items-center md:gap-8"
              >
                <div className="flex w-12 shrink-0 items-center justify-center">
                  <div className="text-4xl font-bold text-white/20" style={{ fontFamily: "var(--font-display)" }}>
                    0{i + 1}
                  </div>
                </div>
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm border border-[#cc0000]/30 bg-[#cc0000]/5">
                  <item.icon className="h-6 w-6 text-[#cc0000]" />
                </div>
                <div className="flex-1">
                  <h3
                    className="text-xl font-bold uppercase tracking-wide text-white md:text-2xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-1 max-w-xl text-sm text-white/60">{item.desc}</p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.6}>
          <p className="mt-16 text-sm uppercase tracking-widest text-white/50" style={{ fontFamily: "var(--font-display)" }}>
            ↓ O que dizem nossos alunos
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
function Testimonials() {
  const items = [
    { name: "Rafael M.", role: "Faixa Azul · 2 anos", text: "Entrei querendo perder peso. Saí de cada aula sentindo que virei uma pessoa melhor. A GB Pechincha mudou minha rotina." },
    { name: "Camila S.", role: "GBF · 1 ano", text: "Sempre tive receio de treinar luta. Aqui encontrei um ambiente de mulheres fortes e professores que respeitam o meu ritmo." },
    { name: "Lucas P.", role: "Pai do aluno GBK", text: "Meu filho era tímido. Hoje é mais confiante, focado na escola e adora ir treinar. Vale cada real investido." },
    { name: "Juliana R.", role: "Faixa Branca · 6 meses", text: "Localização perfeita, ambiente familiar, professores atenciosos. Melhor decisão que tomei esse ano." },
    { name: "Bruno C.", role: "Competidor · 4 anos", text: "Aqui aprendi que Jiu-Jitsu é sobre carácter antes da técnica. Recomendo de olhos fechados." },
  ];
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [Autoplay({ delay: 4500 })]);

  return (
    <section className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="mb-14 flex items-end justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-[#cc0000]" style={{ fontFamily: "var(--font-display)" }}>
                Depoimentos
              </span>
              <h2
                className="mt-3 text-3xl font-bold uppercase leading-tight tracking-tight text-white md:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Vidas <span className="text-[#cc0000]">transformadas</span>
              </h2>
            </div>
          </div>
        </FadeIn>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {items.map((t, i) => (
              <div key={i} className="min-w-0 flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_40%] lg:flex-[0_0_32%]">
                <div className="flex h-full flex-col justify-between rounded-sm border border-white/10 bg-[#111] p-8">
                  <div>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <motion.span
                          key={s}
                          initial={{ scale: 0, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: s * 0.08 }}
                        >
                          <Star className="h-4 w-4 fill-[#cc0000] text-[#cc0000]" />
                        </motion.span>
                      ))}
                    </div>
                    <p className="mt-6 text-white/85 leading-relaxed">
                      &ldquo;{t.text}&rdquo;
                    </p>
                  </div>
                  <div className="mt-8 flex items-center gap-3 border-t border-white/5 pt-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#cc0000]/10 text-sm font-bold text-[#cc0000]" style={{ fontFamily: "var(--font-display)" }}>
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>{t.name}</div>
                      <div className="text-xs uppercase tracking-widest text-white/50">{t.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <FadeIn delay={0.4}>
          <p className="mt-16 text-center text-sm uppercase tracking-widest text-white/50" style={{ fontFamily: "var(--font-display)" }}>
            ↓ Venha nos visitar
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ---------- LOCATION ---------- */
function Location() {
  return (
    <section className="relative bg-[#0a0a0a] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-[#cc0000]" style={{ fontFamily: "var(--font-display)" }}>
                Localização
              </span>
              <h2
                className="mt-3 text-3xl font-bold uppercase leading-tight tracking-tight text-white md:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Dentro do <span className="text-[#cc0000]">Center Shopping Pechincha</span>
              </h2>
              <p className="mt-6 max-w-md text-white/70">
                Estamos onde você já vai. Estacionamento, segurança, praça de alimentação e a maior escola de Jiu-Jitsu do mundo — tudo no mesmo lugar.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex gap-4">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#cc0000]" />
                  <div>
                    <div className="text-sm font-bold uppercase tracking-widest text-white" style={{ fontFamily: "var(--font-display)" }}>Endereço</div>
                    <p className="mt-1 text-white/70">
                      Estr. de Jacarepaguá, 7855 — Pechincha<br />
                      Center Shopping Pechincha — Rio de Janeiro / RJ
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="mt-1 h-5 w-5 shrink-0 text-[#cc0000]" />
                  <div>
                    <div className="text-sm font-bold uppercase tracking-widest text-white" style={{ fontFamily: "var(--font-display)" }}>Horários</div>
                    <p className="mt-1 text-white/70">
                      Seg. a Sex.: 07h — 22h<br />
                      Sábados: 09h — 14h
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <WhatsAppCTA>Venha nos visitar</WhatsAppCTA>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative aspect-square overflow-hidden rounded-sm border border-white/10 lg:aspect-auto lg:h-full">
              <iframe
                title="Localização Gracie Barra Pechincha"
                src="https://www.google.com/maps?q=Center+Shopping+Pechincha,+Rio+de+Janeiro&output=embed"
                className="h-full w-full grayscale contrast-125"
                style={{ border: 0, filter: "invert(0.92) hue-rotate(180deg) contrast(0.9)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ---------- FINAL CTA ---------- */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#cc0000] py-24 md:py-40">
      <div className="absolute inset-0 opacity-20 mix-blend-overlay">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(0,0,0,0.15) 20px, rgba(0,0,0,0.15) 21px)",
          }}
        />
      </div>
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-black/30 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <FadeIn>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/20 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-white backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
            Vagas limitadas por turma
          </span>
        </FadeIn>
        <FadeIn delay={0.15}>
          <h2
            className="mt-6 text-4xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Sua primeira aula<br />é <span className="italic">gratuita</span>.
          </h2>
        </FadeIn>
        <FadeIn delay={0.3}>
          <p className="mt-6 text-lg text-white/90 md:text-xl">
            Sem compromisso. Sem taxa. Só você, o tatame e uma decisão que pode mudar tudo.
          </p>
        </FadeIn>
        <FadeIn delay={0.45}>
          <div className="mt-12">
            <WhatsAppCTA size="lg" className="bg-black text-white shadow-2xl shadow-black/40 hover:shadow-black/60">
              Agende agora pelo WhatsApp
            </WhatsAppCTA>
          </div>
        </FadeIn>
        <FadeIn delay={0.6}>
          <p className="mt-8 text-xs uppercase tracking-[0.3em] text-white/80" style={{ fontFamily: "var(--font-display)" }}>
            Resposta em minutos · Center Shopping Pechincha
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0a] py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-[#cc0000] text-sm font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
            GB
          </div>
          <div className="text-xs uppercase tracking-widest text-white/60" style={{ fontFamily: "var(--font-display)" }}>
            Gracie Barra Pechincha
          </div>
        </div>
        <p className="text-xs text-white/40">© {new Date().getFullYear()} Gracie Barra Pechincha. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

/* ---------- SHARED ---------- */
function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
