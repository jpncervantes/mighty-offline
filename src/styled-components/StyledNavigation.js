import { Accordion, AccordionDetails, Menu, MenuItem } from "@mui/material";
import styled from "styled-components";

export const Navbar = styled.header`
  height: ${(p) => (p.$showSnackbar ? "175px" : "150px")};

  background-color: black;
  position: fixed;
  width: 100%;
  z-index: 3;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    height: ${(p) => (p.$showSnackbar ? "100px" : "80px")};
    flex-direction: column;
  }
`;

export const NavItem = styled.span`
  font-family: Mulish;
  font-weight: 700;
  font-size: 13px;
  color: ${(val) => (val.$disable ? "#A3A3A3" : val.$active)};
  position: relative;
  cursor: ${(val) => (val.$disable ? "unset" : "pointer")};
  gap: 5px;
  display: flex;
  align-items: center;

  &:hover {
    color: ${(val) => (val.$disable ? "#A3A3A3" : "#3cff00")};
    svg path {
      stroke: ${(val) =>
        val.$disable
          ? "#A3A3A3 !important"
          : "#3cff00 !important"}; /* Change stroke color on hover */
    }
  }
`;

export const StyledMenu = styled(Menu)`
  & .MuiPaper-root {
    background-color: #ffffffff;
    border-radius: 5px;
    min-width: 180px;
    margin-top: 30px;
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  &.MuiMenuItem-root {
    transition: background 0.2s;
    margin-right: 5px;
    margin-left: 5px;
    border-radius: 3px;
    opacity: ${(val) => (val.$disable ? 0.5 : 1)};
    background-color: ${(val) => val.$active};
    cursor: ${(val) => (val.$disable ? "unset" : "pointer")};
  }
  &.MuiMenuItem-root:hover {
    background-color: ${(val) =>
      val.$disable ? "#fff" : "#3cff00"} !important;
  }
`;
//sidebar styled components
export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background: #000;
  color: #ffff;
  gap: 12px;
`;

export const CloseButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 16px;
  align-items: center;
  gap: 10px;
  margin-top: 15px;
`;

export const CloseButton = styled.span`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: #ffff;
  font-family: Mulish;
  font-weight: 800;
`;

export const SidebarContent = styled.div`
  flex: 1;
  color: #ffff;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 8px;
  margin-bottom: 30px;
`;

export const StyledAccordion = styled(Accordion)`
  font-family: Muli;

  &.MuiAccordion-root {
    background-color: transparent; /* Transparent background */
    box-shadow: none; /* Remove default shadow */
    margin: 0; /* Remove margin between accordions */
    border: none; /* Remove border */
    color: #fff;
    font-family: Muli !important;

    &:before {
      display: none; /* Remove the default MUI divider line */
    }

    &.Mui-expanded {
      margin: 0; /* Ensure no margin when expanded */
    }

    &.Mui-expanded .MuiAccordionDetails-root {
      background-color: #fff; /* Darker background for expanded content */
      color: #000;
      font-family: Muli !important;
      padding-top: 16px;
    }

    &:focus,
    &:active,
    &:hover {
      background-color: none;
    }
    & .MuiAccordionSummary-root {
      &:hover {
        background-color: #000 !important;
      }
    }
  }
`;

export const StyledAccordionDetails = styled(AccordionDetails)`
  background-color: transparent;
  padding: 16px;
  border-top: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const NavigationTab = styled.button`
  background: ${({ $active }) => ($active ? "#F2F4F8" : "#011E0B59")};
  box-shadow: ${({ $active }) =>
    $active ? "0px 20px 40px 0px #0000004D" : "none"};
  color: ${({ $active }) => ($active ? "#0D1813" : "#FFF")};
  border: none;
  outline: none;
  cursor: pointer;
  padding: 12px 24px;
  margin-right: 8px;
  border-radius: 100px;
  background-blend-mode: multiply;
  font-family: Muli;
  transition: none;

  &:hover {
    background: ${({ $active }) => ($active ? "#F2F4F8" : "#011E0B59")};
  }

  &[aria-pressed="true"] {
    background: #f2f4f8;
    box-shadow: 0px 20px 40px 0px #0000004d;
    color: #0d1813;
  }
`;
