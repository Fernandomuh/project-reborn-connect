import { Calendar, MapPin, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const upcomingEvents = [
  {
    title: "Solana Builders Meetup SP",
    date: "15 Fev 2025",
    location: "São Paulo, SP",
    type: "Meetup",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop",
    lumaUrl: "https://lu.ma/superteambrasil",
  },
  {
    title: "Hackathon Superteam Brasil",
    date: "20-22 Mar 2025",
    location: "Rio de Janeiro, RJ",
    type: "Hackathon",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=250&fit=crop",
    lumaUrl: "https://lu.ma/superteambrasil",
  },
  {
    title: "Web3 Workshop: DeFi Basics",
    date: "05 Abr 2025",
    location: "Online",
    type: "Workshop",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&h=250&fit=crop",
    lumaUrl: "https://lu.ma/superteambrasil",
  },
];

const pastHighlights = [
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=200&h=200&fit=crop",
];

const EventsSection = () => {
  return (
    <section id="events" className="py-24 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brazil-green/15 rounded-full blur-[80px]" />
        {/* Diagonal lines pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.12]" preserveAspectRatio="none">
          <defs>
            <pattern id="eventsDiagonals" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M-10,10 l20,-20 M0,40 l40,-40 M30,50 l20,-20" stroke="currentColor" strokeWidth="1" className="text-primary" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#eventsDiagonals)" />
        </svg>
        {/* Decorative corner elements */}
        <div className="absolute top-8 left-8 w-24 h-24 border border-primary/15 rotate-45" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border border-brazil-yellow/15 rotate-12" />
        <div className="absolute top-1/2 right-12 w-8 h-8 rounded-full border border-brazil-blue/15" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Eventos
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
              Próximos eventos
            </h2>
          </div>
          <a
            href="https://lu.ma/superteambrasil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="glass" className="mt-4 sm:mt-0 group">
              Ver todos os eventos
              <ExternalLink className="w-4 h-4" />
            </Button>
          </a>
        </div>

        {/* Upcoming Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {upcomingEvents.map((event) => (
            <a
              key={event.title}
              href={event.lumaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card overflow-hidden hover-lift cursor-pointer block"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-primary/90 text-primary-foreground">
                  {event.type}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Past Events Gallery */}
        <div>
          <h3 className="font-display text-2xl font-bold mb-6">
            Galeria de eventos anteriores
          </h3>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {pastHighlights.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 h-48 rounded-2xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Event ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
            <div className="flex-shrink-0 w-48 h-48 rounded-2xl glass-card flex items-center justify-center group cursor-pointer hover-lift">
              <div className="text-center">
                <ArrowRight className="w-8 h-8 mx-auto mb-2 text-primary group-hover:translate-x-1 transition-transform" />
                <span className="text-sm font-medium text-muted-foreground">Ver mais</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
