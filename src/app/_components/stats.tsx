import Container from "@/components/ui/container";

const Stat = ({ value, label }: { value: string; label: string }) => {
  return (
    <div>
      <p className="text-4xl font-extrabold text-primary-foreground">{value}</p>
      <p className="mt-2 text-lg text-primary-foreground/70">{label}</p>
    </div>
  );
};

export default function Stats() {
  return (
    <section className="py-20">
      <Container className="flex flex-wrap justify-between gap-10">
        <Stat value="Nonprofit Committed" label="501(c)(3) pending" />
        <Stat value="Houston" label="State" />
        <Stat value="2021" label="Year Founded" />
        <Stat value="51" label="Team Members" />
        <Stat value="32M" label="Total Funding" />
      </Container>
    </section>
  );
}
