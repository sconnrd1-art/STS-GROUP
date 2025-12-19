
import React from 'react';
import ReactDOM from 'react-dom/client';

// --- 元件：公司卡片 ---
interface CompanyCardProps {
  name: string;
  url: string;
  description: string;
  logoSrc: string;
  color: 'sky' | 'indigo';
}

const CompanyCard: React.FC<CompanyCardProps> = ({ name, url, description, logoSrc, color }) => {
  const accentText = color === 'sky' ? 'group-hover:text-sky-400' : 'group-hover:text-indigo-400';
  const accentBorder = color === 'sky' ? 'group-hover:border-sky-500/50' : 'group-hover:border-indigo-500/50';
  const glowColor = color === 'sky' ? 'bg-sky-500' : 'bg-indigo-500';

  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group relative flex flex-col p-[1px] rounded-[2rem] transition-all duration-500 hover:-translate-y-3"
    >
      <div className={`glass h-full rounded-[2rem] p-10 flex flex-col items-center text-center transition-all duration-500 border border-white/5 ${accentBorder}`}>
        
        {/* 公司 Logo 容器 */}
        <div className="relative w-full aspect-[2/1] bg-slate-900/40 rounded-2xl overflow-hidden mb-10 border border-white/5 flex items-center justify-center">
          <img 
            src={logoSrc} 
            alt={`${name} logo`} 
            className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
          />
          {/* 浮水印文字（Logo 未讀取時顯示） */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-3xl font-black tracking-[0.2em] text-white/10 group-hover:text-white/20 transition-colors uppercase">
              {name}
            </span>
          </div>
        </div>

        <h3 className={`text-3xl font-bold text-white mb-4 transition-colors ${accentText}`}>
          {name}
        </h3>
        
        <p className="text-slate-400 text-base leading-relaxed mb-10 max-w-[280px]">
          {description}
        </p>

        <div className={`mt-auto inline-flex items-center gap-3 text-sm font-semibold tracking-wider transition-all duration-300 opacity-60 group-hover:opacity-100 ${accentText}`}>
          進入官網
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 transform transition-transform group-hover:translate-x-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
      
      {/* 懸停時的背光效果 */}
      <div className={`absolute inset-0 -z-10 rounded-[2rem] blur-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-25 ${glowColor}`} />
    </a>
  );
};

// --- 元件：主應用程式 ---
const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between text-slate-200 relative px-6">
      
      {/* 背景裝飾光暈 */}
      <div className="glow top-[-10%] left-[-10%]" />
      <div className="glow bottom-[-10%] right-[-10%] opacity-60" />

      {/* 集團 Logo 區域 */}
      <header className="w-full py-16 flex justify-center items-center animate-fade-in">
        <div className="flex flex-col items-center gap-4 group cursor-pointer">
          <div className="w-24 h-24 bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 rounded-[2rem] flex items-center justify-center shadow-2xl shadow-sky-500/20 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
            <span className="text-white font-black text-4xl italic">G</span>
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-black tracking-[0.3em] text-white uppercase">
              SOONTAI <span className="text-sky-400">GROUP</span>
            </h1>
            <div className="h-1 w-12 bg-sky-500 mx-auto mt-2 rounded-full transition-all duration-500 group-hover:w-24" />
          </div>
        </div>
      </header>

      {/* 主要內容區 */}
      <main className="w-full max-w-6xl flex-grow flex flex-col items-center justify-center py-10">
        <div className="text-center mb-20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-sm font-bold tracking-[0.4em] text-sky-400 uppercase mb-6 opacity-80">
            Corporate Gateway
          </h2>
          <p className="text-4xl md:text-6xl font-light text-white leading-tight tracking-tight">
            卓越技術 · <span className="font-bold">連結未來</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <CompanyCard 
            name="S-CONN"
            url="https://s-conn.com/"
            description="專業射頻連接器與電纜組件解決方案領航者"
            logoSrc="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=800&auto=format&fit=crop"
            color="sky"
          />
          <CompanyCard 
            name="SOONTAI"
            url="https://soontai.com/"
            description="全球領先的射頻與微波濾波器製造商"
            logoSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
            color="indigo"
          />
        </div>
      </main>

      {/* 頁腳 */}
      <footer className="w-full py-12 mt-20 border-t border-white/5 animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 opacity-50 hover:opacity-100 transition-opacity">
          <div className="text-sm tracking-widest font-light">
            © {new Date().getFullYear()} SOONTAI GROUP. ALL RIGHTS RESERVED.
          </div>
          
          <div className="flex items-center gap-10">
            <a href="#" className="text-xs hover:text-sky-400 transition-colors uppercase tracking-widest">Privacy</a>
            <a href="#" className="text-xs hover:text-sky-400 transition-colors uppercase tracking-widest">Legal</a>
            <a href="#" className="text-xs hover:text-sky-400 transition-colors uppercase tracking-widest">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

// --- 啟動渲染 ---
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
