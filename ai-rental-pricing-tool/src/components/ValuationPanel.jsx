export default function ValuationPanel({ valuation }) {
  return (
    <div className="bg-slate-900 p-5 rounded-xl">
      <h2 className="text-sm text-slate-400 uppercase">
        Final Recommendation
      </h2>

      <div className="text-4xl font-black text-emerald-400 mt-2">
        ${valuation}
      </div>
    </div>
  );
}
