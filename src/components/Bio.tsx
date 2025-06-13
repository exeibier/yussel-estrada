import React from 'react';
import Image from "next/image"

const BioSection = () => {
  return (
    <section id="bio" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-8">BIO</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. At quae unde laudantium distinctio ea vero ducimus exercitationem porro eos necessitatibus reprehenderit, corrupti non itaque, quis nesciunt nemo! Et, unde dolores?
              </p>
              <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. At quae unde laudantium distinctio ea vero ducimus exercitationem porro eos necessitatibus reprehenderit, corrupti non itaque, quis nesciunt nemo! Et, unde dolores?

              </p>
              <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. At quae unde laudantium distinctio ea vero ducimus exercitationem porro eos necessitatibus reprehenderit, corrupti non itaque, quis nesciunt nemo! Et, unde dolores?

              </p>
              <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. At quae unde laudantium distinctio ea vero ducimus exercitationem porro eos necessitatibus reprehenderit, corrupti non itaque, quis nesciunt nemo! Et, unde dolores?

              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                <Image
                    src="/work/placeholder.svg"
                    alt="Yussel Estrada"
                    fill
                    className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;