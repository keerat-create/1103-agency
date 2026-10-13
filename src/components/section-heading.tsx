export function SectionHeading({ number, label }: { number: string; label: string }) {
  return <p className="eyebrow section-label"><span>{number}</span>{label}</p>;
}
