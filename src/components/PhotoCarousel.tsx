import { memo } from "react";

const communityPhotos = [
  {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=200&fit=crop",
    alt: "Evento da comunidade",
  },
  {
    src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=300&h=200&fit=crop",
    alt: "Hackathon Solana",
  },
  {
    src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=300&h=200&fit=crop",
    alt: "Workshop de desenvolvimento",
  },
  {
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=300&h=200&fit=crop",
    alt: "Meetup da comunidade",
  },
  {
    src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=300&h=200&fit=crop",
    alt: "Conferência Web3",
  },
  {
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=300&h=200&fit=crop",
    alt: "Networking event",
  },
  {
    src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=300&h=200&fit=crop",
    alt: "Tech conference",
  },
  {
    src: "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?w=300&h=200&fit=crop",
    alt: "Coding session",
  },
  {
    src: "https://images.unsplash.com/photo-1559223607-b4d0555ae227?w=300&h=200&fit=crop",
    alt: "Apresentação técnica",
  },
  {
    src: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=300&h=200&fit=crop",
    alt: "Workshop de código",
  },
  {
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=300&h=200&fit=crop",
    alt: "Equipe colaborando",
  },
  {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=300&h=200&fit=crop",
    alt: "Reunião de projeto",
  },
  {
    src: "https://images.unsplash.com/photo-1558403194-611308249627?w=300&h=200&fit=crop",
    alt: "Demo day",
  },
  {
    src: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=300&h=200&fit=crop",
    alt: "Palestra blockchain",
  },
  {
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=300&h=200&fit=crop",
    alt: "Conferência de tecnologia",
  },
  {
    src: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=300&h=200&fit=crop",
    alt: "Evento de networking",
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop",
    alt: "Workshop colaborativo",
  },
  {
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=200&fit=crop",
    alt: "Reunião de equipe",
  },
  {
    src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&h=200&fit=crop",
    alt: "Apresentação de projeto",
  },
  {
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=200&fit=crop",
    alt: "Sessão de brainstorming",
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=200&fit=crop",
    alt: "Equipe de desenvolvedores",
  },
  {
    src: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?w=300&h=200&fit=crop",
    alt: "Hackathon em grupo",
  },
  {
    src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=300&h=200&fit=crop",
    alt: "Grupo de estudos",
  },
  {
    src: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=300&h=200&fit=crop",
    alt: "Painel de discussão",
  },
  {
    src: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=300&h=200&fit=crop",
    alt: "Celebração da comunidade",
  },
  {
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=300&h=200&fit=crop",
    alt: "Reunião geral",
  },
  {
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=300&h=200&fit=crop",
    alt: "Aula técnica",
  },
  {
    src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=300&h=200&fit=crop",
    alt: "Summit blockchain",
  },
  {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=200&fit=crop",
    alt: "Desenvolvedores trabalhando",
  },
  {
    src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=300&h=200&fit=crop",
    alt: "Programação em equipe",
  },
];

const PhotoCarousel = memo(() => {
  // Duplicate photos for seamless infinite scroll
  const duplicatedPhotos = [...communityPhotos, ...communityPhotos];

  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* Gradient overlays for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Scrolling container */}
      <div
        className="flex gap-4 animate-scroll-left"
        style={{
          width: 'max-content',
        }}
      >
        {duplicatedPhotos.map((photo, index) => (
          <div
            key={`${photo.alt}-${index}`}
            className="flex-shrink-0 w-48 h-32 rounded-xl overflow-hidden glass-card group"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
});

PhotoCarousel.displayName = 'PhotoCarousel';

export default PhotoCarousel;
