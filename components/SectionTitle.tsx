import Reveal from "./Reveal";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionTitleProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : "text-left"}`}>
      <Reveal direction="up" delay={0.1}>
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 ${
            light ? "text-white" : "text-navy"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal direction="up" delay={0.2}>
          <p
            className={`text-lg max-w-2xl ${
              centered ? "mx-auto" : ""
            } ${light ? "text-slate-200" : "text-slate-600"}`}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
