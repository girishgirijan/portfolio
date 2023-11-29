import React from "react";
import { personalInfo } from "../data";
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <>
      {personalInfo.map(({ title, description, href }, index) => {
        return (
          <li className="info__item" key={index}>
            <span className="info__title">{title}</span>
            {href ? (
              <span className="info__description">
                <a href={href} target="_blank">
                  {description}
                </a>
              </span>
            ) : (
              <span className="info__description">{description}</span>
            )}
          </li>
        );
      })}
    </>
  );
};

export default Info;
