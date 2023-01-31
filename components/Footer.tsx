const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="max-w-4xl flex flex-row mx-auto w-full my-8">
      <span className="md:text-sm">© {currentYear}.</span>
    </footer>
  );
};

export default Footer;
