import React from "react";
import Card from "@mui/material/Card";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoSchoolSharp } from "react-icons/io5";
import { MdWork } from "react-icons/md";

const VerticalTimelineComponent = ({ timeline }) => {
  const determineIcon = (type) => {
    if (type === "education") {
      return <IoSchoolSharp />;
    } else if (type === "experience") {
      return <MdWork />;
    }
    // Add more conditions for other types if needed
    return null;
  };

  return (
    <VerticalTimeline lineColor={"#f7c269"}>
      {timeline.map((item, index) => (
        <VerticalTimelineElement
          key={item.id}
          className="vertical-timeline-element--item"
          contentStyle={{
            background: "#31333B",

            color: "#fff",
            boxShadow:
              "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  #31333B",
          }}
          date={item.date}
          dateClassName={"timeline-date"}
          iconStyle={{
            background: "#272829",
            color: "#f7c269",
            boxShadow: "0 0 0 4px #f7c269",
          }}
          icon={determineIcon(item.type)}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{
              color: "#f7c269",
              fontWeight: 500,
              paddingBottom: "0.4rem",
            }}
          >
            {item.title}
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{ fontWeight: "300", marginBottom: "1rem" }}
          >
            {item.institution}
          </h4>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {Array.isArray(item.skills) &&
              item.skills.map((element, idx) => (
                <Card
                  style={{
                    backgroundColor: "#8c8c8c",
                    padding: "0.2rem 0.5rem",
                    borderRadius: "1rem",
                    margin: "7px 5px 0 0",
                    fontSize: "small",
                    color: "#272829",
                  }}
                  key={idx}
                >
                  {element}
                </Card>
              ))}
            <p
              style={{
                fontWeight: 400,
                fontSize: "0.9rem",
              }}
            >
              {item.subtitle}
            </p>
          </div>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default VerticalTimelineComponent;
