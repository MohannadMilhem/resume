type Props = {
  title: string;
  body: string;
  ml?: string;
};

export default function Section({ body, title, ml = "ml-16" }: Props) {
  return (
    <div className={`flex flex-col max-w-200 text-2xl text-gray-400 ${ml}`}>
      <div className="text-5xl font-bold text-emerald-600">{title}</div>
      {body}
    </div>
  );
}
