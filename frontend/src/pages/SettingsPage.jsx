import { THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore";
import { Send } from "lucide-react";

const PREVIEW_MESSAGES = [
  { id: 1, content: "Hey! How's it going?", isSent: false },
  {
    id: 2,
    content: "I'm doing great! Just working on some new features.",
    isSent: true,
  },
];

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="flex-grow h-full container mx-auto px-4 py-4 flex flex-col gap-8">
      {/* Theme Selector */}
      <div className="space-y-4">
        <div className="text-center">
          <h2 className="text-lg font-semibold">Theme Selector</h2>
          <p className="text-sm text-gray-500">
            Pick a theme that suits your style
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {THEMES.map((t) => (
            <button
              key={t}
              className={`
                group w-24 h-full flex flex-col pt-2 items-center gap-2 rounded-lg border shadow-sm transition-all
                ${
                  theme === t
                    ? "border-primary bg-primary/10"
                    : "border-gray-300 hover:bg-gray-100"
                }
              `}
              onClick={() => setTheme(t)}
            >
              <div
                className="relative w-12 h-12 rounded-lg border overflow-hidden shadow-md"
                data-theme={t}
              >
                <div className="absolute inset-0 grid grid-cols-2 gap-px">
                  <div className="bg-primary"></div>
                  <div className="bg-secondary"></div>
                  <div className="bg-accent"></div>
                  <div className="bg-neutral"></div>
                </div>
              </div>
              <span className="text-sm font-medium">
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Preview Section */}
      <div className="space-y-4">
        <div className="text-center">
          <h2 className="text-lg font-semibold">Live Preview</h2>
          <p className="text-sm text-gray-500">
            See how your chat interface will look
          </p>
        </div>
        <div className="w-full max-w-2xl mx-auto rounded-lg shadow-md border bg-white overflow-hidden">
          {/* Chat Header */}
          <div className="p-4 bg-gray-50 border-b flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-medium">
              J
            </div>
            <div>
              <h3 className="font-medium">John Doe</h3>
              <p className="text-sm text-gray-500">Online</p>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="p-4 space-y-3 bg-gray-50 overflow-y-auto h-64">
            {PREVIEW_MESSAGES.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.isSent ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`
                    max-w-[70%] px-4 py-2 rounded-lg text-sm shadow-md
                    ${
                      message.isSent
                        ? "bg-primary text-white"
                        : "text-black bg-gray-200"
                    }
                  `}
                >
                  <p>{message.content}</p>
                  <span className="block mt-1 text-xs opacity-70">
                    12:00 PM
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="p-4 bg-gray-50 border-t flex gap-3">
            <input
              type="text"
              className="flex-1 border rounded-lg px-4 py-2 text-sm shadow-sm"
              placeholder="Type a message..."
              value="This is a preview"
              readOnly
            />
            <button className="bg-primary text-white px-4 py-2 rounded-lg shadow-md flex items-center">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
