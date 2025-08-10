import { div, img } from "motion/react-client";
import Logos from "../assets/logos";
export default function ProjectCard({
  projectImage,
  description,
  title,
  projectLink,
  websiteLink,
  icons,
  props,
}) {
  const logoObject = new Logos();
  return (
    <div>
      <h3 className="text-3xl">{title}</h3>

      <div className="flex felx-col gap-5">
        <img src={projectImage} alt="" width={500} />
        <div className="">
          <div className="mb-5">{description}</div>
          <div className="mb-5">
            <a className="border p-2 rounded-2xl" href={projectLink}>
              <span>Visit website</span>
            </a>
          </div>

          <div className="">
            <img
              width={50}
              src="https://img.icons8.com/?size=100&id=106567&format=png&color=FFFFFF"
              alt=""
            />
          </div>
          <p>Stack Used: </p>
          <div className="flex gap-2">
            {icons.map((str, index) => (
              <img width={50} key={index} src={logoObject[str]} alt="" />
            ))}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
