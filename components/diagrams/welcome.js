import { draw } from "./drawer";

const WELCOME_BACK = {
  "en-US":
    "M242.4 122h3.1l3.5-12.2h.2l3.4 12.2h3.2l4.9-17.5h-3.4l-3.2 12.9h-.1l-3.4-12.9h-3l-3.4 12.9h-.2l-3.1-12.9h-3.4l4.9 17.5zm24.8.3c3 0 5.2-1.5 5.7-3.8l-2.9-.3c-.4 1-1.4 1.7-2.7 1.7-2 0-3.4-1.4-3.4-3.6h9.1v-1c0-4.5-2.7-6.6-6-6.6-3.7 0-6.1 2.8-6.1 6.8 0 4.1 2.4 6.8 6.3 6.8zm-3.3-8c.1-1.8 1.3-3.2 3.2-3.2 1.8 0 3 1.3 3 3.1h-6.2zm14.8-9.8h-3V122h3v-17.5zm9 17.8c3.2 0 5.3-2 5.5-4.8h-3a2.6 2.6 0 01-2.6 2.2c-1.9 0-3.1-1.6-3.1-4.2 0-2.7 1.2-4.3 3.1-4.3 1.5 0 2.4 1 2.7 2.2h3c-.3-2.8-2.5-4.7-5.7-4.7-3.8 0-6.3 2.8-6.3 6.8s2.4 6.8 6.3 6.8zm13.8 0c3.8 0 6.2-2.7 6.2-6.8 0-4-2.4-6.8-6.2-6.8-3.9 0-6.3 2.7-6.3 6.8 0 4 2.4 6.8 6.3 6.8zm0-2.5c-2.1 0-3.2-2-3.2-4.3 0-2.4 1-4.3 3.2-4.3 2 0 3.1 1.9 3.1 4.3s-1 4.3-3.1 4.3zm8.9 2.2h3v-8c0-1.6 1.1-2.7 2.4-2.7 1.3 0 2.2 1 2.2 2.3v8.4h3v-8.2c0-1.4 1-2.5 2.4-2.5 1.3 0 2.3.8 2.3 2.4v8.3h3v-8.8c0-3-1.6-4.5-4-4.5-2 0-3.4 1-4 2.4h-.1c-.5-1.4-1.8-2.4-3.5-2.4-1.8 0-3.1 1-3.6 2.4h-.2V109h-3v13zm27.3.3c3 0 5.1-1.5 5.7-3.8l-2.9-.3c-.4 1-1.4 1.7-2.8 1.7-2 0-3.3-1.4-3.3-3.6h9.1v-1c0-4.5-2.8-6.6-6-6.6-3.7 0-6.2 2.8-6.2 6.8 0 4.1 2.4 6.8 6.4 6.8zm-3.3-8c0-1.8 1.3-3.2 3.2-3.2 1.7 0 3 1.3 3 3.1h-6.2zm17.8 7.7h3v-2h.2a4 4 0 003.8 2.2c3 0 5.4-2.4 5.4-6.7 0-4.4-2.4-6.8-5.4-6.8a3.9 3.9 0 00-3.8 2.4h-.1v-6.6h-3V122zm3-6.5c0-2.6 1.1-4.2 3.1-4.2s3.1 1.7 3.1 4.2c0 2.4-1 4.2-3 4.2s-3.2-1.7-3.2-4.2zm15.8 6.8c2 0 3.2-1 3.8-2.1h.1v1.8h3v-8.8c0-3.4-2.9-4.5-5.4-4.5-2.7 0-4.8 1.3-5.5 3.7l2.9.4c.3-1 1.2-1.7 2.7-1.7 1.4 0 2.2.7 2.2 2 0 1-1 1-3.3 1.2-2.5.3-5 1-5 4 0 2.6 2 4 4.5 4zm.8-2.3c-1.3 0-2.3-.6-2.3-1.7 0-1.2 1-1.7 2.5-1.9.8-.1 2.4-.3 2.8-.6v1.5c0 1.5-1.2 2.7-3 2.7zm14.9 2.3c3.3 0 5.4-2 5.6-4.8h-3a2.6 2.6 0 01-2.6 2.2c-2 0-3.2-1.6-3.2-4.2 0-2.7 1.3-4.3 3.2-4.3 1.5 0 2.4 1 2.6 2.2h3c-.2-2.8-2.4-4.7-5.6-4.7-3.9 0-6.3 2.8-6.3 6.8s2.4 6.8 6.3 6.8zm8.1-.3h3.1v-4.4l1.1-1.2 4 5.6h3.7l-5.3-7.4 5-5.7h-3.6l-4.7 5.3h-.2v-9.7h-3V122zm17.3-2.4h-2.7v1c-.2 2.3-.8 4.6-1 5.7h2c.4-1.1 1.4-3.6 1.6-5.7l.1-1z",
  ru: "M213.983 115.982c-.186 1.972-.914 3.513-2.183 4.622-1.27 1.1-2.958 1.65-5.066 1.65-1.472 0-2.771-.347-3.897-1.041-1.117-.703-1.981-1.697-2.59-2.984-.609-1.286-.927-2.78-.952-4.481v-1.727c0-1.743.309-3.279.927-4.608.618-1.329 1.502-2.353 2.653-3.072 1.16-.72 2.497-1.079 4.012-1.079 2.039 0 3.681.554 4.925 1.663 1.245 1.109 1.968 2.674 2.171 4.697h-3.199c-.152-1.329-.541-2.285-1.168-2.869-.618-.593-1.527-.889-2.729-.889-1.397 0-2.472.512-3.225 1.536-.745 1.016-1.126 2.51-1.142 4.482v1.638c0 1.997.355 3.52 1.066 4.57.719 1.049 1.769 1.574 3.148 1.574 1.261 0 2.209-.283 2.844-.851.635-.567 1.037-1.51 1.206-2.831h3.199ZM223.276 122v-13.736h5.574c1.879 0 3.309.33 4.291.99.981.652 1.472 1.591 1.472 2.818 0 .635-.199 1.206-.596 1.714-.39.499-.969.885-1.74 1.155.897.187 1.608.563 2.133 1.13.525.567.787 1.236.787 2.006 0 1.278-.474 2.251-1.422 2.92-.939.669-2.293 1.003-4.062 1.003h-6.437Zm3.085-5.853v3.415h3.377c1.583 0 2.374-.567 2.374-1.701 0-1.142-.804-1.714-2.412-1.714h-3.339Zm0-2.209h2.539c1.752 0 2.628-.516 2.628-1.548 0-1.084-.829-1.642-2.488-1.676h-2.679v3.224ZM237.292 115.005c0-1.346.267-2.556.8-3.631.533-1.083 1.282-1.913 2.247-2.488.965-.584 2.073-.876 3.326-.876 1.854 0 3.356.596 4.507 1.79 1.159 1.193 1.786 2.776 1.879 4.748l.012.723c0 1.355-.262 2.565-.787 3.631-.516 1.067-1.261 1.892-2.234 2.476-.965.584-2.082.876-3.352.876-1.938 0-3.491-.643-4.659-1.93-1.159-1.295-1.739-3.017-1.739-5.167v-.152Zm3.085.266c0 1.414.292 2.523.876 3.327.584.795 1.396 1.193 2.437 1.193s1.85-.406 2.425-1.219c.584-.812.876-2.001.876-3.567 0-1.388-.3-2.488-.901-3.301-.593-.812-1.401-1.219-2.425-1.219-1.007 0-1.807.402-2.399 1.206-.593.796-.889 1.989-.889 3.58ZM263.076 112.021c0 .61-.186 1.173-.558 1.689-.364.508-.881.914-1.549 1.219 1.574.55 2.361 1.612 2.361 3.186 0 1.261-.512 2.268-1.536 3.022-1.024.745-2.395 1.117-4.113 1.117-1.05 0-2.006-.174-2.869-.521-.864-.355-1.537-.854-2.019-1.498-.482-.651-.724-1.422-.724-2.31h3.073c0 .558.249 1.028.749 1.409.499.372 1.13.559 1.891.559.753 0 1.35-.174 1.79-.521.449-.355.673-.817.673-1.384 0-.668-.195-1.151-.584-1.447-.389-.296-.99-.444-1.803-.444h-2.209v-2.222h2.286c1.379-.017 2.069-.584 2.069-1.701 0-.559-.199-.995-.597-1.308-.398-.313-.943-.47-1.637-.47-.678 0-1.249.17-1.714.508-.466.33-.699.749-.699 1.257h-3.072c0-1.21.508-2.2 1.524-2.971 1.015-.778 2.306-1.168 3.872-1.168 1.701 0 3.025.347 3.973 1.041s1.422 1.68 1.422 2.958ZM266.187 122v-13.736h5.573c1.879 0 3.309.33 4.291.99.982.652 1.472 1.591 1.472 2.818 0 .635-.198 1.206-.596 1.714-.39.499-.969.885-1.739 1.155.897.187 1.608.563 2.132 1.13.525.567.787 1.236.787 2.006 0 1.278-.474 2.251-1.421 2.92-.94.669-2.294 1.003-4.063 1.003h-6.436Zm3.084-5.853v3.415h3.377c1.583 0 2.374-.567 2.374-1.701 0-1.142-.804-1.714-2.412-1.714h-3.339Zm0-2.209h2.54c1.751 0 2.627-.516 2.627-1.548 0-1.084-.829-1.642-2.488-1.676h-2.679v3.224ZM292.809 115.271c0 2.125-.483 3.822-1.448 5.091-.965 1.261-2.259 1.892-3.884 1.892-1.507 0-2.713-.495-3.619-1.485v6.512h-3.085v-19.017h2.844l.127 1.396c.906-1.1 2.137-1.65 3.694-1.65 1.676 0 2.988.626 3.936 1.879.956 1.244 1.435 2.975 1.435 5.192v.19Zm-3.073-.266c0-1.371-.275-2.459-.825-3.263-.542-.804-1.32-1.206-2.336-1.206-1.261 0-2.166.521-2.717 1.562v6.093c.559 1.067 1.473 1.6 2.743 1.6.981 0 1.747-.394 2.297-1.181.559-.795.838-1.997.838-3.605ZM303.638 122c-.136-.262-.254-.69-.356-1.282-.982 1.024-2.183 1.536-3.605 1.536-1.38 0-2.505-.394-3.377-1.181-.872-.787-1.308-1.76-1.308-2.92 0-1.464.542-2.585 1.625-3.364 1.092-.787 2.649-1.181 4.672-1.181h1.892v-.901c0-.711-.199-1.278-.597-1.701-.398-.432-1.003-.648-1.815-.648-.703 0-1.278.178-1.727.534-.449.347-.673.791-.673 1.333h-3.085c0-.754.25-1.456.749-2.108.5-.66 1.177-1.176 2.031-1.549.864-.372 1.824-.558 2.882-.558 1.608 0 2.891.406 3.847 1.219.956.804 1.447 1.938 1.473 3.402v6.195c0 1.236.173 2.222.52 2.958V122h-3.148Zm-3.39-2.222c.609 0 1.181-.148 1.714-.444.542-.296.948-.694 1.219-1.193v-2.59h-1.663c-1.143 0-2.002.199-2.578.596-.575.398-.863.961-.863 1.689 0 .592.195 1.066.584 1.422.398.347.927.52 1.587.52ZM312.601 108.264v11.273h4.291v-11.273h3.085v11.273h4.303v-11.273h3.073v11.273h2.348l-.254 6.538h-2.805V122h-17.126v-13.736h3.085ZM337.813 122.254c-1.955 0-3.542-.614-4.76-1.841-1.211-1.236-1.816-2.878-1.816-4.926v-.381c0-1.371.263-2.594.787-3.668.534-1.084 1.278-1.926 2.235-2.527.956-.601 2.023-.901 3.199-.901 1.87 0 3.313.596 4.329 1.79 1.024 1.193 1.536 2.882 1.536 5.065v1.244h-8.975c.093 1.134.469 2.032 1.13 2.692.668.66 1.506.99 2.513.99 1.414 0 2.565-.571 3.453-1.714l1.663 1.587c-.55.821-1.286 1.46-2.209 1.917-.914.449-1.942.673-3.085.673Zm-.368-11.769c-.846 0-1.532.297-2.056.889-.517.592-.847 1.418-.991 2.476h5.878v-.229c-.067-1.032-.342-1.811-.825-2.336-.482-.533-1.151-.8-2.006-.8ZM357.364 122h-3.085v-5.548h-5.344V122h-3.085v-13.736h3.085v5.725h5.344v-5.725h3.085V122ZM369.234 108.264h3.073V122h-3.073v-9.166L363.852 122h-3.073v-13.736h3.073v9.166l5.382-9.166ZM381.638 122.254c-1.955 0-3.542-.614-4.761-1.841-1.21-1.236-1.815-2.878-1.815-4.926v-.381c0-1.371.262-2.594.787-3.668.533-1.084 1.278-1.926 2.234-2.527.956-.601 2.023-.901 3.199-.901 1.871 0 3.314.596 4.329 1.79 1.024 1.193 1.536 2.882 1.536 5.065v1.244h-8.975c.093 1.134.47 2.032 1.13 2.692.668.66 1.506.99 2.513.99 1.414 0 2.565-.571 3.454-1.714l1.663 1.587c-.55.821-1.287 1.46-2.209 1.917-.914.449-1.943.673-3.085.673Zm-.368-11.769c-.847 0-1.532.297-2.057.889-.516.592-.846 1.418-.99 2.476h5.878v-.229c-.068-1.032-.343-1.811-.826-2.336-.482-.533-1.151-.8-2.005-.8ZM397.71 118.204l4.062-9.94h3.86V122h-3.085v-9.09l-3.783 9.09h-2.095l-3.796-9.141V122h-3.085v-13.736h3.885l4.037 9.94ZM409.542 126.164l-1.663-.99c.491-.77.825-1.443 1.003-2.019.186-.567.283-1.147.292-1.739v-2.399h2.78l-.013 2.221c-.008.897-.237 1.795-.685 2.692-.44.905-1.012 1.65-1.714 2.234Z",
  uz: "",
};

