import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    "nav.features": "Features",
    "nav.tokenization": "Tokenization",
    "nav.proof": "Proof of Reserve",
    "nav.dao": "DAO",
    "nav.getStarted": "Get Started",

    // Hero Section
    "hero.understanding": "Understanding",
    "hero.blockchain": "Blockchain",
    "hero.description": "Learn the fundamentals of blockchain technology, tokenization, and proof of reserve through interactive visualizations.",
    "hero.startLearning": "Start Learning",
    "hero.watchDemo": "Watch Demo",

    // Features Section
    "features.title": "Key Features",
    "features.subtitle": "Understanding the core principles of blockchain technology",
    "features.security.title": "Security",
    "features.security.description": "Cryptographic security ensures data integrity and immutability",
    "features.decentralization.title": "Decentralization",
    "features.decentralization.description": "Distributed network removes single points of failure",
    "features.transparency.title": "Transparency",
    "features.transparency.description": "Public ledger provides complete transaction history",
    "features.privacy.title": "Privacy",
    "features.privacy.description": "Pseudonymous transactions protect user identity",

    // Tokenization Section
    "tokenization.title": "Understanding Tokenization",
    "tokenization.subtitle": "How digital assets are represented on the blockchain",
    "tokenization.digitization.title": "Asset Digitization",
    "tokenization.digitization.description": "Physical assets are converted into digital tokens that can be traded on the blockchain.",
    "tokenization.ownership.title": "Digital Ownership",
    "tokenization.ownership.description": "Tokens represent ownership rights and can be transferred securely between parties.",

    // DAO Section
    "dao.title": "Archimedes DAO",
    "dao.subtitle": "A decentralized autonomous organization revolutionizing asset verification",
    "dao.governance.title": "Decentralized Governance",
    "dao.governance.description": "Community-driven decision making through transparent voting mechanisms",
    "dao.community.title": "Community Owned",
    "dao.community.description": "Token holders have direct ownership and control over the platform",
    "dao.operations.title": "Automated Operations",
    "dao.operations.description": "Smart contracts ensure transparent and efficient service delivery",
    "dao.security.title": "Enhanced Security",
    "dao.security.description": "Multi-signature wallets and decentralized control reduce single points of failure",

    // Proof of Reserve Section
    "proof.title": "Proof of Reserve",
    "proof.subtitle": "How blockchain ensures transparent asset backing",
    "proof.asset_verification.title": "Asset Verification",
    "proof.asset_verification.description": "Cryptographic proof confirms the existence of real-world assets in reserve.",
    "proof.automated_auditing.title": "Automated Auditing",
    "proof.automated_auditing.description": "Smart contracts continuously monitor and verify reserve levels.",
    "proof.real_time_updates.title": "Real-Time Updates",
    "proof.real_time_updates.description": "On-chain data provides transparent, up-to-the-minute reserve status.",
    "proof.explanation": "Proof of Reserve provides mathematical verification that a custodian's assets are backed by real reserves. This ensures transparency and trust in the financial system without requiring blind faith in intermediaries."
  },
  es: {
    // Navigation
    "nav.features": "Características",
    "nav.tokenization": "Tokenización",
    "nav.proof": "Prueba de Reserva",
    "nav.dao": "DAO",
    "nav.getStarted": "Comenzar",

    // Hero Section
    "hero.understanding": "Entendiendo",
    "hero.blockchain": "Blockchain",
    "hero.description": "Aprende los fundamentos de la tecnología blockchain, tokenización y prueba de reserva a través de visualizaciones interactivas.",
    "hero.startLearning": "Empezar a Aprender",
    "hero.watchDemo": "Ver Demo",

    // Features Section
    "features.title": "Características Principales",
    "features.subtitle": "Entendiendo los principios fundamentales de la tecnología blockchain",
    "features.security.title": "Seguridad",
    "features.security.description": "La seguridad criptográfica garantiza la integridad e inmutabilidad de los datos",
    "features.decentralization.title": "Descentralización",
    "features.decentralization.description": "La red distribuida elimina puntos únicos de falla",
    "features.transparency.title": "Transparencia",
    "features.transparency.description": "El registro público proporciona un historial completo de transacciones",
    "features.privacy.title": "Privacidad",
    "features.privacy.description": "Las transacciones pseudónimas protegen la identidad del usuario",

    // Tokenization Section
    "tokenization.title": "Entendiendo la Tokenización",
    "tokenization.subtitle": "Cómo se representan los activos digitales en la blockchain",
    "tokenization.digitization.title": "Digitalización de Activos",
    "tokenization.digitization.description": "Los activos físicos se convierten en tokens digitales que pueden comercializarse en la blockchain.",
    "tokenization.ownership.title": "Propiedad Digital",
    "tokenization.ownership.description": "Los tokens representan derechos de propiedad y pueden transferirse de forma segura entre las partes.",

    // DAO Section
    "dao.title": "Archimedes DAO",
    "dao.subtitle": "Una organización autónoma descentralizada que revoluciona la verificación de activos",
    "dao.governance.title": "Gobernanza Descentralizada",
    "dao.governance.description": "Toma de decisiones impulsada por la comunidad a través de mecanismos de votación transparentes",
    "dao.community.title": "Propiedad Comunitaria",
    "dao.community.description": "Los poseedores de tokens tienen propiedad y control directo sobre la plataforma",
    "dao.operations.title": "Operaciones Automatizadas",
    "dao.operations.description": "Los contratos inteligentes garantizan un servicio transparente y eficiente",
    "dao.security.title": "Seguridad Mejorada",
    "dao.security.description": "Las carteras multifirma y el control descentralizado reducen los puntos únicos de falla",

    // Proof of Reserve Section
    "proof.title": "Prueba de Reserva",
    "proof.subtitle": "Cómo blockchain garantiza el respaldo transparente de activos",
    "proof.asset_verification.title": "Verificación de Activos",
    "proof.asset_verification.description": "La prueba criptográfica confirma la existencia de activos reales en reserva.",
    "proof.automated_auditing.title": "Auditoría Automatizada",
    "proof.automated_auditing.description": "Los contratos inteligentes monitorean y verifican continuamente los niveles de reserva.",
    "proof.real_time_updates.title": "Actualizaciones en Tiempo Real",
    "proof.real_time_updates.description": "Los datos en cadena proporcionan un estado de reserva transparente y actualizado al minuto.",
    "proof.explanation": "La Prueba de Reserva proporciona una verificación matemática de que los activos de un custodio están respaldados por reservas reales. Esto garantiza la transparencia y la confianza en el sistema financiero sin requerir fe ciega en intermediarios."
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}