import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Shield, Link as ChainLink, Clock, Lock } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function Features() {
  const { t } = useLanguage();

  const features = [
    {
      title: t("features.security.title"),
      description: t("features.security.description"),
      icon: Shield
    },
    {
      title: t("features.decentralization.title"),
      description: t("features.decentralization.description"),
      icon: ChainLink
    },
    {
      title: t("features.transparency.title"),
      description: t("features.transparency.description"),
      icon: Clock
    },
    {
      title: t("features.privacy.title"),
      description: t("features.privacy.description"),
      icon: Lock
    }
  ];

  return (
    <section id="features" className="py-24 bg-muted/50">
      <div className="container">
        <SectionHeading
          title={t("features.title")}
          subtitle={t("features.subtitle")}
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}