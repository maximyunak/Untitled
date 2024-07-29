import React, { useState } from "react";
import { motion } from "framer-motion";

export const LogoBlock: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const shakeVariants = {
    hidden: { rotate: 0 },
    visible: {
      rotate: [-10, 10, -10, 10, -10, 0],
      transition: {
        duration: 0.6,
        times: [0, 0.2, 0.4, 0.6, 0.8, 1],
      },
    },
  };

  return (
    <motion.div
      className="flex gap-3 items-center cursor-pointer"
      whileHover={{
        opacity: 0.9,
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.9,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        variants={shakeVariants}
        animate={isHovered ? "visible" : "hidden"}
      >
        <svg
          width="29"
          height="30"
          viewBox="0 0 29 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.6807 21.2164C23.4109 23.1212 23.1728 24.899 21.9664 26.5498C20.7601 28.2006 19.0617 29.0259 16.8712 29.0259C15.8236 29.0259 14.8318 28.7561 13.896 28.2164C12.9588 27.6767 12.268 26.9625 11.8236 26.0736C9.18865 26.4545 7.00643 25.7796 5.27691 24.0488C3.54611 22.3193 2.83945 20.1053 3.15691 17.4069C2.20453 16.8672 1.47437 16.1294 0.966433 15.1936C0.458497 14.2564 0.204529 13.1847 0.204529 11.9783C0.204529 10.0418 1.0858 8.47802 2.84834 7.28691C4.60961 6.09707 6.33151 5.85135 8.01405 6.54976L10.9664 7.78786C11.6013 6.80373 12.4426 6.00183 13.4902 5.38215C14.5379 4.76373 15.6648 4.42278 16.8712 4.35929V0.454529H19.7283V4.74024C20.9029 5.08945 21.8712 5.63675 22.6331 6.38215C23.395 7.12881 24.0458 8.16881 24.5855 9.50214H28.7759V12.3593H24.8712C24.8077 13.5656 24.4826 14.6926 23.8959 15.7402C23.308 16.7879 22.522 17.6291 21.5379 18.264L22.6807 21.2164ZM10.8712 22.3593C10.8712 21.5021 10.9429 20.6691 11.0864 19.8602C11.2287 19.0501 11.4426 18.264 11.7283 17.5021C10.9982 17.8513 10.2121 18.0971 9.37024 18.2393C8.5296 18.3828 7.69659 18.4228 6.87119 18.3593C6.87119 19.5974 7.22802 20.5739 7.94167 21.2888C8.65659 22.0025 9.6331 22.3593 10.8712 22.3593ZM7.34738 14.5498C8.36326 14.5498 9.2604 14.4228 10.0388 14.1688C10.816 13.9148 11.8236 13.4069 13.0617 12.645L7.34738 10.264C6.42675 9.8831 5.64135 9.89071 4.99119 10.2869C4.33977 10.6844 4.01405 11.3117 4.01405 12.1688C4.01405 12.9942 4.28389 13.5974 4.82357 13.9783C5.36326 14.3593 6.20453 14.5498 7.34738 14.5498ZM16.8712 25.2164C17.6648 25.2164 18.3074 24.9383 18.7988 24.3821C19.2915 23.8272 19.4109 23.2482 19.1569 22.645L16.5855 16.1688C15.9823 17.1847 15.5144 18.2006 15.1817 19.2164C14.8477 20.2323 14.6807 21.1529 14.6807 21.9783C14.6807 23.0259 14.8636 23.8272 15.2293 24.3821C15.5937 24.9383 16.141 25.2164 16.8712 25.2164ZM20.014 14.645C20.3315 14.3275 20.5855 13.9066 20.7759 13.3821C20.9664 12.859 21.0617 12.3117 21.0617 11.7402C21.0617 10.7244 20.7283 9.86722 20.0617 9.16881C19.395 8.4704 18.5696 8.12119 17.5855 8.12119C17.014 8.12119 16.4744 8.21643 15.9664 8.40691C15.4585 8.59738 15.0299 8.86722 14.6807 9.21643L18.395 10.9307L20.014 14.645Z"
            fill="none"
            stroke="#BFB2FF"
            strokeWidth="1"
          />
          <path
            d="M22.6807 21.2164C23.4109 23.1212 23.1728 24.899 21.9664 26.5498C20.7601 28.2006 19.0617 29.0259 16.8712 29.0259C15.8236 29.0259 14.8318 28.7561 13.896 28.2164C12.9588 27.6767 12.268 26.9625 11.8236 26.0736C9.18865 26.4545 7.00643 25.7796 5.27691 24.0488C3.54611 22.3193 2.83945 20.1053 3.15691 17.4069C2.20453 16.8672 1.47437 16.1294 0.966433 15.1936C0.458497 14.2564 0.204529 13.1847 0.204529 11.9783C0.204529 10.0418 1.0858 8.47802 2.84834 7.28691C4.60961 6.09707 6.33151 5.85135 8.01405 6.54976L10.9664 7.78786C11.6013 6.80373 12.4426 6.00183 13.4902 5.38215C14.5379 4.76373 15.6648 4.42278 16.8712 4.35929V0.454529H19.7283V4.74024C20.9029 5.08945 21.8712 5.63675 22.6331 6.38215C23.395 7.12881 24.0458 8.16881 24.5855 9.50214H28.7759V12.3593H24.8712C24.8077 13.5656 24.4826 14.6926 23.8959 15.7402C23.308 16.7879 22.522 17.6291 21.5379 18.264L22.6807 21.2164ZM10.8712 22.3593C10.8712 21.5021 10.9429 20.6691 11.0864 19.8602C11.2287 19.0501 11.4426 18.264 11.7283 17.5021C10.9982 17.8513 10.2121 18.0971 9.37024 18.2393C8.5296 18.3828 7.69659 18.4228 6.87119 18.3593C6.87119 19.5974 7.22802 20.5739 7.94167 21.2888C8.65659 22.0025 9.6331 22.3593 10.8712 22.3593ZM7.34738 14.5498C8.36326 14.5498 9.2604 14.4228 10.0388 14.1688C10.816 13.9148 11.8236 13.4069 13.0617 12.645L7.34738 10.264C6.42675 9.8831 5.64135 9.89071 4.99119 10.2869C4.33977 10.6844 4.01405 11.3117 4.01405 12.1688C4.01405 12.9942 4.28389 13.5974 4.82357 13.9783C5.36326 14.3593 6.20453 14.5498 7.34738 14.5498ZM16.8712 25.2164C17.6648 25.2164 18.3074 24.9383 18.7988 24.3821C19.2915 23.8272 19.4109 23.2482 19.1569 22.645L16.5855 16.1688C15.9823 17.1847 15.5144 18.2006 15.1817 19.2164C14.8477 20.2323 14.6807 21.1529 14.6807 21.9783C14.6807 23.0259 14.8636 23.8272 15.2293 24.3821C15.5937 24.9383 16.141 25.2164 16.8712 25.2164ZM20.014 14.645C20.3315 14.3275 20.5855 13.9066 20.7759 13.3821C20.9664 12.859 21.0617 12.3117 21.0617 11.7402C21.0617 10.7244 20.7283 9.86722 20.0617 9.16881C19.395 8.4704 18.5696 8.12119 17.5855 8.12119C17.014 8.12119 16.4744 8.21643 15.9664 8.40691C15.4585 8.59738 15.0299 8.86722 14.6807 9.21643L18.395 10.9307L20.014 14.645Z"
            fill="#BFB2FF"
          />
        </svg>
      </motion.div>
      <h1 className="biorhyme">Untitled</h1>
    </motion.div>
  );
};