import React from 'react';
import { motion } from 'framer-motion';
import { getAvailableTechIcons } from '../../data/techIcons';

interface TechIconsProps {
  showCategories?: boolean;
  maxIcons?: number;
}

export const TechIcons: React.FC<TechIconsProps> = ({
  showCategories = false,
  maxIcons
}) => {
  const icons = getAvailableTechIcons();
  const displayIcons = maxIcons ? icons.slice(0, maxIcons) : icons;

  const categoryColors = {
    primary: 'border-red-500',
    framework: 'border-blue-500',
    tool: 'border-green-500',
    database: 'border-purple-500'
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
        {displayIcons.map((icon, index) => (
          <motion.div
            key={icon.name}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: index * 0.1,
              duration: 0.3,
              type: "spring",
              stiffness: 200
            }}
            whileHover={{ scale: 1.05, y: -5 }}
            className={`flex flex-col items-center p-4 bg-gray-800 rounded-xl
                       hover:bg-gray-700 transition-all duration-300 group
                       border-2 border-transparent hover:${categoryColors[icon.category]}`}
          >
            <div className="w-16 h-16 mb-3 flex items-center justify-center">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/tech-icons/${icon.file}`}
                alt={icon.displayName}
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  // Fallback if image fails to load
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = `
                    <div class="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center">
                      <span class="text-gray-300 text-xs font-mono">${icon.name.slice(0, 3).toUpperCase()}</span>
                    </div>
                  `;
                }}
              />
            </div>

            <span className="text-sm text-gray-300 group-hover:text-white transition-colors font-medium">
              {icon.displayName}
            </span>

            {showCategories && (
              <span className={`text-xs mt-1 px-2 py-1 rounded-full bg-gray-700 text-gray-400`}>
                {icon.category}
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechIcons;