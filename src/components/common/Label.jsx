import React, { Children } from "react";
import styled from "@emotion/styled";

const LabelHeading = styled.h1`
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.fontsize};
  line-height: ${(props) => props.lineheigth};
  color: ${(props) => props.color || "black"};
  position: ${(props) => props.position};
  margin-top: 18px;
  margin-bottom: 22px;
  text-align: ${(props) => props.textalign || "left"};
`;

const LabelHeadingSecond = styled.h2`
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.fontsize};
  line-height: ${(props) => props.lineheigth};
  color: ${(props) => props.color || "black"};
  position: ${(props) => props.position};
  margin-top: 18px;
  margin-bottom: 0;
  text-align: ${(props) => props.textalign || "left"};
`;

const LabelHeadingThird = styled.h3`
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.fontsize};
  line-height: ${(props) => props.lineheigth};
  color: ${(props) => props.color || "black"};
  position: ${(props) => props.position};
  padding-right: ${(props) => props.paddingright};
  margin-top: 6px;
  margin-bottom: ${(props) => props.marginbottom || "6px"};
  text-align: ${(props) => props.textalign || "left"};
  width: ${(props) => props.width};
`;

const LabelPara = styled.p`
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.fontsize};
  line-height: 22px;
  letter-spacing: 0.02em;
  color: ${(props) => props.color || "black"};
  margin: ${(props) => props.margin};
  border-bottom: ${(props) => props.bbottom};
  max-height: ${(props) => props.maxheight};
  overflow-y: ${(props) => props.overflowy};
  overflow-wrap: ${(props) => props.overwrap};
  white-space: ${(props) => props.whitespace};
`;

const Label = ({
  heading = false,
  content = "",
  contentHeading = false,
  headingthird = false,
  color = "",
  fontsize = "",
  weight = "",
  position = "",
  textalign = "",
  margin = "",
  headingsecond = false,
  className = "",
  id = "",
  children,
  lineheigth = "",
  marginbottom = "",
  paddingright = "",
  width = "",
  bbottom = "",
  maxheight = "",
  overflowy = "",
  overwrap = "",
  whitespace = "",
}) => {
  if (heading) {
    return (
      <div className="container">
        <LabelHeading
          color={color}
          fontsize={fontsize}
          weight={weight}
          position={position}
          textalign={textalign}
          className={className}
          id={id}
          content={content}
          lineheigth={lineheigth}
        >
          {children}
        </LabelHeading>
      </div>
    );
  }

  if (headingsecond) {
    return (
      <LabelHeadingSecond
        color={color}
        fontsize={fontsize}
        weight={weight}
        position={position}
        textalign={textalign}
        margin={margin}
        className={className}
        id={id}
        content={content}
        lineheigth={lineheigth}
      >
        {children}
      </LabelHeadingSecond>
    );
  }

  if (headingthird) {
    return (
      <LabelHeadingThird
        color={color}
        fontsize={fontsize}
        weight={weight}
        position={position}
        textalign={textalign}
        margin={margin}
        className={className}
        lineheigth={lineheigth}
        id={id}
        marginbottom={marginbottom}
        paddingright={paddingright}
        width={width}
      >
        {children}
      </LabelHeadingThird>
    );
  }

  if (contentHeading)
    return (
      <LabelPara
        color={color}
        fontsize={fontsize}
        weight={weight}
        textalign={textalign}
        className={className}
        margin={margin}
        bbottom={bbottom}
        maxheight={maxheight}
        overflowy={overflowy}
        overwrap={overwrap}
        whitespace={whitespace}
      >
        {children}
      </LabelPara>
    );
};

export default Label;
