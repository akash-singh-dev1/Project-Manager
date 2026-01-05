const Input = ({ ref, label, textarea, id, ...props }) => {
  const classes =
    "w-full p-1 rounded-sm border-b-2  border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <p className="flex flex-col gap-1">
      <label
        htmlFor={id}
        className="text-sm uppercase font-bold text-stone-500"
      >
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} id={id} {...props} className={classes} />
      ) : (
        <input ref={ref} id={id} {...props} className={classes} />
      )}
    </p>
  );
};
export default Input;
