import React from "react";

interface DateInputProps {
  label: string;
}

const DateInput: React.FC<DateInputProps> = ({ label }) => {
  return (
    <div className="flex items-center mb-5">
      <div className="text-lg font-semibold text-[#252525] mr-5">{label}</div>
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<svg id="I110:634;110:589" layer-name="DD" width="110" height="54" viewBox="0 0 110 54" fill="none" xmlns="http://www.w3.org/2000/svg" class="date-input" style="margin-right: 10px"> <rect x="0.5" y="0.5" width="109" height="53" rx="7.5" fill="white" stroke="#6E7E92"></rect> <text fill="#666666" xml:space="preserve" style="white-space: pre" font-family="Poppins" font-size="16" letter-spacing="0em"><tspan x="12.1875" y="34.6">DD</tspan></text> <path d="M87 24L92.2 30L97.8 24" stroke="#6E7E92"></path> </svg>',
          }}
        />
      </div>
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<svg id="I110:634;110:585" layer-name="MM" width="110" height="54" viewBox="0 0 110 54" fill="none" xmlns="http://www.w3.org/2000/svg" class="date-input" style="margin-right: 10px"> <rect x="0.5" y="0.5" width="109" height="53" rx="5.5" fill="white" stroke="#6E7E92"></rect> <text fill="#666666" xml:space="preserve" style="white-space: pre" font-family="Poppins" font-size="16" letter-spacing="0em"><tspan x="9.21875" y="34.6">MM</tspan></text> <path d="M88 24L93.2 30L98.8 24" stroke="#6E7E92"></path> </svg>',
          }}
        />
      </div>
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<svg id="I110:634;110:593" layer-name="YYYY" width="120" height="54" viewBox="0 0 120 54" fill="none" xmlns="http://www.w3.org/2000/svg" class="date-input" style="margin-right: 10px"> <rect x="0.5" y="0.5" width="119" height="53" rx="5.5" fill="white" stroke="#6E7E92"></rect> <text fill="#666666" xml:space="preserve" style="white-space: pre" font-family="Poppins" font-size="16" letter-spacing="0em"><tspan x="15.3125" y="34.6">YYYY</tspan></text> <path d="M97 24L102.2 30L107.8 24" stroke="#6E7E92"></path> </svg>',
          }}
        />
      </div>
    </div>
  );
};

export default DateInput;
