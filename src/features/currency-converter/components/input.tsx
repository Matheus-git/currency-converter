type InputProps = {
  name: string;
  value: number | null;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  disabled?: boolean;
};

export const Input = ({
  name,
  value,
  onChange,
  disabled,
}: InputProps) => {
  return (
    <input
      disabled={disabled}
      name={name}
      type="number"
      value={value || 0}
      onChange={onChange}
      className={`appearance-none rounded-lg outline-none border-2 px-3 py-2 text-black-700 ${
        disabled ? "bg-gray-400" : "bg-white"
      } focus:border-orange-500 caret-orange-400`}
    />
  );
};
