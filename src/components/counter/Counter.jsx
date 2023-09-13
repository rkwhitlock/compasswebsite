import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const counterUpContent = [
  {
    startCount: "0",
    endCount: "3",
    metaText1: "+ PROJECTS",
    metaText2: "LAUNCHED",
    animationDelay: "0",
  },
  {
    startCount: "0",
    endCount: "30",
    metaText1: "+ ACTIVE",
    metaText2: "MEMBERS",
    animationDelay: "100",
  },
  {
    startCount: "0",
    endCount: "50",
    metaText1: "OTHER BRAGGING",
    metaText2: "POINT",
    animationDelay: "200",
  }
];

const Counter = () => {
  const [focus, setFocus] = React.useState(false);
  return (
    <div className="row" style={{ "--bs-gutter-y": "2rem" }}>
      {counterUpContent.map((val, i) => (
        <div className="col-6 col-lg-3" key={i}>
          {/* <!--Animated Block--> */}
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay={val.animationDelay}
          >
            {/* <!--Counter Up--> */}
            <div className="ptf-counter-up ptf-counter-up--style-1">
              <div className="ptf-counter-up__value">
                <CountUp
                  start={focus ? val.startCount : null}
                  end={val.endCount}
                  duration={1}
                  redraw={true}
                >
                  {({ countUpRef }) => (
                    <VisibilitySensor
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setFocus(true);
                        }
                      }}
                    >
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </div>
              <h5 className="ptf-counter-up__title">
                {val.metaText1} <br />
                {val.metaText2}
              </h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Counter;
