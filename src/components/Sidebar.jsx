import { SIDEBAR, UI_TEXT } from "../components/constants/ui";
import {
  FiBox,
  FiCpu,
  FiBook,
  FiLayers,
  FiMonitor,
  FiList,
  FiZap,
  FiBriefcase,
  FiPlay,
  FiShield,
  FiKey,
  FiSettings,
} from "react-icons/fi";

export default function Sidebar() {
  return (
    <div className="md:w-64 sm:w-56 w-full bg-white px-3 sm:px-4 py-4 sm:py-5 text-xs sm:text-sm flex flex-col justify-between h-full overflow-y-auto no-scrollbar border-r border-gray-200">
      <div>
        <Section
          title={UI_TEXT.myProjects}
          items={SIDEBAR.projects}
          icons={[FiBox, FiCpu, FiBook]}
        />

        <Section
          title={UI_TEXT.orchestrator}
          items={SIDEBAR.orchestrator}
          icons={[
            FiLayers,
            FiMonitor,
            FiList,
            FiZap,
            FiBriefcase,
            FiPlay,
            FiShield,
          ]}
        />

        <div className="flex items-center gap-2 sm:gap-3 bg-[#EEF2FF] text-[#4F46E5] px-2 sm:px-3 py-2 rounded-lg my-3 font-medium border-l-4 border-[#4F46E5] text-xs sm:text-sm">
          <FiBook size={16} />
          <span className="truncate">{UI_TEXT.knowledgeBase}</span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 text-gray-700 hover:bg-gray-100 px-2 sm:px-3 py-2 rounded-lg transition text-xs sm:text-sm">
          <FiKey size={16} />
          <span className="truncate">{UI_TEXT.keyStore}</span>
        </div>
      </div>

      <Section
        title={UI_TEXT.admin}
        items={SIDEBAR.admin}
        icons={[FiSettings, FiSettings]}
      />
    </div>
  );
}

function Section({ title, items, icons }) {
  return (
    <div className="mb-4 sm:mb-5">
      <p className="text-gray-400 text-[10px] sm:text-xs mb-2 uppercase tracking-wide">
        {title}
      </p>

      <ul className="space-y-1">
        {items.map((item, i) => {
          const Icon = icons[i];

          return (
            <li
              key={i}
              className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition text-xs sm:text-sm"
            >
              <Icon size={16} className="shrink-0" />
              <span className="truncate">{item}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
