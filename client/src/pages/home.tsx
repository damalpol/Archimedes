import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Tokenization } from "@/components/sections/tokenization";
import { ProofReserves } from "@/components/sections/proof-reserves";
import { DaoFeatures } from "@/components/sections/dao-features";
import { CommunityAction } from "@/components/sections/community-action";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Tokenization />
        <ProofReserves />
        <DaoFeatures />
        <CommunityAction />
      </main>
    </div>
  );
}