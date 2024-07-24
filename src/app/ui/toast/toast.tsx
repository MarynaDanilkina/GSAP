"use client";

import {CSSProperties, forwardRef} from "react";

import {MarkInCircle} from "../../../../public/images/icons/mark-in-circle";

import styles from "./toast.module.scss";
import useMousePosition from "@/app/shared/hooks/use-mouse-position";

interface ToastProps {
    text: string;
    // type?: "success";
    // close: () => void;
    style?: CSSProperties;
}

const Toast = forwardRef<HTMLDivElement, ToastProps>(
    (props, ref) => {
        const {
            text,
            // type = "success",
            // close,
            style
        } = props;
        const {position, onMouseMove} = useMousePosition();

        return (
            <div
                ref={ref}
                className={styles.container}
                onMouseMove={onMouseMove}
            >
                <div className={styles.icon}>
                    <MarkInCircle/>
                </div>

                <p className={styles.text}>{text}</p>
                {/*<button className={styles.close_btn} onClick={close}>*/}
                {/*    <Icon name="cross-small" height="19" width="19"/>*/}
                {/*</button>*/}
            </div>
        );
    },
);

Toast.displayName = "Toast";

export default Toast;
