import { Switch } from "@/components/ui/switch";
import { useLanguage } from "@/lib/language-context";
import { motion } from "framer-motion";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div 
      className="flex items-center space-x-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <span className={`text-sm ${language === 'en' ? 'text-foreground' : 'text-muted-foreground'}`}>EN</span>
      <Switch
        checked={language === "es"}
        onCheckedChange={(checked) => setLanguage(checked ? "es" : "en")}
        className="data-[state=checked]:bg-primary"
      />
      <span className={`text-sm ${language === 'es' ? 'text-foreground' : 'text-muted-foreground'}`}>ES</span>
    </motion.div>
  );
}
