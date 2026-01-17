import { useNavigate } from 'react-router-dom';
import './Bienvenidos.css';

export default function Bienvenidos() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-[#0d141b] dark:text-slate-50">
      <div className="ios-safe-top flex items-center justify-between px-6 py-4">
        <button onClick={() => navigate(-1)} className="material-symbols-outlined text-primary text-2xl">
          arrow_back
        </button>
        <button onClick={() => {}} className="material-symbols-outlined text-primary text-2xl">
          blur_on
        </button>
      </div>

      <main className="flex-1 flex flex-col justify-between px-6 pb-12">
        <header className="pt-8 text-center">
          <h1 className="text-[#0d141b] dark:text-white tracking-tight text-[40px] font-extrabold leading-tight mb-4 font-display">
            ¡Bienvenido!
          </h1>
          <p className="text-[#4f7396] dark:text-slate-400 text-lg font-normal leading-relaxed max-w-[280px] mx-auto">
            Gestiona y visualiza tus creaciones en nuestra Vista de Diseño de Interfaces
          </p>
        </header>

        <div className="flex-1 flex items-center justify-center my-12 abstract-ui-container rounded-full aspect-square mx-auto w-full max-w-[320px] relative">
          <div className="relative w-full h-full flex items-center justify-center">
            <img src="https://i.ibb.co/60YztwLj/Screenshot-2026-01-17-16-26-59-299.jpg" alt="Cards" className="w-48"/>
          </div>
        </div>

        <footer className="ios-safe-bottom w-full max-w-sm mx-auto">
          <div className="flex flex-col gap-4">
            <button className="hero-gradient flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-8 text-white text-lg font-bold leading-normal tracking-wide shadow-[0_8px_30px_rgb(19,127,236,0.3)] hover:brightness-110 active:scale-[0.98] transition-all">
              <span className="truncate">Comenzar</span>
            </button>
            <p className="text-center text-[#4f7396] dark:text-slate-500 text-sm">
              Empieza a prototipar hoy mismo
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
