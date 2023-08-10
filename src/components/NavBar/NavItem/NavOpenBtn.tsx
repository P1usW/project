import { FC } from "react";

interface NavOpenBtn {
  btnClass: string,
  onClick?: () => void,
}

const NavOpenBtn: FC<NavOpenBtn> = ({
  btnClass,
  onClick
}) => {
  return (
    <button 
      className={btnClass}
      onClick={onClick}  
      aria-label="Open Navbar"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24">
        <path 
          fill="currentColor" 
          d="M2.61 0h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22zm0 
            9.39h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22zm0 
            9.391h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22z"
        />
      </svg>
    </button>
  );
};

export default NavOpenBtn;

