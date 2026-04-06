import { useState } from "react";
import { UI_TEXT } from "../components/constants/ui";
import Button from "../components/common/Button";
import Modal from "../components/Modal";
import SearchInput from "../components/common/SearchInput";
import Card from "../components/common/Card";

export default function Home() {
  const [open, setOpen] = useState(false);

  const data = Array(6).fill({
    title: "Test",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    date: "14/07/2025",
  });

  return (
    <div className="w-full max-w-1400px mx-auto flex flex-col h-full px-3 sm:px-4 md:px-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-5 sm:mb-6">
        <h1 className="text-lg sm:text-xl font-semibold">
          {UI_TEXT.knowledgeBase}
        </h1>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 sm:items-center w-full sm:w-auto">
          <SearchInput
            placeholder={UI_TEXT.search}
            width="w-full sm:w-60 md:w-72 lg:w-120"
            height="h-10"
            className="bg-white rounded-xl shadow-md"
            iconColor="text-black/70"
            inputClass="bg-transparent text-gray-700 placeholder-gray-400"
          />

          <Button onClick={() => setOpen(true)} fullWidth>
            + {UI_TEXT.create}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        {data.map((item, i) => (
          <Card
            key={i}
            title={item.title}
            description={item.description}
            date={item.date}
          />
        ))}
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 mt-5 sm:mt-6 text-xs sm:text-sm text-gray-500">
        <div>6 rows</div>

        <div className="flex flex-wrap items-center gap-3 sm:gap-6">
          <div className="flex items-center gap-2">
            <span>{UI_TEXT.rowsPerPage}</span>
            <select className="border rounded-md px-2 py-1 text-xs sm:text-sm">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
          </div>

          <div className="whitespace-nowrap">{UI_TEXT.pageInfo}</div>

          <div className="flex items-center gap-2">
            <button className="px-2 py-1 border rounded-md">{"<<"}</button>
            <button className="px-2 py-1 border rounded-md">{"<"}</button>
            <button className="px-2 py-1 border rounded-md">{">"}</button>
            <button className="px-2 py-1 border rounded-md">{">>"}</button>
          </div>
        </div>
      </div>

      <Modal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}
