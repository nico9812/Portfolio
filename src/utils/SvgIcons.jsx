import { useEffect, useState } from "react";

export default function SvgIcon({ name, className }) {
  const [svg, setSvg] = useState(null);

  useEffect(() => {
    fetch(`#/icons/${name}.svg`)
      .then((res) => res.text())
      .then((data) => setSvg(data))
      .catch((err) => console.error(err));
  }, [name]);

  return (
    <div
      className={`${className ?? ""} ${name}`}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
