function ModelToggle({ mode, setMode }) {
  return (
    <div className="relative flex items-center rounded-full dark:bg-zinc-800 bg-yellow-300 p-1 w-42 h-10 shrink-0 translate-y-1">
      <div
        className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full dark:bg-purple-900 bg-yellow-500 transition-transform duration-200 ${
          mode === "advanced" ? "translate-x-full" : "translate-x-0"
        }`}
      />

      <button
        type="button"
        onClick={() => setMode("basic")}
        className={`relative z-10 flex-1 text-sm font-medium transition-colors ${
          mode === "basic" ? "text-white" : "text-zinc-100"
        }`}
      >
        Basic
      </button>

      <button
        type="button"
        onClick={() => setMode("advanced")}
        className={`relative z-10 flex-1 text-sm font-medium transition-colors ${
          mode === "advanced" ? "text-white" : "text-zinc-100"
        }`}
      >
        Advanced
      </button>
    </div>
  );
}

export default ModelToggle;