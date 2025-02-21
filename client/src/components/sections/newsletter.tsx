import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export function Newsletter() {
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
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight">Stay Updated</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Get the latest updates on blockchain technology and educational resources.
                </p>
                
                <form className="mt-8 flex gap-4 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1"
                  />
                  <Button type="submit">Subscribe</Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
