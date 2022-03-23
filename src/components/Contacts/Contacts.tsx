import { ReactComponent as Github } from "./github.svg";
import { ReactComponent as Tg } from "./tg.svg";
import { ReactComponent as Ig } from "./ig.svg";
import { ReactComponent as Gmail } from "./gmail.svg";
import { ReactComponent as Apple } from "./apple.svg";
import "./Contacts.css";
import { Icontact } from "../../types";

const Contacts = () => {
  const contacts: Icontact[] = [
    { link: "https://github.com/UnDanilka", icon: Github, title: "GitHub" },
    { link: " https://t-do.ru/unDanilka", icon: Tg, title: "Telegram" },
    {
      link: "https://instagram.com/un_danilka_?r=nametag",
      icon: Ig,
      title: "Instagram",
    },
    {
      link: "",
      icon: Gmail,
      title: "dancingdanil98@gmail.com",
    },
    { link: "", icon: Apple, title: "89869088659" },
  ];
  return (
    <div className="contacts">
      {contacts.map((contactItem: Icontact, i: number) => {
        return (
          <div
            className="contact"
            style={{ animationName: "first", animationDelay: `0.${i}s` }}
            key={i}
          >
            <div className="contact_icon">
              <contactItem.icon />
            </div>
            <a href={contactItem.link} className="contact_link">
              {contactItem.title}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Contacts;
