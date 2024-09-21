/* eslint-disable react/prop-types */

const Button = ({
  title,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  children,
}) => {
  const baseStyle = "font-firago font-medium flex items-center gap-2";

  const styles = {
    primary: `
      bg-primary rounded-[10px] py-[14px] px-[16px] text-[16px] hover:bg-[#DF3014] text-white
    `,
    secondary: `
     bg-white rounded-[10px] border border-primary py-[13px] px-[15px] text-[16px] text-primary 
      hover:bg-primary hover:text-white 
    `,
    remove: `
 bg-white text-lightGray rounded-[8px] border border-lightGray p-[14px] leading-[16.8px] text-[14px] hover:bg-lightGray hover:text-white    `,
    select: `
      bg-primary text-white rounded-[8px] py-[8px] px-[14px] leading-[16.8px] text-[14px] hover:bg-[#DF3014]
    `,
  };

  const buttonStyle = `${baseStyle} ${styles[variant]} ${className}`;

  return (
    <button type={type} onClick={onClick} className={buttonStyle}>
      {children}
      <span>{title}</span>
    </button>
  );
};

export default Button;
