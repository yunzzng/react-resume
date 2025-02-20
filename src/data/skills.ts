import photoshopIcon from "/icons/skill/photoshop.png";
import illustratorIcon from "/icons/skill/illustrator.png";
import indesignIcon from "/icons/skill/indesign.png";
import figmaIcon from "/icons/skill/figma.png";
import adobeXdIcon from "/icons/skill/adobexd.png";
import htmlIcon from "/icons/skill/html.png";
import cssIcon from "/icons/skill/css.png";
import javascriptIcon from "/icons/skill/javascript.png";
import typescriptIcon from "/icons/skill/typescript.png";
import reactIcon from "/icons/skill/react.png";
import nodejsIcon from "/icons/skill/node.png";
import expressIcon from "/icons/skill/expressjs.png";
import dockerIcon from "/icons/skill/docker.png";
import githubIcon from "/icons/skill/github.png";
import gitlabIcon from "/icons/skill/gitlab.png";

export type Skill = {
  name: string;
  icon: string;
};

const skills: Skill[] = [
  { name: "Photoshop", icon: photoshopIcon },
  { name: "Illustrator", icon: illustratorIcon },
  { name: "Indesign", icon: indesignIcon },
  { name: "Figma", icon: figmaIcon },
  { name: "Adobe XD", icon: adobeXdIcon },
  { name: "HTML", icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
  { name: "JavaScript", icon: javascriptIcon },
  { name: "TypeScript", icon: typescriptIcon },
  { name: "React", icon: reactIcon },
  { name: "Node.js", icon: nodejsIcon },
  { name: "Express", icon: expressIcon },
  { name: "Docker", icon: dockerIcon },
  { name: "Github", icon: githubIcon },
  { name: "GitLab", icon: gitlabIcon },
];

export default skills;