import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Database, Shield, CheckCircle } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function ProofReserves() {
  const { t } = useLanguage();

  const steps = [
    {
      title: "Asset Verification",
      description: "Cryptographic proof confirms the existence of real-world assets in reserve.",
      icon: Database,
      color: "text-blue-500"
    },
    {
      title: "Automated Auditing",
      description: "Smart contracts continuously monitor and verify reserve levels.",
      icon: Shield,
      color: "text-green-500"
    },
    {
      title: "Real-Time Updates",
      description: "On-chain data provides transparent, up-to-the-minute reserve status.",
      icon: CheckCircle,
      color: "text-purple-500"
    }
  ];

  return (
    <section id="proof" className="py-24 bg-muted/50">
      <div className="container">
        <SectionHeading
          title={t("proof.title")}
          subtitle={t("proof.subtitle")}
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="relative h-full overflow-hidden">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <step.icon className={`h-12 w-12 ${step.color} mb-4`} />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">{t(`proof.${step.title.toLowerCase().replace(' ', '_')}.title`)}</h3>
                    <p className="text-muted-foreground">{t(`proof.${step.title.toLowerCase().replace(' ', '_')}.description`)}</p>
                  </div>
                </CardContent>

                {/* Background decoration */}
                <div className="absolute -right-4 -bottom-4 w-24 h-24 opacity-10">
                  <step.icon className={`w-full h-full ${step.color}`} />
                </div>
              </Card>

              {index < steps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center mt-8">
                  <ArrowRight className="w-6 h-6 text-muted-foreground" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card>
            <CardContent className="p-6">
              <p className="text-center text-muted-foreground">
                {t("proof.explanation")}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}