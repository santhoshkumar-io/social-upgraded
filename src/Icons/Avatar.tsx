import * as React from "react"

const SvgComponent = (props:any) => (
  <svg
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={40}
      height={40}
    >
      <rect width={40} height={40} rx={20} fill="#C4C4C4" />
    </mask>
    <g mask="url(#a)">
      <mask
        id="b"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={40}
        height={40}
      >
        <path fill="#C4C4C4" d="M0 0h40v40H0z" />
      </mask>
      <g mask="url(#b)">
        <path fill="#F5EFFF" d="M0 0h40v40H0z" />
        <path
          d="M36.444 40H3.334s.444-2.106 1.077-4.221 1.942-3.002 3.637-3.435a81.962 81.962 0 0 0 2.364-.678l1.216-.366.584-.178c2.133-.649 4.215-1.296 4.215-1.296l3.444-.275.02-.002.02.002 3.106.249s1.869.56 3.909 1.164l1.182.349c1.526.447 2.968.864 3.621 1.03 1.696.436 3.004 1.32 3.638 3.436C36 37.894 36.444 40 36.444 40Z"
          fill="#19274B"
        />
        <path
          d="M28.108 31.31c-.2.86-.545 1.993-1.127 3.113-1.138 2.195-3.18 4.353-6.815 4.353-3.85 0-6.052-2.236-7.28-4.38a13.123 13.123 0 0 1-1.26-3.097l.584-.178c2.133-.648 4.215-1.295 4.215-1.295l3.444-.276.02-.002.02.002 3.106.25s1.869.56 3.908 1.163c.394.114.791.232 1.185.347Z"
          fill="#FF8881"
        />
        <path
          d="M15.55 30.44a.341.341 0 0 1-.316-.474c.009-.02.018-.04.031-.058a.341.341 0 0 1 .6.058.307.307 0 0 1 .027.131.342.342 0 0 1-.343.342ZM19.911 33.923a.34.34 0 0 1-.34-.342.342.342 0 0 1 .684.002.345.345 0 0 1-.344.34Zm.535-.35a.343.343 0 0 1 .292-.388.343.343 0 0 1 .093.678c-.016.002-.031.002-.047.002a.34.34 0 0 1-.337-.293Zm-1.457.283a.343.343 0 0 1 .1-.677.341.341 0 0 1-.049.68c-.018 0-.035 0-.051-.003Zm2.324-.42a.34.34 0 0 1 .218-.43.34.34 0 0 1 .43.217.34.34 0 0 1-.324.449.342.342 0 0 1-.324-.235Zm-3.237.205a.34.34 0 0 1-.214-.433.338.338 0 0 1 .434-.214.34.34 0 0 1 .213.434.345.345 0 0 1-.324.233.485.485 0 0 1-.11-.02Zm4.064-.498a.341.341 0 1 1 .586-.35.341.341 0 1 1-.586.35Zm-4.924.1a.34.34 0 0 1-.116-.469.34.34 0 1 1 .116.469Zm5.666-.57a.343.343 0 1 1 .489-.483.343.343 0 0 1-.49.482Zm-6.422-.016a.341.341 0 1 1 .48-.487.339.339 0 0 1 .003.482.338.338 0 0 1-.245.102.344.344 0 0 1-.238-.097Zm7.028-.62a.343.343 0 1 1 .36-.581.343.343 0 0 1-.36.58Zm-7.623-.125a.341.341 0 1 1 .577-.364.341.341 0 0 1-.577.364Zm8.065-.635a.342.342 0 1 1 .228-.645.342.342 0 0 1-.228.645Zm-8.485-.213a.343.343 0 0 1 .642-.238.344.344 0 0 1-.322.462.347.347 0 0 1-.32-.224ZM24.246 30.44a.343.343 0 0 1-.131-.027c-.02-.01-.04-.02-.06-.032-.018-.013-.036-.026-.051-.042a.305.305 0 0 1-.074-.11.308.308 0 0 1-.026-.132.335.335 0 0 1 .1-.24.306.306 0 0 1 .11-.073.336.336 0 0 1 .262 0c.021.009.041.018.059.03a.895.895 0 0 1 .053.043.473.473 0 0 1 .042.051.313.313 0 0 1 .058.189.342.342 0 0 1-.342.342ZM26.981 34.423c-1.138 2.195-3.18 4.353-6.815 4.353-3.85 0-6.052-2.236-7.28-4.38 3.15.77 8.507 1.556 14.095.027Z"
          fill="#F5EFFF"
        />
        <path d="M19.91 29.546v.005l-.021-.003.02-.002Z" fill="#5D46C2" />
        <path d="m19.89 29.548-.021.003v-.005l.02.002Z" fill="#5D46C2" />
        <path
          d="M24.124 9.198a4.084 4.084 0 0 1-.187.555 7.33 7.33 0 0 1-.107.245l-.055.115c-.693 1.371-2.118 2.215-3.653 2.215H18.8a4.094 4.094 0 0 1-2.866-1.16 5.655 5.655 0 0 1-.938-1.177 3.928 3.928 0 0 1-.127-.236c-.024-.05-.049-.102-.07-.155-.496-1.18-.24-2.98 1.077-4.17 3.275-2.958 9.307-.318 8.248 3.768Z"
          fill="#E9356E"
        />
        <path
          d="M24.124 9.198a4.068 4.068 0 0 1-.187.555 7.326 7.326 0 0 1-.162.36c-.693 1.371-2.118 2.215-3.653 2.215H18.8a4.094 4.094 0 0 1-2.866-1.16 5.65 5.65 0 0 1-.938-1.177 3.991 3.991 0 0 1-.198-.391 8.792 8.792 0 0 1 4.848-1.464c1.767 0 3.338.528 4.478 1.062Z"
          fill="#FFAC32"
        />
        <path
          d="M19.593 25.564a8.392 8.392 0 1 0 0-16.784 8.392 8.392 0 0 0 0 16.784Z"
          fill="#E9356E"
        />
        <path
          d="M22.96 30.644s-.858 1.604-3.254 1.604c-2.315 0-3.288-1.684-3.288-1.684l.142-1.153.025-.193.222-1.818 5.728.16.096.691.03.227.298 2.166Z"
          fill="#FF8881"
        />
        <path
          d="M22.628 28.248c-1.297 1.1-3.397 1.518-6.068 1.16l.025-.193.222-1.818 5.728.16.093.691Z"
          fill="#19274B"
        />
        <path
          d="M14.654 22.671c-1.282 1.789-4.04.58-3.853-1.793.171-2.153 2.575-1.81 2.575-1.81l1.278 3.603Z"
          fill="#F55B5D"
        />
        <path
          d="M12.963 22.65a.432.432 0 1 1-.866 0 .432.432 0 1 1 .866 0Z"
          fill="#F5EFFF"
        />
        <path
          d="M13.476 22.716a.173.173 0 0 1-.166-.131c-.251-1.02-1.309-1.971-1.318-1.98a.17.17 0 0 1-.013-.242.17.17 0 0 1 .242-.014c.047.043 1.149 1.031 1.424 2.154a.171.171 0 0 1-.124.206.182.182 0 0 1-.045.007Z"
          fill="#D1373F"
        />
        <path
          d="M13.034 21.75a.151.151 0 0 1-.053-.01 1.894 1.894 0 0 0-.92-.06.172.172 0 0 1-.204-.128.173.173 0 0 1 .128-.205c.023-.004.543-.118 1.105.071a.172.172 0 0 1 .109.216.18.18 0 0 1-.165.115Z"
          fill="#D1373F"
        />
        <path
          d="M24.142 22.671c1.282 1.789 4.039.58 3.852-1.793-.17-2.153-2.575-1.81-2.575-1.81l-1.277 3.603Z"
          fill="#F55B5D"
        />
        <path
          d="M26.701 22.65a.432.432 0 1 1-.866 0 .432.432 0 1 1 .866 0Z"
          fill="#F5EFFF"
        />
        <path
          d="M25.32 22.716a.17.17 0 0 1-.164-.211c.274-1.122 1.376-2.113 1.423-2.153a.174.174 0 0 1 .242.013.174.174 0 0 1-.013.242c-.011.01-1.069.96-1.318 1.98a.18.18 0 0 1-.17.129Z"
          fill="#D1373F"
        />
        <path
          d="M25.761 21.75a.17.17 0 0 1-.162-.119.168.168 0 0 1 .109-.215c.562-.189 1.082-.076 1.104-.071a.171.171 0 0 1-.076.333 1.927 1.927 0 0 0-.92.06.178.178 0 0 1-.055.011Z"
          fill="#D1373F"
        />
        <path
          d="M12.867 16.45s-.626 3.88.996 7.675c1.469 3.439 3.424 4.51 5.506 4.543 2.366.038 7.321-1.33 6.537-12.558-.53-7.586-12.412-7.317-13.038.34Z"
          fill="#FF8881"
        />
        <path
          d="M24.142 13.94s1.106 2.994 1.695 3.763l.646-1.986s-.468-5.735-7.112-5.735c-6.87 0-6.635 5.735-6.635 5.735l.59 2.7s1.728-2.578 1.859-4.287c0 0 2.297 2.547 4.424 2.242 0 0-.78-.835-.989-1.482 0 0 3.715 1.96 6.201 1.253 0 0-.63-.91-.68-2.204Z"
          fill="#E9356E"
        />
        <path
          d="M12.736 15.714s-.804 1.84-.349 3.491c.456 1.651 2.36 3.575 1.011 5.513-1.346 1.937.12 4.73 2.151 4.217 0 0-2.124-.216-2.015-2.424.107-2.209 2.364-2.646.655-5.753-1.708-3.106-.17-5.528-.17-5.528l-1.283.484ZM26.483 15.714s.805 1.84.35 3.491c-.456 1.651-2.36 3.575-1.012 5.513 1.347 1.937-.12 4.73-2.15 4.217 0 0 2.124-.216 2.015-2.424-.107-2.209-2.364-2.646-.656-5.753 1.709-3.106.171-5.528.171-5.528l1.282.484ZM15.078 18.416s.907-1.262 2.469-1.424a.451.451 0 0 1 .493.422v.005a.454.454 0 0 1-.447.48c-.586.006-1.617.09-2.515.517ZM23.841 18.416s-.906-1.262-2.468-1.424a.451.451 0 0 0-.493.422v.005a.454.454 0 0 0 .446.48c.587.006 1.616.09 2.515.517Z"
          fill="#E9356E"
        />
        <path
          d="M19.664 26.655c-.486 0-.873-.17-.897-.182-.072-.033-.105-.118-.072-.189.034-.071.118-.104.19-.071.008.005.888.389 1.592-.073a.143.143 0 0 1 .198.04.145.145 0 0 1-.04.198 1.758 1.758 0 0 1-.97.277ZM20.169 23.025h-.011l-1.043-.085a.144.144 0 0 1-.13-.153.145.145 0 0 1 .153-.131l.87.07-.27-2.648a.14.14 0 0 1 .126-.155.14.14 0 0 1 .156.127l.289 2.82a.141.141 0 0 1-.14.155Z"
          fill="#F55B5D"
        />
        <path
          d="M17.43 24.16c1.281.2 2.585.287 4.332-.06 0 0-.151 1.866-2.224 1.873-1.765.007-2.109-1.813-2.109-1.813Z"
          fill="#F5EFFF"
        />
        <path
          d="M17.325 20.063c0 .493-.225.895-.502.895-.278 0-.503-.4-.503-.895 0-.493.225-.896.503-.896.277.003.502.402.502.896ZM22.66 20.063c0 .493-.225.895-.503.895-.277 0-.502-.4-.502-.895 0-.493.225-.896.502-.896.278.003.503.402.503.896Z"
          fill="#19274B"
        />
        <path
          d="M15.492 21.898a.154.154 0 0 1-.307 0 .154.154 0 0 1 .307 0ZM16.242 22.27a.154.154 0 0 1-.306 0 .154.154 0 0 1 .306 0ZM15.492 22.805a.154.154 0 0 1-.307 0 .154.154 0 0 1 .307 0ZM16.674 22.958a.154.154 0 0 1-.307 0 .154.154 0 0 1 .307 0ZM17.46 22.805a.154.154 0 0 1-.306 0 .154.154 0 0 1 .306 0ZM17.102 22.051a.154.154 0 0 1-.306 0 .154.154 0 0 1 .306 0ZM23.79 21.898a.154.154 0 0 0 .307 0 .154.154 0 0 0-.307 0ZM23.193 22.422a.153.153 0 1 0 0-.306.153.153 0 0 0 0 .306ZM23.79 22.805a.154.154 0 0 0 .307 0 .154.154 0 0 0-.153-.154.152.152 0 0 0-.154.154ZM22.61 22.958a.154.154 0 0 0 .307 0 .154.154 0 0 0-.307 0ZM21.822 22.805a.154.154 0 0 0 .306 0 .154.154 0 0 0-.306 0ZM22.18 22.051a.154.154 0 0 0 .306 0 .154.154 0 0 0-.306 0Z"
          fill="#F55B5D"
        />
        <path
          d="M30.968 34.657c-4.851-1.44-8.276-3.989-11.434-5.136-3.157 1.147-6.582 3.695-11.433 5.136-7.697 2.285-9.62-7.995-4.127-11.581 4.836-3.155 4.26-3.683 5.524-9.092a65.55 65.55 0 0 1 .638-2.5c.08-.286.163-.56.25-.829 1.321-4.06 5.106-6.623 9.15-6.483 4.046-.14 7.83 2.423 9.152 6.483.087.266.168.543.25.83.135.489.257.948.364 1.382.1.395.19.767.273 1.117 1.265 5.412.689 5.937 5.524 9.092 5.492 3.583 3.566 13.864-4.131 11.581Z"
          fill="#5A184A"
        />
        <path
          d="M39.412 40.002H1.406s.51-2.418 1.237-4.846c.727-2.428 2.229-3.446 4.175-3.943a94.02 94.02 0 0 0 2.714-.778c.655-.196 1.364-.41 2.065-.622 2.449-.745 4.839-1.487 4.839-1.487l3.953-.316.023-.003.023.003 3.565.285s2.145.643 4.486 1.337c2.199.648 4.573 1.341 5.514 1.584 1.946.5 3.448 1.515 4.175 3.942a68.556 68.556 0 0 1 1.237 4.844Z"
          fill="#E9356E"
        />
        <path
          d="M5.58 34.854a.19.19 0 0 1-.119-.041l-1.007-.788a.197.197 0 0 1-.033-.276.197.197 0 0 1 .275-.033l1.007.788c.085.067.1.189.034.276a.202.202 0 0 1-.156.074ZM5.58 39.11a.19.19 0 0 1-.119-.04l-1.007-.789a.198.198 0 0 1-.033-.275.197.197 0 0 1 .275-.033l1.007.788c.085.066.1.189.034.275a.202.202 0 0 1-.156.074ZM11.462 33.293a.205.205 0 0 1-.102-.028.198.198 0 0 1-.064-.27l.671-1.09a.198.198 0 0 1 .27-.064c.092.057.12.18.064.27l-.67 1.09a.2.2 0 0 1-.169.092ZM8.236 37.534a.204.204 0 0 1-.102-.028.197.197 0 0 1-.064-.27l.67-1.09a.198.198 0 0 1 .271-.063c.092.056.12.178.064.27l-.67 1.09a.2.2 0 0 1-.17.091ZM9.672 32.194a.19.19 0 0 1 .007.107.195.195 0 0 1-.23.153L8.196 32.2a.195.195 0 1 1 .077-.382l1.254.252a.193.193 0 0 1 .146.123ZM13.992 36.973a.19.19 0 0 1-.12-.04l-1.007-.789a.197.197 0 0 1-.033-.275.197.197 0 0 1 .275-.033l1.008.788c.084.066.1.188.033.275a.202.202 0 0 1-.156.074ZM10.389 39.08a.196.196 0 0 1 .008-.334l1.109-.638a.196.196 0 1 1 .196.34l-1.11.637a.208.208 0 0 1-.204-.005ZM27.846 34.854a.19.19 0 0 1-.12-.041l-1.007-.788a.197.197 0 0 1-.034-.276.197.197 0 0 1 .276-.033l1.007.788c.085.067.1.189.034.276a.202.202 0 0 1-.156.074ZM27.846 39.11a.19.19 0 0 1-.12-.04l-1.007-.789a.197.197 0 0 1-.034-.275.198.198 0 0 1 .276-.033l1.007.788c.085.066.1.189.034.275a.202.202 0 0 1-.156.074ZM33.73 33.293a.205.205 0 0 1-.102-.028.198.198 0 0 1-.064-.27l.67-1.09a.198.198 0 0 1 .271-.064c.092.057.12.18.064.27l-.67 1.09a.207.207 0 0 1-.17.092ZM30.503 37.534a.204.204 0 0 1-.102-.028.197.197 0 0 1-.063-.27l.67-1.09a.198.198 0 0 1 .27-.063c.093.056.12.178.065.27l-.671 1.09a.201.201 0 0 1-.169.091ZM37.37 39.335a.204.204 0 0 1-.103-.028.197.197 0 0 1-.064-.27l.671-1.09a.198.198 0 0 1 .27-.064c.092.057.12.179.064.27l-.67 1.09a.2.2 0 0 1-.169.092ZM31.937 32.194a.19.19 0 0 1 .008.107.195.195 0 0 1-.23.153L30.46 32.2a.195.195 0 1 1 .077-.382l1.255.252a.193.193 0 0 1 .145.123ZM36.257 36.164a.19.19 0 0 1-.12-.04l-1.007-.788a.197.197 0 0 1-.033-.276.198.198 0 0 1 .275-.033l1.008.788c.084.066.1.189.033.276a.198.198 0 0 1-.156.073ZM32.656 39.08a.196.196 0 0 1 .008-.334l1.11-.638a.196.196 0 1 1 .195.34l-1.109.637a.207.207 0 0 1-.204-.005ZM20.394 35.593a.204.204 0 0 1-.102-.028.197.197 0 0 1-.064-.27l.67-1.09a.198.198 0 0 1 .271-.063c.092.056.12.178.064.27l-.67 1.09a.201.201 0 0 1-.17.091ZM17.285 39.013a.204.204 0 0 1-.102-.028.198.198 0 0 1-.064-.27l.67-1.09a.198.198 0 0 1 .271-.063c.092.056.12.179.064.27l-.67 1.09a.201.201 0 0 1-.17.091ZM17.53 34.912a.19.19 0 0 1 .007.107.195.195 0 0 1-.23.153l-1.254-.252a.195.195 0 1 1 .076-.383l1.255.253a.193.193 0 0 1 .146.122ZM24.882 36.034a.19.19 0 0 1-.12-.04l-1.007-.788a.198.198 0 0 1-.033-.276.197.197 0 0 1 .275-.033l1.008.788c.084.066.1.189.033.276a.202.202 0 0 1-.156.073ZM21.057 39.126a.196.196 0 0 1 .008-.334l1.109-.638a.196.196 0 1 1 .196.339l-1.11.638a.195.195 0 0 1-.203-.005Z"
          fill="#C4205C"
        />
        <path
          d="M20.432 28v.006l-.02-.003.02-.002ZM20.412 28.003l-.023.003V28l.023.002Z"
          fill="#5D46C2"
        />
        <path
          d="M23.936 29.26s-.984 1.842-3.733 1.842c-2.658 0-3.775-1.933-3.775-1.933l.163-1.324.028-.222.255-2.086 6.575.184.11.793.036.26.341 2.487Z"
          fill="#FF8881"
        />
        <path
          d="M26.515 32.11c-1.635 2.106-5.185.971-6.338-.57-1.153 1.541-4.7 2.673-6.338.57-1.576-2.028 2.693-3.796 2.693-3.796.437 1.964 2.831 2.594 3.645 2.747.814-.153 3.193-.78 3.63-2.747-.003 0 4.281 1.765 2.708 3.795Z"
          fill="#F5EFFF"
        />
        <path
          d="M23.554 26.511c-1.49 1.263-3.9 1.742-6.965 1.332l.028-.222.255-2.087 6.575.184.107.793Z"
          fill="#19274B"
        />
        <path
          d="M14.403 20.11c-1.472 2.053-4.637.665-4.422-2.058.196-2.472 2.955-2.08 2.955-2.08l1.467 4.138Z"
          fill="#F55B5D"
        />
        <path
          d="M12.875 21.176a.912.912 0 1 1-1.824.002.912.912 0 0 1 1.824-.002Z"
          fill="#FFAC32"
        />
        <path
          d="M13.049 20.16a.198.198 0 0 1-.192-.15c-.285-1.168-1.502-2.262-1.512-2.272a.195.195 0 0 1-.015-.278.195.195 0 0 1 .278-.015c.053.048 1.318 1.183 1.634 2.47a.196.196 0 0 1-.142.238.206.206 0 0 1-.051.008Z"
          fill="#D1373F"
        />
        <path
          d="M12.544 19.051a.173.173 0 0 1-.062-.01 2.177 2.177 0 0 0-1.055-.069.199.199 0 0 1-.235-.148.199.199 0 0 1 .148-.234c.025-.005.622-.136 1.268.081a.197.197 0 0 1 .124.248.206.206 0 0 1-.188.132Z"
          fill="#D1373F"
        />
        <path
          d="M25.29 20.11c1.472 2.053 4.637.665 4.423-2.058-.196-2.472-2.956-2.08-2.956-2.08l-1.466 4.138Z"
          fill="#F55B5D"
        />
        <path
          d="M28.726 21.176a.912.912 0 1 1-1.826 0 .912.912 0 1 1 1.826 0Z"
          fill="#FFAC32"
        />
        <path
          d="M26.645 20.16c-.015 0-.03-.002-.046-.004a.194.194 0 0 1-.143-.238c.316-1.288 1.581-2.425 1.635-2.47a.2.2 0 0 1 .278.014.2.2 0 0 1-.015.278c-.013.01-1.227 1.102-1.513 2.273a.21.21 0 0 1-.196.148Z"
          fill="#D1373F"
        />
        <path
          d="M27.15 19.051a.196.196 0 0 1-.186-.135.195.195 0 0 1 .125-.247c.645-.217 1.242-.087 1.267-.082a.197.197 0 0 1-.087.383c-.005 0-.517-.11-1.055.069a.188.188 0 0 1-.064.012Z"
          fill="#D1373F"
        />
        <path
          d="M12.352 12.969s-.719 4.453 1.143 8.809c1.686 3.948 3.93 5.177 6.32 5.215 2.716.044 8.403-1.527 7.503-14.415-.61-8.707-14.246-8.398-14.966.39Z"
          fill="#FF8881"
        />
        <path
          d="M11.962 14.938s.143 2.759 1.288 2.654c1.145-.104.59-6.317.59-6.317s1.02 1.505 2.881 1.342c1.862-.164.174-2.584.174-2.584s1.716 2.387 3.29 2.29c1.57-.097 0-3.042 0-3.042s2.053 3.336 3.53 3.239c1.476-.097.227-2.877.227-2.877s1.175 3.076 2.297 3.303c0 0-.283 4.53.919 4.338 1.198-.191.755-5.254.262-6.792-.492-1.538-3.137-5.397-8.225-4.907-5.095.49-7.141 3.303-7.233 9.352Z"
          fill="#5A184A"
        />
        <path
          d="M14.887 15.226s1.041-1.449 2.834-1.635c.29-.03.548.194.566.484v.006a.522.522 0 0 1-.512.55c-.674.008-1.855.105-2.887.595ZM24.946 15.226s-1.04-1.449-2.833-1.635a.518.518 0 0 0-.566.484v.006a.522.522 0 0 0 .512.55c.674.008 1.857.105 2.887.595Z"
          fill="#5A184A"
        />
        <path
          d="M20.151 24.683a2.724 2.724 0 0 1-1.03-.21.164.164 0 0 1 .135-.298c.016.005 1.02.446 1.829-.084a.166.166 0 0 1 .227.046.167.167 0 0 1-.046.227 2.014 2.014 0 0 1-1.114.319ZM20.73 20.515h-.012l-1.196-.097a.165.165 0 0 1-.15-.176.167.167 0 0 1 .175-.15l1 .081-.311-3.04a.162.162 0 0 1 .145-.178c.09-.01.171.056.179.145l.331 3.237a.162.162 0 0 1-.16.178Z"
          fill="#F55B5D"
        />
        <path
          d="M17.586 21.818c1.472.23 2.969.33 4.973-.068 0 0-.173 2.142-2.553 2.15-2.022.007-2.42-2.082-2.42-2.082Z"
          fill="#F5EFFF"
        />
        <path
          d="M17.468 17.116c0 .566-.257 1.027-.576 1.027-.319 0-.576-.459-.576-1.027 0-.567.257-1.028.576-1.028.319.002.576.461.576 1.027ZM23.016 18.143c.318 0 .576-.46.576-1.027 0-.568-.258-1.028-.576-1.028-.319 0-.577.46-.577 1.027 0 .568.258 1.028.577 1.028Z"
          fill="#19274B"
        />
        <path
          d="M15.364 19.222a.176.176 0 0 1-.352 0 .176.176 0 0 1 .352 0ZM16.048 19.824a.176.176 0 1 0 0-.352.176.176 0 0 0 0 .352ZM15.364 20.263a.176.176 0 1 1-.352 0 .176.176 0 0 1 .352 0ZM16.719 20.439a.176.176 0 1 1-.353 0 .176.176 0 0 1 .353 0ZM17.622 20.263a.176.176 0 0 1-.352 0 .176.176 0 0 1 .352 0ZM17.211 19.398a.176.176 0 0 1-.352 0 .176.176 0 0 1 .352 0ZM24.888 19.222a.176.176 0 0 0 .352 0 .176.176 0 0 0-.352 0ZM24.204 19.824a.176.176 0 1 0 0-.352.176.176 0 0 0 0 .352ZM24.888 20.263a.176.176 0 0 0 .352 0 .176.176 0 0 0-.352 0ZM23.533 20.439a.176.176 0 0 0 .352 0 .176.176 0 0 0-.352 0ZM22.63 20.263a.176.176 0 1 0 .353 0 .176.176 0 0 0-.352 0ZM23.041 19.398a.176.176 0 0 0 .352 0 .176.176 0 0 0-.352 0Z"
          fill="#F55B5D"
        />
        <path
          d="M16.663 20.48a2.888 2.888 0 0 1-2.885-2.885 2.888 2.888 0 0 1 2.885-2.885 2.888 2.888 0 0 1 2.884 2.885 2.89 2.89 0 0 1-2.884 2.885Zm0-5.507a2.624 2.624 0 0 0-2.622 2.622 2.624 2.624 0 0 0 2.622 2.622 2.624 2.624 0 0 0 2.621-2.622 2.626 2.626 0 0 0-2.621-2.622ZM23.605 20.48a2.888 2.888 0 0 1-2.885-2.885 2.888 2.888 0 0 1 2.885-2.885 2.888 2.888 0 0 1 2.884 2.885 2.89 2.89 0 0 1-2.884 2.885Zm0-5.507a2.624 2.624 0 0 0-2.622 2.622 2.624 2.624 0 0 0 2.622 2.622 2.624 2.624 0 0 0 2.622-2.622 2.624 2.624 0 0 0-2.622-2.622Z"
          fill="#F5EFFF"
        />
        <path
          d="M26.193 16.792a.134.134 0 0 1-.089-.034.13.13 0 0 1-.008-.183c.036-.038.888-.96 2.166-.747a.13.13 0 0 1 .107.15.13.13 0 0 1-.15.107c-1.138-.186-1.921.658-1.929.666a.14.14 0 0 1-.097.04ZM14.092 16.738a.128.128 0 0 1-.095-.04c-.015-.016-1.045-1.046-2.315-.62a.13.13 0 0 1-.166-.082.13.13 0 0 1 .082-.166c1.433-.48 2.54.638 2.588.686a.132.132 0 0 1-.002.186.138.138 0 0 1-.092.036ZM19.415 17.332h-.008a.132.132 0 0 1-.123-.14c.016-.23.212-.663.85-.663.637 0 .834.433.849.663a.133.133 0 0 1-.122.14.133.133 0 0 1-.14-.122c-.003-.041-.052-.418-.59-.418-.553 0-.586.4-.586.418a.13.13 0 0 1-.13.122Z"
          fill="#F5EFFF"
        />
      </g>
    </g>
  </svg>
)

export default SvgComponent
