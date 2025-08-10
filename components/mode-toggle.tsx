"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const getThemeIcon = () => {
    if (!mounted) return <Sun className="h-4 w-4" />;

    switch (theme) {
      case "light":
        return <Sun className="h-4 w-4 text-amber-500" />;
      case "dark":
        return <Moon className="h-4 w-4 text-blue-400" />;
      default:
        return <Sun className="h-4 w-4" />;
    }
  };

  const getThemeLabel = () => {
    if (!mounted) return "Light";

    switch (theme) {
      case "light":
        return "Light";
      case "dark":
        return "Dark";
      default:
        return "Light";
    }
  };

  return (
    <Button
      variant="outline"
      onClick={toggleTheme}
      className={cn(
        "relative group overflow-hidden",
        "bg-background/80 backdrop-blur-sm",
        "border-border/50 dark:border-border/30 hover:border-primary/30",
        "hover:bg-accent/50 hover:text-accent-foreground",
        "transition-all duration-300 ease-in-out",
        "min-w-[40px] sm:min-w-[80px] h-8 sm:h-9 px-3 gap-2"
      )}
      aria-label={`Switch to ${
        theme === "light" ? "dark" : theme === "dark" ? "system" : "light"
      } mode`}
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      {/* Icon with smooth transition */}
      <div className="relative flex items-center justify-center">
        {getThemeIcon()}
      </div>
      <span className="sr-only">
        Current theme: {getThemeLabel()}. Click to cycle through light, dark,
        and system themes.
      </span>
    </Button>
  );
}
