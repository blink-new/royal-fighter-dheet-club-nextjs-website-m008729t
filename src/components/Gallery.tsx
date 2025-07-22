import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      alt: 'Arm Wrestling Training Session',
      category: 'Training'
    },
    {
      src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      alt: 'Championship Competition',
      category: 'Competition'
    },
    {
      src: 'https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      alt: 'Academy Facilities',
      category: 'Facilities'
    },
    {
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      alt: 'Student Achievement',
      category: 'Achievement'
    },
    {
      src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      alt: 'Group Training',
      category: 'Training'
    },
    {
      src: 'https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      alt: 'Pro Panja League',
      category: 'Competition'
    }
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="stagger-item text-4xl md:text-5xl font-bold text-white mb-6">
            Training{' '}
            <span className="gradient-text">Gallery</span>
          </h2>
          <p className="stagger-item text-gray-300 text-lg max-w-2xl mx-auto">
            Witness the intensity, dedication, and success stories from our academy. 
            From training sessions to championship victories.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="stagger-item relative group cursor-pointer overflow-hidden rounded-lg"
              onClick={() => openModal(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-sm font-semibold">{image.alt}</div>
                <div className="text-xs text-amber-500">{image.category}</div>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-500 transition-colors duration-300 rounded-lg" />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="stagger-item">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to Be Featured?
            </h3>
            <p className="text-gray-300 mb-6">
              Join our academy and become part of our success stories
            </p>
            <button 
              onClick={() => window.open('https://www.instagram.com/royal_fighter_dheet-club', '_blank')}
              className="btn-primary px-8 py-3 rounded-full text-white font-semibold magnetic"
            >
              Follow Our Journey
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="gallery-modal open">
          <div className="relative max-w-4xl max-h-full p-4">
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
            >
              <X size={24} />
            </button>

            {/* Navigation */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 text-white">
              <div className="text-lg font-semibold">{images[selectedImage].alt}</div>
              <div className="text-sm text-amber-500">{images[selectedImage].category}</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;