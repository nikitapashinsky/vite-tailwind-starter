function App() {
  return (
    <div className="mx-auto flex h-screen max-w-md flex-col items-center justify-center gap-4 p-12 text-center">
      <h1 className="text-2xl font-semibold leading-tight tracking-tight text-zinc-900">
        Vite + React + Tailwind&nbsp;CSS
      </h1>
      <p className="text-base leading-relaxed text-zinc-500">
        This is a simple starter{" "}
        <a
          href="https://vitejs.dev/"
          target="_blank"
          className=" text-zinc-900 underline decoration-sky-300 decoration-2 underline-offset-2 transition-all hover:decoration-sky-500"
        >
          Vite
        </a>{" "}
        template configured with{" "}
        <a
          href="https://reactjs.org/"
          target="_blank"
          className=" text-zinc-900 underline decoration-sky-300 decoration-2 underline-offset-2 transition-all hover:decoration-sky-500"
        >
          React
        </a>
        ,{" "}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          className=" text-zinc-900 underline decoration-sky-300 decoration-2 underline-offset-2 transition-all hover:decoration-sky-500"
        >
          Tailwind CSS
        </a>
        , and the official{" "}
        <a
          href="https://github.com/tailwindlabs/prettier-plugin-tailwindcss"
          target="_blank"
          className=" text-zinc-900 underline decoration-sky-300 decoration-2 underline-offset-2 transition-all hover:decoration-sky-500"
        >
          Prettier Tailwind CSS plugin
        </a>
        .
      </p>
    </div>
  );
}

export default App;
