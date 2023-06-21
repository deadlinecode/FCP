import React from "react";
import "./Icon.scss";
import Fx from "../Fx";

export type IconName =
  | "activity"
  | "airplay"
  | "alert-circle"
  | "alert-octagon"
  | "alert-triangle"
  | "align-center"
  | "align-justify"
  | "align-left"
  | "align-right"
  | "anchor"
  | "aperture"
  | "archive"
  | "arrow-down-circle"
  | "arrow-down-left"
  | "arrow-down-right"
  | "arrow-down"
  | "arrow-left-circle"
  | "arrow-left"
  | "arrow-right-circle"
  | "arrow-right"
  | "arrow-up-circle"
  | "arrow-up-left"
  | "arrow-up-right"
  | "arrow-up"
  | "at-sign"
  | "award"
  | "bar-chart-2"
  | "bar-chart"
  | "battery-charging"
  | "battery"
  | "bell-off"
  | "bell"
  | "bluetooth"
  | "bold"
  | "book-open"
  | "book"
  | "bookmark"
  | "box"
  | "briefcase"
  | "calendar"
  | "camera-off"
  | "camera"
  | "cast"
  | "check-circle"
  | "check-square"
  | "check"
  | "chevron-down"
  | "chevron-left"
  | "chevron-right"
  | "chevron-up"
  | "chevrons-down"
  | "chevrons-left"
  | "chevrons-right"
  | "chevrons-up"
  | "chrome"
  | "circle"
  | "clipboard"
  | "clock"
  | "cloud-drizzle"
  | "cloud-lightning"
  | "cloud-off"
  | "cloud-rain"
  | "cloud-snow"
  | "cloud"
  | "code"
  | "codepen"
  | "codesandbox"
  | "coffee"
  | "columns"
  | "command"
  | "compass"
  | "copy"
  | "corner-down-left"
  | "corner-down-right"
  | "corner-left-down"
  | "corner-left-up"
  | "corner-right-down"
  | "corner-right-up"
  | "corner-up-left"
  | "corner-up-right"
  | "cpu"
  | "credit-card"
  | "crop"
  | "crosshair"
  | "database"
  | "delete"
  | "disc"
  | "divide-circle"
  | "divide-square"
  | "divide"
  | "dollar-sign"
  | "download-cloud"
  | "download"
  | "dribbble"
  | "droplet"
  | "edit-2"
  | "edit-3"
  | "edit"
  | "external-link"
  | "eye-off"
  | "eye"
  | "facebook"
  | "fast-forward"
  | "feather"
  | "figma"
  | "file-minus"
  | "file-plus"
  | "file-text"
  | "file"
  | "film"
  | "filter"
  | "flag"
  | "folder-minus"
  | "folder-plus"
  | "folder"
  | "framer"
  | "frown"
  | "gift"
  | "git-branch"
  | "git-commit"
  | "git-merge"
  | "git-pull-request"
  | "github"
  | "gitlab"
  | "globe"
  | "grid"
  | "hard-drive"
  | "hash"
  | "headphones"
  | "heart"
  | "help-circle"
  | "hexagon"
  | "home"
  | "image"
  | "inbox"
  | "info"
  | "instagram"
  | "italic"
  | "key"
  | "layers"
  | "layout"
  | "life-buoy"
  | "link-2"
  | "link"
  | "linkedin"
  | "list"
  | "loader"
  | "lock"
  | "log-in"
  | "log-out"
  | "mail"
  | "map-pin"
  | "map"
  | "maximize-2"
  | "maximize"
  | "meh"
  | "menu"
  | "message-circle"
  | "message-square"
  | "mic-off"
  | "mic"
  | "minimize-2"
  | "minimize"
  | "minus-circle"
  | "minus-square"
  | "minus"
  | "monitor"
  | "moon"
  | "more-horizontal"
  | "more-vertical"
  | "mouse-pointer"
  | "move"
  | "music"
  | "navigation-2"
  | "navigation"
  | "octagon"
  | "package"
  | "paperclip"
  | "pause-circle"
  | "pause"
  | "pen-tool"
  | "percent"
  | "phone-call"
  | "phone-forwarded"
  | "phone-incoming"
  | "phone-missed"
  | "phone-off"
  | "phone-outgoing"
  | "phone"
  | "pie-chart"
  | "play-circle"
  | "play"
  | "plus-circle"
  | "plus-square"
  | "plus"
  | "pocket"
  | "power"
  | "printer"
  | "radio"
  | "refresh-ccw"
  | "refresh-cw"
  | "repeat"
  | "rewind"
  | "rotate-ccw"
  | "rotate-cw"
  | "rss"
  | "save"
  | "scissors"
  | "search"
  | "send"
  | "server"
  | "settings"
  | "share-2"
  | "share"
  | "shield-off"
  | "shield"
  | "shopping-bag"
  | "shopping-cart"
  | "shuffle"
  | "sidebar"
  | "skip-back"
  | "skip-forward"
  | "slack"
  | "slash"
  | "sliders"
  | "smartphone"
  | "smile"
  | "speaker"
  | "square"
  | "star"
  | "stop-circle"
  | "sun"
  | "sunrise"
  | "sunset"
  | "table"
  | "tablet"
  | "tag"
  | "target"
  | "terminal"
  | "thermometer"
  | "thumbs-down"
  | "thumbs-up"
  | "toggle-left"
  | "toggle-right"
  | "tool"
  | "trash-2"
  | "trash"
  | "trello"
  | "trending-down"
  | "trending-up"
  | "triangle"
  | "truck"
  | "tv"
  | "twitch"
  | "twitter"
  | "type"
  | "umbrella"
  | "underline"
  | "unlock"
  | "upload-cloud"
  | "upload"
  | "user-check"
  | "user-minus"
  | "user-plus"
  | "user-x"
  | "user"
  | "users"
  | "video-off"
  | "video"
  | "voicemail"
  | "volume-1"
  | "volume-2"
  | "volume-x"
  | "volume"
  | "watch"
  | "wifi-off"
  | "wifi"
  | "wind"
  | "x-circle"
  | "x-octagon"
  | "x-square"
  | "x"
  | "youtube"
  | "zap-off"
  | "zap"
  | "zoom-in"
  | "zoom-out";

