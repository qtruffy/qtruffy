'use client';

import { AiBrain01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

const Chatbot = () => {
  return (
    <a
      //   href="https://chatgpt.com/?hints=plugin%3Aasdk_app_6ab57e46193c8191b0b19573dd2191c6"
      href="https://chatgpt.com/plugins/plugin_asdk_app_6ab57e46193c8191b0b19573dd2191c6"

      target="_blank"
      rel="noopener noreferrer"
      className="group/chatbot fixed right-1/2 bottom-4 z-10 origin-bottom translate-x-1/2 cursor-pointer rounded-full border border-neutral-700 bg-neutral-800 px-3 py-1.5 transition-all duration-300 hover:scale-102 hover:bg-neutral-800/90"
    >
      <div className="flex flex-row items-center gap-2">
        <HugeiconsIcon
          icon={AiBrain01Icon}
          size={16}
          className="text-neutral-200 transition-colors duration-300 group-hover/chatbot:text-white"
        />
        <p className="text-base font-medium whitespace-nowrap transition-colors duration-300 select-none group-hover/chatbot:text-white">
          Ask me anything
        </p>
      </div>
    </a>
  );
};

export { Chatbot };
