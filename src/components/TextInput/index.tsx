
import { FieldHookConfig, useField, ErrorMessage } from "formik";
interface IProps {
  label: string | number;
  placeholder?: string;
  value?: string;
  type?: string;
  defaultValue?: string | number;
  readOnly?: boolean;
  hidden?: boolean;
  className?: string;
}
const TextInput = ({
  label,
  placeholder,
  type,
  readOnly,
  defaultValue,
  hidden,
  className,
  ...otherProps
}: IProps & FieldHookConfig<string>) => {
  const [field, meta] = useField(otherProps);
  return (
    <>
      <div className="mb-3">
        <div className="mb-2">
          <label
            htmlFor=""
            className={`mb-2 text-base capitalize text-[black] ${
              meta.error && meta.touched ? "" : ""
            }`}
          >
            {label}
          </label>
        </div>
        <div className="mb-1">
          <input
            {...field}
            type={type}
            defaultValue={defaultValue}
            placeholder={placeholder}
            className={` w-[350px]  appearance-none placeholder:capitalize border border-[gray] rounded-xl p-2 ring-0 focus:ring-0 focus:outline-0 ${className} ${
              meta.touched && meta.error
                ? "border-warning placeholder:text-warning"
                : ""
            }`}
            autoComplete="off"
          />
        </div>
        <div className="relative mb-2 ">
          <ErrorMessage
            component="div"
            name={field.name}
            className="bg-[red] bg-opacity-80 text-[white] text-xs inline-block  px-2 py-1 rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

export default TextInput;
