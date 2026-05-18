export const parseUserPrompt = (input) => {
  const text = input.toLowerCase();

  if (text.includes("noise")) {
    return {
      name: "Noise Penalty",
      value: -0.04,
      type: "percent",
    };
  }

  if (text.includes("kitchen")) {
    return {
      name: "Kitchen Premium",
      value: 100,
      type: "flat",
    };
  }

  return {
    name: "Generic Adjustment",
    value: 40,
    type: "flat",
  };
};
