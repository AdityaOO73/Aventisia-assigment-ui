import { UI_TEXT } from "../constants/ui";

export default function Card({ title, description, date }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5 hover:shadow-md transition w-full h-full">
      <div className="flex justify-between items-start gap-2">
        <h2 className="font-semibold text-gray-900 text-sm sm:text-base wrap-break-word">
          {title}
        </h2>
        <span className="text-gray-400 cursor-pointer shrink-0">⋮</span>
      </div>

      <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-relaxed wrap-break-word">
        {description}
      </p>

      <div className="border-t border-gray-200 mt-4 pt-3 text-[10px] sm:text-xs text-gray-400">
        {UI_TEXT.createdOn}: {date}
      </div>
    </div>
  );
}
