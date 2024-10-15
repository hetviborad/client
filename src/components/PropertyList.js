import React from 'react';

const properties = [
  {
    id: 1,
    title: 'Cozy Apartment',
    description: 'A beautiful cozy apartment in the heart of the city.',
    price: 120,
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 2,
    title: 'Luxury Villa',
    description: 'A stunning luxury villa with a pool and garden.',
    price: 350,
    image: 'https://images.pexels.com/photos/5178060/pexels-photo-5178060.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  },
  {
    id: 3,
    title: 'Cozy Villa',
    description: 'A beautiful cozy villa in the heart of the city.',
    price: 180,
    image: 'https://images.pexels.com/photos/5361754/pexels-photo-5361754.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  },
  {
    id: 4,
    title: 'Golden House',
    description: 'A stunning golden house with a pool and garden.',
    price: 250,
    image: 'https://img.freepik.com/premium-photo/modern-house-exterior-ai-generated_1116642-261.jpg?size=626&ext=jpg&ga=GA1.1.1088399729.1706413748&semt=ais_hybrid',
  },
];

const PropertyList = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Property Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {properties.map(property => (
          <div key={property.id} className="border rounded-lg overflow-hidden shadow-md">
            <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-xl">{property.title}</h3>
              <p className="text-gray-700">{property.description}</p>
              <p className="text-blue-600 font-semibold">${property.price}/night</p>
              <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
