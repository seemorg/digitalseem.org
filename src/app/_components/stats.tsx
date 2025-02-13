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
        <Stat value="Registered Non-Profit" label="501(c)3 status pending" />
        <Stat value="2021" label="Year Founded" />
        <Stat value="100,000+" label="Users" />
        <Stat value="142+" label="Countries" />
      </Container>
    </section>
  );
}
