import React from 'react';

const CategorySection = ({categories, selectedCategory, onSelectCategory}) => {
    return (
        <div className="w-64 bg-gray-800 p-4 rounded-lg">
      <h2 className="text-xl font-bold text-amber-400 mb-4">All Category</h2>
      <ul className="space-y-2">
         {categories.map((category) => (
            <li key={category.category_id}>
                <button onClick={() => onSelectCategory(category.category_id)} 
                    className={`w-full text-left px-3 py-2 rounded transition-colors
                     ${selectedCategory === category.category_id ?
                      "bg-amber-500 text-gray-900 font-semibold" :
                        "hover:bg-gray-700 text-gray-300"}`}>
                    {category.category_name}
                </button>
            </li>
         ))}
      </ul>
    </div>
    );
};

export default CategorySection;