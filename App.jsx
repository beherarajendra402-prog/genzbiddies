export default function App() {
  const collections = [
    {
      title: "Luxury Couture",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
      description:
        "Elegant handcrafted outfits designed for premium fashion lovers.",
    },
    {
      title: "Gen Z Streetwear",
      image:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop",
      description:
        "Oversized silhouettes, baggy fits, and modern street fashion.",
    },
    {
      title: "Minimal Essentials",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
      description:
        "Clean aesthetics with timeless modern styling.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/70 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-400 via-white to-black shadow-xl flex items-center justify-center overflow-hidden border border-gray-700">
              <span className="text-3xl font-black text-black">G</span>
              <span className="text-3xl font-black text-pink-500 absolute right-2 bottom-1">
                B
              </span>
            </div>

            <div>
              <h1 className="text-2xl font-black tracking-[0.2em]">
                GENZ BIDDIES
              </h1>

              <p className="text-xs text-gray-400 tracking-[0.3em]">
                FASHION FOR THE NEW GENERATION
              </p>
            </div>
          </div>

          <a
            href="https://myntr.it/4bG7Zau"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-2xl bg-white text-black text-sm font-semibold hover:scale-105 transition-all"
          >
            Shop Now
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 text-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1600&auto=format&fit=crop"
            alt="Fashion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 max-w-5xl text-white pt-20">
          <p className="uppercase tracking-[0.4em] text-sm mb-6 text-gray-300">
            Premium Fashion Designing Studio
          </p>

          <h1 className="text-5xl md:text-8xl font-black leading-tight mb-8">
            GENZ BIDDIES
            <br />
            <span className="text-pink-400">
              Fashion That Defines Identity
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
            Modern streetwear, luxury styling, and premium fashion design
            crafted for the next generation.
          </p>

          <a
            href="https://myntr.it/4bG7Zau"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition-all shadow-2xl"
          >
            Explore Collection
          </a>
        </div>
      </section>

      {/* Collections */}
      <section className="py-24 px-6 md:px-16 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.4em] text-sm text-gray-400 mb-4">
              Featured Collections
            </p>

            <h2 className="text-5xl font-bold mb-6">
              GENZ BIDDIES Fashion
            </h2>

            <p className="max-w-2xl mx-auto text-lg text-gray-400">
              Explore premium Gen Z streetwear and luxury fashion collections.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {collections.map((item, index) => (
              <div
                key={index}
                className="bg-zinc-900 rounded-[2rem] overflow-hidden shadow-lg hover:-translate-y-3 transition-all duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[500px] object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-4">{item.title}</h3>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <a
                    href="https://myntr.it/4bG7Zau"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 rounded-xl bg-white text-black hover:scale-105 transition-all"
                  >
                    Shop Collection
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-10 px-6 text-center">
        <h3 className="text-2xl font-black tracking-[0.2em]">
          GENZ BIDDIES
        </h3>

        <p className="text-gray-400 mt-3">
          Premium fashion designing & modern streetwear.
        </p>
      </footer>
    </div>
  );
                }
