import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="w-full max-w-md bg-background-light dark:bg-background-dark min-h-screen flex flex-col relative overflow-hidden shadow-2xl">
      <header className="pt-12 px-6 pb-4">
        <h1 className="text-2xl font-bold tracking-tight text-slate-800 dark:text-white">
          Interfaces de Diseño
        </h1>
      </header>

      <div className="px-6 flex justify-center gap-3 items-center mb-6">
        <div className="relative w-3/4 group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <span className="material-icons-outlined text-white/70 text-lg">search</span>
          </div>
          <input
            className="w-full pl-11 pr-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-700 text-white placeholder-white/70 border-none rounded-2xl shadow-lg focus:ring-2 focus:ring-blue-400 transition-all text-sm"
            placeholder="Nombre de la interfaz (.tsx)" type="text"
          />
        </div>
      </div>

      <div className="px-6 mb-8">
        <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-sky-300 to-blue-500 text-white font-medium shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2">
          <span className="material-icons-outlined text-xl">explore</span>
          Descubre tus interfaces
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-24 custom-scrollbar">
        <div className="grid grid-cols-2 gap-4">
          <Link to="/bienvenidos" className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-500">bienvenidos.tsx</span>
            <h3 className="text-xs font-semibold mt-1 mb-3 line-clamp-2 h-8">Una página de bienvenida simple con un botón de retroceso.</h3>
            <div className="h-24 w-full rounded-lg bg-gradient-to-br from-purple-400 to-blue-400 relative overflow-hidden">
              <div className="absolute bottom-2 left-2 right-2 h-4 bg-white/30 rounded-full"></div>
              <div className="absolute bottom-8 left-2 right-8 h-4 bg-white/30 rounded-full"></div>
            </div>
          </Link>
          {/* Add other cards here */}
        </div>
      </div>

      <nav className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] ios-blur bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-full px-8 py-3 flex justify-between items-center shadow-xl">
        <button className="text-primary">
          <span className="material-icons-outlined">dashboard</span>
        </button>
        <button className="text-slate-400 dark:text-slate-500">
          <span className="material-icons-outlined">collections</span>
        </button>
        <button className="text-slate-400 dark:text-slate-500">
          <span className="material-icons-outlined">history</span>
        </button>
        <button className="text-slate-400 dark:text-slate-500">
          <span className="material-icons-outlined">person_outline</span>
        </button>
      </nav>

      <button
        className="fixed top-4 right-4 bg-white dark:bg-slate-800 p-2 rounded-full shadow-lg border border-slate-200 dark:border-slate-700"
        onClick={() => setDarkMode(!darkMode)}
      >
        <span className="material-icons-outlined dark:hidden">dark_mode</span>
        <span className="material-icons-outlined hidden dark:block">light_mode</span>
      </button>
    </div>
  );
}