export const Welcome = () => (
  <svg fill="none" viewBox="0 0 769 193" className="invert-on-dark">
    <path fill="#fff" d="M0 0h768v193H0z"></path>
    <mask
      id="a"
      width="32"
      height="32"
      x="720"
      y="11"
      maskUnits="userSpaceOnUse"
    >
      <circle cx="736" cy="27" r="16" fill="#fff"></circle>
    </mask>
    <g mask="url(#a)">
      <circle cx="736" cy="27" r="16" fill="#EEE"></circle>
      <circle cx="736" cy="22.9" r="6.5" fill="#C4C4C4"></circle>
      <ellipse cx="736" cy="39.3" fill="#C4C4C4" rx="11.2" ry="7.8"></ellipse>
    </g>
    <path fill="#EEE" d="M15 24h186v7H15z"></path>
    <path stroke="#EEE" d="M0 54.5h768"></path>
    <path fill="#E5E5E5" d="M423 107h108v14H423z"></path>
    <path fill="#000" d={draw(WELCOME_BACK)}></path>
    <path
      fill="#EEE"
      fillRule="evenodd"
      d="M5 1h758a4 4 0 014 4v173h1V5a5 5 0 00-5-5H5a5 5 0 00-5 5v173h1V5a4 4 0 014-4z"
      clipRule="evenodd"
    ></path>
  </svg>
);
