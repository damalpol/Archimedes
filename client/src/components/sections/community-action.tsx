import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Users, Vote, Coins } from "lucide-react";

const benefits = [
  {
    icon: Vote,
    title: "Governance Rights",
    description: "Shape the future of RWA tokenization"
  },
  {
    icon: Coins,
    title: "Token Rewards",
    description: "Earn rewards for active participation"
  },
  {
    icon: Users,
    title: "Community Access",
    description: "Join an exclusive network of RWA enthusiasts"
  }
];

export function CommunityAction() {
  return (
    <section className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardContent className="p-12">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold tracking-tight">Join the Revolution</h2>
                <p className="mt-4 text-xl text-muted-foreground">
                  Become part of the Archimedes DAO and help shape the future of real-world asset tokenization.
                </p>
                
                <div className="mt-12 grid gap-8 md:grid-cols-3">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="inline-block mb-4"
                      >
                        <benefit.icon className="h-12 w-12 text-primary" />
                      </motion.div>
                      <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div 
                  className="mt-12"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button size="lg" className="text-lg px-12">
                    Connect Wallet
                  </Button>
                </motion.div>
                
                <p className="mt-6 text-sm text-muted-foreground">
                  Join our community and participate in the governance of real-world assets
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
