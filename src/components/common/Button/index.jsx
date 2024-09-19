/* eslint-disable react/prop-types */

const Button = ({
  title,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  icon: Icon = null,
  iconColor = "white",
}) => {
  const baseStyle =
    "w-auto h-auto font-firago font-medium flex items-center justify-center gap-2";

  // Define styles for each button variant
  const styles = {
    primary: `
      bg-primary rounded-[10px] py-[10px] px-[16px] leading-[19.2px] text-[16px] hover:bg-[#DF3014] text-white
    `,
    secondary: `
      bg-white rounded-[10px] border border-primary py-[10px] px-[16px] leading-[19.2px] text-[16px] text-primary 
      hover:bg-primary hover:text-white hover:iconColor 
    `,
    remove: `
      bg-white text-lightGray rounded-[8px] border border-lightGray p-[10px] leading-[16.8px] text-[14px] hover:bg-lightGray hover:text-white
    `,
    select: `
      bg-primary text-white rounded-[8px] py-[8px] px-[14px] leading-[16.8px] text-[14px] hover:bg-[#DF3014]
    `,
  };

  // Determine icon color based on variant
  const buttonStyle = `${baseStyle} ${styles[variant]} ${className}`;
  const iconColorClass = `${iconColor}`;

  return (
    <div className="group">
      <button type={type} onClick={onClick} className={buttonStyle}>
        {Icon && (
          <Icon color={variant === "secondary" ? "#F93B1D " : iconColorClass} />
        )}
        {title}
      </button>
    </div>
  );
};

export default Button;
