export default function Section(props: { title: string; body: string }) {
  return (
    <div className="flex flex-col max-w-200 text-2xl">
      <div className="text-5xl font-bold ">{props.title}</div>
      {props.body}
    </div>
  );
}
