import { Link } from 'react-router-dom';

export default function AboutPage() {
  const team = [
    {
      id: 1,
      name: 'Ahmad Riyanto',
      role: 'Chief Editor',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    },
    {
      id: 2,
      name: 'Siti Nurhaliza',
      role: 'Senior Journalist',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    },
    {
      id: 3,
      name: 'Bambang Suryanto',
      role: 'Senior Journalist',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    },
    {
      id: 4,
      name: 'Dr. Eka Putri',
      role: 'Health & Science Editor',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Tentang Kami</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Portal Berita Modern adalah sumber informasi terpercaya yang berdedikasi untuk memberikan berita berkualitas, analisis mendalam, dan perspektif yang seimbang kepada pembaca di seluruh Indonesia.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visi Kami</h3>
              <p className="text-gray-600 leading-relaxed">
                Menjadi portal berita digital terdepan di Indonesia yang dipercaya oleh jutaan pembaca sebagai sumber informasi akurat, objektif, dan berkelanjutan untuk membentuk masyarakat yang lebih terinformasi dan kritis.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Misi Kami</h3>
              <p className="text-gray-600 leading-relaxed">
                Menyediakan liputan berita yang komprehensif, analisis yang mendalam, dan konten berkualitas tinggi dengan standar jurnalisme profesional, sambil memanfaatkan teknologi terkini untuk menjangkau pembaca di seluruh nusantara.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Cerita Kami</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-6">
              Portal Berita Modern didirikan pada tahun 2020 dengan visi untuk menghadirkan platform berita digital yang modern, inovatif, dan dapat diandalkan. Kami memahami bahwa di era digital ini, masyarakat membutuhkan sumber informasi yang cepat, akurat, dan dapat dipercaya.
            </p>
            <p className="mb-6">
              Sejak awal, kami berkomitmen untuk menerapkan standar jurnalisme tertinggi, mempekerjakan para jurnalis berpengalaman, dan menggunakan teknologi terkini untuk memberikan pengalaman membaca yang terbaik kepada pembaca kami.
            </p>
            <p className="mb-6">
              Dengan pertumbuhan yang konsisten, kami telah menjangkau lebih dari 500,000 pembaca aktif dan menerbitkan lebih dari 1,000 artikel berkualitas. Tim kami yang dedicated terus bekerja keras untuk memastikan bahwa setiap konten yang kami publikasikan memenuhi standar kualitas tertinggi.
            </p>
            <p>
              Terima kasih telah menjadi bagian dari komunitas Portal Berita Modern. Kami akan terus berinovasi dan berkembang untuk memberikan yang terbaik bagi Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Nilai-Nilai Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '✓', title: 'Akurasi', desc: 'Kami memastikan setiap fakta diverifikasi dengan teliti' },
              { icon: '🤝', title: 'Integritas', desc: 'Kami menjunjung tinggi etika jurnalisme profesional' },
              { icon: '🎯', title: 'Independensi', desc: 'Kami memberikan laporan yang objektif dan tidak bias' },
              { icon: '🌟', title: 'Inovasi', desc: 'Kami terus mengembangkan cara baru untuk menyampaikan berita' },
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 text-center">
                <div className="text-3xl mb-3">{value.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Tim Kami</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map(member => (
              <div key={member.id} className="text-center bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Jadilah Bagian dari Komunitas Kami
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Berlangganan newsletter kami untuk mendapatkan berita terkini langsung ke inbox Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Masukkan email Anda"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="bg-white text-blue-900 px-6 py-3 rounded-lg hover:bg-gray-100 font-semibold transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
