import * as React from "react";
import { SVGProps } from "react";
const AddIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    aria-hidden="true"
    className="add-icon"
    data-encore-id="icon"
    {...props}
  >
    <path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z" />
  </svg>
);

const ArrowLeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    aria-hidden="true"
    className="arrow-left-icon"
    data-encore-id="icon"
    {...props}
  >
    <path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z" />
  </svg>
);

const ArrowRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    aria-hidden="true"
    className="arrow-right-icon"
    data-encore-id="icon"
    {...props}
  >
    <path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z" />
  </svg>
);

const DownloadIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    aria-hidden="true"
    className="download-icon"
    data-encore-id="icon"
    {...props}
  >
    <path d="M4.995 8.745a.75.75 0 0 1 1.06 0L7.25 9.939V4a.75.75 0 0 1 1.5 0v5.94l1.195-1.195a.75.75 0 1 1 1.06 1.06L8 12.811l-.528-.528a.945.945 0 0 1-.005-.005L4.995 9.805a.75.75 0 0 1 0-1.06z" />
    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13z" />
  </svg>
);

const FavoriteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    aria-hidden="true"
    className="favorite-icon"
    data-encore-id="icon"
    {...props}
  >
    <path d="M1.69 2A4.582 4.582 0 0 1 8 2.023 4.583 4.583 0 0 1 11.88.817h.002a4.618 4.618 0 0 1 3.782 3.65v.003a4.543 4.543 0 0 1-1.011 3.84L9.35 14.629a1.765 1.765 0 0 1-2.093.464 1.762 1.762 0 0 1-.605-.463L1.348 8.309A4.582 4.582 0 0 1 1.689 2zm3.158.252A3.082 3.082 0 0 0 2.49 7.337l.005.005L7.8 13.664a.264.264 0 0 0 .311.069.262.262 0 0 0 .09-.069l5.312-6.33a3.043 3.043 0 0 0 .68-2.573 3.118 3.118 0 0 0-2.551-2.463 3.079 3.079 0 0 0-2.612.816l-.007.007a1.501 1.501 0 0 1-2.045 0l-.009-.008a3.082 3.082 0 0 0-2.121-.861z" />
  </svg>
);

const HomeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    aria-hidden="true"
    className="home-icon"
    data-encore-id="icon"
    {...props}
  >
    <path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732l7.5-4.33z" />
  </svg>
);

const HomeActiveIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    aria-hidden="true"
    className="home-active-icon"
    data-encore-id="icon"
    {...props}
  >
    <path d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z" />
  </svg>
);

const LibraryIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    aria-hidden="true"
    className="library-icon"
    data-encore-id="icon"
    {...props}
  >
    <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z" />
  </svg>
);

const NextIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    aria-hidden="true"
    className="next-icon"
    data-encore-id="icon"
    {...props}
  >
    <path d="M7.19 1A.749.749 0 0 1 8.47.47L16 7.99l-7.53 7.521a.75.75 0 0 1-1.234-.815.75.75 0 0 1 .174-.243l5.72-5.714H.75a.75.75 0 1 1 0-1.498h12.38L7.41 1.529a.749.749 0 0 1-.22-.53z" />
  </svg>
);

const NotificationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    aria-hidden="true"
    className="notification-icon"
    data-encore-id="icon"
    {...props}
  >
    <path d="M8 1.5a4 4 0 0 0-4 4v3.27a.75.75 0 0 1-.1.373L2.255 12h11.49L12.1 9.142a.75.75 0 0 1-.1-.374V5.5a4 4 0 0 0-4-4zm-5.5 4a5.5 5.5 0 0 1 11 0v3.067l2.193 3.809a.75.75 0 0 1-.65 1.124H10.5a2.5 2.5 0 0 1-5 0H.957a.75.75 0 0 1-.65-1.124L2.5 8.569V5.5zm4.5 8a1 1 0 1 0 2 0H7z" />
  </svg>
);

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    aria-hidden="true"
    className="search-icon"
    data-encore-id="icon"
    {...props}
  >
    <path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z" />
  </svg>
);

const SearchActiveIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    aria-hidden="true"
    className="search-active-icon"
    data-encore-id="icon"
    {...props}
  >
    <path d="M15.356 10.558c0 2.623-2.16 4.75-4.823 4.75-2.664 0-4.824-2.127-4.824-4.75s2.16-4.75 4.824-4.75c2.664 0 4.823 2.127 4.823 4.75z" />
    <path d="M1.126 10.558c0-5.14 4.226-9.28 9.407-9.28 5.18 0 9.407 4.14 9.407 9.28a9.157 9.157 0 0 1-2.077 5.816l4.344 4.344a1 1 0 0 1-1.414 1.414l-4.353-4.353a9.454 9.454 0 0 1-5.907 2.058c-5.18 0-9.407-4.14-9.407-9.28zm9.407-7.28c-4.105 0-7.407 3.274-7.407 7.28s3.302 7.279 7.407 7.279 7.407-3.273 7.407-7.28c0-4.005-3.302-7.278-7.407-7.278z" />
  </svg>
);

const ShuffleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    aria-hidden="true"
    className="shuffle-icon"
    data-encore-id="icon"
    {...props}
  >
    <path d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z" />
    <path d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z" />
  </svg>
);

const BackPlayerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    aria-hidden="true"
    className="back-player-icon"
    data-encore-id="icon"
    {...props}
  >
    <path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z" />
  </svg>
);

const PlayPlayerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    aria-hidden="true"
    className="play-player-icon"
    data-encore-id="icon"
    {...props}
  >
    <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z" />
  </svg>
);

const ForwardPlayerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    aria-hidden="true"
    className="forward-player-icon"
    data-encore-id="icon"
    {...props}
  >
    <path d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z" />
  </svg>
);

const RepeatPlayerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    aria-hidden="true"
    className="repeat-player-icon"
    data-encore-id="icon"
    {...props}
  >
    <path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z" />
  </svg>
);
const PlayingViewPlayerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    aria-hidden="true"
    className="playing-view-player-icon"
    data-encore-id="icon"
    {...props}
  >
    <path d="M11.196 8 6 5v6l5.196-3z" />
    <path d="M15.002 1.75A1.75 1.75 0 0 0 13.252 0h-10.5a1.75 1.75 0 0 0-1.75 1.75v12.5c0 .966.783 1.75 1.75 1.75h10.5a1.75 1.75 0 0 0 1.75-1.75V1.75zm-1.75-.25a.25.25 0 0 1 .25.25v12.5a.25.25 0 0 1-.25.25h-10.5a.25.25 0 0 1-.25-.25V1.75a.25.25 0 0 1 .25-.25h10.5z" />
  </svg>
);

const LyricsPlayerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    aria-hidden="true"
    className="lyrics-player-icon"
    data-encore-id="icon"
    {...props}
  >
    <path d="M13.426 2.574a2.831 2.831 0 0 0-4.797 1.55l3.247 3.247a2.831 2.831 0 0 0 1.55-4.797zM10.5 8.118l-2.619-2.62A63303.13 63303.13 0 0 0 4.74 9.075L2.065 12.12a1.287 1.287 0 0 0 1.816 1.816l3.06-2.688 3.56-3.129zM7.12 4.094a4.331 4.331 0 1 1 4.786 4.786l-3.974 3.493-3.06 2.689a2.787 2.787 0 0 1-3.933-3.933l2.676-3.045 3.505-3.99z" />
  </svg>
);

const PlaylistPlayerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    aria-hidden="true"
    className="playlist-player-icon"
    data-encore-id="icon"
    {...props}
  >
    <path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 1 3.5zm2.5-1a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2h-9z" />
  </svg>
);
const DevicePickerPlayerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    aria-hidden="true"
    className="device-picker-player-icon"
    data-encore-id="icon"
    {...props}
  >
    <path d="M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15h-6.5A1.75 1.75 0 0 1 6 13.25V2.75zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25h-6.5zm-6 0a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25H4V11H1.75A1.75 1.75 0 0 1 0 9.25v-6.5C0 1.784.784 1 1.75 1H4v1.5H1.75zM4 15H2v-1.5h2V15z" />
    <path d="M13 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-1-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
  </svg>
);

const VolumePlayerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    aria-hidden="true"
    aria-label="Volumen alto"
    className="volume-player-icon"
    data-encore-id="icon"
    {...props}
  >
    <path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z" />
    <path d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z" />
  </svg>
);

const FullscreenPlayerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    aria-hidden="true"
    className="fullscren-player-icon"
    data-encore-id="icon"
    {...props}
  >
    <path d="M6.53 9.47a.75.75 0 0 1 0 1.06l-2.72 2.72h1.018a.75.75 0 0 1 0 1.5H1.25v-3.579a.75.75 0 0 1 1.5 0v1.018l2.72-2.72a.75.75 0 0 1 1.06 0zm2.94-2.94a.75.75 0 0 1 0-1.06l2.72-2.72h-1.018a.75.75 0 1 1 0-1.5h3.578v3.579a.75.75 0 0 1-1.5 0V3.81l-2.72 2.72a.75.75 0 0 1-1.06 0z" />
  </svg>
);

export {
  AddIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  DownloadIcon,
  FavoriteIcon,
  HomeActiveIcon,
  HomeIcon,
  LibraryIcon,
  NextIcon,
  NotificationIcon,
  SearchIcon,
  SearchActiveIcon,
  ShuffleIcon,
  BackPlayerIcon,
  PlayPlayerIcon,
  ForwardPlayerIcon,
  RepeatPlayerIcon,
  PlayingViewPlayerIcon,
  LyricsPlayerIcon,
  PlaylistPlayerIcon,
  DevicePickerPlayerIcon,
  VolumePlayerIcon,
  FullscreenPlayerIcon,
};
