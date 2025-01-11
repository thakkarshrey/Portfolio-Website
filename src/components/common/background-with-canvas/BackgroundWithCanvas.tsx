import React from "react";
import useCanvasEffect from "./useCanvasEffect";

type Props = {
    children: React.ReactNode;
};

const BackgroundWithCanvas = ({ children }: Props) => {
    const canvasRef = useCanvasEffect();

    return (
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
            {/* Canvas as background */}
            <canvas
                ref={canvasRef}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 1,
                    pointerEvents: "none", // Ensures canvas doesn't block interactions with child components
                }}
            />
            {/* Child components */}
            <div style={{ position: "relative", zIndex: 2 }}>{children}</div>
        </div>
    );
};

export default BackgroundWithCanvas;
