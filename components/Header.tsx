import Image from "next/image";
import Link from "next/link";
import { GitHubButton } from "./Buttons";

const Header = () => {
  return (
    <header className="max-w-4xl w-full mx-auto items-center">
      <div className="flex justify-around items-center border-b p-4">
        <h1 className="md:text-4xl text-2xl">Caption for Picture Generator</h1>
        <GitHubButton />
      </div>
    </header>
  );
};

export default Header;
