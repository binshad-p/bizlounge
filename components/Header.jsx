// "use client";
// import React from "react";
// import {
//   Navbar,
//   NavbarBrand,
//   NavbarContent,
//   NavbarItem,
//   NavbarMenuToggle,
//   NavbarMenu,
//   NavbarMenuItem,
//   Link,
//   Button,
//   Divider,
// } from "@nextui-org/react";
// import Image from "next/image";
// import { Facebook, Instagram, logoo, Whatsapp, Youtube } from "@/assets";
// import { usePathname } from "next/navigation";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//   const pathname = usePathname();

//   const menuItems = [
//     {
//       text: "Home",
//       link: "/",
//     },
//     {
//       text: "AI Career Test",
//       link: "https://uslot.ai/",
//     },
//     {
//       text: "Courses",
//       link: "/courses",
//     },
//   ];
//   return (
//     <Navbar
//       height="5rem"
//       shouldHideOnScroll
//       classNames={{
//         base: "p-0",
//         wrapper: "p-0",
//       }}
//       className="max-w-[1536px] 2xl:max-w-[2600px] flex justify-center mx-auto shadow-xl z-50"
//     >
//       <NavbarContent className="sm:hidden pl-5" justify="start">
//         <NavbarMenuToggle />
//       </NavbarContent>

//       <NavbarContent
//         className=" pr-3 overflow-hidden max-sm:!justify-end"
//         justify="start"
//       >
//         <Link href="/">
//           <NavbarBrand className="">
//             {/* Uslot */}
//             {/* <Image src={logoo} width={100} height={100} alt="logo" /> */}
//           </NavbarBrand>
//         </Link>
//       </NavbarContent>

//       <NavbarContent className="hidden sm:flex gap-4" justify="center">
//         <NavbarItem isActive={pathname === "/"}>
//           <Link
//             color="foreground"
//             href="/"
//             className={`${pathname === "/" ? "text-primary" : ""}`}
//           >
//             Home
//           </Link>
//         </NavbarItem>
//         <NavbarItem isActive={false}>
//           <Link
//             href="https://uslot.ai/"
//             target="_blank"
//             className="!text-black"
//           >
//             AI Career Test
//           </Link>
//         </NavbarItem>
//         <NavbarItem isActive={pathname?.startsWith("/courses")}>
//           <Link
//             color="foreground"
//             href="/courses"
//             className={`${
//               pathname?.startsWith("/courses") ? "text-primary" : ""
//             }`}
//           >
//             Courses
//           </Link>
//         </NavbarItem>
//       </NavbarContent>

//       <NavbarContent justify="end" className="pr-4 max-sm:hidden">
//         <NavbarItem>
//           <Button
//             as={Link}
//             href="/contact"
//             variant="solid"
//           >
//             Contact Us
//           </Button>
//         </NavbarItem>
//       </NavbarContent>

//       <NavbarMenu className="w-full flex flex-col items-center py-10 gap-10">
//         {menuItems.map((item, index) => (
//           <NavbarMenuItem key={`${item}-${index}`}>
//             <Link
//               className="w-full text-black"
//               // color={
//               //   index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
//               // }
//               href={item.link}
//               size="lg"
//             >
//               {item.text}
//             </Link>
//           </NavbarMenuItem>
//         ))}

//         <Button
//           as={Link}
//           href="/contact"
//           variant="solid"
//           className={`${pathname === "/contact" ? "text-primary" : ""}`}
//         >
//           Contact Us
//         </Button>
//         <Divider/>
//         {/* <Image src={logoo} width={70} height={70} alt="logo" /> */}
//         {/* <NavbarMenuItem className="flex gap-4">
//           <Image src={Whatsapp} className="w-7 h-7"/>
//           <Image src={Instagram} className="w-7 h-7"/>
//           <Image src={Youtube} className="w-7 h-7"/>
//           <Image src={Facebook} className="w-7 h-7"/>
//         </NavbarMenuItem> */}
//       </NavbarMenu>
//     </Navbar>
//   );
// };

