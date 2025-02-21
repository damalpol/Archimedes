import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Scale, Menu, X } from "lucide-react";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { useLanguage } from "@/lib/language-context";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#features", label: t("nav.features") },
    { href: "#tokenization", label: t("nav.tokenization") },
    { href: "#proof", label: t("nav.proof") },
    { href: "#dao", label: t("nav.dao") },
  ];

  return (
    <nav className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Scale className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">Archimedes</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <LanguageSwitcher />
          <Button size="sm">{t("nav.getStarted")}</Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="py-4">
                  <LanguageSwitcher />
                </div>
                <Button size="sm" className="w-full">
                  {t("nav.getStarted")}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}