"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import { navigationMenuTriggerStyle } from "../../ui/navigation-menu";
import Link from "next/link";

const Navbar = () => {
  return (
    <NavigationMenu className='hidden lg:flex'>
      <NavigationMenuList className='flex'>
        <NavigationMenuItem>
          <Link href='/female' legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Female
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href='/male' legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Male
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href='/kids' legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Kids
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href='/allproducts' legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              All Products
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
