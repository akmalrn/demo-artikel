import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission would be handled here
    alert('Terima kasih telah menghubungi kami! Pesan Anda telah kami terima.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Hubungi Kami</h1>
          <p className="text-xl text-gray-600">
            Kami ingin mendengar dari Anda. Jika Anda memiliki pertanyaan, saran, atau ingin berkolaborasi dengan kami, silakan hubungi kami melalui formulir di bawah ini.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Address */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Alamat</h3>
                <p className="text-gray-600">
                  Jl. Merdeka No. 123<br />
                  Jakarta Pusat, 12345<br />
                  Indonesia
                </p>
              </div>

              {/* Phone */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Telepon</h3>
                <p className="text-gray-600">
                  <a href="tel:+621234567890" className="text-blue-600 hover:text-blue-700">
                    +62 (021) 234-567-890
                  </a>
                </p>
              </div>

              {/* Email */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Email</h3>
                <p className="text-gray-600">
                  <a href="mailto:info@portalberita.id" className="text-blue-600 hover:text-blue-700">
                    info@portalberita.id
                  </a>
                </p>
                <p className="text-gray-600 mt-2">
                  <a href="mailto:press@portalberita.id" className="text-blue-600 hover:text-blue-700">
                    press@portalberita.id
                  </a>
                </p>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Jam Kerja</h3>
                <div className="text-gray-600 text-sm">
                  <p>Senin - Jumat: 08:00 - 17:00</p>
                  <p>Sabtu: 10:00 - 15:00</p>
                  <p>Minggu: Tutup</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg p-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan Kami</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      placeholder="Masukkan nama lengkap Anda"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      placeholder="Masukkan email Anda"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                      Subjek
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all bg-white"
                    >
                      <option value="">Pilih subjek...</option>
                      <option value="advertising">Periklanan</option>
                      <option value="partnership">Kemitraan</option>
                      <option value="tips">Tip / Saran</option>
                      <option value="complaint">Keluhan</option>
                      <option value="other">Lainnya</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                      Pesan
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                      placeholder="Tuliskan pesan Anda di sini..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-semibold transition-colors"
                  >
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Pertanyaan yang Sering Diajukan</h2>
          <div className="space-y-6">
            {[
              {
                q: 'Bagaimana cara menghubungi redaksi?',
                a: 'Anda dapat menghubungi redaksi kami melalui email press@portalberita.id atau mengisi formulir kontak di halaman ini.',
              },
              {
                q: 'Apakah kami menerima tips dari pembaca?',
                a: 'Ya, kami sangat menghargai tips dan saran dari pembaca kami. Silakan hubungi kami melalui email atau formulir kontak dengan informasi lengkap.',
              },
              {
                q: 'Bagaimana cara mengajukan kerja sama atau iklan?',
                a: 'Untuk kerja sama dan iklan, silakan hubungi tim bisnis kami di info@portalberita.id dengan detail proyek Anda.',
              },
              {
                q: 'Berapa lama waktu respons kami?',
                a: 'Kami berusaha merespons setiap pesan dalam waktu 24 jam kerja. Untuk pertanyaan mendesak, silakan telepon kami langsung.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="bg-gray-100 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Lokasi Kami</h2>
          <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
            <p className="text-gray-700 font-semibold text-lg">Peta Interaktif Akan Ditampilkan Di Sini</p>
          </div>
        </div>
      </section>
    </>
  );
}
