import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Scale, Users, Vote, Shield, RefreshCw } from "lucide-react";

const features = [
  {
    title: "Decentralized Governance",
    description: "Community-driven decision making through transparent voting mechanisms",
    icon: Vote,
    color: "text-blue-500"
  },
  {
    title: "Community Owned",
    description: "Token holders have direct ownership and control over the platform",
    icon: Users,
    color: "text-green-500"
  },
  {
    title: "Automated Operations",
    description: "Smart contracts ensure transparent and efficient service delivery",
    icon: RefreshCw,
    color: "text-purple-500"
  },
  {
    title: "Enhanced Security",
    description: "Multi-signature wallets and decentralized control reduce single points of failure",
    icon: Shield,
    color: "text-orange-500"
  }
];

export function DaoFeatures() {
  return (
    <section id="dao" className="py-24 bg-muted/50">
      <div className="container">
        <SectionHeading
          title="Archimedes DAO"
          subtitle="A decentralized autonomous organization revolutionizing asset verification"
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
              <Card className="relative h-full overflow-hidden">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.8, type: "spring" }}
                      className="mb-4"
                    >
                      <feature.icon className={`h-12 w-12 ${feature.color}`} />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card>
            <CardContent className="p-8">
              <div className="max-w-3xl mx-auto text-center">
                <Scale className="h-16 w-16 mx-auto mb-6 text-primary" />
                <h3 className="text-2xl font-bold mb-4">Why Choose Archimedes DAO?</h3>
                <p className="text-muted-foreground mb-6">
                  Archimedes DAO combines the power of decentralized governance with cutting-edge blockchain technology 
                  to provide transparent, efficient, and secure asset verification services. Our community-driven approach 
                  ensures that every decision is made in the best interest of all stakeholders.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <h4 className="font-semibold mb-2">Transparent</h4>
                    <p className="text-sm text-muted-foreground">All operations and decisions are recorded on-chain</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Efficient</h4>
                    <p className="text-sm text-muted-foreground">Automated processes reduce costs and delays</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Secure</h4>
                    <p className="text-sm text-muted-foreground">Decentralized control eliminates single points of failure</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
