import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Tab = props => {
  return (
    <TabStyles
      active={props.tab === props.selectedTab ? "active-tab" : ""}
      onClick={() => {
        props.selectTabHandler(props.tab);
      }}
    >
      {props.tab.toUpperCase()}
    </TabStyles>
  );
};
Tab.defaultProp = {
  active: PropTypes.string
};
const activeTabMixin = css`
  background-color: #fff;
  color: #333;
  border: 2px solid #333;
`;

const TabStyles = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
  ${props => (props.active ? activeTabMixin : "")}
`;

Tab.propTypes = {
  tab: PropTypes.string.isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired
};
export default Tab;
