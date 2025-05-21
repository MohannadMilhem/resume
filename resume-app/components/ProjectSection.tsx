export default function ProjectSection(props: {
  title: string;
  description: string;
}) {
  return (
    <div className="text-emerald-400 md:text-3xl bold pl-30">
      {props.title}
      <div className="text-gray-400 md:text-2xl pl-10 max-w-300 pt-5">
        {props.description}
      </div>
    </div>
  );
}
