const Button = ({ children, ...props }) => {
  return (
    <button
      type="button"
      className="px-4 py-2 cursor-pointer text-[1rem] md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 hover:-translate-y-1 transition-all duration-150 ease-in-out delay-75"
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
