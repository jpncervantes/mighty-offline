import { AccordionSummary, Drawer } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CloseButton, CloseButtonContainer, SidebarContainer, SidebarContent, StyledAccordion, StyledAccordionDetails } from "../styled-components/StyledNavigation";
import { Captionv2, Header4, Paragraph2v1 } from "../styled-components/StyledText";
import { HEADER_MENU_REJUV } from "../constants/header-constants";

const Sidebar = ({ open, onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedAccordionItem, setSelectedAccordionItem] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());

  const formatAsOfDate = (dateObj) => {
    // Get the date in YYYY-MM-DD format
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const day = String(dateObj.getDate()).padStart(2, "0"); // Pad single digits with zero

    // Get the time in 12-hour format with AM/PM
    let hours = dateObj.getHours();
    const minutes = String(dateObj.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? String(hours).padStart(2, "0") : "12"; // the hour '0' should be '12'

    return `As of ${year}-${month}-${day} | ${hours}:${minutes} ${ampm}`;
  };

  useEffect(() => {
    setSelectedAccordionItem("");
  }, [open]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const clickNavItem = (item) => {
    onClose();
    navigate(item.route);
  };

  const handleAccordionItemClick = (route) => {
    onClose();
    navigate(route);
  };

  const handleAccordionClick = (accordionNavItem) => {
    if (selectedAccordionItem === accordionNavItem) {
      setSelectedAccordionItem(""); // Collapse if already selected
      return;
    }
    setSelectedAccordionItem(accordionNavItem);
  };

  const filteredMenuItems = HEADER_MENU_REJUV.map((item) => {
    return item;
  });

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: "100%", // Full width
          height: "100%", // Full height
          backgroundColor: "#000000", // Background color
        },
      }}
      className="mobile-sidebar"
    >
      <SidebarContainer>
        {/* Close Button */}
        <CloseButtonContainer>
          <div
            style={{ gap: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}
            onClick={onClose}
          >
            <CloseButton>CLOSE</CloseButton>
          </div>
        </CloseButtonContainer>

        {/* Profile Section */}
        <div
          style={{ paddingLeft: "32px", paddingRight: "32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}
          onClick={() => {
            onClose();
            navigate("/profile");
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{ width: "79px", height: "60px", display: "flex", justifyContent: "center", alignItems: "center" }}
            >
            </div>
            <Header4
              style={{
                paddingLeft: "8px",
                color: `${location.pathname.includes("/profile") ? "#3CFF00" : "white"}`,
              }}
            >
              Jane Doe
            </Header4>
          </div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 6.486L14.328 10.814C14.5737 11.061 14.7116 11.3952 14.7116 11.7435C14.7116 12.0918 14.5737 12.426 14.328 12.673L10 17"
              stroke={`${location.pathname.includes("/profile") ? "#3cff00" : "white"}`}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div
          style={{
            marginLeft: "16px",
            marginRight: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              paddingLeft: "16px",
              paddingRight: "16px",
              paddingBottom: "32px",
              borderBottom: "1px solid gray",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
            onClick={() => {
              onClose();
              navigate("/katibay-info");
            }}
          >
              <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img
                  className="badge"
                  src={'./badge.png'
                  }
                  alt=""
                  loading="lazy"
                  width={79}
                  height={60}
                />
              </div>
              <div style={{ paddingLeft: "8px" }}>
                <Header4>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      color: `${location.pathname.includes("/katibay-info") ? "#3CFF00" : "white"}`,
                    }}
                  >
                    <img
                      className="profile-pic"
                      src={'/header-coins.png'}
                      alt=""
                      loading="lazy"
                      width={40}
                      height={40}
                    />
                    10 ASTIG POINTS
                  </div>
                </Header4>
                <Captionv2
                  style={{
                    color: `${location.pathname.includes("/katibay-info") ? "#3CFF00" : "white"}`,
                  }}
                >
                  {formatAsOfDate(currentTime)}
                </Captionv2>
              </div>
            </div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 6.486L14.328 10.814C14.5737 11.061 14.7116 11.3952 14.7116 11.7435C14.7116 12.0918 14.5737 12.426 14.328 12.673L10 17"
                stroke={`${location.pathname.includes("/katibay-info") ? "#3cff00" : "white"}`}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Sidebar Content with Styled Accordions */}
        <SidebarContent>
          {filteredMenuItems.map((item, index) =>
            item.submenu ? (
              <StyledAccordion
                key={index}
                expanded={selectedAccordionItem === item.label + index}
              >
                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  onClick={() => {
                    if (item.submenu.length > 0) {
                      handleAccordionClick(item.label + index);
                    }
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                    <span
                      className="paragraph2v1"
                      style={{
                        paddingLeft: "16px",
                        color:
                          item.submenu.length === 0
                            ? "#A3A3A3"
                            : selectedAccordionItem === item.label + index ||
                                location.pathname.includes(item.route)
                              ? "#3cff00"
                              : "",
                      }}
                    >
                      {item.label}
                    </span>

                    {selectedAccordionItem === item.label + index ? (
                      <div style={{ paddingRight: "16px" }}>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.514 14L13.186 9.672C12.939 9.42633 12.6048 9.28843 12.2565 9.28843C11.9082 9.28843 11.574 9.42633 11.327 9.672L7 14"
                            stroke="#3CFF00"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    ) : (
                      <div style={{ paddingRight: "16px" }}>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.514 10L13.186 14.328C12.939 14.5737 12.6048 14.7116 12.2565 14.7116C11.9082 14.7116 11.574 14.5737 11.327 14.328L7 10"
                            stroke={`${item.submenu.length === 0 ? "#A3A3A3" : location.pathname.includes(item.route) ? "#3cff00" : "white"}`}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </AccordionSummary>
                <StyledAccordionDetails>
                  {item.submenu.map((subItem, subIndex) => (
                    <span
                      key={subIndex}
                      onClick={() =>
                        !subItem.disable &&
                        handleAccordionItemClick(subItem.route)
                      }
                      className="paragraph3v2"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "12px 12px 12px 44px",
                        background: location.pathname.includes(subItem.route)
                          ? "#3cff00"
                          : "",
                        opacity: subItem.disable ? 0.5 : 1,
                        borderRadius: "5px",
                      }}
                    >
                      {subItem.label}
                      <div
                        className="header-item-label"
                        style={{ gap: "4px", display: "flex" }}
                      >
                        {subItem?.isNew && (
                          <div className={`is-new-label`}>NEW</div>
                        )}
                        {subItem.secondLabel && (
                          <div
                            className={`pill-navigation ${location.pathname.includes(subItem.route) ? "#3cff00" : ""}`}
                          >
                            {subItem.secondLabel}
                          </div>
                        )}
                      </div>
                    </span>
                  ))}
                </StyledAccordionDetails>
              </StyledAccordion>
            ) : (
              <Paragraph2v1
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  paddingLeft: "32px",
                  margin: "12px 0",
                  color: location.pathname.includes(item.route)
                    ? "#3cff00"
                    : "",
                }}
                onClick={() => clickNavItem(item)}
              >
                {item.label}
              </Paragraph2v1>
            ),
          )}
        </SidebarContent>
        {/* Logout */}
        <div
          className="logout-container"
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            gap: "9px",
            padding: "0px 16px 35px 16px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              width: "100%",
              padding: "32px 16px 0px 16px",
              borderTop: "1px solid gray",
              gap: "10px",
            }}
          >
            <Paragraph2v1 className="logout-text">LOGOUT</Paragraph2v1>
            <svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.39844 4.72344C6.59219 2.47344 7.74844 1.55469 10.2797 1.55469H10.3609C13.1547 1.55469 14.2734 2.67344 14.2734 5.46719V9.54219C14.2734 12.3359 13.1547 13.4547 10.3609 13.4547H10.2797C7.76719 13.4547 6.61094 12.5484 6.40469 10.3359"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.2141 7.5H3.10156"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.49219 5.40625L2.39844 7.5L4.49219 9.59375"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </SidebarContainer>
    </Drawer>
  );
};

export default Sidebar;
