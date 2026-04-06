import { FiSearch } from "react-icons/fi";

export default function SearchInput({
  placeholder,
  width = "w-full",
  height = "h-10 sm:h-11",
  className = "",
  iconColor = "text-gray-400",
  inputClass = "",
}) {
  return (
    <div className={`relative ${width} ${height} ${className} max-w-full`}>
      <FiSearch
        className={`absolute left-3 top-1/2 -translate-y-1/2 ${iconColor}`}
        size={16}
      />
      <input
        placeholder={placeholder}
        className={`w-full h-full pl-10 pr-4 rounded-lg text-xs sm:text-sm outline-none ${inputClass}`}
      />
    </div>
  );
}
