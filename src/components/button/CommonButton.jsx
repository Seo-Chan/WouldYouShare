import styled from "styled-components";

/**
 *
 * @param {{size: "lg"|"md"|"ms"|"sm" ; fontColor: "selectColor" ; bgColor: "main"|"accent"|"light"|"white";  onClick: "eventprops" ; disabled: "false"|"true" ; children: "buttonText"}} param0
 * @returns
 */
function CommonButton({
  size,
  fontColor,
  bgColor,
  onClick,
  disabled,
  children,
  ...rest
}) {
  return (
    <ButtonContainer
      size={size}
      fontColor={fontColor}
      bgColor={bgColor}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </ButtonContainer>
  );
}

export default CommonButton;

const ButtonContainer = styled.button`
  width: ${(props) => {
    switch (props.size) {
      case "lg":
        return "322px";
      case "md":
        return "120px";
      case "ms":
        return "90px";
      case "sm":
        return "56px";
      default:
        return "120px";
    }
  }};
  height: ${(props) => {
    switch (props.size) {
      case "lg":
        return "44px";
      case "md":
        return "34px";
      case "ms":
        return "32px";
      case "sm":
        return "28px";
      default:
        return "34px";
    }
  }};
  padding: ${(props) => {
    switch (props.size) {
      case "lg":
        return "13px 0";
      case "md":
        return "8px 0;";
      case "ms":
        return "7px 0;";
      case "sm":
        return "7px 0";
      default:
        return "8px";
    }
  }};
  border-radius: ${(props) => {
    switch (props.size) {
      case "lg":
        return "44px";
      case "md":
        return "30px";
      case "ms":
        return "32px";
      case "sm":
        return "26px";
      default:
        return "30px";
    }
  }};
  border: ${(props) =>
    props.bgColor === "white" ? "1px solid #dbdbdb" : "none"};
  font-family: inherit;
  font-weight: ${(props) => (props.size === "sm" ? "400" : "500")};

  font-size: ${(props) => (props.size === "sm" ? "1.2rem" : "1.4rem")};

  color: ${(props) => (props.fontColor ? props.fontColor : "white")};
  background-color: ${(props) => {
    switch (props.bgColor) {
      case "main":
        return props.theme.button;
      case "accent":
        return props.theme.accentColor;
      case "light":
        return props.theme.disabledButton;
      case "white":
        return props.theme.bgColor;
      default:
        return props.theme.mainColor;
    }
  }};
  cursor: pointer;
  line-height: ${(props) => (props.size === "sm" ? "15px" : "20px")};
  flex-shrink: 0;
`;
