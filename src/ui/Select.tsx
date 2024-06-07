import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 20em;
  min-height: 1.5em;
  border: 0.05em solid #777;
  display: flex;
  align-items: center;
  gap: 0.5em;
  padding: 0.5em;
  border-radius: 0.25em;
  outline: none;

  &:focus {
    border-color: hsl(200, 100%, 50%);
  }
`;

export const Value = styled.span`
  flex-grow: 1;
  display: flex;
  gap: 0.5em;
  flex-wrap: wrap;
`;

export const ClearButton = styled.button`
  background: none;
  color: #777;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  font-size: 1.25em;

  &:focus,
  &:focus {
    color: #333;
  }
`;

export const Divider = styled.div`
  background-color: #777;
  align-self: stretch;
  width: 0.05em;
`;

export const Caret = styled.div`
  translate: 0 25%;
  border: 0.25em solid transparent;
  border-top-color: #777;
`;

export const Options = styled.ul`
  position: absolute;
  display: none;
  margin: 0;
  padding: 0;
  list-style: none;
  max-height: 15em;
  overflow-y: auto;
  border: 0.05em solid #777;
  border-radius: 0.25em;
  width: 100%;
  left: 0;
  top: calc(100% + 0.25em);
  background-color: white;
  z-index: 100;

  &.show {
    display: block;
  }
`;

export const Option = styled.li`
  padding: 0.25em 0.5em;
  cursor: pointer;

  &.selected {
    background-color: hsl(200, 100%, 70%);
  }
  &.highlighted {
    background-color: hsl(200, 100%, 50%);
  }
`;

export const OptionButton = styled.button`
  display: flex;
  align-items: flex;
  border: 0.5em solid #777;
  border-radius: 0.25em;
  padding: 0.15em 0.25em;
  gap: 0.25em;
  cursor: pointer;
  background: none;
  outline: none;

  &:focus,
  &:hover {
    background-color: hsl(0, 100%, 90%);
    border-color: hsl(0, 100%, 50%);
  }

  &:focus > .remove-btn,
  &:hover > .remove-btn {
    color: hsl(0, 100%, 50%);
  }

  &.remove-btn {
    font-size: 1.25em;
    color: #777;
  }
`;
