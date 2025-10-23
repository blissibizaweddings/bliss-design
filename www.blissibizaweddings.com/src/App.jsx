import blissLogo from './assets/bliss-logo.svg';

export default function App() {
  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-[1000]">
      <div className="pointer-events-auto flex items-center gap-3 rounded-full border border-white/80 bg-white/80 px-4 py-2 shadow-lg backdrop-blur">
        <img src={blissLogo} alt="Bliss Ibiza Weddings" className="h-8 w-8" />
        <div className="text-xs font-semibold tracking-[0.2em] text-gray-700 uppercase">
          Bliss Ibiza Weddings
        </div>
      </div>
    </div>
  );
}
