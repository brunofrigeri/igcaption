import { useTranslation } from "next-i18next";
import { GitHubButton } from "./Buttons";

const Header = () => {
  const { t } = useTranslation("header");

  return (
    <header className="max-w-4xl w-full mx-auto items-center">
      <div className="flex justify-around items-center border-b p-4">
        <h1 className="md:text-4xl text-2xl">{t("title")}</h1>
        <GitHubButton />
      </div>
    </header>
  );
};

export default Header;
