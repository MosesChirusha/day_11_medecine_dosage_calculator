# Medicine Dosage Calculator (Day 11)

Offline-first pediatric medicine dosage calculator based on child weight.
Designed to support safer dosing decisions and improve basic health literacy.

Part of a 90-day challenge to build practical digital solutions.

---

## Problem
Incorrect pediatric medication dosing is a major health risk. Many medicines
require weight-based dosing, but calculations are often done manually or guessed,
leading to underdosing or overdosing.

---

## Solution
A simple browser-based dosage calculator that:
- Calculates medicine dosage using mg/kg guidelines
- Displays minimum and maximum recommended dose per administration
- Works fully offline
- Emphasizes medical safety and professional confirmation

---

## Medical Disclaimer
This tool is for **educational and support purposes only**.
It does **not** replace professional medical advice, diagnosis, or prescription.
Always consult a qualified healthcare professional before administering medication.

---

## Tech Stack
- HTML
- CSS
- Vanilla JavaScript

No frameworks. No backend.

---

## Features
- Weight-based dosage calculation
- Support for common pediatric medicines
- Clear dosage range output
- Safety warnings built into UI
- Offline usability

---

## Project Structure
```text
/
├── index.html
├── styles.css
└── script.js

```

---

## Running Locally
No installation required.

``` bash

clone this repository
Open index.html in a browser
```

---

## Dosage Logic
Dosage is calculated using standard mg/kg guidelines:

``` text
Minimum dose = weight × minimum mg/kg
Maximum dose = weight × maximum mg/kg
Values are rounded for readability and intentionally conservative.
```

## Use Cases
- Caregiver education
- Community health worker training
- Rural clinics
- Health outreach programs

---

## License
MIT