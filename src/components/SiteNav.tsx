import { Link } from "@tanstack/react-router";
import { Heart, Images, Mail, Gamepad2, Gift } from "lucide-react";

const links = [
  { to: "/", label: "Home", icon: Heart },
  { to: "/memories", label: "Memories", icon: Images },
  { to: "/letters", label: "Letters", icon: Mail },
  { to: "/surprise", label: "Surprise", icon: Gift },
  { to: "/game", label: "Love game", icon: Gamepad2 },
] as const;

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-1.5 px-3 py-3 sm:gap-2">
        {links.map(({ to, label, icon: Icon }) => (
          <Link
            key={to}
            to={to}
            activeOptions={{ exact: to === "/" }}
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:bg-blossom-100 hover:text-blossom-700 sm:text-sm"
            activeProps={{ className: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground" }}
          >
            <Icon className="h-3.5 w-3.5" />
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
