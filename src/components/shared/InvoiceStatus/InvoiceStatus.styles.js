import styled from "styled-components";

const StatusWrapper = styled.div`
  position: ${(props) => (props.position ? props.position : "static")};
  bottom: 20px;
  right: 20px;
  width: 104px;
  height: 40px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-weight: bold;
  text-transform: capitalize;

  ${(props) => {
    if (props.status === "paid") {
      return `background-color: rgba(${props.theme.status.paid}, 0.1); color: rgb(${props.theme.status.paid});`;
    }
    if (props.status === "pending") {
      return `background-color: rgba(${props.theme.status.pending}, 0.1); color: rgb(${props.theme.status.pending});`;
    }
    if (props.status === "draft") {
      return `background-color: rgba(${props.theme.status.draft}, 0.1); color: rgb(${props.theme.status.draft});`;
    }
  }}

  @media only screen and (min-width: 768px) {
    position: static;
    bottom: unset;
    right: unset;
  }
`;

export { StatusWrapper };
