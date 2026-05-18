import { useMemo, useState } from "react";

import Header from "./components/Header";
import ValuationPanel from "./components/ValuationPanel";
import ComparableMatrix from "./components/ComparableMatrix";
import ChatSandbox from "./components/ChatSandbox";

import {
  INITIAL_TARGET_PROPERTY,
  INITIAL_COMPS,
} from "./data/mockData";

import { calculateValuation } from "./utils/valuationEngine";
import { parseUserPrompt } from "./utils/nlpParser";

export default function App() {
  const [target] = useState(INITIAL_TARGET_PROPERTY);
  const [comps, setComps] = useState(INITIAL_COMPS);
  const [modifiers, setModifiers] = useState([]);

  const valuation = useMemo(() => {
    return calculateValuation(target, comps, modifiers);
  }, [target, comps, modifiers]);

  const toggleComp = (id) => {
    setComps(prev =>
      prev.map(comp =>
        comp.id === id
          ? { ...comp, checked: !comp.checked }
          : comp
      )
    );
  };

  const handlePrompt = (input) => {
    const result = parseUserPrompt(input);
    setModifiers(prev => [...prev, result]);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <Header />

      <main className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
        <ValuationPanel valuation={valuation} />

        <ComparableMatrix
          comps={comps}
          toggleComp={toggleComp}
        />

        <ChatSandbox onSubmit={handlePrompt} />
      </main>
    </div>
  );
}
