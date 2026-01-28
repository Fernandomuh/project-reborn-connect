import { Twitter, Heart, Repeat2, MessageCircle } from "lucide-react";

const tweets = [
  {
    author: "Superteam Brasil",
    handle: "@SuperteamBR",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    content: "Acabamos de lançar o maior hackathon de Solana no Brasil! 🚀 Inscrições abertas para construtores de todo o país. Prêmios incríveis aguardam! #SolanaBrasil",
    likes: 234,
    retweets: 89,
    replies: 45,
  },
  {
    author: "Solana Foundation",
    handle: "@SolanaFndn",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
    content: "The Brazilian Solana community is on fire! 🔥 Superteam Brasil is doing amazing work connecting builders across Latin America.",
    likes: 567,
    retweets: 123,
    replies: 78,
  },
  {
    author: "Maria Santos",
    handle: "@mariaweb3dev",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    content: "Graças ao suporte da @SuperteamBR consegui meu primeiro grant na Solana! A comunidade aqui é incrível e super acolhedora. 💚💛",
    likes: 189,
    retweets: 34,
    replies: 23,
  },
  {
    author: "Lucas Ferreira",
    handle: "@lucasbuilds",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: "Participei do último meetup da @SuperteamBR em São Paulo e foi transformador! Conheci desenvolvedores incríveis e já estamos colaborando em um novo projeto DeFi. 🚀",
    likes: 312,
    retweets: 56,
    replies: 42,
  },
  {
    author: "Ana Costa",
    handle: "@anacosta_sol",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    content: "O workshop de Rust da @SuperteamBR mudou minha carreira! Em 3 meses fui de iniciante a dev contribuindo em projetos open source. A qualidade do conteúdo é impressionante. ✨",
    likes: 445,
    retweets: 98,
    replies: 67,
  },
  {
    author: "Pedro Oliveira",
    handle: "@pedrochain",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    content: "Melhor decisão foi entrar na comunidade da @SuperteamBR. Networking de altíssimo nível, oportunidades de grants, e uma galera que realmente quer construir o futuro da web3 no Brasil! 🇧🇷",
    likes: 278,
    retweets: 71,
    replies: 38,
  },
  {
    author: "Juliana Mendes",
    handle: "@julianadev3",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    content: "Seis meses atrás eu nem sabia o que era blockchain. Hoje, graças à @SuperteamBR, estou liderando meu próprio projeto NFT. A mentoria aqui é de outro nível! 🌟",
    likes: 523,
    retweets: 112,
    replies: 89,
  },
  {
    author: "Rafael Lima",
    handle: "@rafalima_web3",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
    content: "O hackathon da @SuperteamBR foi insano! Minha equipe ganhou o primeiro lugar e agora estamos sendo incubados. Oportunidades reais para quem quer construir! 🏆",
    likes: 687,
    retweets: 145,
    replies: 92,
  },
  {
    author: "Camila Rodrigues",
    handle: "@camilacrypto",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    content: "A comunidade da @SuperteamBR é única. Todos se ajudam, compartilham conhecimento e celebram as vitórias juntos. É mais que uma comunidade, é uma família tech! 💜",
    likes: 398,
    retweets: 87,
    replies: 54,
  },
];

const TweetsSection = () => {
  return (
    <section id="community" className="py-24 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-[#1DA1F2]/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-brazil-green/15 rounded-full blur-[80px]" />
        {/* Wave pattern */}
        <svg className="absolute bottom-0 left-0 w-full h-40 opacity-[0.15]" preserveAspectRatio="none" viewBox="0 0 1200 120">
          <path d="M0,60 C200,120 400,0 600,60 C800,120 1000,0 1200,60 L1200,120 L0,120 Z" fill="currentColor" className="text-primary" />
        </svg>
        {/* Twitter bird decorative elements */}
        <div className="absolute top-16 left-16 w-16 h-16 rounded-full border border-[#1DA1F2]/15" />
        <div className="absolute top-20 left-20 w-8 h-8 rounded-full border border-[#1DA1F2]/20" />
        <div className="absolute bottom-32 right-20 w-20 h-20 rounded-full border border-primary/15" />
        <div className="absolute top-1/3 right-32 w-6 h-6 rotate-45 bg-[#1DA1F2]/10" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Comunidade
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            As últimas novidades da Superteam Brasil
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Impulsionado por criadores, amado pela comunidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tweets.map((tweet, index) => (
            <div
              key={index}
              className="glass-card p-6 hover-lift cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/20">
                    <img
                      src={tweet.avatar}
                      alt={tweet.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{tweet.author}</p>
                    <p className="text-sm text-muted-foreground">{tweet.handle}</p>
                  </div>
                </div>
                <Twitter className="w-5 h-5 text-[#1DA1F2]" />
              </div>

              <p className="text-foreground leading-relaxed mb-4">
                {tweet.content}
              </p>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2 hover:text-primary transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  <span>{tweet.replies}</span>
                </div>
                <div className="flex items-center gap-2 hover:text-brazil-green transition-colors">
                  <Repeat2 className="w-4 h-4" />
                  <span>{tweet.retweets}</span>
                </div>
                <div className="flex items-center gap-2 hover:text-destructive transition-colors">
                  <Heart className="w-4 h-4" />
                  <span>{tweet.likes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TweetsSection;
