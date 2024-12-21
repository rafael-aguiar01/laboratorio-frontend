import React from "react";
import logoImg from "@/images/logo.png";
import logoLightImg from "@/images/logo-light.png";
import LogoSvg from "./LogoSvg";
import Link from "next/link";
import Image from "next/image"

export interface LogoProps {
  img?: string;
  imgLight?: string;
  altText?: string;
}

const Logo: React.FC<LogoProps> = ({
  img = logoImg,
  imgLight = logoLightImg,
  altText = "Logo", // Texto alternativo padrão
}) => {
  return (
    <Link
      href="/"
      className="ttnc-logo inline-block text-primary-6000 flex-shrink-0"
    >
      {/* <LogoSvg /> */}
      <Image
        src={img}
        alt={altText}
        width={120} // Largura ideal para o logo
        height={40} // Altura proporcional
        priority // Carregar como prioridade para melhorar o LCP
      />
    </Link>
  );
};

export default Logo;
