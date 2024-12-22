import React, { useState } from 'react';

interface Tab {
  id: string;
  label: string;
  content: () => React.ReactNode;
}

interface TabSectionProps {
  tabs: Tab[];
}

export default function TabSection({ tabs }: TabSectionProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div>
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-indigo-600 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="min-h-[400px]">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`transform transition-all duration-300 ${
              activeTab === tab.id ? 'translate-x-0 opacity-100' : 'absolute -translate-x-full opacity-0'
            }`}
          >
            {activeTab === tab.id && tab.content()}
          </div>
        ))}
      </div>
    </div>
  );
}