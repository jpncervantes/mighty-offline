import styled from "styled-components";

/* Primary */
export const PrimaryButtonLFW = styled.button`
  /* primary button large full width */
  display: flex;
  justify-content: center;
  align-items: center;

  width: 343px;
  padding-top: 16px;
  padding-bottom: 16px;
  color: #0d1813;

  font-size: 17px;
  font-weight: bold;
  background: #3cff00;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3);

  border-radius: 100px;

  &:hover {
    background: #39d40b; /* Darker green for hover effect */
  }

  &:disabled {
    background: #6d6d6d; /* Lighter green or gray for disabled state */
    box-shadow: none; /* Remove shadow for disabled state */
    cursor: unset; /* Change cursor to indicate disabled state */
  }
`;

export const PrimaryButtonLSMI = styled.button`
  /* primary button large with social media icon */
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 20px;
  padding-right: 20px;
  gap: 4px;

  font-size: 17px;
  font-weight: bold;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3);

  border-radius: 100px;

  &:disabled {
    background: #6d6d6d; /* Lighter green or gray for disabled state */
    box-shadow: none; /* Remove shadow for disabled state */
    cursor: unset; /* Change cursor to indicate disabled state */
  }
`;

export const PrimaryButtonS = styled.button`
  /* primary button small */
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 20px;
  padding-right: 20px;
  color: #0d1813;
  font-family: 'Mulish';

  font-size: 14px;
  font-weight: bold;
  background: #3cff00;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3);

  border-radius: 100px;

  &:hover {
    background: #39d40b; /* Darker green for hover effect */
  }

  &:disabled {
    background: #6d6d6d; /* Lighter green or gray for disabled state */
    box-shadow: none; /* Remove shadow for disabled state */
    cursor: unset; /* Change cursor to indicate disabled state */
  }
`;

export const PrimaryButtonTI = styled.button`
  /* primary button text icon */
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 20px;
  padding-right: 20px;
  gap: 4px;
  color: #0d1813;

  font-size: 14px;
  font-weight: bold;
  background: #3cff00;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3);

  border-radius: 100px;

  &:hover {
    background: #39d40b; /* Darker green for hover effect */
  }

  &:disabled {
    background: #6d6d6d; /* Lighter green or gray for disabled state */
    box-shadow: none; /* Remove shadow for disabled state */
    cursor: unset; /* Change cursor to indicate disabled state */
  }
`;

/* Secondary */

export const SecondaryButtonLFW = styled.button`
  /* secondary button large full width */
  display: flex;
  justify-content: center;
  align-items: center;

  width: 343px;
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: transparent; /* Transparent background */

  font-size: 17px;
  font-weight: bold;
  color: #ffffff;

  border-style: solid;
  border-width: 1px;
  border-color: #ffffff;

  border-radius: 100px;

  &:hover {
    border-color: #3cff00; /* Darker green for hover effect */
    color: #3cff00; /* Darker green for hover effect */
    background-color: transparent; /* Transparent background */
  }

  &:disabled {
    border-color: #6d6d6d;
    background: #6d6d6d; /* Lighter green or gray for disabled state */
    color: #0d1813;
    cursor: unset; /* Change cursor to indicate disabled state */
  }
`;

export const SecondaryButtonS = styled.button`
  /* secondary button small */
  display: flex;
  justify-content: center;
  align-items: center;

  color: #ffffff;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: transparent; /* Transparent background */

  font-size: 14px;
  font-weight: bold;

  border-style: solid;
  border-width: 1px;
  border-color: #ffffff;
  border-radius: 100px;

  &:hover {
    border-color: #3cff00; /* Darker green for hover effect */
    color: #3cff00; /* Darker green for hover effect */
    background-color: transparent; /* Transparent background */
  }

  &:disabled {
    border-color: #6d6d6d;
    background: #6d6d6d; /* Lighter green or gray for disabled state */
    cursor: unset; /* Change cursor to indicate disabled state */
    color: #0d1813;
  }
`;

/* Tertiary */
export const TertiaryButtonTLB = styled.button`
  /* Tertiary Button Text Link Big*/
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 17px;
  font-weight: bold;
  color: #ffffff;
  text-decoration: underline;
  background-color: transparent; /* Transparent background */

  &:hover {
    color: #3cff00; /* Darker green for hover effect */
    background-color: transparent; /* Transparent background */
  }

  &:disabled {
    color: #6d6d6d; /* Lighter green or gray for disabled state */
    cursor: unset; /* Change cursor to indicate disabled state */
    background-color: transparent; /* Transparent background */
  }
`;

