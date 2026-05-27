export function HeroBioText({ parts }) {
  return (
    <p className="max-w-2xl text-sm leading-relaxed text-text-secondary md:text-base">
      {parts.map((part, index) =>
        part.bold ? (
          <strong key={index} className="font-semibold text-text">
            {part.text}
          </strong>
        ) : (
          <span key={index}>{part.text}</span>
        )
      )}
    </p>
  );
}
