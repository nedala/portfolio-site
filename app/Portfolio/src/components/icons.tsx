import {
  ArrowRight,
  Briefcase,
  ChevronDown,
  Download,
  ExternalLink,
  Github,
  LucideProps,
  Moon,
  Star,
  Sun,
  Globe,
  Youtube,
  Brain,
  Landmark,
  SendHorizonal,
  MessageCircle,
  Play,
  X,
  ChartSpline
} from 'lucide-react';

export const Icons = {
  sun: Sun,
  moon: Moon,
  arrowRight: ArrowRight,
  download: Download,
  preview: ExternalLink,
  githubOutline: Github,
  briefcase: Briefcase,
  chevronDown: ChevronDown,
  star: Star,
  globe: Globe,
  youtube: Youtube,
  brain: Brain,
  landmark: Landmark,
  send: SendHorizonal,
  message: MessageCircle,
  play: Play,
  close: X,
  databloom: ChartSpline,
  audiophile: (props: LucideProps) => (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="64" height="64" fill="black" />
      <path
        d="M8.508 29.92C8.508 27.856 8.892 26.044 9.66 24.484C10.452 22.924 11.52 21.724 12.864 20.884C14.208 20.044 15.708 19.624 17.364 19.624C18.78 19.624 20.016 19.912 21.072 20.488C22.152 21.064 22.98 21.82 23.556 22.756V19.912H29.712V40H23.556V37.156C22.956 38.092 22.116 38.848 21.036 39.424C19.98 40 18.744 40.288 17.328 40.288C15.696 40.288 14.208 39.868 12.864 39.028C11.52 38.164 10.452 36.952 9.66 35.392C8.892 33.808 8.508 31.984 8.508 29.92ZM23.556 29.956C23.556 28.42 23.124 27.208 22.26 26.32C21.42 25.432 20.388 24.988 19.164 24.988C17.94 24.988 16.896 25.432 16.032 26.32C15.192 27.184 14.772 28.384 14.772 29.92C14.772 31.456 15.192 32.68 16.032 33.592C16.896 34.48 17.94 34.924 19.164 34.924C20.388 34.924 21.42 34.48 22.26 33.592C23.124 32.704 23.556 31.492 23.556 29.956ZM40.3216 22.756C40.9216 21.82 41.7496 21.064 42.8056 20.488C43.8616 19.912 45.0976 19.624 46.5136 19.624C48.1696 19.624 49.6696 20.044 51.0136 20.884C52.3576 21.724 53.4136 22.924 54.1816 24.484C54.9736 26.044 55.3696 27.856 55.3696 29.92C55.3696 31.984 54.9736 33.808 54.1816 35.392C53.4136 36.952 52.3576 38.164 51.0136 39.028C49.6696 39.868 48.1696 40.288 46.5136 40.288C45.1216 40.288 43.8856 40 42.8056 39.424C41.7496 38.848 40.9216 38.104 40.3216 37.192V49.576H34.1656V19.912H40.3216V22.756ZM49.1056 29.92C49.1056 28.384 48.6736 27.184 47.8096 26.32C46.9696 25.432 45.9256 24.988 44.6776 24.988C43.4536 24.988 42.4096 25.432 41.5456 26.32C40.7056 27.208 40.2856 28.42 40.2856 29.956C40.2856 31.492 40.7056 32.704 41.5456 33.592C42.4096 34.48 43.4536 34.924 44.6776 34.924C45.9016 34.924 46.9456 34.48 47.8096 33.592C48.6736 32.68 49.1056 31.456 49.1056 29.92Z"
        fill="white"
      />
    </svg>
  ),
  nextstarter: (props: LucideProps) => (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="64" height="64" fill="black" />
      <path
        d="M14.42 44V20.64H20.02L26.068 38.72C26.004 37.9307 25.9293 37.024 25.844 36C25.7587 34.9547 25.684 33.92 25.62 32.896C25.5773 31.8507 25.556 30.9653 25.556 30.24V20.64H29.78V44H24.18L18.196 25.92C18.26 26.6027 18.324 27.4133 18.388 28.352C18.452 29.2907 18.5053 30.24 18.548 31.2C18.612 32.16 18.644 33.0133 18.644 33.76V44H14.42ZM41.2875 44.32C39.6448 44.32 38.2155 44.0427 36.9995 43.488C35.7835 42.9333 34.8448 42.1547 34.1835 41.152C33.5222 40.1493 33.1915 38.9653 33.1915 37.6H37.9915C37.9915 38.3893 38.2902 39.0187 38.8875 39.488C39.5062 39.936 40.3382 40.16 41.3835 40.16C42.3862 40.16 43.1648 39.936 43.7195 39.488C44.2955 39.04 44.5835 38.4213 44.5835 37.632C44.5835 36.9493 44.3702 36.3627 43.9435 35.872C43.5168 35.3813 42.9195 35.0507 42.1515 34.88L39.7835 34.336C37.7995 33.8667 36.2528 33.0027 35.1435 31.744C34.0555 30.464 33.5115 28.9067 33.5115 27.072C33.5115 25.024 34.2048 23.392 35.5915 22.176C36.9782 20.9387 38.8555 20.32 41.2235 20.32C43.6128 20.32 45.5008 20.9173 46.8875 22.112C48.2955 23.2853 48.9995 24.8747 48.9995 26.88H44.1995C44.1995 26.1333 43.9328 25.5467 43.3995 25.12C42.8875 24.6933 42.1408 24.48 41.1595 24.48C40.2422 24.48 39.5382 24.6933 39.0475 25.12C38.5568 25.5467 38.3115 26.176 38.3115 27.008C38.3115 27.6267 38.5142 28.1813 38.9195 28.672C39.3462 29.1413 39.9542 29.4613 40.7435 29.632L43.0795 30.176C45.1488 30.6453 46.7168 31.4987 47.7835 32.736C48.8502 33.952 49.3835 35.5093 49.3835 37.408C49.3835 38.7733 49.0422 39.9787 48.3595 41.024C47.6982 42.0693 46.7595 42.88 45.5435 43.456C44.3488 44.032 42.9302 44.32 41.2875 44.32Z"
        fill="white"
      />
    </svg>
  ),
  socialhub: (props: LucideProps) => (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="64" height="64" fill="black" />
      <path
        d="M17.156 43.724C14.6733 43.724 12.6853 43.2573 11.192 42.324C9.69867 41.372 8.952 39.9253 8.952 37.984C8.952 36.9573 9.12933 36.1733 9.484 35.632C9.83867 35.0907 10.3613 34.82 11.052 34.82C11.556 34.82 11.9667 34.9507 12.284 35.212C12.6013 35.4733 12.76 35.8093 12.76 36.22C12.76 36.5933 12.732 36.92 12.676 37.2C12.676 37.2747 12.6573 37.4053 12.62 37.592C12.6013 37.7787 12.592 37.9747 12.592 38.18C12.592 39.02 13.012 39.6453 13.852 40.056C14.7107 40.4667 15.9053 40.672 17.436 40.672C19.0227 40.672 20.264 40.392 21.16 39.832C22.056 39.2533 22.504 38.4507 22.504 37.424C22.504 36.7893 22.2987 36.248 21.888 35.8C21.4773 35.3333 20.964 34.9507 20.348 34.652C19.732 34.3347 18.864 33.952 17.744 33.504C16.3067 32.944 15.1307 32.412 14.216 31.908C13.32 31.404 12.5453 30.7227 11.892 29.864C11.2573 28.9867 10.94 27.904 10.94 26.616C10.94 25.272 11.2947 24.0773 12.004 23.032C12.732 21.9867 13.768 21.1747 15.112 20.596C16.4747 20.0173 18.0707 19.728 19.9 19.728C21.2627 19.728 22.5133 19.9333 23.652 20.344C24.7907 20.736 25.696 21.3427 26.368 22.164C27.0587 22.9853 27.404 23.9933 27.404 25.188C27.404 26.364 27.2267 27.2507 26.872 27.848C26.5173 28.4453 25.9947 28.744 25.304 28.744C24.8187 28.744 24.408 28.5947 24.072 28.296C23.7547 27.9973 23.596 27.6427 23.596 27.232C23.596 26.8773 23.624 26.5507 23.68 26.252C23.736 25.692 23.764 25.3373 23.764 25.188C23.764 24.404 23.3813 23.8067 22.616 23.396C21.8507 22.9853 20.8987 22.78 19.76 22.78C18.1547 22.78 16.9227 23.0787 16.064 23.676C15.224 24.2547 14.804 25.076 14.804 26.14C14.804 26.8493 15.0187 27.456 15.448 27.96C15.896 28.464 16.4467 28.884 17.1 29.22C17.7533 29.556 18.668 29.9573 19.844 30.424C21.2627 31.0027 22.4013 31.5253 23.26 31.992C24.1187 32.4587 24.8467 33.0933 25.444 33.896C26.06 34.6987 26.368 35.688 26.368 36.864C26.368 39.0667 25.528 40.7653 23.848 41.96C22.1867 43.136 19.956 43.724 17.156 43.724ZM54.6861 37.256C54.9287 37.256 55.1154 37.368 55.2461 37.592C55.3954 37.816 55.4701 38.124 55.4701 38.516C55.4701 39.244 55.2927 39.8227 54.9381 40.252C53.0901 42.5107 51.1207 43.64 49.0301 43.64C47.2194 43.64 45.7727 42.94 44.6901 41.54C43.6074 40.14 43.0661 38.1333 43.0661 35.52C43.0661 34.8853 43.0941 34.2507 43.1501 33.616C41.9181 33.84 40.5741 34.008 39.1181 34.12C38.1474 34.1947 37.4847 34.2413 37.1301 34.26C36.7567 36.164 36.2341 38.4973 35.5621 41.26C35.1701 42.884 34.4234 43.696 33.3221 43.696C32.1274 43.696 31.5301 43.1547 31.5301 42.072C31.5301 41.8293 31.5767 41.4933 31.6701 41.064C32.3047 38.5067 32.8087 36.3413 33.1821 34.568L31.8381 34.624C31.2221 34.624 30.7741 34.5213 30.4941 34.316C30.2141 34.092 30.0741 33.7373 30.0741 33.252C30.0741 32.636 30.2514 32.188 30.6061 31.908C30.9607 31.6093 31.5487 31.4413 32.3701 31.404L33.8541 31.348C34.3394 28.716 34.5821 26.7093 34.5821 25.328C34.5821 24.4507 34.4514 23.8533 34.1901 23.536C33.9287 23.2187 33.5834 23.06 33.1541 23.06C31.8474 23.06 30.3727 24.152 28.7301 26.336C28.4874 26.6533 28.2167 26.812 27.9181 26.812C27.6567 26.812 27.4327 26.6907 27.2461 26.448C27.0594 26.2053 26.9661 25.8973 26.9661 25.524C26.9661 24.9453 27.1994 24.3293 27.6661 23.676C28.4874 22.5373 29.5234 21.604 30.7741 20.876C32.0247 20.1293 33.2941 19.756 34.5821 19.756C35.7954 19.756 36.7287 20.176 37.3821 21.016C38.0541 21.8373 38.3901 23.1253 38.3901 24.88C38.3901 26.4293 38.1661 28.5293 37.7181 31.18L40.4621 31.04C41.6381 30.984 42.6461 30.8907 43.4861 30.76C43.8221 28.7067 44.3354 26.784 45.0261 24.992C45.7167 23.2 46.5754 21.744 47.6021 20.624C48.6287 19.504 49.7767 18.944 51.0461 18.944C51.9794 18.944 52.7167 19.3173 53.2581 20.064C53.7994 20.792 54.0701 21.7533 54.0701 22.948C54.0701 27.5773 51.7087 30.788 46.9861 32.58C46.9301 33.3267 46.9021 34.1013 46.9021 34.904C46.9021 36.864 47.1447 38.2547 47.6301 39.076C48.1154 39.8973 48.7967 40.308 49.6741 40.308C50.4394 40.308 51.1394 40.112 51.7741 39.72C52.4087 39.3093 53.1274 38.6187 53.9301 37.648C54.1541 37.3867 54.4061 37.256 54.6861 37.256ZM50.9061 21.38C50.4954 21.38 50.0567 21.7533 49.5901 22.5C49.1421 23.2467 48.7127 24.264 48.3021 25.552C47.8914 26.84 47.5647 28.2493 47.3221 29.78C48.8154 29.164 49.9167 28.2867 50.6261 27.148C51.3354 26.0093 51.6901 24.544 51.6901 22.752C51.6901 22.3227 51.6154 21.9867 51.4661 21.744C51.3167 21.5013 51.1301 21.38 50.9061 21.38Z"
        fill="white"
      />
    </svg>
  ),
  github: (props: LucideProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12.0004 2.40002C6.69879 2.40002 2.40039 6.69842 2.40039 12C2.40039 16.4984 5.49799 20.2624 9.67399 21.304C9.62919 21.1744 9.60039 21.024 9.60039 20.8376V19.1968C9.21079 19.1968 8.55799 19.1968 8.39399 19.1968C7.73719 19.1968 7.15319 18.9144 6.86999 18.3896C6.55559 17.8064 6.50119 16.9144 5.72199 16.3688C5.49079 16.1872 5.66679 15.98 5.93319 16.008C6.42519 16.1472 6.83319 16.4848 7.21719 16.9856C7.59959 17.4872 7.77959 17.6008 8.49399 17.6008C8.84039 17.6008 9.35879 17.5808 9.84679 17.504C10.1092 16.8376 10.5628 16.224 11.1172 15.9344C7.92039 15.6056 6.39479 14.0152 6.39479 11.856C6.39479 10.9264 6.79079 10.0272 7.46359 9.26962C7.24279 8.51762 6.96519 6.98402 7.54839 6.40002C8.98679 6.40002 9.85639 7.33282 10.0652 7.58482C10.782 7.33922 11.5692 7.20002 12.3964 7.20002C13.2252 7.20002 14.0156 7.33922 14.734 7.58642C14.9404 7.33602 15.8108 6.40002 17.2524 6.40002C17.838 6.98482 17.5572 8.52482 17.334 9.27522C18.0028 10.0312 18.3964 10.928 18.3964 11.856C18.3964 14.0136 16.8732 15.6032 13.6812 15.9336C14.5596 16.392 15.2004 17.68 15.2004 18.6504V20.8376C15.2004 20.9208 15.182 20.9808 15.1724 21.052C18.9132 19.7408 21.6004 16.1888 21.6004 12C21.6004 6.69842 17.302 2.40002 12.0004 2.40002Z"
      />
    </svg>
  ),
  linkedin: (props: LucideProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M19.1992 3.19995H4.79922C3.91522 3.19995 3.19922 3.91595 3.19922 4.79995V19.2C3.19922 20.084 3.91522 20.7999 4.79922 20.7999H19.1992C20.0832 20.7999 20.7992 20.084 20.7992 19.2V4.79995C20.7992 3.91595 20.0832 3.19995 19.1992 3.19995ZM8.76242 17.6H6.40242V10.0064H8.76242V17.6ZM7.55842 8.92075C6.79762 8.92075 6.18242 8.30395 6.18242 7.54475C6.18242 6.78555 6.79842 6.16955 7.55842 6.16955C8.31682 6.16955 8.93362 6.78635 8.93362 7.54475C8.93362 8.30395 8.31682 8.92075 7.55842 8.92075ZM17.6024 17.6H15.244V13.9072C15.244 13.0264 15.228 11.8935 14.0176 11.8935C12.7896 11.8935 12.6008 12.8528 12.6008 13.8432V17.6H10.2424V10.0064H12.5064V11.044H12.5384C12.8536 10.4472 13.6232 9.81755 14.7712 9.81755C17.1608 9.81755 17.6024 11.3904 17.6024 13.4352V17.6Z"
      />
    </svg>
  ),
  html: (props: LucideProps) => (
    <svg viewBox="0 0 50 50" {...props}>
      <path
        fill="currentColor"
        d="M42.3803 5.555C42.0636 5.20167 41.612 5 41.1386 5H8.86198C8.38865 5 7.93698 5.20167 7.62032 5.555C7.30365 5.90833 7.15365 6.38 7.20532 6.85L10.8753 39.8883C10.9486 40.56 11.4236 41.1217 12.0736 41.3067L24.5403 44.8683C24.6903 44.9117 24.8453 44.9333 24.9986 44.9333C25.152 44.9333 25.307 44.9117 25.457 44.8683L37.9236 41.3067C38.5736 41.1217 39.047 40.56 39.122 39.8883L42.7937 6.85C42.847 6.38 42.697 5.90833 42.3803 5.555ZM34.382 17.3833H19.4986L19.852 21.62H34.0236L32.9603 34.1367L25.0053 36.6667L24.927 36.6417L17.0603 34.1333L16.6303 29.0333H20.4836L20.652 31.015L25.047 31.9833L29.3653 31.0133L29.8236 25.6583H16.3403L15.297 13.3333H34.7286L34.382 17.3833Z"
      />
    </svg>
  ),
  css: (props: LucideProps) => (
    <svg viewBox="0 0 50 50" {...props}>
      <path
        fill="currentColor"
        d="M42.3803 5.555C42.0636 5.20167 41.612 5 41.1386 5H8.86198C8.38865 5 7.93698 5.20167 7.62032 5.555C7.30365 5.90833 7.15365 6.38 7.20532 6.85L10.8753 39.8883C10.9486 40.56 11.4236 41.1217 12.0736 41.3067L24.5403 44.8683C24.6903 44.9117 24.8453 44.9333 24.9986 44.9333C25.152 44.9333 25.307 44.9117 25.457 44.8683L37.9236 41.3067C38.5736 41.1217 39.047 40.56 39.122 39.8883L42.7937 6.85C42.847 6.38 42.697 5.90833 42.3803 5.555ZM34.1937 21.79L33.4503 33.9317L25.0536 36.6767L16.657 33.9317L16.3386 28.125H20.5886L20.6953 30.765L25.0536 32.2433L29.412 30.765L29.7303 26.015H20.377L20.1653 21.7917H29.9436L30.262 17.5683H15.5936L15.2753 13.3433H34.7253L34.1937 21.79Z"
      />
    </svg>
  ),
  sass: (props: LucideProps) => (
    <svg viewBox="0 0 50 50" {...props}>
      <g clipPath="url(#clip0_717_61)">
        <path
          d="M43.0291 27.802C41.2821 27.811 39.7681 28.231 38.4991 28.856C38.0351 27.93 37.5651 27.115 37.4861 26.509C37.3941 25.802 37.2871 25.38 37.3981 24.537C37.5091 23.694 37.9971 22.501 37.9891 22.412C37.9821 22.323 37.8801 21.894 36.8721 21.886C35.8641 21.879 35.0021 22.08 34.9001 22.346C34.7981 22.612 34.6041 23.211 34.4841 23.836C34.3071 24.75 32.4721 28.01 31.4291 29.715C31.0881 29.049 30.7981 28.463 30.7381 27.999C30.6461 27.292 30.5391 26.87 30.6501 26.027C30.7611 25.184 31.2491 23.991 31.2411 23.902C31.2341 23.813 31.1321 23.384 30.1241 23.376C29.1161 23.369 28.2541 23.57 28.1521 23.836C28.0501 24.102 27.9421 24.724 27.7361 25.326C27.5291 25.928 25.0891 31.365 24.4501 32.774C24.1241 33.492 23.8411 34.069 23.6411 34.463L23.6401 34.461C23.6401 34.461 23.6281 34.487 23.6061 34.532C23.4351 34.867 23.3331 35.053 23.3331 35.053C23.3331 35.053 23.3341 35.056 23.3361 35.06C23.2001 35.306 23.0551 35.535 22.9831 35.535C22.9331 35.535 22.8321 34.879 23.0051 33.98C23.3681 32.094 24.2401 29.152 24.2321 29.051C24.2281 28.999 24.3941 28.487 23.6621 28.218C22.9511 27.958 22.6971 28.392 22.6321 28.393C22.5691 28.394 22.5221 28.546 22.5221 28.546C22.5221 28.546 23.3151 25.238 21.0101 25.238C19.5701 25.238 17.5741 26.814 16.5901 28.242C15.9701 28.58 14.6421 29.305 13.2331 30.079C12.6921 30.376 12.1401 30.68 11.6161 30.969C11.5801 30.93 11.5451 30.89 11.5081 30.851C8.71409 27.87 3.55009 25.762 3.76909 21.755C3.84909 20.298 4.35509 16.462 13.6931 11.809C21.3421 7.99698 27.4661 9.04598 28.5241 11.371C30.0361 14.692 25.2511 20.865 17.3081 21.755C14.2811 22.094 12.6881 20.921 12.2911 20.484C11.8741 20.024 11.8121 20.003 11.6561 20.09C11.4021 20.231 11.5631 20.637 11.6561 20.879C11.8931 21.496 12.8661 22.591 14.5261 23.135C15.9861 23.614 19.5391 23.877 23.8371 22.215C28.6501 20.353 32.4081 15.174 31.3051 10.845C30.1821 6.44198 22.8821 4.99498 15.9731 7.44898C11.8611 8.90998 7.41009 11.203 4.20909 14.196C0.403094 17.756 -0.202906 20.854 0.047094 22.148C0.936094 26.748 7.27509 29.743 9.81409 31.963C9.68909 32.032 9.57109 32.097 9.46409 32.156C8.19109 32.786 3.35909 35.315 2.15009 37.987C0.779094 41.018 2.36809 43.193 3.42109 43.486C6.68109 44.393 10.0271 42.761 11.8251 40.079C13.6231 37.398 13.4031 33.907 12.5781 32.313C12.5681 32.293 12.5561 32.274 12.5461 32.254C12.8751 32.059 13.2101 31.862 13.5421 31.667C14.1901 31.287 14.8261 30.932 15.3781 30.631C15.0691 31.477 14.8431 32.491 14.7251 33.956C14.5871 35.677 15.2921 37.901 16.2151 38.776C16.6211 39.161 17.1101 39.17 17.4201 39.17C18.4941 39.17 18.9841 38.277 19.5231 37.22C20.1851 35.924 20.7721 34.416 20.7721 34.416C20.7721 34.416 20.0351 38.491 22.0431 38.491C22.7741 38.491 23.5101 37.542 23.8381 37.059C23.8391 37.064 23.8391 37.067 23.8391 37.067C23.8391 37.067 23.8581 37.036 23.8951 36.972C23.9711 36.856 24.0141 36.782 24.0141 36.782C24.0141 36.782 24.0161 36.774 24.0181 36.761C24.3121 36.251 24.9641 35.087 25.9421 33.167C27.2051 30.687 28.4171 27.581 28.4171 27.581C28.4171 27.581 28.5301 28.341 28.8991 29.596C29.1161 30.335 29.5781 31.152 29.9421 31.935C29.6491 32.342 29.4691 32.575 29.4691 32.575C29.4691 32.575 29.4711 32.579 29.4741 32.587C29.2401 32.898 28.9771 33.233 28.7021 33.561C27.7051 34.749 26.5171 36.105 26.3581 36.497C26.1711 36.958 26.2151 37.298 26.5771 37.57C26.8411 37.769 27.3121 37.8 27.8041 37.767C28.7001 37.707 29.3311 37.484 29.6421 37.349C30.1271 37.178 30.6921 36.908 31.2221 36.518C32.2001 35.799 32.7901 34.77 32.7341 33.407C32.7031 32.656 32.4631 31.912 32.1601 31.209C32.2491 31.081 32.3381 30.953 32.4271 30.822C33.9691 28.567 35.1651 26.09 35.1651 26.09C35.1651 26.09 35.2781 26.85 35.6471 28.105C35.8341 28.741 36.2031 29.434 36.5341 30.114C35.0841 31.292 34.1851 32.661 33.8721 33.559C33.2951 35.22 33.7471 35.973 34.5951 36.144C34.9791 36.222 35.5221 36.046 35.9301 35.873C36.4381 35.705 37.0481 35.424 37.6181 35.005C38.5961 34.286 39.5371 33.279 39.4801 31.916C39.4541 31.296 39.2861 30.68 39.0581 30.088C40.2871 29.576 41.8791 29.291 43.9061 29.528C48.2551 30.036 49.1081 32.751 48.9451 33.887C48.7821 35.024 47.8701 35.648 47.5651 35.837C47.2601 36.026 47.1671 36.091 47.1931 36.231C47.2301 36.435 47.3711 36.427 47.6311 36.383C47.9891 36.323 49.9141 35.459 49.9971 33.361C50.1011 30.703 47.5491 27.778 43.0291 27.802ZM9.51109 39.102C8.07109 40.673 6.05809 41.267 5.19509 40.767C4.26309 40.227 4.63209 37.913 6.40009 36.246C7.47709 35.23 8.86809 34.294 9.79109 33.717C10.0011 33.591 10.3091 33.405 10.6841 33.18C10.7461 33.145 10.7811 33.125 10.7811 33.125L10.7801 33.123C10.8521 33.08 10.9271 33.035 11.0031 32.989C11.6461 35.363 11.0231 37.453 9.51109 39.102ZM20.0041 31.968C19.5021 33.191 18.4521 36.32 17.8131 36.152C17.2641 36.008 16.9301 33.629 17.7031 31.289C18.0921 30.111 18.9231 28.703 19.4121 28.156C20.1981 27.277 21.0641 26.989 21.2741 27.346C21.5431 27.8 20.3191 31.201 20.0041 31.968ZM28.6741 36.105C28.4611 36.216 28.2661 36.286 28.1761 36.232C28.1091 36.192 28.2641 36.046 28.2641 36.046C28.2641 36.046 29.3481 34.879 29.7761 34.348C30.0241 34.039 30.3131 33.672 30.6261 33.262C30.6291 33.303 30.6301 33.344 30.6301 33.384C30.6261 34.782 29.2761 35.725 28.6741 36.105ZM35.3531 34.582C35.1941 34.469 35.2211 34.104 35.7421 32.968C35.9471 32.522 36.4141 31.77 37.2271 31.052C37.3211 31.347 37.3791 31.63 37.3771 31.894C37.3661 33.653 36.1111 34.31 35.3531 34.582Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_717_61">
          <rect width="50" height="50" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  ),
  tailwind: (props: LucideProps) => (
    <svg viewBox="0 0 50 50" {...props}>
      <g clipPath="url(#clip0_717_63)">
        <path
          fill="currentColor"
          d="M25 10.0042C18.3333 10.0042 14.1667 13.3364 12.5 20.001C15 16.6687 17.9167 15.4198 21.25 16.2521C23.1521 16.7271 24.5115 18.1073 26.0167 19.6344C28.4667 22.1208 31.3031 25 37.5 25C44.1667 25 48.3333 21.6677 50 15.0021C47.5 18.3344 44.5833 19.5844 41.25 18.7521C39.349 18.2771 37.9896 16.8969 36.4844 15.3698C34.0333 12.8823 31.1958 10.0042 25 10.0042ZM12.5 25C5.83333 25 1.66667 28.3323 0 34.9979C2.5 31.6656 5.41667 30.4156 8.75 31.2489C10.651 31.725 12.0104 33.1041 13.5156 34.6302C15.9667 37.1177 18.8042 39.9969 25 39.9969C31.6667 39.9969 35.8333 36.6646 37.5 29.9989C35 33.3312 32.0833 34.5812 28.75 33.7479C26.8479 33.2729 25.4885 31.8927 23.9833 30.3666C21.5333 27.8792 18.6969 25 12.5 25Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_717_63">
          <rect width="50" height="50" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  ),
  javascript: (props: LucideProps) => (
    <svg viewBox="0 0 50 50" {...props}>
      <path
        d="M43.3359 4H6.66797C5.19531 4 4 5.19531 4 6.66797V43.332C4 44.8047 5.19531 46 6.66797 46H43.332C44.8047 46 46 44.8047 46 43.3359V6.66797C46 5.19531 44.8047 4 43.3359 4ZM27 36.1836C27 40.1797 24.6562 42 21.2344 42C18.1406 42 15.9102 39.9258 15 38L18.1445 36.0977C18.75 37.1719 19.6719 38 21 38C22.2695 38 23 37.5039 23 35.5742V23H27V36.1836ZM35.6758 42C32.1328 42 30.1211 40.2148 29 38L32 36C32.8164 37.3359 33.707 38.6133 35.5898 38.6133C37.1719 38.6133 38 37.8242 38 36.7305C38 35.4258 37.1406 34.9609 35.4023 34.1992L34.4492 33.7891C31.6953 32.6172 29.8633 31.1484 29.8633 28.0391C29.8633 25.1797 32.0469 23 35.4531 23C37.8789 23 39.6211 23.8437 40.8789 26.0547L37.9102 27.9648C37.2539 26.7891 36.5508 26.3281 35.4531 26.3281C34.3359 26.3281 33.6289 27.0391 33.6289 27.9648C33.6289 29.1094 34.3359 29.5703 35.9727 30.2812L36.9258 30.6914C40.1719 32.0781 42 33.4961 42 36.6836C42 40.1172 39.3008 42 35.6758 42Z"
        fill="currentColor"
      />
    </svg>
  ),
  typescript: (props: LucideProps) => (
    <svg viewBox="0 0 50 50" {...props}>
      <path
        fill="currentColor"
        d="M45 4H5C4.447 4 4 4.448 4 5V45C4 45.552 4.447 46 5 46H45C45.553 46 46 45.552 46 45V5C46 4.448 45.553 4 45 4ZM29 26.445H24V42H20V26.445H15V23H29V26.445ZM30.121 41.112V36.954C30.121 36.954 32.392 38.666 35.117 38.666C37.842 38.666 37.737 36.884 37.737 36.64C37.737 34.054 30.016 34.054 30.016 28.325C30.016 20.534 41.266 23.608 41.266 23.608L41.126 27.312C41.126 27.312 39.239 26.054 37.108 26.054C34.977 26.054 34.208 27.067 34.208 28.15C34.208 30.945 41.999 30.666 41.999 36.291C42 44.955 30.121 41.112 30.121 41.112Z"
      />
    </svg>
  ),
  react: (props: LucideProps) => (
    <svg viewBox="0 0 50 50" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.5547 3.9844C33.775 3.95818 32.9589 4.09412 32.1406 4.3594C30.5041 4.88996 28.7892 5.92391 27.0293 7.35549C26.3396 7.91653 25.6436 8.55785 24.9453 9.2383C24.2624 8.57513 23.5807 7.95102 22.9062 7.40237C21.1478 5.97193 19.4375 4.93759 17.8047 4.40823C16.1719 3.87886 14.5472 3.86246 13.2129 4.63284C11.8786 5.40321 11.0806 6.81738 10.7227 8.49612C10.3647 10.1749 10.4041 12.174 10.7637 14.4121C10.8886 15.1895 11.0667 16.0051 11.2695 16.836C10.5071 17.067 9.76668 17.31 9.08008 17.5781C7.00798 18.3875 5.29345 19.3557 4.04492 20.5078C2.7964 21.66 1.99023 23.0583 1.99023 24.5938C1.99023 26.1292 2.7964 27.5256 4.04492 28.6778C5.29345 29.8299 7.00798 30.8001 9.08008 31.6094C9.81425 31.8961 10.6091 32.1543 11.4297 32.3985C11.1345 33.5013 10.8954 34.5715 10.7324 35.586C10.3726 37.8259 10.3346 39.8253 10.6934 41.5078C11.0521 43.1904 11.8505 44.6126 13.1914 45.3867C14.5323 46.1609 16.1643 46.1419 17.8008 45.6114C19.4373 45.0808 21.1502 44.0488 22.9102 42.6172C23.5935 42.0613 24.2848 41.4272 24.9766 40.7539C25.672 41.4313 26.366 42.0684 27.0527 42.627C28.8112 44.0574 30.5234 45.0898 32.1562 45.6192C33.7891 46.1485 35.4137 46.1649 36.748 45.3946C38.0824 44.6242 38.8784 43.21 39.2363 41.5313C39.5943 39.8525 39.5549 37.8553 39.1953 35.6172C39.0319 34.6 38.7926 33.5262 38.4961 32.4199C39.3438 32.1699 40.1637 31.9047 40.9199 31.6094C42.992 30.8001 44.7066 29.8299 45.9551 28.6778C47.2036 27.5256 48.0098 26.1292 48.0098 24.5938C48.0098 23.0583 47.2036 21.66 45.9551 20.5078C44.7066 19.3557 42.992 18.3875 40.9199 17.5781C40.2235 17.3061 39.4717 17.06 38.6973 16.8262C38.9018 15.9902 39.0833 15.1688 39.209 14.3867C39.5688 12.1468 39.6068 10.1455 39.248 8.46291C38.8893 6.78037 38.089 5.36015 36.748 4.58596C36.0776 4.19887 35.3344 4.01061 34.5547 3.9844ZM34.4629 6.01955C34.9522 6.03293 35.3695 6.14936 35.7266 6.35549C36.4406 6.76775 36.9684 7.57012 37.25 8.89065C37.5316 10.2112 37.5218 11.9954 37.1895 14.0645C37.0756 14.7729 36.9104 15.5237 36.7227 16.293C34.6772 15.8007 32.4357 15.4354 30.0469 15.2207C28.8476 13.5594 27.6154 12.0458 26.373 10.7031C27.0302 10.0617 27.6831 9.46175 28.3203 8.94338C29.946 7.62096 31.4851 6.72112 32.7695 6.30471C33.4117 6.09651 33.9736 6.00618 34.4629 6.01955ZM15.4863 6.02541C15.9784 6.01168 16.5415 6.10176 17.1855 6.31057C18.4737 6.72818 20.0155 7.62762 21.6426 8.95119C22.267 9.45916 22.9053 10.0477 23.5488 10.6739C22.2973 12.0275 21.0549 13.5542 19.8477 15.2305C17.4689 15.4491 15.2366 15.8164 13.2012 16.3106C13.0148 15.5456 12.8496 14.7986 12.7363 14.0938C12.4036 12.0229 12.3953 10.2384 12.6777 8.91409C12.9601 7.58974 13.4922 6.78133 14.2129 6.36526C14.5732 6.15722 14.9942 6.03915 15.4863 6.02541ZM24.9766 12.1426C25.7912 13.0291 26.606 13.9992 27.4141 15.043C26.62 15.0099 25.8163 14.9903 25 14.9903C24.1675 14.9903 23.3484 15.0105 22.5391 15.0449C23.3474 14.0003 24.1618 13.0298 24.9766 12.1426ZM25 17.0098C26.3599 17.0098 27.6853 17.0657 28.9746 17.1602C29.8617 18.4343 30.7286 19.7861 31.5547 21.2168C32.2805 22.474 32.9373 23.7292 33.5352 24.9688C32.931 26.2248 32.2632 27.497 31.5273 28.7715C30.8796 29.8934 30.2032 30.959 29.5156 31.9864C28.0593 32.1081 26.5503 32.1758 25 32.1758C23.4124 32.1758 21.8695 32.1041 20.3809 31.9766C19.7047 30.964 19.0397 29.9146 18.4023 28.8106C17.6682 27.539 17.0036 26.2691 16.4004 25.0156C17.0061 23.7551 17.6737 22.4782 18.4121 21.1992C19.2338 19.776 20.0982 18.4321 20.9805 17.1641C22.2836 17.0674 23.6245 17.0098 25 17.0098ZM31.5488 17.4102C33.1973 17.6159 34.7451 17.9014 36.1855 18.2442C35.7581 19.6453 35.2317 21.1088 34.5938 22.6192C34.1796 21.8207 33.7506 21.0196 33.2871 20.2168C32.7254 19.2439 32.1404 18.3164 31.5488 17.4102ZM18.3438 17.4258C17.7647 18.3151 17.1948 19.2246 16.6445 20.1778C16.1751 20.9908 15.7372 21.8028 15.3184 22.6114C14.686 21.1101 14.1627 19.6549 13.7383 18.2617C15.168 17.9184 16.7068 17.6338 18.3438 17.4258ZM38.1641 18.7754C38.8729 18.9899 39.5576 19.2137 40.1855 19.459C42.0957 20.2051 43.6067 21.0885 44.5859 21.9922C45.5652 22.8959 45.9902 23.7577 45.9902 24.5938C45.9902 25.4298 45.5652 26.2916 44.5859 27.1953C43.6067 28.099 42.0957 28.9825 40.1855 29.7285C39.4877 30.0011 38.721 30.2483 37.9238 30.4824C37.3552 28.7237 36.6294 26.8888 35.7656 25.0156C36.7588 22.8651 37.5611 20.7683 38.1641 18.7754ZM11.8027 18.7852C12.3988 20.7582 13.1908 22.8341 14.1699 24.9629C13.3005 26.847 12.5711 28.6923 12 30.461C11.231 30.2329 10.4902 29.9925 9.81445 29.7285C7.9043 28.9825 6.39335 28.099 5.41406 27.1953C4.43477 26.2916 4.00977 25.4298 4.00977 24.5938C4.00977 23.7577 4.43477 22.8959 5.41406 21.9922C6.39335 21.0885 7.9043 20.2051 9.81445 19.459C10.4328 19.2175 11.1059 18.9969 11.8027 18.7852ZM25 20C22.2504 20 20 22.2504 20 25C20 27.7496 22.2504 30 25 30C27.7496 30 30 27.7496 30 25C30 22.2504 27.7496 20 25 20ZM15.3418 27.3653C15.7625 28.1779 16.2 28.9933 16.6719 29.8106C17.041 30.45 17.4181 31.0724 17.8008 31.6836C16.4578 31.4974 15.1812 31.2616 13.9824 30.9824C14.3637 29.8148 14.8197 28.6028 15.3418 27.3653ZM34.6191 27.3653C35.1433 28.6057 35.5996 29.8197 35.9824 30.9903C34.7798 31.2691 33.4993 31.5041 32.1523 31.6895C32.5401 31.0708 32.923 30.4406 33.2969 29.793C33.7653 28.9817 34.2011 28.1719 34.6191 27.3653ZM13.4062 32.9239C15.2161 33.3526 17.1777 33.6819 19.2578 33.8965C20.6464 35.9049 22.093 37.7095 23.5488 39.2871C22.8978 39.9219 22.2526 40.5176 21.6211 41.0313C19.9954 42.3537 18.4543 43.2516 17.1699 43.668C15.8855 44.0844 14.9269 44.0295 14.2129 43.6172C13.4988 43.2049 12.973 42.4026 12.6914 41.0821C12.4098 39.7615 12.4176 37.9793 12.75 35.9102C12.9008 34.9715 13.1262 33.9664 13.4062 32.9239ZM36.5605 32.9317C36.843 33.9806 37.069 34.9894 37.2207 35.9336C37.5534 38.0045 37.5617 39.789 37.2793 41.1133C36.9969 42.4376 36.4687 43.248 35.748 43.6641C35.0274 44.0802 34.0596 44.1344 32.7715 43.7168C31.4834 43.2992 29.9416 42.3998 28.3145 41.0762C27.6784 40.5588 27.0287 39.9583 26.373 39.3184C27.8387 37.7346 29.2955 35.9208 30.6934 33.9004C32.7787 33.6873 34.7458 33.3599 36.5605 32.9317ZM21.8672 34.1016C22.894 34.1575 23.9342 34.1953 25 34.1953C26.0305 34.1953 27.0371 34.1598 28.0312 34.1074C27.015 35.4786 25.979 36.7252 24.9473 37.8477C23.9161 36.7228 22.8821 35.474 21.8672 34.1016Z"
      />
    </svg>
  ),
  redux: (props: LucideProps) => (
    <svg viewBox="0 0 50 50" {...props}>
      <path
        fill="currentColor"
        d="M23.9994 2C16.8314 2 10.9994 10.2923 10.9994 20.4863C10.9994 25.7525 12.5643 30.4946 15.0599 33.8594C14.9659 34.3645 14.9842 34.8841 15.1136 35.3813C15.243 35.8785 15.4802 36.3412 15.8085 36.7364C16.1368 37.1316 16.5481 37.4497 17.0131 37.6681C17.4782 37.8865 17.9856 37.9998 18.4994 38C19.4276 38 20.3179 37.6312 20.9743 36.9749C21.6306 36.3185 21.9994 35.4283 21.9994 34.5C21.9994 33.5717 21.6306 32.6815 20.9743 32.0251C20.3179 31.3687 19.4276 31 18.4994 31C18.3089 31.0014 18.1188 31.0184 17.931 31.0508C16.143 28.3872 14.9994 24.6115 14.9994 20.4863C14.9994 12.6333 19.1214 6 23.9994 6C28.1184 6 31.6885 10.7375 32.7025 16.9375C34.1245 17.3455 35.5411 17.8975 36.9291 18.5645C36.2511 9.27045 30.7114 2 23.9994 2ZM22.4994 17C21.5711 17 20.6809 17.3687 20.0245 18.0251C19.3681 18.6815 18.9994 19.5717 18.9994 20.5C18.9994 21.4283 19.3681 22.3185 20.0245 22.9749C20.6809 23.6313 21.5711 24 22.4994 24C23.1537 23.9997 23.7947 23.8159 24.3499 23.4697C24.905 23.1234 25.3519 22.6285 25.64 22.041C28.8898 21.8375 32.6455 22.8401 36.1127 24.918C42.9727 29.031 46.7032 36.223 44.2572 40.623C43.4532 42.069 42.0048 43.109 40.0678 43.627C37.2788 44.373 33.8586 43.9937 30.4896 42.6387C29.4206 43.6327 28.2453 44.5658 26.9623 45.4238C30.2903 47.1048 33.8099 47.9961 37.0619 47.9961C38.4719 47.9961 39.8329 47.8302 41.1029 47.4902C44.1099 46.6852 46.4103 44.9824 47.7533 42.5664C51.3373 36.1174 47.1273 26.8583 38.1693 21.4883C33.9068 18.9319 29.1849 17.7538 25.0345 18.0938C24.7082 17.7491 24.3152 17.4744 23.8794 17.2863C23.4436 17.0983 22.974 17.0009 22.4994 17ZM9.15955 23.3242C2.07855 28.7952 -0.958561 36.7994 2.24744 42.5664C3.59044 44.9824 5.89083 46.6852 8.89783 47.4902C10.1688 47.8302 11.5268 47.9961 12.9388 47.9961C16.7388 47.9961 20.9094 46.7897 24.7064 44.5137C28.9543 41.967 32.0951 38.5437 33.8763 34.9629C35.6274 34.7721 36.9994 33.301 36.9994 31.5C36.9994 29.57 35.4294 28 33.4994 28C31.5694 28 29.9994 29.57 29.9994 31.5C29.9994 32.0402 30.1315 32.5466 30.351 33.0039C28.907 35.9787 26.2128 38.9454 22.6498 41.082C18.3538 43.658 13.599 44.61 9.93103 43.627C7.99503 43.109 6.54753 42.069 5.74353 40.623C3.80953 37.143 5.74569 31.9235 10.0287 27.8555C9.61769 26.4155 9.32355 24.8992 9.15955 23.3242Z"
      />
    </svg>
  ),
  nextjs: (props: LucideProps) => (
    <svg viewBox="0 0 50 50" {...props}>
      <g clipPath="url(#clip0_748_15)">
        <path
          d="M23.3627 0.0134552C23.2551 0.0232289 22.913 0.057437 22.6051 0.0818713C15.5034 0.722051 8.85142 4.55336 4.63832 10.442C2.29228 13.7162 0.791789 17.4303 0.224829 21.3642C0.0244379 22.7374 0 23.143 0 25.0049C0 26.8668 0.0244379 27.2724 0.224829 28.6456C1.58358 38.0333 8.26491 45.9207 17.3265 48.843C18.9492 49.3659 20.6598 49.7227 22.6051 49.9377C23.3627 50.0208 26.6373 50.0208 27.3949 49.9377C30.7527 49.5663 33.5973 48.7355 36.4027 47.3037C36.8328 47.0838 36.9159 47.0251 36.8573 46.9763C36.8182 46.9469 34.9853 44.4888 32.7859 41.5176L28.7879 36.1176L23.7781 28.7043C21.0215 24.6286 18.7537 21.2958 18.7341 21.2958C18.7146 21.2909 18.695 24.5846 18.6852 28.6065C18.6706 35.6485 18.6657 35.9319 18.5777 36.0981C18.4506 36.3375 18.3529 36.4353 18.1476 36.5428C17.9912 36.621 17.8544 36.6356 17.1163 36.6356H16.2708L16.0459 36.4939C15.8993 36.4011 15.7918 36.2789 15.7185 36.1372L15.6158 35.9173L15.6256 26.1191L15.6403 16.316L15.7918 16.1255C15.87 16.0228 16.0362 15.8909 16.1535 15.8274C16.3539 15.7296 16.4321 15.7198 17.2776 15.7198C18.2747 15.7198 18.4409 15.7589 18.6999 16.0424C18.7732 16.1206 21.4858 20.206 24.7312 25.1271C27.9765 30.0481 32.4145 36.7676 34.5943 40.0662L38.5533 46.0624L38.7537 45.9305C40.5279 44.7772 42.4047 43.1352 43.8905 41.4248C47.0528 37.7938 49.0909 33.3663 49.7752 28.6456C49.9756 27.2724 50 26.8668 50 25.0049C50 23.143 49.9756 22.7374 49.7752 21.3642C48.4164 11.9765 41.7351 4.0891 32.6735 1.16676C31.0753 0.648748 29.3744 0.292007 27.4682 0.0769845C26.999 0.0281158 23.7683 -0.0256398 23.3627 0.0134552ZM33.5973 15.1334C33.8319 15.2507 34.0225 15.4755 34.0909 15.7101C34.13 15.8371 34.1398 18.5542 34.13 24.6775L34.1153 33.4641L32.566 31.089L31.0117 28.714V22.3269C31.0117 18.1975 31.0313 15.8762 31.0606 15.7638C31.1388 15.4902 31.3099 15.2751 31.5445 15.1481C31.7449 15.0455 31.8182 15.0357 32.5855 15.0357C33.3089 15.0357 33.436 15.0455 33.5973 15.1334Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_748_15">
          <rect width="50" height="50" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  ),
  nestjs: (props: LucideProps) => (
    <svg viewBox="0 0 50 50" {...props}>
      <path
        d="M25.5208 34.25C25.5208 34.25 25.5104 34.2083 25.5 34.125C25.5208 34.2083 25.5208 34.25 25.5208 34.25Z"
        fill="currentColor"
      />
      <path
        d="M28.5156 8.98436C28.5156 8.98436 28.125 7.55207 28.6458 6.38019C29.1667 5.20832 29.1667 4.42707 28.125 3.25519C30.2083 3.12499 30.9896 4.55728 30.9896 4.55728L31.0156 4.7229C31.1385 5.52082 30.726 6.27915 30.0302 6.68957C29.3948 7.06353 28.7115 7.74686 28.5156 8.98436Z"
        fill="currentColor"
      />
      <path
        d="M43.3637 37.75C43.3846 37.5312 43.7179 34.5833 42.9679 33.2083C41.4054 37.625 39.8429 41.6667 35.2908 44.5312C35.9366 43.2292 36.9783 41.1458 38.02 38.0208C34.895 42.1875 28.645 46.3542 23.9575 46.6146C27.1241 44.8646 28.9054 42.6146 29.6866 41.1458C29.6866 41.1458 27.8637 41.6667 25.645 41.9271C28.645 40.1042 30.7283 36.8542 29.6866 31.7708C27.6033 38.2812 24.7387 40.3646 20.9575 40.75C17.1866 41.1458 13.8012 39.1875 13.8012 39.1875L15.1033 39.0625C15.1033 39.0625 11.7179 36.4583 12.895 33.0729C12.9471 32.9062 13.0096 32.75 13.0825 32.6042C13.9366 30.7083 16.8429 31.6667 16.5408 33.7187V33.7292C16.5408 33.7292 17.4471 36.1979 19.9158 35.5417C20.7075 34.25 21.2283 32.9375 21.2283 32.9375L21.6137 34.6354C21.6137 34.6354 23.4366 33.8542 23.4366 32.4167C24.9991 33.0104 25.395 33.75 25.4887 34.0729C25.2179 32.6146 22.8637 22.5833 10.395 22.7292L8.21789 24.75C8.07205 24.8854 7.84289 24.7708 7.86372 24.5833L8.03039 22.9167L8.17622 22.7708C8.13455 22.7812 8.08247 22.7708 8.0408 22.7708L8.03039 22.9167L7.17622 23.7083C7.03039 23.8438 6.80122 23.7292 6.82205 23.5417L6.92622 22.4792C5.11372 21.7083 4.94705 19.6667 4.94705 19.6667C4.94705 19.6667 2.68664 19.0312 3.64497 16.1458C4.1658 14.5833 5.4158 14.4271 5.94705 14.5521C6.62414 14.7083 7.32205 14.7188 7.96789 14.4583C8.90539 14.0833 10.1033 13.3646 10.9366 11.9792C12.4991 9.375 14.8429 8.33333 19.9158 8.33333C26.6346 8.33333 29.3429 10.3958 29.6554 10.6458C29.4679 10.4271 28.3325 8.91667 30.7283 6.64583C33.0929 4.39583 32.6658 3.86458 32.5721 3.78125C32.9262 3.88542 37.52 5.44792 38.02 11.4583C38.5408 17.7083 31.2491 19.0104 31.2491 19.0104C31.2491 19.0104 40.6241 20.8333 40.7491 11.9792C42.5825 13.0208 46.3533 16.9271 46.8741 25.3958C47.3846 33.6042 43.5825 37.5312 43.3637 37.75Z"
        fill="currentColor"
      />
      <path
        d="M8.17708 22.7708L8.03125 22.9166L8.04167 22.7708C8.08333 22.7708 8.13542 22.7812 8.17708 22.7708Z"
        fill="currentColor"
      />
      <path
        d="M8.17708 22.7708L8.03125 22.9166L8.04167 22.7708C8.08333 22.7708 8.13542 22.7812 8.17708 22.7708Z"
        fill="currentColor"
      />
    </svg>
  ),
  prisma: (props: LucideProps) => (
    <svg viewBox="0 0 50 50" {...props}>
      <g clipPath="url(#clip0_717_83)">
        <path
          d="M44.6736 37.568L27.4046 1.48999C26.5147 -0.369006 23.9316 -0.522006 22.8296 1.21899L3.67865 31.461C3.26565 32.113 3.27765 32.947 3.70865 33.587L13.3556 47.91C13.9546 48.799 15.0556 49.2 16.0846 48.904L43.0786 41.129C44.5956 40.692 45.3566 38.994 44.6736 37.568ZM40.8596 38.865L18.1566 45.234C17.6306 45.382 17.1366 44.916 17.2506 44.381L25.2996 6.74899C25.4446 6.07099 26.3636 5.96099 26.6636 6.58599L41.5066 37.467C41.7656 38.033 41.4586 38.697 40.8596 38.865Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_717_83">
          <rect width="50" height="50" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  ),
  docker: (props: LucideProps) => (
    <svg viewBox="0 0 50 50" {...props}>
      <g clipPath="url(#clip0_717_81)">
        <path
          d="M20 9V14H10V19H5V24H1.125C0.640625 24 0.242188 24.3359 0.15625 24.8125C0.148438 24.8477 0 25.6836 0 26.75C0 27.4492 0.0664063 28.2109 0.1875 28.9688C1.33203 28.6953 3.42969 28.2852 3.0625 26.9375C5.03516 29.2227 9.76953 28.5312 10.9688 27.4062C12.3086 29.3477 20.1133 28.6055 20.6562 27.0938C22.3359 29.0625 27.543 29.0625 29.2188 27.0938C29.7617 28.6055 37.5352 29.3477 38.875 27.4062C39.3008 27.8047 40.1875 28.1367 41.2188 28.3125C41.5664 27.6523 41.8867 26.9883 42.1875 26.2812C48.5391 26.2031 49.9102 21.6367 49.9688 21.4375C50.0781 21.0547 49.9297 20.6602 49.625 20.4062C49.5195 20.3164 47.1758 18.4141 43.375 19.0625C42.3086 15.5898 39.5625 14.0078 39.4375 13.9375C39.0781 13.7344 38.6328 13.7656 38.3125 14.0312C38.2109 14.1133 35.8477 16.1172 36.2188 20.2188C36.3125 21.25 36.582 22.1602 37 22.9688C36.1797 23.4258 34.7695 24 32.5 24H32V19H27V9H20ZM41.2188 28.3125C41.0977 28.5469 40.9414 28.7734 40.8125 29H49.8438C48.7578 28.7266 46.4258 28.3594 46.8125 26.9375C45.5352 28.4141 43.1094 28.6328 41.2188 28.3125ZM40.8125 29H0.1875C0.429688 30.4688 0.929688 32.0078 1.6875 33.5C7.11719 34.7773 12.8164 32.832 12.875 32.8125C13.3984 32.6289 13.9453 32.918 14.125 33.4375C14.3086 33.957 14.0508 34.5391 13.5312 34.7188C13.3398 34.7852 9.90625 35.9375 5.6875 35.9375C4.85156 35.9375 3.97266 35.8906 3.09375 35.7812C5.71875 39.2617 10.168 42 17 42C27.8047 42 36.1133 37.4102 40.8125 29ZM0.1875 29C0.183594 28.9844 0.191406 28.9844 0.1875 28.9688C0.121094 28.9844 0.0585938 28.9844 0 29H0.1875ZM22 11H25V14H22V11ZM12 16H15V19H12V16ZM17 16H20V19H17V16ZM22 16H25V19H22V16ZM7 21H10V24H7V21ZM12 21H15V24H12V21ZM17 21H20V24H17V21ZM22 21H25V24H22V21ZM27 21H30V24H27V21ZM16 31C16.1289 31 16.2617 31.0195 16.375 31.0625C16.2539 31.1328 16.1562 31.2539 16.1562 31.4062C16.1562 31.6328 16.3359 31.8438 16.5625 31.8438C16.7148 31.8438 16.8672 31.75 16.9375 31.625C16.9883 31.7422 17 31.8633 17 32C17 32.5508 16.5508 33 16 33C15.4492 33 15 32.5508 15 32C15 31.4492 15.4492 31 16 31Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_717_81">
          <rect width="50" height="50" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  ),
};
