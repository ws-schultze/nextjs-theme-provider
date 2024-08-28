import { ThemeBtn } from "@/components/ui/theme-btn";
import { MdOutlineWbSunny } from "react-icons/md";
import { BsMoonStars } from "react-icons/bs";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import Link from "next/link";
import PrimaryBtn from "@/components/ui/primary-btn";
import { IoArrowForward } from "react-icons/io5";

export default function Home() {
  return (
    <main className="flex min-h-screen gap-5 flex-col items-center justify-top p-24">
      <header className="flex justify-center w-full bg-colorBg1 top-0 absolute top p-5">
        A Somewhat Non-Trivial Demo of Custom Theming with Tailwind in Next.js
        Using Cookies and SSR to Avoid the Infamous Flash of Unstyled Content 😱
      </header>

      <ThemeBtn
        theme="light"
        icon={<MdOutlineWbSunny />}
      />
      <ThemeBtn
        theme="dark"
        icon={<BsMoonStars />}
      />
      <ThemeBtn
        theme="system"
        icon={<HiOutlineDesktopComputer />}
      />

      <p className="text-colorText1 bg-colorBg2 p-5">
        Refresh the page to check for a flash of unstyled content. There should
        not be one.
      </p>

      <p className="text-colorText1 bg-colorBg2 p-5">
        Set styles in <code className="bg-colorBg1 ">styles/theme.css</code> and
        extend the theme in{" "}
        <code className="bg-colorBg1">tailwind.config.css</code>
      </p>

      <p className="text-colorText1 bg-colorBg2 p-5">
        If all goes well, there should be no FOUC when reloading the page and
        the theme should also change with system preferences.
      </p>
      {/* <PrimaryBtn> */}
      <Link
        href={"/demo-route"}
        className="flex gap-3 items-center bg-green-900 p-2 rounded"
      >
        Go to demo route
        <IoArrowForward />
      </Link>
      {/* </PrimaryBtn> */}
    </main>
  );
}
