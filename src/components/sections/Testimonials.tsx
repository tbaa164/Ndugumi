import React from 'react';

const testimonials = [
  {
    content: "Ndugumi dafa soppi sama wàllu jot légumes yu sedd. Meññeef yi dañuy sedd ba léegi te jotali bi dafa am solo!",
    author: "Fatou Ndiaye",
    role: "Cliente",
    image: null,
    stars: 5,
    language: "wolof"
  },
  {
    content: "En tant que professionnel très occupé, je compte sur Ndugumi pour des légumes de qualité livrés directement chez moi. Leur service est toujours excellent.",
    author: "Mamadou Diop",
    role: "Client",
    image: null,
    stars: 4,
    language: "french"
  },
  {
    content: "Liggéey ak Ndugumi mayma wërsëg bu ma mën a doxal sama diir bi ma bëgg. Application bi dafa yomb lool!",
    author: "Awa Sarr",
    role: "Chauffeure",
    image: null,
    stars: 3,
    language: "wolof"
  },
  {
    content: "La qualité des légumes de Ndugumi est exceptionnelle. C'est comme avoir un marché de producteurs livré directement dans ma cuisine.",
    author: "Cheikh Ba",
    role: "Client",
    image: null,
    stars: 5,
    language: "french"
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="section bg-ndugumi-green-light bg-opacity-30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Ce que dit notre communauté</h2>
          <p className="section-subtitle">
            Découvrez les avis de nos clients et chauffeurs satisfaits sur leur expérience avec Ndugumi.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card p-8 hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-start mb-6">
                {/* No image/avatar displayed */}
                <div>
                  <h4 className="text-lg font-bold text-ndugumi-green-dark">{testimonial.author}</h4>
                  <p className="text-ndugumi-orange font-medium">{testimonial.role}</p>
                  {testimonial.language === "wolof" && (
                    <span className="text-xs bg-ndugumi-green bg-opacity-10 text-ndugumi-green-dark px-2 py-1 rounded-full mt-1 inline-block">Wolof</span>
                  )}
                </div>
              </div>
              <div className="relative">
                <svg className="absolute -top-6 -left-2 w-10 h-10 text-ndugumi-green opacity-20" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-2.2 0-4 1.8-4 4v10h10V12H8c0-1.1 0.9-2 2-2V8zm12 0c-2.2 0-4 1.8-4 4v10h10V12h-8c0-1.1 0.9-2 2-2V8z" />
                </svg>
                <p className="text-gray-700 relative z-10">
                  {testimonial.content}
                </p>
              </div>
              <div className="flex mt-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className={`w-5 h-5 ${star <= testimonial.stars ? 'text-yellow-500' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
