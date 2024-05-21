import { Linkedin, Github, Mail, Phone } from "lucide-react";
import { SOCIAL_MEDIA } from "./social-media.constants";

export const SocialMedia: React.FC = () => {
  const renderIcons: Record<string | symbol, string | JSX.Element> = {
    linkedin: <Linkedin size={28} color="#9333EA" />,
    github: <Github size={28} color="#9333EA" />,
    email: <Mail size={28} color="#9333EA" />,
    phone: <Phone size={28} color="#9333EA" />,
  };

  const handleSocialMedia = (link: string | undefined) => {
    window.open(link, "_blank");
  };

  return (
    <div className="w-full flex flex-row items-center justify-center gap-12 mt-8">
      {SOCIAL_MEDIA.map((social) => {
        const hasLink = social.link !== undefined;

        return (
          <div
            className={`flex flex-col gap-1 items-center ${hasLink && "hover:cursor-pointer"} hover:scale-105 transition-transform duration-300 ease-in-out`}
            key={social.id}
            onClick={() => hasLink && handleSocialMedia(social.link)}
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full border border-purple-600 backdrop-blur-md">
              {renderIcons[social.icon]}
            </div>
            <p>{social.text}</p>
          </div>
        );
      })}
    </div>
  );
};
