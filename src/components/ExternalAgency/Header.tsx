import React from "react";

const Header: React.FC = () => {
  return (
    <div className="w-full h-[97px] flex items-center justify-center border-b-gray-300 bg-white border-b border-solid">
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<svg id="107:280" layer-name="nav" width="1440" height="97" viewBox="0 0 1440 97" fill="none" xmlns="http://www.w3.org/2000/svg" class="nav"> <mask id="path-1-inside-1_107_280" fill="white"> <path d="M0 0H1440V97H0V0Z"></path> </mask> <path d="M0 0H1440V97H0V0Z" fill="white"></path> <path d="M1440 96H0V98H1440V96Z" fill="#D1D5DB" mask="url(#path-1-inside-1_107_280)"></path> <text fill="black" xml:space="preserve" style="white-space: pre" font-family="Poppins" font-size="36" font-weight="600" letter-spacing="0em"><tspan x="523" y="70.6">External Agency</tspan></text> </svg>',
          }}
        />
      </div>
    </div>
  );
};

export default Header;
