import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { toast } from "sonner"

const playWelcomeSound = () => {
  const AudioCtx = window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext;
  const audioContext = new AudioCtx();

  if (audioContext.state === "suspended") {
      audioContext.resume();
    }
  
  // Create a gentle chime sound
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
  oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
  oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2); // G5
  
  oscillator.type = "sine";
  
  gainNode.gain.setValueAtTime(0, audioContext.currentTime);
  gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.05);
  gainNode.gain.linearRampToValueAtTime(0.08, audioContext.currentTime + 0.15);
  gainNode.gain.linearRampToValueAtTime(0.05, audioContext.currentTime + 0.25);
  gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.5);
  
  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + 0.5);
};

const Index = () => {

  useEffect(() => {
    const hasSeenWelcome = sessionStorage.getItem("floreiamo-welcome");
    
    if (!hasSeenWelcome) {
      const timer = setTimeout(() => {
        
        toast("🌿 Bem-vindo(a) à Floreiamô!", {
          description: "Fique à vontade para explorar nossas plantas e artesanatos através do instagram. 💚",
          duration: 6000,
        });
        sessionStorage.setItem("floreiamo-welcome", "true");
        playWelcomeSound();
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
