import React, { useEffect, useState } from "react";
import { Link } from "wouter";
import { 
  CalendarDays, 
  Smartphone, 
  Wand2, 
  Mail, 
  ArrowRight,
  CheckCircle2,
  Users,
  Camera,
  MessageCircle,
  Inbox,
  Sparkles,
  ShieldCheck,
  ChevronRight,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Intersection observer hook for reveal animations
function useReveal() {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref]);

  return [setRef, isVisible] as const;
}

function Reveal({ children, className, delay = 0, direction = "up" }: { children: React.ReactNode, className?: string, delay?: number, direction?: "up" | "left" | "right" | "none" }) {
  const [ref, isVisible] = useReveal();
  
  let translateClass = "translate-y-8";
  if (direction === "left") translateClass = "-translate-x-8";
  if (direction === "right") translateClass = "translate-x-8";
  if (direction === "none") translateClass = "scale-95";

  return (
    <div 
      ref={ref}
      className={cn(
        "transition-all duration-1000 ease-out",
        isVisible ? "opacity-100 translate-y-0 translate-x-0 scale-100" : `opacity-0 ${translateClass}`,
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen selection:bg-primary/20 selection:text-primary bg-background">
      {/* Navigation */}
      <header className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border/40 py-4 shadow-sm" : "bg-transparent py-6"
      )}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-sm">
              <div className="w-3.5 h-3.5 rounded-full bg-background"></div>
            </div>
            <span className="font-serif text-2xl font-bold tracking-tight text-foreground">Circle</span>
          </div>
          <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors py-2">Features</a>
            <a href="#how-it-works" className="hover:text-foreground transition-colors py-2">How it works</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="mailto:hello@circlefamily.app">
              <Button className="rounded-full px-7 h-11 text-sm font-medium shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
                Get in Touch
              </Button>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background opacity-70"></div>
          <div className="absolute -top-[300px] -right-[300px] w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
          <div className="absolute top-[20%] -left-[200px] w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl pointer-events-none"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="max-w-2xl">
                <Reveal>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background border border-border shadow-sm text-sm font-medium mb-8 text-muted-foreground">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
                    </span>
                    Now inviting beta testers
                  </div>
                </Reveal>
                
                <Reveal delay={100}>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] tracking-tight mb-8">
                    Your family's schedule,<br className="hidden md:block"/>
                    <span className="text-primary italic font-serif font-normal pr-4">finally organized.</span>
                  </h1>
                </Reveal>
                
                <Reveal delay={200}>
                  <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed">
                    Turn the chaos of scattered information—school emails, WhatsApp messages, 
                    and flyers on the fridge—into a beautifully simple, shared family calendar.
                  </p>
                </Reveal>
                
                <Reveal delay={300}>
                  <div className="flex flex-col sm:flex-row items-center gap-5">
                    <a href="mailto:hello@circlefamily.app">
                      <Button size="lg" className="rounded-full h-14 px-8 text-base w-full sm:w-auto shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 group">
                        Get in touch
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </a>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full border-2 border-background bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">A</div>
                        <div className="w-8 h-8 rounded-full border-2 border-background bg-secondary/20 flex items-center justify-center text-[10px] font-bold text-secondary">M</div>
                        <div className="w-8 h-8 rounded-full border-2 border-background bg-accent/20 flex items-center justify-center text-[10px] font-bold text-accent-foreground">S</div>
                      </div>
                      <span>Join 500+ families</span>
                    </div>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={400} direction="left" className="relative hidden lg:block">
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-border/50 aspect-[4/3] transform rotate-2 hover:rotate-0 transition-transform duration-700">
                  <div className="w-full h-full bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/15"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                  
                  {/* Floating UI Element */}
                  <div className="absolute bottom-8 left-8 right-8 bg-background/95 backdrop-blur-md rounded-2xl p-5 border border-border shadow-xl transform -rotate-1">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-secondary" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-foreground">Extracted from Email</p>
                          <p className="text-xs text-muted-foreground">School Newsletter</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-serif font-bold text-lg">Science Fair Setup</h3>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <CalendarDays className="w-4 h-4" /> Tomorrow, 4:00 PM
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative blob */}
                <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Logos/Social Proof */}
        <section className="py-10 border-y border-border/30 bg-card/30">
          <div className="container mx-auto px-6">
            <p className="text-center text-sm font-bold tracking-widest uppercase text-muted-foreground mb-8">
              Built for real families, not productivity nerds
            </p>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 mix-blend-multiply">
              <div className="flex items-center gap-3 font-serif text-xl font-bold"><div className="w-6 h-6 rounded-full bg-secondary/30"></div> Calm Design</div>
              <div className="flex items-center gap-3 font-serif text-xl font-bold"><div className="w-6 h-6 rounded-full bg-primary/30"></div> Smart AI</div>
              <div className="flex items-center gap-3 font-serif text-xl font-bold"><div className="w-6 h-6 rounded-full bg-accent/30"></div> Private</div>
              <div className="flex items-center gap-3 font-serif text-xl font-bold"><div className="w-6 h-6 rounded-full bg-primary/20"></div> Shared Context</div>
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section id="features" className="py-32 bg-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/5 via-transparent to-transparent blur-3xl -z-10 rounded-full"></div>
          
          <div className="container mx-auto px-6">
            <Reveal>
              <div className="text-center max-w-3xl mx-auto mb-20">
                <h2 className="text-sm font-bold tracking-widest uppercase text-primary mb-3">The Magic</h2>
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Send it anything. We'll handle the rest.</h3>
                <p className="text-xl text-muted-foreground">
                  Circle acts as an intelligent assistant for your household. No manual data entry required.
                </p>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              <Reveal delay={100}>
                <div className="group rounded-3xl bg-card border border-border/60 p-10 h-full hover:shadow-2xl hover:border-primary/30 transition-all duration-500 flex flex-col relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <Wand2 className="w-32 h-32 text-primary" />
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                    <Sparkles className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="text-2xl font-serif font-bold mb-4 relative z-10">Magic Extraction</h4>
                  <p className="text-muted-foreground leading-relaxed flex-1 relative z-10">
                    State-of-the-art AI reads your messy inputs and perfectly formats them. It understands context, infers missing details, and learns your family's unique routines.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="group rounded-3xl bg-card border border-border/60 p-10 h-full hover:shadow-2xl hover:border-secondary/30 transition-all duration-500 flex flex-col relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <CheckCircle2 className="w-32 h-32 text-secondary" />
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                    <ShieldCheck className="w-7 h-7 text-secondary" />
                  </div>
                  <h4 className="text-2xl font-serif font-bold mb-4 relative z-10">Smart Triage</h4>
                  <p className="text-muted-foreground leading-relaxed flex-1 relative z-10">
                    Nothing hits your calendar without your say-so. Review extracted events in a clean, satisfying queue. Approve, edit, or dismiss with a single tap.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={300}>
                <div className="group rounded-3xl bg-card border border-border/60 p-10 h-full hover:shadow-2xl hover:border-accent/30 transition-all duration-500 flex flex-col relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <Users className="w-32 h-32 text-accent" />
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                    <Users className="w-7 h-7 text-accent" />
                  </div>
                  <h4 className="text-2xl font-serif font-bold mb-4 relative z-10">Shared Context</h4>
                  <p className="text-muted-foreground leading-relaxed flex-1 relative z-10">
                    Assign events to specific members. Filter views by person. Color-code intuitively. Finally, the "who needs to be where" question is answered automatically.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* How it Works - Split Section */}
        <section id="how-it-works" className="py-24 bg-card border-y border-border/40 overflow-hidden">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
              <Reveal direction="right" className="relative">
                <div className="relative rounded-[2rem] overflow-hidden shadow-xl border border-border/50 aspect-square md:aspect-[4/3] transform -rotate-2 hover:rotate-0 transition-transform duration-700">
                  <div className="w-full h-full bg-gradient-to-br from-accent/20 via-primary/10 to-secondary/15 flex items-center justify-center">
                    <div className="w-2/3 h-3/4 bg-background/60 rounded-xl border border-border/40 shadow-inner p-6 transform rotate-3 flex flex-col gap-3">
                      <div className="h-3 w-3/4 bg-foreground/10 rounded-full"></div>
                      <div className="h-3 w-1/2 bg-foreground/10 rounded-full"></div>
                      <div className="h-2 w-full bg-foreground/5 rounded-full mt-2"></div>
                      <div className="h-2 w-5/6 bg-foreground/5 rounded-full"></div>
                      <div className="h-2 w-2/3 bg-foreground/5 rounded-full"></div>
                      <div className="mt-auto flex items-center gap-2">
                        <CalendarDays className="w-4 h-4 text-primary/40" />
                        <div className="h-2 w-1/3 bg-primary/15 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/10"></div>
                  
                  {/* Scanning Animation Overlay */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/30 to-transparent -translate-y-full animate-[scan_3s_ease-in-out_infinite] border-b-2 border-primary shadow-[0_5px_15px_rgba(155,142,196,0.3)]"></div>
                  </div>
                </div>
              </Reveal>
              
              <Reveal>
                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Camera className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground leading-tight">
                    That crumpled flyer in the backpack? Just take a picture.
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    No need to manually type out dates, times, or addresses. Circle's vision AI reads the flyer, understands what it is, and drafts the perfect calendar event for you to approve.
                  </p>
                  <ul className="space-y-4 pt-4">
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-background border border-border flex items-center justify-center text-primary"><Check className="w-3 h-3" /></div>
                      <span className="font-medium">Extracts multi-day schedules</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-background border border-border flex items-center justify-center text-primary"><Check className="w-3 h-3" /></div>
                      <span className="font-medium">Understands "Next Tuesday at 4"</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-background border border-border flex items-center justify-center text-primary"><Check className="w-3 h-3" /></div>
                      <span className="font-medium">Grabs addresses and links</span>
                    </li>
                  </ul>
                </div>
              </Reveal>
            </div>

            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <Reveal className="order-2 lg:order-1">
                <div className="space-y-6">
                  <div className="flex gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-secondary" />
                    </div>
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Inbox className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground leading-tight">
                    Forward texts and emails. It just works.
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Got a WhatsApp message about the PTA meeting? Forward it to your Circle number. School newsletter with 5 important dates? Bcc your custom Circle email address. It all lands neatly in your triage queue.
                  </p>
                  
                  <div className="mt-8 p-6 bg-background rounded-2xl border border-border shadow-sm">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <Smartphone className="h-5 w-5 text-green-600" />
                      </div>
                      <div className="bg-muted/50 p-4 rounded-2xl rounded-tl-none text-sm text-foreground">
                        "Hey everyone, Sarah's party is moved to Sunday at 2pm at the park."
                      </div>
                    </div>
                    <div className="flex justify-center my-3">
                      <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90 md:rotate-0" />
                    </div>
                    <div className="bg-primary/5 rounded-xl p-4 border border-primary/20 flex justify-between items-center">
                      <div>
                        <span className="text-xs font-bold text-primary block mb-1">Extracted Event</span>
                        <span className="font-medium">Sarah's Party (Sun 2pm)</span>
                      </div>
                      <Button size="sm" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">Add</Button>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal direction="left" className="order-1 lg:order-2 relative">
                <div className="absolute inset-0 bg-gradient-to-bl from-secondary/10 to-transparent blur-3xl -z-10 rounded-full"></div>
                <div className="relative rounded-[2rem] overflow-hidden shadow-xl border border-border/50 aspect-square md:aspect-[4/3] transform rotate-1 hover:rotate-0 transition-transform duration-700">
                  <div className="w-full h-full bg-gradient-to-br from-secondary/20 via-accent/15 to-primary/15"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent"></div>
                  
                  <div className="absolute bottom-8 left-8 right-8 text-background">
                    <h4 className="font-serif text-2xl font-bold mb-2">More time for this.</h4>
                    <p className="text-background/80 text-sm">Less time managing schedules.</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative overflow-hidden bg-foreground text-background">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-foreground to-foreground opacity-50"></div>
          <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          
          <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
            <Reveal>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 leading-tight">
                Reclaim your peace of mind.
              </h2>
              <p className="text-xl md:text-2xl text-background/80 mb-12 max-w-2xl mx-auto font-light">
                Join the families who have stopped stressing about scheduling and started living in the moment.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <a href="mailto:hello@circlefamily.app">
                  <Button size="lg" className="rounded-full h-16 px-10 text-lg w-full sm:w-auto bg-background text-foreground hover:bg-background/90 shadow-xl transition-all hover:scale-105 group">
                    Get in touch
                    <Sparkles className="ml-2 h-5 w-5 text-primary group-hover:animate-pulse" />
                  </Button>
                </a>
              </div>
              <p className="mt-8 text-sm text-background/50">We'd love to hear from you.</p>
            </Reveal>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm opacity-90">
                  <div className="w-2 h-2 rounded-full bg-background"></div>
                </div>
                <span className="font-serif text-2xl font-bold tracking-tight text-foreground">Circle</span>
              </div>
              <p className="text-muted-foreground max-w-sm">
                Your family's schedule, finally organized. The intelligent assistant that turns chaos into calm.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-foreground mb-4">Product</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-primary transition-colors">How it works</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-foreground mb-4">Legal</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="text-sm text-muted-foreground">© {new Date().getFullYear()} Circle Family App. All rights reserved.</span>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
              <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
              <a href="mailto:hello@circlefamily.app" className="font-medium text-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                <Mail className="h-4 w-4 group-hover:text-primary transition-colors" />
                hello@circlefamily.app
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
