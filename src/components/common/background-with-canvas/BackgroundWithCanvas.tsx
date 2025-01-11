import React from "react";
import useCanvasEffect from "./useCanvasEffect";

type Props = {
    children: React.ReactNode;
};

const BackgroundWithCanvas = ({ children }: Props) => {
    const canvasRef = useCanvasEffect();
    return (
        <>
            <canvas
                ref={canvasRef}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 1,
                    pointerEvents: "none",
                }}
            />
            <div style={{ position: "relative", zIndex: 2 }}>
                {children}
            </div>
        </>
    );
};

export default BackgroundWithCanvas;