export const TertiaryButtonTLS = styled.button`
  /* Tertiary Button Text Link Small*/
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  text-decoration: underline;
  background-color: transparent; /* Transparent background */

  &:hover {
    color: #3cff00; /* Darker green for hover effect */
    background-color: transparent; /* Transparent background */
  }

  &:disabled {
    color: #6d6d6d; /* Lighter green or gray for disabled state */
    cursor: unset; /* Change cursor to indicate disabled state */
    background-color: transparent; /* Transparent background */
  }
`;

export const TertiaryButtonTLIv1 = styled.button`
  /* Tertiary Button Text Link with Icon v1*/
  display: flex;
  justify-content: center;
  align-items: center;

  border-style: solid;
  border-width: 1px;
  border-color: #ffffff;
  border-radius: 100px;

  color: #ffffff;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 4px;
  background-color: transparent; /* Transparent background */

  font-size: 13px;
  font-weight: bold;

  .icon {
    stroke: #ffffff;
    width: 15px !important;
    height: 15px !important;
  }

  @media (min-width: 769px) {
    /* Adjust the breakpoint as needed */
    &:hover {
      border-color: #3cff00;
      background-color: transparent; /* Transparent background */
      color: #3cff00; /* Darker green for hover effect */

      .icon {
        stroke: #3cff00; /* Change stroke color on hover */
      }
    }
  }
  @media (max-width: 768px) {
    /* Adjust the breakpoint as needed */
    &:hover {
      border-color: #ffffff;
      background-color: transparent; /* Transparent background */
      color: #ffffff;

      .icon {
        stroke: #ffffff;
      }
    }
  }

  &:disabled {
    border-color: #6d6d6d;
    color: #0d1813; /* Lighter green or gray for disabled state */
    cursor: unset; /* Change cursor to indicate disabled state */
    background-color: #6d6d6d; /* Transparent background */

    .icon {
      stroke: #0d1813; /* Change stroke color on hover */
    }
  }
`;

export const TertiaryButtonTLIv2 = styled.button`
  /* Tertiary Button Text Link with Icon v2*/
  display: flex;
  justify-content: center;
  align-items: center;

  color: #ffffff;
  gap: 8px;
  background-color: transparent; /* Transparent background */

  font-size: 13px;
  font-weight: bold;
  text-decoration: underline;

  .icon {
    stroke: #ffffff;
    width: 24px !important;
    height: 24px !important;
  }

  &:hover {
    color: #3cff00; /* Darker green for hover effect */
    background-color: transparent; /* Transparent background */

    .icon {
      stroke: #3cff00; /* Change stroke color on hover */
    }
  }

  &:disabled {
    color: #6d6d6d; /* Lighter green or gray for disabled state */
    cursor: unset; /* Change cursor to indicate disabled state */
    background-color: transparent; /* Transparent background */

    .icon {
      stroke: #6d6d6d; /* Change stroke color on hover */
    }
  }
`;

export const TertiaryButtonSTL = styled.button`
  /* Tertiary Button Secondary Text Link*/
  display: flex;
  justify-content: center;
  align-items: center;

  color: #ffffff;
  font-size: 13px;
  font-weight: light;
  text-decoration: underline;
  background-color: transparent; /* Transparent background */

  &:hover {
    color: #3cff00; /* Darker green for hover effect */
    background-color: transparent; /* Transparent background */
  }

  &:disabled {
    color: #6d6d6d; /* Lighter green or gray for disabled state */
    cursor: unset; /* Change cursor to indicate disabled state */
    background-color: transparent; /* Transparent background */
  }
`;

export const RejuvCopModalButton = styled(PrimaryButtonLFW)`
  width: 297px;
  min-height: 42px;
  box-sizing: border-box;

  padding: 0 20px;
  font-size: unset;

  white-space: nowrap;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SmsButton = styled(PrimaryButtonLFW)`
  margin-top: 32px;
`;

export const ViberButton = styled(PrimaryButtonLSMI)`
  background-color: #7360f2;
  color: #ffffff;
  width: 343px;
  gap: 6px;

  img {
    position: relative;
    top: 2px; /* move logo slightly lower */
  }

  &:hover {
    background-color: #5b4ac2;
  }
  &:disabled {
    background: #6d6d6d;
    box-shadow: none;
    cursor: unset;
    color: #0d1813;
  }
  &:disabled img {
    filter: brightness(0);
  }
`;
