interface TogglePasswordIconProps {
  showPassword: boolean;
}

const TogglePasswordIcon = ({ showPassword = false }: TogglePasswordIconProps): JSX.Element => {
  return showPassword ? (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.4133 11.6867C20.1667 7.53335 16.2267 5.02002 11.8667 5.02002C7.50667 5.02002 3.56 7.53335 1.33333 11.6867L1.14667 12L1.32 12.32C3.56667 16.4734 7.50667 18.9867 11.8667 18.9867C16.2267 18.9867 20.1733 16.5067 22.4133 12.32L22.5867 12L22.4133 11.6867ZM11.8667 17.62C8.11333 17.62 4.66667 15.5267 2.66667 12C4.66667 8.47335 8.11333 6.38002 11.8667 6.38002C15.62 6.38002 19.0267 8.48002 21.06 12C19.0267 15.5267 15.6133 17.62 11.8667 17.62Z"
        fill="#93A9D2"
      />
      <path
        d="M12.06 7.4469C11.1561 7.4535 10.2744 7.72782 9.52628 8.23522C8.77818 8.74262 8.19722 9.46034 7.85678 10.2977C7.51634 11.1351 7.43169 12.0546 7.61353 12.9401C7.79537 13.8255 8.23553 14.6373 8.87843 15.2727C9.52132 15.9082 10.3381 16.3389 11.2256 16.5104C12.1132 16.6819 13.0316 16.5865 13.865 16.2364C14.6983 15.8862 15.4092 15.2969 15.9079 14.543C16.4066 13.789 16.6706 12.9042 16.6667 12.0002C16.6641 11.3985 16.5427 10.8032 16.3096 10.2485C16.0765 9.69378 15.7363 9.19049 15.3083 8.7675C14.8804 8.34451 14.3732 8.01013 13.8158 7.78351C13.2583 7.5569 12.6617 7.44251 12.06 7.4469ZM12.06 15.2602C11.4215 15.2537 10.7992 15.0586 10.2712 14.6994C9.74323 14.3403 9.33314 13.8332 9.09243 13.2418C8.85172 12.6504 8.79113 12.001 8.91828 11.3753C9.04542 10.7495 9.35462 10.1753 9.80705 9.72471C10.2595 9.27412 10.835 8.96726 11.4612 8.84268C12.0875 8.71809 12.7366 8.78133 13.327 9.02445C13.9175 9.26757 14.4229 9.67973 14.7798 10.2092C15.1368 10.7386 15.3294 11.3617 15.3333 12.0002C15.3351 12.43 15.2516 12.8558 15.0875 13.253C14.9235 13.6502 14.6822 14.0108 14.3777 14.3141C14.0733 14.6173 13.7116 14.8571 13.3137 15.0195C12.9159 15.182 12.4897 15.2638 12.06 15.2602Z"
        fill="#93A9D2"
      />
    </svg>
  ) : (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.7933 13.6001C16.9848 13.0885 17.0819 12.5464 17.08 12.0001C17.08 10.7872 16.5981 9.62392 15.7405 8.76626C14.8828 7.90859 13.7196 7.42676 12.5066 7.42676C11.9671 7.42739 11.432 7.52447 10.9266 7.71342L12 8.82009C12.1631 8.79399 12.3281 8.78061 12.4933 8.78009C13.3509 8.7783 14.1744 9.11592 14.784 9.71922C15.3935 10.3225 15.7396 11.1425 15.7466 12.0001C15.7461 12.1653 15.7327 12.3303 15.7066 12.4934L16.7933 13.6001Z"
        fill="#93A9D2"
      />
      <path
        d="M22.8599 11.6862C20.6133 7.53286 16.6733 5.01953 12.3133 5.01953C11.1262 5.02232 9.94705 5.21359 8.81995 5.5862L9.89328 6.6662C10.6838 6.46188 11.4967 6.35663 12.3133 6.35286C16.0666 6.35286 19.4799 8.4462 21.5133 11.9729C20.7674 13.2813 19.7786 14.4353 18.5999 15.3729L19.5466 16.3195C20.9107 15.2191 22.0435 13.8597 22.8799 12.3195L23.0533 11.9995L22.8599 11.6862Z"
        fill="#93A9D2"
      />
      <path
        d="M3.24667 3.85369L6.22 6.82702C4.34062 8.03709 2.8046 9.71086 1.76 11.687L1.58667 12.0004L1.76 12.3204C4.00667 16.4737 7.94667 18.987 12.3067 18.987C14.0084 18.9867 15.6881 18.6015 17.22 17.8604L20.5533 21.1937L21.72 20.1937L4.38667 2.86035L3.24667 3.85369ZM9.74667 10.3537L14.18 14.787C13.6791 15.0971 13.1024 15.2632 12.5133 15.267C12.0853 15.267 11.6615 15.1824 11.2663 15.018C10.871 14.8536 10.5122 14.6126 10.2105 14.309C9.90875 14.0054 9.67002 13.6452 9.50804 13.2489C9.34606 12.8527 9.26403 12.4284 9.26667 12.0004C9.27418 11.4181 9.44012 10.8488 9.74667 10.3537V10.3537ZM8.78 9.38702C8.15629 10.2666 7.86395 11.3385 7.95475 12.413C8.04554 13.4875 8.51361 14.4951 9.27607 15.2576C10.0385 16.0201 11.0462 16.4881 12.1207 16.5789C13.1951 16.6697 14.2671 16.3774 15.1467 15.7537L16.2133 16.8204C14.9785 17.3482 13.6496 17.6203 12.3067 17.6204C8.55333 17.6204 5.14 15.527 3.10667 12.0004C4.08247 10.2725 5.48782 8.82582 7.18667 7.80035L8.78 9.38702Z"
        fill="#93A9D2"
      />
    </svg>
  );
};

export default TogglePasswordIcon;
