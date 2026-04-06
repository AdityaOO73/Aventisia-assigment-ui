import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import Button from "./common/Button";
import { UI_TEXT } from "./constants/ui";

export default function Modal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    vectorStore: "Qdrant",
    embeddingModel: "text-embedding-ada-002",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = () => {
    let newErrors = {};
    if (!form.name.trim()) newErrors.name = UI_TEXT.nameRequired;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full sm:max-w-md md:max-w-lg h-full bg-white flex flex-col overflow-hidden animate-slideIn rounded-l-2xl">
        <div className="flex justify-between items-center px-4 sm:px-6 py-4 border-b">
          <div>
            <h2 className="text-base sm:text-lg font-semibold">
              {UI_TEXT.createKnowledgeBase}
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              Best for quick answers from documents, websites and text files.
            </p>
          </div>

          <IoClose
            size={22}
            className="cursor-pointer hover:text-red-500 transition"
            onClick={onClose}
          />
        </div>

        <div className="flex-1 overflow-y-auto space-y-5 px-4 sm:px-6 py-5">
          <div>
            <label className="text-xs sm:text-sm font-medium text-gray-700">
              {UI_TEXT.name} <span className="text-red-500">*</span>
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={UI_TEXT.name}
              className={`w-full mt-2 px-3 py-2 text-sm rounded-lg border bg-white outline-none ${
                errors.name
                  ? "border-red-500"
                  : "border-gray-300 focus:border-[#4F46E5]"
              }`}
            />
            {errors.name && (
              <p className="text-xs text-red-500 mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="text-xs sm:text-sm font-medium text-gray-700">
              {UI_TEXT.description}
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder={UI_TEXT.description}
              className="w-full mt-2 px-3 py-2 text-sm rounded-lg border border-gray-300 bg-white outline-none focus:border-[#4F46E5]"
            />
          </div>

          <div>
            <label className="text-xs sm:text-sm font-medium text-gray-700">
              {UI_TEXT.vectorStore}
            </label>
            <select
              name="vectorStore"
              value={form.vectorStore}
              onChange={handleChange}
              className="w-full mt-2 px-3 py-2 text-sm rounded-lg border border-gray-300 bg-white outline-none focus:border-[#4F46E5]"
            >
              <option>Qdrant</option>
              <option>Pinecone</option>
            </select>
          </div>

          <div>
            <label className="text-xs sm:text-sm font-medium text-gray-700">
              {UI_TEXT.embeddingModel}
            </label>
            <select
              name="embeddingModel"
              value={form.embeddingModel}
              onChange={handleChange}
              className="w-full mt-2 px-3 py-2 text-sm rounded-lg border border-gray-300 bg-white outline-none focus:border-[#4F46E5]"
            >
              <option>text-embedding-ada-002</option>
              <option>text-embedding-3-small</option>
            </select>
          </div>
        </div>

        <div className="px-4 sm:px-6 py-4 border-t bg-white flex flex-col sm:flex-row gap-2 sm:gap-3">
          <Button onClick={onClose} fullWidth>
            {UI_TEXT.cancel}
          </Button>
          <Button onClick={handleSubmit} fullWidth>
            {UI_TEXT.create}
          </Button>
        </div>
      </div>

      <style>
        {`
          .animate-slideIn {
            animation: slideIn 0.3s ease-out;
          }
          @keyframes slideIn {
            from {
              transform: translateX(100%);
            }
            to {
              transform: translateX(0);
            }
          }
        `}
      </style>
    </div>
  );
}
