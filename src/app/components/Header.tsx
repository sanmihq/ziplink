"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Button,
  Chip,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link as NextUILink,
} from "@nextui-org/react";
import { IconBrandGithub, IconBrandX } from "@tabler/icons-react";
import React, { ReactElement } from "react";

type Menu = {
  name: string;
  path: string;
  status?: string;
  available?: boolean;
};

type Socials = {
  name: string;
  path: string;
  icon: ReactElement;
  variant: any;
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const menu: Menu[] = [
    { name: "Shorten", path: "/", available: true },
    {
      name: "Analytics",
      path: "/analytics",
      status: "coming soon",
      available: false,
    },
  ];
  const socials: Socials[] = [
    {
      name: "Github",
      path: "https://github.com/sanmihq/ziplink",
      icon: <IconBrandGithub className="h-5 w-5" />,
      variant: "solid",
    },
    {
      name: "Twitter",
      path: "https://twitter.com/sanmi_hq",
      icon: <IconBrandX className="h-5 w-5" />,
      variant: "bordered",
    },
  ];
  return (
    <Navbar isBordered onMenuOpenChange={setIsMenuOpen}>
      {/* DESKTOP NAV */}
      <NavbarContent justify="center">
        <NavbarBrand className="text-md font-semibold">Ziplink</NavbarBrand>
      </NavbarContent>
      <NavbarContent
        justify="center"
        className="hidden flex-1 gap-6 md:flex lg:gap-8"
      >
        {menu.map((item, index) => (
          <NavbarItem
            key={index}
            className={`text-sm font-normal ${pathname.startsWith(item.path) && "font-medium"}`}
          >
            {item.available ? (
              <Link href={item.path}>{item.name}</Link>
            ) : (
              <Link href={item.path}>
                {item.name}
                <Chip size="sm" color="secondary" className="ml-2">
                  {item.status}
                </Chip>
              </Link>
            )}
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="center" className="hidden md:flex">
        {socials.map((social, index) => (
          <Button
            key={index}
            as={NextUILink}
            isExternal
            href={social.path}
            color="secondary"
            variant={social.variant}
            size="sm"
            startContent={social.icon}
          >
            {social.name}
          </Button>
        ))}
      </NavbarContent>

      {/* MOBILE NAV */}
      <NavbarMenu>
        {menu.map((item, index) => (
          <NavbarMenuItem
            key={index}
            className={`text-sm font-normal ${pathname.startsWith(item.path) && "font-medium"} ${index === socials.length - 1 && "mb-6"}`}
          >
            {item.available ? (
              <Link href={item.path}>{item.name}</Link>
            ) : (
              <Link href={item.path}>
                {item.name}
                <Chip size="sm" color="secondary" className="ml-2">
                  {item.status}
                </Chip>
              </Link>
            )}
          </NavbarMenuItem>
        ))}
        {socials.map((social, index) => (
          <Button
            key={index}
            as={NextUILink}
            isExternal
            href={social.path}
            color="secondary"
            variant={social.variant}
            size="sm"
            startContent={social.icon}
          >
            {social.name}
          </Button>
        ))}
      </NavbarMenu>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="md:hidden"
      />
    </Navbar>
  );
}
