import CountdownTimer from "@/components/CountdownTimer";
import EmailSignup from "@/components/EmailSignup";
import luxoraLogo from "@/assets/luxora-logo.jpg";

const Index = () => {
  return (
    <main className="min-h-screen flex flex-col" style={{ backgroundColor: '#fdfdfd' }}>
      {/* Header with Logo */}
      <header className="w-full pt-8 md:pt-12 px-4">
        <div className="max-w-6xl mx-auto flex justify-center">
          <img 
            src={luxoraLogo} 
            alt="Luxora Hotel Lodwar" 
            className="h-16 md:h-24 w-auto object-contain"
          />
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center space-y-12 md:space-y-16">
          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-playfair font-semibold text-primary leading-tight">
              Boutique Luxury at the
              <br />
              Gateway to Adventure
            </h1>
            <p className="text-lg md:text-xl text-secondary font-inter font-light tracking-wide">
              Opening soon in Lodwar.
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="py-8">
            <CountdownTimer />
          </div>

          {/* CTA Section */}
          <div className="space-y-6">
            <p className="text-base md:text-lg text-secondary font-inter font-light italic">
              Be first to know.
            </p>
            <EmailSignup />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm md:text-base text-secondary font-inter font-light tracking-wide">
            Luxora Hotel Lodwar — Where Comfort Meets Discovery
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
