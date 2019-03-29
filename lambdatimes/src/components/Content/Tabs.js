import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Tab from "./Tab";

const Tabs = props => {
  return (
    <TabsStyles>
      <Topics>
        <Title>TRENDING TOPICS:</Title>

        {props.tabs.map((tab, i) => {
          return (
            <Tab
              key={i}
              tab={tab}
              selectTabHandler={props.selectTabHandler}
              selectedTab={props.selectedTab}
            />
          );
        })}
      </Topics>
    </TabsStyles>
  );
};

const TabsStyles = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const Topics = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
`;
const Title = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;
Tabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired
};

export default Tabs;
