interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-lg text-muted-foreground">
        {subtitle}
      </p>
    </div>
  );
}