// export default Header;
"use client";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { logo, logo_blue } from "@/assets";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  const pathname = usePathname();

  const menuItems = [
    { text: "Home", link: "/" },
    { text: "About us", link: "/about" },
    { text: "Free Zone License", link: "/free-zone" },
    { text: "Mainland License", link: "/mainland" },
    { text: "Offshore License", link: "/offshore" },
    { text: "Services", link: "/services" },
    { text: "Contact us", link: "/contact" },
  ];

  // Function to handle scroll changes
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 250) {
      setColor(true); // Set color to true if scroll is >= 150
    } else {
      setColor(false); // Reset color to false
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor); // Attach scroll event listener

    return () => {
      window.removeEventListener("scroll", changeColor); // Cleanup on unmount
    };
  }, []);

  return (
    <nav
      className={`${
        color
          ? "bg-white text-black"
          : pathname !== "/"
          ? "bg-white text-black"
          : "bg-[#1F2437B2] text-white"
      } px-[100px] py-8 z-50 w-full font-medium fixed top-0 transition-colors duration-300 max-sm:px-[2rem] `}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={logo}
            width={200}
            height={200}
            alt="logo"
            className={`${!color && pathname === "/" ? "block" : "hidden"} `}
          />
          <Image
            src={logo_blue}
            width={200}
            height={200}
            alt="logo"
            className={`${color || pathname !== "/" ? "block" : "hidden"}`}
          />
        </Link>
        <div className="hidden md:flex space-x-10 ">
          {menuItems.slice(0, 2).map((item) => (
            <Link
              key={item.text}
              href={item.link}
              className={`${
                pathname === item.link ? "text-primary font-medium" : ""
              } hover:text-blue-300`}
            >
              {item.text}
            </Link>
          ))}
          <div className="relative group">
            <button className="flex items-center hover:text-blue-300">
              Business Setup <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 text-black">
              {menuItems.slice(2, 5).map((item) => (
                <Link
                  key={item.text}
                  href={item.link}
                  className={`block px-4 py-2 text-sm ${
                    pathname === item.link
                      ? "bg-gray-200 font-bold"
                      : "text-gray-700"
                  } hover:bg-gray-100`}
                >
                  {item.text}
                </Link>
              ))}
            </div>
          </div>
          <Link
            href="/services"
            className={`${
              pathname === "/services" ? "text-primary font-medium" : ""
            } hover:text-blue-300`}
          >
            Services
          </Link>
        </div>
        <Link
          href="/contact"
          className={`hidden md:inline-flex  px-6 py-3 border rounded-3xl text-sm font-bold ${
            pathname === "/contact"
              ? "text-primary border-primary"
              : "" || pathname !== "/"
              ? "border border-primary text-primary"
              : ""
          }`}
        >
          Contact Us{" "}
        </Link>
        <div className="md:hidden">
          <Sheet className="bg-white">
            <SheetTrigger>
              {" "}
              <svg
                className={`${
                  color || pathname !== "/" ? "text-black" : "text-white"
                } h-6 w-6`}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </SheetTrigger>
            <SheetContent className="flex flex-col items-center gap-4 justify-center">
  <SheetHeader>
    <SheetTitle><Image
            src={logo_blue}
            width={200}
            height={200}
            alt="logo"
            
          /></SheetTitle>
  </SheetHeader>

  {menuItems?.map((item) => (
    <SheetClose asChild key={item.text}>
      <Link
        href={item.link}
        className={`block px-4 py-2 text-sm ${
          pathname === item.link
            ? "bg-gray-200 font-bold text-primary"
            : "text-gray-700"
        } hover:bg-gray-100`}
      >
        {item.text}
      </Link>
    </SheetClose>
  ))}

 
</SheetContent>

          </Sheet>
        </div>
      </div>
    </nav>
  );
}
