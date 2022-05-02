import Wrapper from "./Profile.styles";
import { FiBookOpen } from "react-icons/fi";
import { VscRepo } from "react-icons/vsc";
import { FiPackage } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsDot } from "react-icons/bs";
import {
  AiOutlineStar,
  AiOutlineCaretDown,
  AiOutlineTwitter,
} from "react-icons/ai";
import Shield from "../assets/sheild.png";
import Card from "./Card";

const Profile = ({ user, repo }: any) => {
  const {
    avatar_url,
    name,
    public_repos,
    login,
    bio,
    followers,
    following,
    location,
    twitter_username,
    email,
  } = user;
  const userRepo = Array.isArray(repo) ? repo.slice(0, 20) : [];

  return (
    <Wrapper>
      <section className="menu_bar">
        <div>
          <div className="menu">
            <a className="menu__menu-item flex items-center" href="#top">
              <FiBookOpen className="mr-2 text-1-2" /> Overview
            </a>
            <a
              className="menu__menu-item menu__menu-item--selected flex items-center"
              href="#top"
            >
              <VscRepo className="mr-2 text-1-2" />
              Repositories&nbsp; <span className="count">{public_repos}</span>
            </a>
            <a className="menu__menu-item flex items-center" href="#top">
              <i className="ion-clipboard mr-2 text-1-2"></i> Projects
            </a>
            <a className="menu__menu-item flex items-center" href="#top">
              <FiPackage />
              &nbsp; Packages
            </a>
            <a className="menu__menu-item flex items-center" href="#top">
              <AiOutlineStar className="mr-2 text-1-2" />
              Star &nbsp; <span className="count">{public_repos}</span>
            </a>
          </div>
        </div>
      </section>
      <section className="main_content container">
        <div className="main__content-left ">
          <div>
            <img
              className="bio"
              height="280"
              width="280"
              src={avatar_url}
              alt="avatar"
            />
          </div>
          <div>
            <h2 className="name">{name}</h2>
            <h3 className="username">{login}</h3>
          </div>
          <button className="follow-btn">Follow</button>
          <p className="alias">
            <b>{bio}</b>
          </p>
          <div>
            <div className="flex items-center">
              <p className="flex justify-center">
                <FiUsers className="mr-1" />
                <b>{followers}</b> &nbsp;followers &nbsp;
              </p>
              <BsDot />
              <p>
                &nbsp; <b> {following}</b> following
              </p>
            </div>
            <div className="mt-1">
              {location && (
                <div className="flex item-center">
                  <p className="small_margin mr-1">
                    <MdOutlineLocationOn size="15px" />
                  </p>
                  <p className="small_margin">{location}</p>
                </div>
              )}
              {email && (
                <div className="flex item-center">
                  <p className="small_margin mr-1">
                    <HiOutlineMail size="15px" />
                  </p>
                  <p className="small_margin">{email}</p>
                </div>
              )}
              {twitter_username && (
                <div className="flex item-center">
                  <p className=" small_margin mr-1">
                    <AiOutlineTwitter size="15px" />
                  </p>
                  <p className="small_margin">@{twitter_username}</p>
                </div>
              )}
            </div>
          </div>
          <div className="achievement">
            <h1>Achievements</h1>
            <img src={Shield} alt="sheild" />
          </div>
        </div>
        <div className="main__content-right">
          <section className="repositories h-full">
            <div className="flex border_bottom">
              <div className="repositories__search mr-2">
                <input type="text" placeholder="Find a repository" />
              </div>
              <div className="flex">
                <div className="star__box flex filters mr-1">
                  <a className="flex items-center text-black" href="#top">
                    <b>Type</b> &nbsp;{" "}
                    <AiOutlineCaretDown size="13px" className=" text-1-2" />
                  </a>
                </div>
                <div className="star__box flex filters mr-1">
                  <a className="flex items-center text-black" href="#top">
                    <b>Language</b> &nbsp;{" "}
                    <AiOutlineCaretDown size="13px" className=" text-1-2" />
                  </a>
                </div>
                <div className="star__box flex filters">
                  <a className="flex items-center text-black" href="#top">
                    <b>Sort</b> &nbsp;{" "}
                    <AiOutlineCaretDown size="13px" className=" text-1-2" />
                  </a>
                </div>
              </div>
            </div>
            {userRepo.map((data) => (
              <Card key={Math.random()} data={data} />
            ))}
          </section>
        </div>
      </section>
    </Wrapper>
  );
};

export default Profile;
