export const calculateValuation = (target, comps, modifiers) => {
  const activeComps = comps.filter(c => c.checked);

  let weightedCompsAvg = 2450;

  if (activeComps.length > 0) {
    const totalWeight = activeComps.reduce((acc, c) => acc + c.similarity, 0);

    const weightedSum = activeComps.reduce(
      (acc, c) => acc + c.price * c.similarity,
      0
    );

    weightedCompsAvg = weightedSum / totalWeight;
  }

  let finalPrice = weightedCompsAvg;

  modifiers.forEach(mod => {
    if (mod.type === "percent") {
      finalPrice += finalPrice * mod.value;
    } else {
      finalPrice += mod.value;
    }
  });

  return Math.round(finalPrice);
};
