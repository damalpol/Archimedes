import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function Tokenization() {
  const { t } = useLanguage();

  return (
    <section id="tokenization" className="py-24">
      <div className="container">
        <SectionHeading
          title={t("tokenization.title")}
          subtitle={t("tokenization.subtitle")}
        />

        <div className="mt-16">
          <div className="grid gap-8 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">
                    {t("tokenization.digitization.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("tokenization.digitization.description")}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <ArrowRight className="h-8 w-8 text-muted-foreground" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">
                    {t("tokenization.ownership.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("tokenization.ownership.description")}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}