import React, { useState } from "react";

function App() {
  const [step, setStep] = useState(1);

  return (
    <div style={{
      maxWidth: "420px",
      margin: "80px auto",
      padding: "24px",
      background: "#ffffff",
      borderRadius: "14px",
      fontFamily: "sans-serif",
      boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
    }}>
      <h2 style={{ textAlign: "center" }}>Ballet Talent AI</h2>
      <p style={{ textAlign: "center", color: "#555" }}>
        سامانه هوشمند استعدادیابی باله
      </p>

      {step === 1 && (
        <>
          <input placeholder="سن" style={input} />
          <input placeholder="قد (cm)" style={input} />
          <input placeholder="وزن (kg)" style={input} />
        </>
      )}

      {step === 2 && (
        <>
          <input placeholder="سابقه ورزشی (سال)" style={input} />
          <input placeholder="انعطاف‌پذیری (1-5)" style={input} />
          <input placeholder="تعادل (1-5)" style={input} />
        </>
      )}

      {step === 3 && (
        <>
          <h3>نتیجه تحلیل</h3>
          <p>استعداد شما برای باله: بالا</p>
          <p>پیشنهاد: تمرکز روی تعادل و انعطاف لگن</p>
        </>
      )}

      {step < 3 && (
        <button onClick={() => setStep(step + 1)} style={button}>
          مرحله بعد
        </button>
      )}
    </div>
  );
}

const input = {
  width: "100%",
  padding: "10px",
  marginTop: "12px"
};

const button = {
  width: "100%",
  padding: "12px",
  marginTop: "20px",
  background: "#7c3aed",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer"
};

export default App;
