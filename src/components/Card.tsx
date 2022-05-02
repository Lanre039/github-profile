import { GoPrimitiveDot } from "react-icons/go";
import Graph from "../assets/graph.png";
import { dateDistanceToNow } from "../utils";
import { AiOutlineStar, AiOutlineCaretDown } from "react-icons/ai";

const Card = ({ data }: any) => {
  const {
    name,
    description,
    private: isPrivate,
    language,
    updated_at,
    stargazers_count,
  } = data;

  return (
    <div className="repositories__list">
      <div className="repositories__list--total">
        <h3 className="title">
          <a href="/Lanre039/locate-facility">{name}</a>
          <span className="label ml-2 mb-1">
            {isPrivate ? "Private" : "Public"}
          </span>
        </h3>
        <p className="w-80">{description}</p>
        <div className="flex items-start ">
          {language && (
            <p className="flex justify-center mb-0 mr-2">
              <GoPrimitiveDot size={20} color="green" />
              <span>{language}</span>
            </p>
          )}
          {stargazers_count !== 0 && (
            <p className="flex justify-center mb-0 mr-2">
              <AiOutlineStar size={20} color="green" />
              <span>{stargazers_count}</span>
            </p>
          )}
          <p className="flex justify-center mb-0 mr-2">
            Updated {dateDistanceToNow(updated_at)}
          </p>
        </div>
      </div>
      <div className="repositories__collection ">
        <div style={{ height: "30px" }} className="flex">
          <div className="star__box flex border__top-left">
            <a className="flex items-center text-black" href="#top">
              <AiOutlineStar className="text-1-2" /> &nbsp; Star
            </a>
          </div>
          <div className="star__box border__top-right flex items-center">
            <a className="flex items-center text-black" href="#top">
              <AiOutlineCaretDown size="13px" className=" text-1-2" />
            </a>
          </div>
        </div>
        <div className="h-full">
          <img src={Graph} alt="graph" width="120" height="80" />
        </div>
      </div>
    </div>
  );
};
export default Card;
