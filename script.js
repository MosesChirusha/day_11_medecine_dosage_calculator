const weightInput = document.getElementById("weight");
  const medicineSelect = document.getElementById("medicine");
  const output = document.getElementById("output");

  const dosageGuidelines = {
    paracetamol: { min: 10, max: 15 },
    ibuprofen: { min: 5, max: 10 }
  };

  function calculateDosage() {
    const weight = parseFloat(weightInput.value);
    const medicine = medicineSelect.value;

    if (!weight || weight <= 0) {
      output.textContent = "Please enter a valid weight.";
      return;
    }

    const { min, max } = dosageGuidelines[medicine];

    const minDose = weight * min;
    const maxDose = weight * max;

    output.innerHTML = `
      Recommended dose range:<br>
      ${minDose.toFixed(1)} mg – ${maxDose.toFixed(1)} mg per dose
    `;
  }

  weightInput.addEventListener("input", calculateDosage);
  medicineSelect.addEventListener("change", calculateDosage);