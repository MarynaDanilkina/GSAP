"use client";

import { ReactNode } from "react";
import clsx from "clsx";

import styles from "./button.module.scss";
import useMousePosition from "@/app/shared/hooks/use-mouse-position";

interface ButtonProps {
  type?: "submit" | "button";
  className?: string;
  children: ReactNode;
  size?: "medium" | "small";
  as?: "a" | "button";
  href?: string;
  onClick?: () => void;
  withoutEffect?: boolean;
  target?: "_blank" | "blank" | "_parent" | "_top";
}

const Button = (props: ButtonProps) => {
  const {
    type = "button",
    size = "medium",
    className,
    children,
    as = "button",
    href,
    onClick,
    withoutEffect,
    target,
  } = props;

  const { position, onMouseMove } = useMousePosition();

  if (as === "a") {
    return (
      <a
        className={clsx(
          styles.button,
          { [styles.effect]: !withoutEffect },
          styles[size],
          className,
        )}
        href={href}
        onClick={onClick}
        onMouseMove={onMouseMove}
        target={target}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={clsx(
        styles.button,
        { [styles.effect]: !withoutEffect },
        styles[size],
        className,
      )}
      onClick={onClick}
      type={type}
      onMouseMove={onMouseMove}>
      {children}
    </button>
  );
};

export default Button;
