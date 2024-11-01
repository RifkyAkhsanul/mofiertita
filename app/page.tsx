import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSlider from '../components/HeroSlider';

const HomePage: React.FC = () => {
  return (
    <div className="w-full bg-white">
      <Header />

      <main className="mt-15">
      <HeroSlider />
      {/* Produk Kami Section */}
      <section className="text-center mt-10 mb-16">
        <h2 className="text-3xl font-bold text-primary mb-10">Produk Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="relative overflow-hidden group">
            <img 
              src="Ring.png" 
              alt="Product 1" 
              className="w-full md:w-3/4 h-auto mx-auto object-cover" 
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 md:w-3/4 mx-auto flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-xl font-semibold">Larasati Ring</span>
            </div>
          </div>
          {/* Card 2 */}
          <div className="relative overflow-hidden group">
            <img 
              src="Neklace.png" 
              alt="Product 2" 
              className="w-full md:w-3/4 h-auto mx-auto object-cover" 
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 md:w-3/4 mx-auto flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-xl font-semibold">Larasati Necklace</span>
            </div>
          </div>
          {/* Card 3 */}
          <div className="relative overflow-hidden group">
            <img 
              src="Bracelet.png" 
              alt="Product 3" 
              className="w-full md:w-3/4 h-auto mx-auto object-cover" 
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 md:w-3/4 mx-auto flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-xl font-semibold">Larasati Bracelet</span>
            </div>
          </div>
        </div>
        <Link href="/catalog">
          <button className="px-4 py-2 mt-6 border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition">
            LIHAT SEMUA
          </button>
        </Link>
      </section>


      <section className="text-center mt-16 mb-20">
        <h2 className="text-3xl font-bold text-primary mb-10">Artikel</h2>
        <div className="inline-grid justify-items-center grid-cols-1 md:grid-cols-2 gap-32 h-auto mx-20">
          {/* Article 1 */}
          <div className="relative justify-items-center group overflow-hidden">
            <img 
              src="Artikel1.png" 
              alt="Artikel 1" 
              className="w-auto h-auto md:pb-10 md:pr-20 object-cover" 
            />
            <div className="absolute md:w-1/2 justify-self-end bottom-0 left-0 right-0 bg-primary p-6 text-white">
              <p className="text-lg font-semibold mb-4">
                Mofier Berpartisipasi di ITB Integrated Career Days 2024: Perhiasan Daur Ulang Berbasis Budaya yang Menginspirasi
              </p>
              <a href="/artikel1" className="inline-block px-4 py-2 bg-white text-primary font-semibold hover:bg-secondary hover:text-white transition">
                SELENGKAPNYA
              </a>
            </div>
          </div>
          
          {/* Article 2 */}
          <div className="relative justify-items-center group overflow-hidden">
            <img 
              src="Artikel2.png" 
              alt="Artikel 2" 
              className="w-auto h-auto md:pb-10 md:pr-20 object-cover" 
            />
            <div className="absolute md:w-1/2 justify-self-end bottom-0 left-0 right-0 bg-primary p-6 text-white">
              <p className="text-lg font-semibold mb-4">
                Kolaborasi Mofier dan Superkids: Edukasi Pengolahan Sampah Plastik di SuperKids Earth Project
              </p>
              <a href="/artikel2" className="inline-block px-4 py-2 bg-white text-primary font-semibold hover:bg-secondary hover:text-white transition">
                SELENGKAPNYA
              </a>
            </div>
          </div>
        </div>
      </section>




      {/* Galeri Section */}
      <section className="relative text-center py-16">
          <h2 className="text-primary text-3xl font-semibold mb-6">Galeri</h2>
          
          
          {/* Grid Gambar Galeri */}
          <div className="flex justify-center pl-40 md:pl-40 pr-40 md:pr-40">
            <img src="Galeri.png" alt="Contact Image 1" className="w-full h-full" />
            
          </div>
          
        </section>
      <Footer />
      </main>
    </div>
  );
};
export default HomePage;
