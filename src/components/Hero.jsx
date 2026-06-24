import React from 'react';

function Hero() {
  return (
    <section className="bg-[#02488f] h-1/2">
      <div className="pt-30 px-10 md:pt-30 md:pl-30">
        <h1 className="text-white text-xl text-center md:text-left md:text-3xl font-bold mb-1">
          Welcome to The <span className="text-[#008081]">Broom</span>App
        </h1>
        <p className="text-white text-center md:text-left">
          Platform instantly connects individuals in need of cleaning <br />{' '}
          services with trusted, thoroughly vetted providers.
        </p>
      </div>
    </section>
  );
}

export default Hero;
