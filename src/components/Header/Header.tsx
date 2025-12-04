"use client";

import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const components: { title: string; href: string; description?: string }[] = [
  {
    title: "Topwear",
    href: "/shop/topwear",
    description: "Casual and printed tops",
  },
  {
    title: "Bottomwear",
    href: "/shop/bottomwear",
    description: "Stylish bottoms",
  },
  {
    title: "Accessories",
    href: "/shop/accessories",
    description: "Hats, socks, and more",
  },
];

export function HeaderNavigationMenuDemo() {
  return (
    <header className="w-full">
      <nav className="container mx-auto px-4">
        <NavigationMenu className="w-full">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="text-xl font-bold">
              My Store
            </Link>

            <NavigationMenuList className="flex items-center gap-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
                  Shop
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 md:w-[300px] lg:w-[400px] lg:grid-cols-1">
                    {components.map((c) => (
                      <li key={c.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={c.href}
                            className="block rounded-md p-3 hover:bg-muted/50"
                          >
                            <div className="text-sm font-medium">{c.title}</div>
                            {c.description && (
                              <p className="text-muted-foreground text-sm">
                                {c.description}
                              </p>
                            )}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/about">About</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/contact">Contact</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/cart">Cart</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </div>
        </NavigationMenu>
      </nav>
    </header>
  );
}
function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href} className="block">
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
