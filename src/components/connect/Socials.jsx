import { ICONS_MAP } from "../../data/enums";

export default function Socials({ socialMedia }) {
  const handleIcon = (name) => {
    const IconComponent = ICONS_MAP[name];
    return <IconComponent />;
  };

  return (
    <ul className="flex items-center justify-center gap-4 md:gap-6">
      {socialMedia.map((item, i) => (
        <li key={i} className="group relative">
          <a 
            href={item.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-dark-800/50 rounded-full border border-dark-700 text-dark-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-dark-800 transition-all duration-300"
          >
            {handleIcon(item.name)}
          </a>
          {/* Tooltip */}
          <span className="group-hover:opacity-100 transition-opacity bg-dark-700 px-2 py-1 text-xs text-white rounded absolute left-1/2 -translate-x-1/2 -bottom-8 opacity-0 pointer-events-none whitespace-nowrap z-10">
            {item.name}
          </span>
        </li>
      ))}
    </ul>
  );
}
