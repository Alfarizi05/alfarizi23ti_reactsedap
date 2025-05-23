import products from "../data/products";

export default function Produk() {
  return (
          <section id="produk" className="scroll-mt-20 p-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
          Menu Makanan
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow p-4 text-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="mt-2 font-semibold">{product.name}</h3>
              <p className="text-green-600 font-bold">
                Rp{product.price.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </section>
  );
}
