export default function ComparableMatrix({ comps, toggleComp }) {
  return (
    <div className="space-y-3">
      {comps.map(comp => (
        <div
          key={comp.id}
          className="bg-slate-900 border border-slate-800 p-3 rounded-lg"
        >
          <div className="flex justify-between">
            <div>
              <h3 className="text-white font-bold">
                {comp.address}
              </h3>

              <p className="text-slate-400 text-xs">
                {comp.similarity}% match
              </p>
            </div>

            <input
              type="checkbox"
              checked={comp.checked}
              onChange={() => toggleComp(comp.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