export enum IconType {
  Thin = "0.5px",
  Light = "1.0px",
  Regular = "1.5px",
  Bold = "2px",
  Bolder = "2.5px",
}

export enum IconSize {
  XXXS = "10px",
  XXS = "12.5px",
  XS = "15px",
  S = "17.5px",
  M = "20px",
  L = "25px",
  XL = "30px",
  XXL = "35px",
  XXXL = "40px",
  XXXXL = "45px",
}

export interface IconProps {
  name: IconName;
  type?: IconType;
  size?: IconSize;
  className?: string;
  onClick?: (ev: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}

export default (props: IconProps) => {
  const size = props.size === undefined ? IconSize.M : props.size,
    svgProps: React.SVGProps<SVGSVGElement> = {
      strokeWidth: props.type === undefined ? IconType.Regular : props.type,
      onClick: props.onClick,
      style: {
        maxWidth: size,
        maxHeight: size,
        width: size,
        height: "auto",
        cursor: props.onClick === undefined ? undefined : "pointer",
      },
    };
  switch (props.name) {
    case "activity":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_activity",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
        </div>
      );
    case "airplay":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_airplay",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
            <polygon points="12 15 17 21 7 21 12 15"></polygon>
          </svg>
        </div>
      );
    case "alert-circle":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_alert-circle",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        </div>
      );
    case "alert-octagon":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_alert-octagon",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        </div>
      );
    case "alert-triangle":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_alert-triangle",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
        </div>
      );
    case "align-center":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_align-center",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="10" x2="6" y2="10"></line>
            <line x1="21" y1="6" x2="3" y2="6"></line>
            <line x1="21" y1="14" x2="3" y2="14"></line>
            <line x1="18" y1="18" x2="6" y2="18"></line>
          </svg>
        </div>
      );
    case "align-justify":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_align-justify",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="21" y1="10" x2="3" y2="10"></line>
            <line x1="21" y1="6" x2="3" y2="6"></line>
            <line x1="21" y1="14" x2="3" y2="14"></line>
            <line x1="21" y1="18" x2="3" y2="18"></line>
          </svg>
        </div>
      );
    case "align-left":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_align-left",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="17" y1="10" x2="3" y2="10"></line>
            <line x1="21" y1="6" x2="3" y2="6"></line>
            <line x1="21" y1="14" x2="3" y2="14"></line>
            <line x1="17" y1="18" x2="3" y2="18"></line>
          </svg>
        </div>
      );
    case "align-right":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_align-right",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="21" y1="10" x2="7" y2="10"></line>
            <line x1="21" y1="6" x2="3" y2="6"></line>
            <line x1="21" y1="14" x2="3" y2="14"></line>
            <line x1="21" y1="18" x2="7" y2="18"></line>
          </svg>
        </div>
      );
    case "anchor":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_anchor",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="5" r="3"></circle>
            <line x1="12" y1="22" x2="12" y2="8"></line>
            <path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>
          </svg>
        </div>
      );
    case "aperture":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_aperture",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
            <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
            <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
            <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
            <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
            <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
          </svg>
        </div>
      );
    case "archive":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_archive",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="21 8 21 21 3 21 3 8"></polyline>
            <rect x="1" y="3" width="22" height="5"></rect>
            <line x1="10" y1="12" x2="14" y2="12"></line>
          </svg>
        </div>
      );
    case "arrow-down-circle":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_arrow-down-circle",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="8 12 12 16 16 12"></polyline>
            <line x1="12" y1="8" x2="12" y2="16"></line>
          </svg>
        </div>
      );
    case "arrow-down-left":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_arrow-down-left",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="17" y1="7" x2="7" y2="17"></line>
            <polyline points="17 17 7 17 7 7"></polyline>
          </svg>
        </div>
      );
    case "arrow-down-right":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_arrow-down-right",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="7" y1="7" x2="17" y2="17"></line>
            <polyline points="17 7 17 17 7 17"></polyline>
          </svg>
        </div>
      );
    case "arrow-down":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_arrow-down",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </div>
      );
    case "arrow-left-circle":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_arrow-left-circle",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 8 8 12 12 16"></polyline>
            <line x1="16" y1="12" x2="8" y2="12"></line>
          </svg>
        </div>
      );
    case "arrow-left":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_arrow-left",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </div>
      );
    case "arrow-right-circle":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_arrow-right-circle",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 16 16 12 12 8"></polyline>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
        </div>
      );
    case "arrow-right":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_arrow-right",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      );
    case "arrow-up-circle":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_arrow-up-circle",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="16 12 12 8 8 12"></polyline>
            <line x1="12" y1="16" x2="12" y2="8"></line>
          </svg>
        </div>
      );
    case "arrow-up-left":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_arrow-up-left",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="17" y1="17" x2="7" y2="7"></line>
            <polyline points="7 17 7 7 17 7"></polyline>
          </svg>
        </div>
      );
    case "arrow-up-right":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_arrow-up-right",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
      );
    case "arrow-up":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_arrow-up",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="19" x2="12" y2="5"></line>
            <polyline points="5 12 12 5 19 12"></polyline>
          </svg>
        </div>
      );
    case "at-sign":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_at-sign",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
          </svg>
        </div>
      );
    case "award":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_award",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="8" r="7"></circle>
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
          </svg>
        </div>
      );
    case "bar-chart-2":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_bar-chart-2",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="20" x2="18" y2="10"></line>
            <line x1="12" y1="20" x2="12" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="14"></line>
          </svg>
        </div>
      );
    case "bar-chart":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_bar-chart",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="20" x2="12" y2="10"></line>
            <line x1="18" y1="20" x2="18" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="16"></line>
          </svg>
        </div>
      );
    case "battery-charging":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_battery-charging",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path>
            <line x1="23" y1="13" x2="23" y2="11"></line>
            <polyline points="11 6 7 12 13 12 9 18"></polyline>
          </svg>
        </div>
      );
    case "battery":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_battery",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect>
            <line x1="23" y1="13" x2="23" y2="11"></line>
          </svg>
        </div>
      );
    case "bell-off":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_bell-off",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            <path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path>
            <path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path>
            <path d="M18 8a6 6 0 0 0-9.33-5"></path>
            <line x1="1" y1="1" x2="23" y2="23"></line>
          </svg>
        </div>
      );
    case "bell":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_bell",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
        </div>
      );
    case "bluetooth":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_bluetooth",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>
          </svg>
        </div>
      );
    case "bold":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_bold",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
            <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
          </svg>
        </div>
      );
    case "book-open":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_book-open",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
        </div>
      );
    case "book":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_book",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
          </svg>
        </div>
      );
    case "bookmark":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_bookmark",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
        </div>
      );
    case "box":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_box",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
          </svg>
        </div>
      );
    case "briefcase":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_briefcase",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          </svg>
        </div>
      );
    case "calendar":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_calendar",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
        </div>
      );
    case "camera-off":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_camera-off",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="1" y1="1" x2="23" y2="23"></line>
            <path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>
          </svg>
        </div>
      );
    case "camera":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_camera",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
            <circle cx="12" cy="13" r="4"></circle>
          </svg>
        </div>
      );
    case "cast":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_cast",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
            <line x1="2" y1="20" x2="2.01" y2="20"></line>
          </svg>
        </div>
      );
    case "check-circle":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_check-circle",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
      );
    case "check-square":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_check-square",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 11 12 14 22 4"></polyline>
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
          </svg>
        </div>
      );
    case "check":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_check",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
      );
    case "chevron-down":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_chevron-down",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      );
    case "chevron-left":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_chevron-left",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </div>
      );
    case "chevron-right":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_chevron-right",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      );
    case "chevron-up":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_chevron-up",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </div>
      );
    case "chevrons-down":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_chevrons-down",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="7 13 12 18 17 13"></polyline>
            <polyline points="7 6 12 11 17 6"></polyline>
          </svg>
        </div>
      );
    case "chevrons-left":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_chevrons-left",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="11 17 6 12 11 7"></polyline>
            <polyline points="18 17 13 12 18 7"></polyline>
          </svg>
        </div>
      );
    case "chevrons-right":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_chevrons-right",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="13 17 18 12 13 7"></polyline>
            <polyline points="6 17 11 12 6 7"></polyline>
          </svg>
        </div>
      );
    case "chevrons-up":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_chevrons-up",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="17 11 12 6 7 11"></polyline>
            <polyline points="17 18 12 13 7 18"></polyline>
          </svg>
        </div>
      );
    case "chrome":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_chrome",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="4"></circle>
            <line x1="21.17" y1="8" x2="12" y2="8"></line>
            <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
            <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
          </svg>
        </div>
      );
    case "circle":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_circle",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
        </div>
      );
    case "clipboard":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_clipboard",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
          </svg>
        </div>
      );
    case "clock":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_clock",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
        </div>
      );
    case "cloud-drizzle":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_cloud-drizzle",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="8" y1="19" x2="8" y2="21"></line>
            <line x1="8" y1="13" x2="8" y2="15"></line>
            <line x1="16" y1="19" x2="16" y2="21"></line>
            <line x1="16" y1="13" x2="16" y2="15"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="12" y1="15" x2="12" y2="17"></line>
            <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>
          </svg>
        </div>
      );
    case "cloud-lightning":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_cloud-lightning",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path>
            <polyline points="13 11 9 17 15 17 11 23"></polyline>
          </svg>
        </div>
      );
    case "cloud-off":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_cloud-off",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path>
            <line x1="1" y1="1" x2="23" y2="23"></line>
          </svg>
        </div>
      );
    case "cloud-rain":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_cloud-rain",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="16" y1="13" x2="16" y2="21"></line>
            <line x1="8" y1="13" x2="8" y2="21"></line>
            <line x1="12" y1="15" x2="12" y2="23"></line>
            <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>
          </svg>
        </div>
      );
    case "cloud-snow":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_cloud-snow",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path>
            <line x1="8" y1="16" x2="8.01" y2="16"></line>
            <line x1="8" y1="20" x2="8.01" y2="20"></line>
            <line x1="12" y1="18" x2="12.01" y2="18"></line>
            <line x1="12" y1="22" x2="12.01" y2="22"></line>
            <line x1="16" y1="16" x2="16.01" y2="16"></line>
            <line x1="16" y1="20" x2="16.01" y2="20"></line>
          </svg>
        </div>
      );
    case "cloud":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_cloud",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
          </svg>
        </div>
      );
    case "code":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_code",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        </div>
      );
    case "codepen":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_codepen",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
            <line x1="12" y1="22" x2="12" y2="15.5"></line>
            <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
            <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
            <line x1="12" y1="2" x2="12" y2="8.5"></line>
          </svg>
        </div>
      );
    case "codesandbox":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_codesandbox",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
            <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
            <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
          </svg>
        </div>
      );
    case "coffee":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_coffee",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
            <line x1="6" y1="1" x2="6" y2="4"></line>
            <line x1="10" y1="1" x2="10" y2="4"></line>
            <line x1="14" y1="1" x2="14" y2="4"></line>
          </svg>
        </div>
      );
    case "columns":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_columns",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>
          </svg>
        </div>
      );
    case "command":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_command",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
          </svg>
        </div>
      );
    case "compass":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_compass",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
          </svg>
        </div>
      );
    case "copy":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_copy",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
        </div>
      );
    case "corner-down-left":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_corner-down-left",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 10 4 15 9 20"></polyline>
            <path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
          </svg>
        </div>
      );
    case "corner-down-right":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_corner-down-right",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 10 20 15 15 20"></polyline>
            <path d="M4 4v7a4 4 0 0 0 4 4h12"></path>
          </svg>
        </div>
      );
    case "corner-left-down":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_corner-left-down",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="14 15 9 20 4 15"></polyline>
            <path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>
          </svg>
        </div>
      );
    case "corner-left-up":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_corner-left-up",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="14 9 9 4 4 9"></polyline>
            <path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>
          </svg>
        </div>
      );
    case "corner-right-down":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_corner-right-down",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="10 15 15 20 20 15"></polyline>
            <path d="M4 4h7a4 4 0 0 1 4 4v12"></path>
          </svg>
        </div>
      );
    case "corner-right-up":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_corner-right-up",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="10 9 15 4 20 9"></polyline>
            <path d="M4 20h7a4 4 0 0 0 4-4V4"></path>
          </svg>
        </div>
      );
    case "corner-up-left":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_corner-up-left",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 14 4 9 9 4"></polyline>
            <path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>
          </svg>
        </div>
      );
    case "corner-up-right":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_corner-up-right",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 14 20 9 15 4"></polyline>
            <path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>
          </svg>
        </div>
      );
    case "cpu":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_cpu",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
            <rect x="9" y="9" width="6" height="6"></rect>
            <line x1="9" y1="1" x2="9" y2="4"></line>
            <line x1="15" y1="1" x2="15" y2="4"></line>
            <line x1="9" y1="20" x2="9" y2="23"></line>
            <line x1="15" y1="20" x2="15" y2="23"></line>
            <line x1="20" y1="9" x2="23" y2="9"></line>
            <line x1="20" y1="14" x2="23" y2="14"></line>
            <line x1="1" y1="9" x2="4" y2="9"></line>
            <line x1="1" y1="14" x2="4" y2="14"></line>
          </svg>
        </div>
      );
    case "credit-card":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_credit-card",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
            <line x1="1" y1="10" x2="23" y2="10"></line>
          </svg>
        </div>
      );
    case "crop":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_crop",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path>
            <path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>
          </svg>
        </div>
      );
    case "crosshair":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_crosshair",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="22" y1="12" x2="18" y2="12"></line>
            <line x1="6" y1="12" x2="2" y2="12"></line>
            <line x1="12" y1="6" x2="12" y2="2"></line>
            <line x1="12" y1="22" x2="12" y2="18"></line>
          </svg>
        </div>
      );
    case "database":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_database",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
          </svg>
        </div>
      );
    case "delete":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_delete",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path>
            <line x1="18" y1="9" x2="12" y2="15"></line>
            <line x1="12" y1="9" x2="18" y2="15"></line>
          </svg>
        </div>
      );
    case "disc":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_disc",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        </div>
      );
    case "divide-circle":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_divide-circle",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="8" y1="12" x2="16" y2="12"></line>
            <line x1="12" y1="16" x2="12" y2="16"></line>
            <line x1="12" y1="8" x2="12" y2="8"></line>
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
        </div>
      );
    case "divide-square":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_divide-square",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="8" y1="12" x2="16" y2="12"></line>
            <line x1="12" y1="16" x2="12" y2="16"></line>
            <line x1="12" y1="8" x2="12" y2="8"></line>
          </svg>
        </div>
      );
    case "divide":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_divide",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="6" r="2"></circle>
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <circle cx="12" cy="18" r="2"></circle>
          </svg>
        </div>
      );
    case "dollar-sign":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_dollar-sign",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="1" x2="12" y2="23"></line>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
        </div>
      );
    case "download-cloud":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_download-cloud",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="8 17 12 21 16 17"></polyline>
            <line x1="12" y1="12" x2="12" y2="21"></line>
            <path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>
          </svg>
        </div>
      );
    case "download":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_download",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
        </div>
      );
    case "dribbble":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_dribbble",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
          </svg>
        </div>
      );
    case "droplet":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_droplet",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
          </svg>
        </div>
      );
    case "edit-2":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_edit-2",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
          </svg>
        </div>
      );
    case "edit-3":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_edit-3",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 20h9"></path>
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
          </svg>
        </div>
      );
    case "edit":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_edit",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
          </svg>
        </div>
      );
    case "external-link":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_external-link",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </div>
      );
    case "eye-off":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_eye-off",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
            <line x1="1" y1="1" x2="23" y2="23"></line>
          </svg>
        </div>
      );
    case "eye":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_eye",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        </div>
      );
    case "facebook":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_facebook",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        </div>
      );
    case "fast-forward":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_fast-forward",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="13 19 22 12 13 5 13 19"></polygon>
            <polygon points="2 19 11 12 2 5 2 19"></polygon>
          </svg>
        </div>
      );
    case "feather":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_feather",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
            <line x1="16" y1="8" x2="2" y2="22"></line>
            <line x1="17.5" y1="15" x2="9" y2="15"></line>
          </svg>
        </div>
      );
    case "figma":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_figma",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
            <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
            <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
            <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
            <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
          </svg>
        </div>
      );
    case "file-minus":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_file-minus",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="9" y1="15" x2="15" y2="15"></line>
          </svg>
        </div>
      );
    case "file-plus":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_file-plus",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="12" y1="18" x2="12" y2="12"></line>
            <line x1="9" y1="15" x2="15" y2="15"></line>
          </svg>
        </div>
      );
    case "file-text":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_file-text",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
        </div>
      );
    case "file":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_file",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
            <polyline points="13 2 13 9 20 9"></polyline>
          </svg>
        </div>
      );
    case "film":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_film",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
            <line x1="7" y1="2" x2="7" y2="22"></line>
            <line x1="17" y1="2" x2="17" y2="22"></line>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <line x1="2" y1="7" x2="7" y2="7"></line>
            <line x1="2" y1="17" x2="7" y2="17"></line>
            <line x1="17" y1="17" x2="22" y2="17"></line>
            <line x1="17" y1="7" x2="22" y2="7"></line>
          </svg>
        </div>
      );
    case "filter":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_filter",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
          </svg>
        </div>
      );
    case "flag":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_flag",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
            <line x1="4" y1="22" x2="4" y2="15"></line>
          </svg>
        </div>
      );
    case "folder-minus":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_folder-minus",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            <line x1="9" y1="14" x2="15" y2="14"></line>
          </svg>
        </div>
      );
    case "folder-plus":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_folder-plus",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            <line x1="12" y1="11" x2="12" y2="17"></line>
            <line x1="9" y1="14" x2="15" y2="14"></line>
          </svg>
        </div>
      );
    case "folder":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_folder",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
          </svg>
        </div>
      );
    case "framer":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_framer",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>
          </svg>
        </div>
      );
    case "frown":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_frown",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M16 16s-1.5-2-4-2-4 2-4 2"></path>
            <line x1="9" y1="9" x2="9.01" y2="9"></line>
            <line x1="15" y1="9" x2="15.01" y2="9"></line>
          </svg>
        </div>
      );
    case "gift":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_gift",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 12 20 22 4 22 4 12"></polyline>
            <rect x="2" y="7" width="20" height="5"></rect>
            <line x1="12" y1="22" x2="12" y2="7"></line>
            <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
            <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
          </svg>
        </div>
      );
    case "git-branch":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_git-branch",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="6" y1="3" x2="6" y2="15"></line>
            <circle cx="18" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M18 9a9 9 0 0 1-9 9"></path>
          </svg>
        </div>
      );
    case "git-commit":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_git-commit",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="4"></circle>
            <line x1="1.05" y1="12" x2="7" y2="12"></line>
            <line x1="17.01" y1="12" x2="22.96" y2="12"></line>
          </svg>
        </div>
      );
    case "git-merge":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_git-merge",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="18" cy="18" r="3"></circle>
            <circle cx="6" cy="6" r="3"></circle>
            <path d="M6 21V9a9 9 0 0 0 9 9"></path>
          </svg>
        </div>
      );
    case "git-pull-request":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_git-pull-request",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="18" cy="18" r="3"></circle>
            <circle cx="6" cy="6" r="3"></circle>
            <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
            <line x1="6" y1="9" x2="6" y2="21"></line>
          </svg>
        </div>
      );
    case "github":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_github",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </div>
      );
    case "gitlab":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_gitlab",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>
          </svg>
        </div>
      );
    case "globe":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_globe",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
        </div>
      );
    case "grid":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_grid",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
        </div>
      );
    case "hard-drive":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_hard-drive",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="22" y1="12" x2="2" y2="12"></line>
            <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
            <line x1="6" y1="16" x2="6.01" y2="16"></line>
            <line x1="10" y1="16" x2="10.01" y2="16"></line>
          </svg>
        </div>
      );
    case "hash":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_hash",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" y1="9" x2="20" y2="9"></line>
            <line x1="4" y1="15" x2="20" y2="15"></line>
            <line x1="10" y1="3" x2="8" y2="21"></line>
            <line x1="16" y1="3" x2="14" y2="21"></line>
          </svg>
        </div>
      );
    case "headphones":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_headphones",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
            <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
          </svg>
        </div>
      );
    case "heart":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_heart",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </div>
      );
    case "help-circle":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_help-circle",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
        </div>
      );
    case "hexagon":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_hexagon",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          </svg>
        </div>
      );
    case "home":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_home",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </div>
      );
    case "image":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_image",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="8.5" cy="8.5" r="1.5"></circle>
            <polyline points="21 15 16 10 5 21"></polyline>
          </svg>
        </div>
      );
    case "inbox":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_inbox",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
            <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
          </svg>
        </div>
      );
    case "info":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_info",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        </div>
      );
    case "instagram":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_instagram",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </div>
      );
    case "italic":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_italic",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="4" x2="10" y2="4"></line>
            <line x1="14" y1="20" x2="5" y2="20"></line>
            <line x1="15" y1="4" x2="9" y2="20"></line>
          </svg>
        </div>
      );
    case "key":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_key",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
          </svg>
        </div>
      );
    case "layers":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_layers",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
            <polyline points="2 17 12 22 22 17"></polyline>
            <polyline points="2 12 12 17 22 12"></polyline>
          </svg>
        </div>
      );
    case "layout":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_layout",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="3" y1="9" x2="21" y2="9"></line>
            <line x1="9" y1="21" x2="9" y2="9"></line>
          </svg>
        </div>
      );
    case "life-buoy":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_life-buoy",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="4"></circle>
            <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
            <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
            <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line>
            <line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line>
            <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
          </svg>
        </div>
      );
    case "link-2":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_link-2",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
        </div>
      );
    case "link":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_link",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
          </svg>
        </div>
      );
    case "linkedin":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_linkedin",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </div>
      );
    case "list":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_list",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="8" y1="6" x2="21" y2="6"></line>
            <line x1="8" y1="12" x2="21" y2="12"></line>
            <line x1="8" y1="18" x2="21" y2="18"></line>
            <line x1="3" y1="6" x2="3.01" y2="6"></line>
            <line x1="3" y1="12" x2="3.01" y2="12"></line>
            <line x1="3" y1="18" x2="3.01" y2="18"></line>
          </svg>
        </div>
      );
    case "loader":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_loader",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="2" x2="12" y2="6"></line>
            <line x1="12" y1="18" x2="12" y2="22"></line>
            <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
            <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
            <line x1="2" y1="12" x2="6" y2="12"></line>
            <line x1="18" y1="12" x2="22" y2="12"></line>
            <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
            <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
          </svg>
        </div>
      );
    case "lock":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_lock",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        </div>
      );
    case "log-in":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_log-in",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
            <polyline points="10 17 15 12 10 7"></polyline>
            <line x1="15" y1="12" x2="3" y2="12"></line>
          </svg>
        </div>
      );
    case "log-out":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_log-out",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
        </div>
      );
    case "mail":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_mail",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </div>
      );
    case "map-pin":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_map-pin",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        </div>
      );
    case "map":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_map",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
            <line x1="8" y1="2" x2="8" y2="18"></line>
            <line x1="16" y1="6" x2="16" y2="22"></line>
          </svg>
        </div>
      );
    case "maximize-2":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_maximize-2",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 3 21 3 21 9"></polyline>
            <polyline points="9 21 3 21 3 15"></polyline>
            <line x1="21" y1="3" x2="14" y2="10"></line>
            <line x1="3" y1="21" x2="10" y2="14"></line>
          </svg>
        </div>
      );
    case "maximize":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_maximize",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
          </svg>
        </div>
      );
    case "meh":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_meh",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="8" y1="15" x2="16" y2="15"></line>
            <line x1="9" y1="9" x2="9.01" y2="9"></line>
            <line x1="15" y1="9" x2="15.01" y2="9"></line>
          </svg>
        </div>
      );
    case "menu":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_menu",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </div>
      );
    case "message-circle":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_message-circle",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </div>
      );
    case "message-square":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_message-square",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </div>
      );
    case "mic-off":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_mic-off",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="1" y1="1" x2="23" y2="23"></line>
            <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path>
            <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path>
            <line x1="12" y1="19" x2="12" y2="23"></line>
            <line x1="8" y1="23" x2="16" y2="23"></line>
          </svg>
        </div>
      );
    case "mic":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_mic",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
            <line x1="12" y1="19" x2="12" y2="23"></line>
            <line x1="8" y1="23" x2="16" y2="23"></line>
          </svg>
        </div>
      );
    case "minimize-2":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_minimize-2",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="4 14 10 14 10 20"></polyline>
            <polyline points="20 10 14 10 14 4"></polyline>
            <line x1="14" y1="10" x2="21" y2="3"></line>
            <line x1="3" y1="21" x2="10" y2="14"></line>
          </svg>
        </div>
      );
    case "minimize":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_minimize",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>
          </svg>
        </div>
      );
    case "minus-circle":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_minus-circle",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
        </div>
      );
    case "minus-square":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_minus-square",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
        </div>
      );
    case "minus":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_minus",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </div>
      );
    case "monitor":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_monitor",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
          </svg>
        </div>
      );
    case "moon":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_moon",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </div>
      );
    case "more-horizontal":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_more-horizontal",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="1"></circle>
            <circle cx="19" cy="12" r="1"></circle>
            <circle cx="5" cy="12" r="1"></circle>
          </svg>
        </div>
      );
    case "more-vertical":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_more-vertical",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="1"></circle>
            <circle cx="12" cy="5" r="1"></circle>
            <circle cx="12" cy="19" r="1"></circle>
          </svg>
        </div>
      );
    case "mouse-pointer":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_mouse-pointer",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
            <path d="M13 13l6 6"></path>
          </svg>
        </div>
      );
    case "move":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_move",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="5 9 2 12 5 15"></polyline>
            <polyline points="9 5 12 2 15 5"></polyline>
            <polyline points="15 19 12 22 9 19"></polyline>
            <polyline points="19 9 22 12 19 15"></polyline>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <line x1="12" y1="2" x2="12" y2="22"></line>
          </svg>
        </div>
      );
    case "music":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_music",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18V5l12-2v13"></path>
            <circle cx="6" cy="18" r="3"></circle>
            <circle cx="18" cy="16" r="3"></circle>
          </svg>
        </div>
      );
    case "navigation-2":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_navigation-2",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>
          </svg>
        </div>
      );
    case "navigation":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_navigation",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
          </svg>
        </div>
      );
    case "octagon":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_octagon",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
          </svg>
        </div>
      );
    case "package":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_package",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
          </svg>
        </div>
      );
    case "paperclip":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_paperclip",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
          </svg>
        </div>
      );
    case "pause-circle":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_pause-circle",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="10" y1="15" x2="10" y2="9"></line>
            <line x1="14" y1="15" x2="14" y2="9"></line>
          </svg>
        </div>
      );
    case "pause":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_pause",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="6" y="4" width="4" height="16"></rect>
            <rect x="14" y="4" width="4" height="16"></rect>
          </svg>
        </div>
      );
    case "pen-tool":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_pen-tool",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
            <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
            <path d="M2 2l7.586 7.586"></path>
            <circle cx="11" cy="11" r="2"></circle>
          </svg>
        </div>
      );
    case "percent":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_percent",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="5" x2="5" y2="19"></line>
            <circle cx="6.5" cy="6.5" r="2.5"></circle>
            <circle cx="17.5" cy="17.5" r="2.5"></circle>
          </svg>
        </div>
      );
    case "phone-call":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_phone-call",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </div>
      );
    case "phone-forwarded":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_phone-forwarded",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="19 1 23 5 19 9"></polyline>
            <line x1="15" y1="5" x2="23" y2="5"></line>
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </div>
      );
    case "phone-incoming":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_phone-incoming",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="16 2 16 8 22 8"></polyline>
            <line x1="23" y1="1" x2="16" y2="8"></line>
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </div>
      );
    case "phone-missed":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_phone-missed",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="23" y1="1" x2="17" y2="7"></line>
            <line x1="17" y1="1" x2="23" y2="7"></line>
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </div>
      );
    case "phone-off":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_phone-off",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path>
            <line x1="23" y1="1" x2="1" y2="23"></line>
          </svg>
        </div>
      );
    case "phone-outgoing":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_phone-outgoing",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="23 7 23 1 17 1"></polyline>
            <line x1="16" y1="8" x2="23" y2="1"></line>
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </div>
      );
    case "phone":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_phone",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </div>
      );
    case "pie-chart":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_pie-chart",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
            <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
          </svg>
        </div>
      );
    case "play-circle":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_play-circle",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polygon points="10 8 16 12 10 16 10 8"></polygon>
          </svg>
        </div>
      );
    case "play":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_play",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        </div>
      );
    case "plus-circle":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_plus-circle",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="16"></line>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
        </div>
      );
    case "plus-square":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_plus-square",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="12" y1="8" x2="12" y2="16"></line>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
        </div>
      );
    case "plus":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_plus",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </div>
      );
    case "pocket":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_pocket",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path>
            <polyline points="8 10 12 14 16 10"></polyline>
          </svg>
        </div>
      );
    case "power":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_power",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
            <line x1="12" y1="2" x2="12" y2="12"></line>
          </svg>
        </div>
      );
    case "printer":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_printer",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 6 2 18 2 18 9"></polyline>
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
            <rect x="6" y="14" width="12" height="8"></rect>
          </svg>
        </div>
      );
    case "radio":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_radio",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="2"></circle>
            <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>
          </svg>
        </div>
      );
    case "refresh-ccw":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_refresh-ccw",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="1 4 1 10 7 10"></polyline>
            <polyline points="23 20 23 14 17 14"></polyline>
            <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
          </svg>
        </div>
      );
    case "refresh-cw":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_refresh-cw",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="23 4 23 10 17 10"></polyline>
            <polyline points="1 20 1 14 7 14"></polyline>
            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
          </svg>
        </div>
      );
    case "repeat":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_repeat",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="17 1 21 5 17 9"></polyline>
            <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
            <polyline points="7 23 3 19 7 15"></polyline>
            <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
          </svg>
        </div>
      );
    case "rewind":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_rewind",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="11 19 2 12 11 5 11 19"></polygon>
            <polygon points="22 19 13 12 22 5 22 19"></polygon>
          </svg>
        </div>
      );
    case "rotate-ccw":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_rotate-ccw",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="1 4 1 10 7 10"></polyline>
            <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
          </svg>
        </div>
      );
    case "rotate-cw":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_rotate-cw",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="23 4 23 10 17 10"></polyline>
            <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
          </svg>
        </div>
      );
    case "rss":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_rss",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 11a9 9 0 0 1 9 9"></path>
            <path d="M4 4a16 16 0 0 1 16 16"></path>
            <circle cx="5" cy="19" r="1"></circle>
          </svg>
        </div>
      );
    case "save":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_save",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
            <polyline points="17 21 17 13 7 13 7 21"></polyline>
            <polyline points="7 3 7 8 15 8"></polyline>
          </svg>
        </div>
      );
    case "scissors":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_scissors",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="6" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <line x1="20" y1="4" x2="8.12" y2="15.88"></line>
            <line x1="14.47" y1="14.48" x2="20" y2="20"></line>
            <line x1="8.12" y1="8.12" x2="12" y2="12"></line>
          </svg>
        </div>
      );
    case "search":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_search",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
      );
    case "send":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_send",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </div>
      );
    case "server":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_server",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
            <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
            <line x1="6" y1="6" x2="6.01" y2="6"></line>
            <line x1="6" y1="18" x2="6.01" y2="18"></line>
          </svg>
        </div>
      );
    case "settings":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_settings",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
        </div>
      );
    case "share-2":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_share-2",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="18" cy="5" r="3"></circle>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="19" r="3"></circle>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
          </svg>
        </div>
      );
    case "share":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_share",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
            <polyline points="16 6 12 2 8 6"></polyline>
            <line x1="12" y1="2" x2="12" y2="15"></line>
          </svg>
        </div>
      );
    case "shield-off":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_shield-off",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path>
            <path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path>
            <line x1="1" y1="1" x2="23" y2="23"></line>
          </svg>
        </div>
      );
    case "shield":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_shield",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        </div>
      );
    case "shopping-bag":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_shopping-bag",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
        </div>
      );
    case "shopping-cart":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_shopping-cart",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        </div>
      );
    case "shuffle":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_shuffle",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="16 3 21 3 21 8"></polyline>
            <line x1="4" y1="20" x2="21" y2="3"></line>
            <polyline points="21 16 21 21 16 21"></polyline>
            <line x1="15" y1="15" x2="21" y2="21"></line>
            <line x1="4" y1="4" x2="9" y2="9"></line>
          </svg>
        </div>
      );
    case "sidebar":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_sidebar",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="9" y1="3" x2="9" y2="21"></line>
          </svg>
        </div>
      );
    case "skip-back":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_skip-back",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="19 20 9 12 19 4 19 20"></polygon>
            <line x1="5" y1="19" x2="5" y2="5"></line>
          </svg>
        </div>
      );
    case "skip-forward":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_skip-forward",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="5 4 15 12 5 20 5 4"></polygon>
            <line x1="19" y1="5" x2="19" y2="19"></line>
          </svg>
        </div>
      );
    case "slack":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_slack",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path>
            <path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path>
            <path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path>
            <path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path>
            <path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path>
            <path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path>
            <path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path>
            <path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>
          </svg>
        </div>
      );
    case "slash":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_slash",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
          </svg>
        </div>
      );
    case "sliders":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_sliders",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" y1="21" x2="4" y2="14"></line>
            <line x1="4" y1="10" x2="4" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12" y2="3"></line>
            <line x1="20" y1="21" x2="20" y2="16"></line>
            <line x1="20" y1="12" x2="20" y2="3"></line>
            <line x1="1" y1="14" x2="7" y2="14"></line>
            <line x1="9" y1="8" x2="15" y2="8"></line>
            <line x1="17" y1="16" x2="23" y2="16"></line>
          </svg>
        </div>
      );
    case "smartphone":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_smartphone",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
            <line x1="12" y1="18" x2="12.01" y2="18"></line>
          </svg>
        </div>
      );
    case "smile":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_smile",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
            <line x1="9" y1="9" x2="9.01" y2="9"></line>
            <line x1="15" y1="9" x2="15.01" y2="9"></line>
          </svg>
        </div>
      );
    case "speaker":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_speaker",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
            <circle cx="12" cy="14" r="4"></circle>
            <line x1="12" y1="6" x2="12.01" y2="6"></line>
          </svg>
        </div>
      );
    case "square":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_square",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          </svg>
        </div>
      );
    case "star":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_star",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </div>
      );
    case "stop-circle":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_stop-circle",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <rect x="9" y="9" width="6" height="6"></rect>
          </svg>
        </div>
      );
    case "sun":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_sun",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        </div>
      );
    case "sunrise":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_sunrise",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17 18a5 5 0 0 0-10 0"></path>
            <line x1="12" y1="2" x2="12" y2="9"></line>
            <line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line>
            <line x1="1" y1="18" x2="3" y2="18"></line>
            <line x1="21" y1="18" x2="23" y2="18"></line>
            <line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line>
            <line x1="23" y1="22" x2="1" y2="22"></line>
            <polyline points="8 6 12 2 16 6"></polyline>
          </svg>
        </div>
      );
    case "sunset":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_sunset",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17 18a5 5 0 0 0-10 0"></path>
            <line x1="12" y1="9" x2="12" y2="2"></line>
            <line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line>
            <line x1="1" y1="18" x2="3" y2="18"></line>
            <line x1="21" y1="18" x2="23" y2="18"></line>
            <line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line>
            <line x1="23" y1="22" x2="1" y2="22"></line>
            <polyline points="16 5 12 9 8 5"></polyline>
          </svg>
        </div>
      );
    case "table":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_table",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"></path>
          </svg>
        </div>
      );
    case "tablet":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_tablet",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
            <line x1="12" y1="18" x2="12.01" y2="18"></line>
          </svg>
        </div>
      );
    case "tag":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_tag",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
            <line x1="7" y1="7" x2="7.01" y2="7"></line>
          </svg>
        </div>
      );
    case "target":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_target",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="6"></circle>
            <circle cx="12" cy="12" r="2"></circle>
          </svg>
        </div>
      );
    case "terminal":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_terminal",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="4 17 10 11 4 5"></polyline>
            <line x1="12" y1="19" x2="20" y2="19"></line>
          </svg>
        </div>
      );
    case "thermometer":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_thermometer",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>
          </svg>
        </div>
      );
    case "thumbs-down":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_thumbs-down",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
          </svg>
        </div>
      );
    case "thumbs-up":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_thumbs-up",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
          </svg>
        </div>
      );
    case "toggle-left":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_toggle-left",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect>
            <circle cx="8" cy="12" r="3"></circle>
          </svg>
        </div>
      );
    case "toggle-right":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_toggle-right",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect>
            <circle cx="16" cy="12" r="3"></circle>
          </svg>
        </div>
      );
    case "tool":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_tool",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
          </svg>
        </div>
      );
    case "trash-2":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_trash-2",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        </div>
      );
    case "trash":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_trash",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
        </div>
      );
    case "trello":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_trello",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <rect x="7" y="7" width="3" height="9"></rect>
            <rect x="14" y="7" width="3" height="5"></rect>
          </svg>
        </div>
      );
    case "trending-down":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_trending-down",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
            <polyline points="17 18 23 18 23 12"></polyline>
          </svg>
        </div>
      );
    case "trending-up":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_trending-up",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
            <polyline points="17 6 23 6 23 12"></polyline>
          </svg>
        </div>
      );
    case "triangle":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_triangle",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
          </svg>
        </div>
      );
    case "truck":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_truck",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="1" y="3" width="15" height="13"></rect>
            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
            <circle cx="5.5" cy="18.5" r="2.5"></circle>
            <circle cx="18.5" cy="18.5" r="2.5"></circle>
          </svg>
        </div>
      );
    case "tv":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_tv",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
            <polyline points="17 2 12 7 7 2"></polyline>
          </svg>
        </div>
      );
    case "twitch":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_twitch",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>
          </svg>
        </div>
      );
    case "twitter":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_twitter",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
          </svg>
        </div>
      );
    case "type":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_type",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="4 7 4 4 20 4 20 7"></polyline>
            <line x1="9" y1="20" x2="15" y2="20"></line>
            <line x1="12" y1="4" x2="12" y2="20"></line>
          </svg>
        </div>
      );
    case "umbrella":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_umbrella",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>
          </svg>
        </div>
      );
    case "underline":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_underline",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path>
            <line x1="4" y1="21" x2="20" y2="21"></line>
          </svg>
        </div>
      );
    case "unlock":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_unlock",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
          </svg>
        </div>
      );
    case "upload-cloud":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_upload-cloud",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="16 16 12 12 8 16"></polyline>
            <line x1="12" y1="12" x2="12" y2="21"></line>
            <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
            <polyline points="16 16 12 12 8 16"></polyline>
          </svg>
        </div>
      );
    case "upload":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_upload",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="17 8 12 3 7 8"></polyline>
            <line x1="12" y1="3" x2="12" y2="15"></line>
          </svg>
        </div>
      );
    case "user-check":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_user-check",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="8.5" cy="7" r="4"></circle>
            <polyline points="17 11 19 13 23 9"></polyline>
          </svg>
        </div>
      );
    case "user-minus":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_user-minus",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="8.5" cy="7" r="4"></circle>
            <line x1="23" y1="11" x2="17" y2="11"></line>
          </svg>
        </div>
      );
    case "user-plus":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_user-plus",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="8.5" cy="7" r="4"></circle>
            <line x1="20" y1="8" x2="20" y2="14"></line>
            <line x1="23" y1="11" x2="17" y2="11"></line>
          </svg>
        </div>
      );
    case "user-x":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_user-x",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="8.5" cy="7" r="4"></circle>
            <line x1="18" y1="8" x2="23" y2="13"></line>
            <line x1="23" y1="8" x2="18" y2="13"></line>
          </svg>
        </div>
      );
    case "user":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_user",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
      );
    case "users":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_users",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        </div>
      );
    case "video-off":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_video-off",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path>
            <line x1="1" y1="1" x2="23" y2="23"></line>
          </svg>
        </div>
      );
    case "video":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_video",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="23 7 16 12 23 17 23 7"></polygon>
            <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
          </svg>
        </div>
      );
    case "voicemail":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_voicemail",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="5.5" cy="11.5" r="4.5"></circle>
            <circle cx="18.5" cy="11.5" r="4.5"></circle>
            <line x1="5.5" y1="16" x2="18.5" y2="16"></line>
          </svg>
        </div>
      );
    case "volume-1":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_volume-1",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
        </div>
      );
    case "volume-2":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_volume-2",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
        </div>
      );
    case "volume-x":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_volume-x",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <line x1="23" y1="9" x2="17" y2="15"></line>
            <line x1="17" y1="9" x2="23" y2="15"></line>
          </svg>
        </div>
      );
    case "volume":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_volume",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          </svg>
        </div>
      );
    case "watch":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_watch",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="7"></circle>
            <polyline points="12 9 12 12 13.5 13.5"></polyline>
            <path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>
          </svg>
        </div>
      );
    case "wifi-off":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_wifi-off",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="1" y1="1" x2="23" y2="23"></line>
            <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path>
            <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path>
            <path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path>
            <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path>
            <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
            <line x1="12" y1="20" x2="12.01" y2="20"></line>
          </svg>
        </div>
      );
    case "wifi":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_wifi",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
            <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
            <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
            <line x1="12" y1="20" x2="12.01" y2="20"></line>
          </svg>
        </div>
      );
    case "wind":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_wind",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>
          </svg>
        </div>
      );
    case "x-circle":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_x-circle",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
        </div>
      );
    case "x-octagon":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_x-octagon",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
        </div>
      );
    case "x-square":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_x-square",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="9" y1="9" x2="15" y2="15"></line>
            <line x1="15" y1="9" x2="9" y2="15"></line>
          </svg>
        </div>
      );
    case "x":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_x",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
      );
    case "youtube":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_youtube",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
          </svg>
        </div>
      );
    case "zap-off":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_zap-off",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="12.41 6.75 13 2 10.57 4.92"></polyline>
            <polyline points="18.57 12.91 21 10 15.66 10"></polyline>
            <polyline points="8 8 3 14 12 14 11 22 16 16"></polyline>
            <line x1="1" y1="1" x2="23" y2="23"></line>
          </svg>
        </div>
      );
    case "zap":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_zap",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
          </svg>
        </div>
      );
    case "zoom-in":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_zoom-in",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            <line x1="11" y1="8" x2="11" y2="14"></line>
            <line x1="8" y1="11" x2="14" y2="11"></line>
          </svg>
        </div>
      );
    case "zoom-out":
      return (
        <div
          className={Fx.c(
            "MxUI_Icon_Component",
            "icon_zoom-out",
            props.className || ""
          )}
        >
          <svg
            {...svgProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            <line x1="8" y1="11" x2="14" y2="11"></line>
          </svg>
        </div>
      );
    default:
      console.warn(
        "You used the icon component with an invalid name. Null is returned."
      );
      return null;
  }
};
