import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BlockAnimation } from "@/components/ui/block-animation";
import { useLanguage } from "@/lib/language-context";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="py-32 lg:py-48">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              {t("hero.understanding")}
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                {t("hero.blockchain")}
              </span>
            </h1>
            <p className="mt-8 text-xl text-muted-foreground">
              {t("hero.description")}
            </p>
            <div className="mt-10 flex flex-wrap gap-6">
              <Button size="lg" className="text-lg px-8">
                {t("hero.startLearning")}
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                {t("hero.watchDemo")}
              </Button>
            </div>
          </motion.div>

          <div className="relative">
            <BlockAnimation />
          </div>
        </div>
      </div>
    </section>
  );
}