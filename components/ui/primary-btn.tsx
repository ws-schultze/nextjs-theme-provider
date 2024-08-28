type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

export default function PrimaryBtn({ children, onClick }: Props) {
  return (
    <button
      key={"light"}
      type="button"
      className="flex gap-2 items-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
