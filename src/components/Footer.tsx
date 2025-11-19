const Footer = () => {
  return (
    <footer className="bg-retro-brown text-retro-cream py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-2xl font-pacifico mb-2">Alex Bil</p>
        <p className="text-sm opacity-80">Bilar med stil sedan 1976</p>
        <div className="mt-4 flex justify-center gap-2">
          <div className="w-12 h-1 bg-primary rounded-full"></div>
          <div className="w-12 h-1 bg-secondary rounded-full"></div>
          <div className="w-12 h-1 bg-primary rounded-full"></div>
        </div>
        <p className="text-xs mt-4 opacity-60">© {new Date().getFullYear()} Alex Bil. Med glimten i ögat.</p>
      </div>
    </footer>
  );
};

export default Footer;
