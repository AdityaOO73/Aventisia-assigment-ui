export default function Button({ children, onClick, fullWidth }) {
  return (
    <button
      onClick={onClick}
      className={`bg-[#4F46E5] text-white px-4 py-2 rounded-lg hover:bg-[#4338CA] transition w-auto max-w-full text-sm sm:text-base ${
        fullWidth ? "w-full" : ""
      }`}
    >
      {children}
    </button>
  );
}
