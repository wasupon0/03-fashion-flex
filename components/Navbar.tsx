import Image from "next/image";
import Link from "next/link";
import { CustomButton } from ".";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="FashionFlex Logo"
            priority
            width={218}
            height={18}
            className="w-[14rem] h-[2rem]"
          />
        </Link>
        {/* <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="text-primary-purple rounded-full bg-white min-w-[130px] shadow-md"
        /> */}
      </nav>
    </header>
  );
};
export default Navbar;
