import React from 'react';

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="bg-teal-200 shadow-md rounded-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105">
      <img
        src={pokemon.image}
        alt={pokemon.name}
        className="w-20 h-20 mb-4"
      />
      <h2 className="text-lg font-bold text-gray-700 capitalize">{pokemon.name}</h2>
    </div>
  );
};

export default PokemonCard;
