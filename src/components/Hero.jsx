export default function Hero() {
  return (
    <section
        id="hero"
        className="relative bg-white py-16 px-6 md:px-12 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/images/bg-pattern.png')] bg-cover opacity-10 pointer-events-none" />
        <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto">
          <div className="md:w-1/2">
            <h2 className="text-gray-800 text-lg font-medium mb-2">
              Kuliner Nusantara Terlezat
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Rasakan Lezatnya <br className="hidden md:block" />
              Makanan <span className="text-green-500">Sedap</span>
            </h1>
            <p className="text-gray-600 text-base mb-6 max-w-md">
              Nikmati berbagai pilihan masakan khas Indonesia yang disiapkan
              dengan bahan berkualitas dan rasa otentik.
            </p>
            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                <img src="/img/google.png" alt="Google" className="w-5 h-5" />
                <span className="text-yellow-500 font-semibold">4.5</span>
                <span className="text-sm text-gray-600">Rating Google</span>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="/img/linkedin.png"
                  alt="LinkedIn"
                  className="w-5 h-5"
                />
                <span className="text-yellow-500 font-semibold">4.7</span>
                <span className="text-sm text-gray-600">Rating LinkedIn</span>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transition">
                Lihat Menu
              </button>
              <button className="bg-sky-500 text-white px-6 py-3 rounded-lg shadow hover:bg-sky-600 transition">
                Hubungi Kami
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
            <img
              src="/img/woman.jpg"
              alt="Hero Person"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </section>
  );
}
