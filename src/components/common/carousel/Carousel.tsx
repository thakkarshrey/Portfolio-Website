import { useEffect, useRef, useState } from "react";
import FloatingNavbar from "../floating-navbar";
import "./Carousel.css"

type Props = {
    componentsArr: any[];
    componentsPerSlide: number;
    loading: boolean;
    componentLimit: number
}

const Carousel = ({
    componentsArr = [],
    componentsPerSlide = 1,
    loading = false,
    componentLimit = componentsArr.length
}: Props) => {
    const componentRef = useRef<any>(null)
    const [componentHeight, setComponentHeight] = useState<number>(0)
    const [currentIndex, setCurrentIndex] = useState(0)

    const handlePrevious = () => {
        setCurrentIndex((prevValue) => prevValue === 0 ? getComponentLimit() - componentsPerSlide : prevValue - 1)
    }

    const handleNext = () => {
        setCurrentIndex((prevValue) => prevValue === getComponentLimit() - componentsPerSlide ? 0 : prevValue + 1)
    }

    useEffect(() => {
        if (componentsArr.length > 0) setCurrentIndex(0)
    }, [componentsArr])


    useEffect(() => {
        const observer = new ResizeObserver(() => {
            if (componentRef.current) {
                setComponentHeight(componentRef.current.offsetHeight);
            }
        });

        if (componentRef.current) {
            observer.observe(componentRef.current);
        }

        return () => observer.disconnect();
    }, []);

    console.log(currentIndex, 'currentIndex')

    function getComponentLimit() {
        return componentLimit > componentsArr.length ? componentsArr.length : componentLimit
    }

    return loading ? (
        <div>Loading...</div>
    ) : (
        <div className="carousel-container__carousel">
            <div
                className="carousel-container__content"
                style={{
                    transform: `translateY(-${currentIndex * (100 / componentsPerSlide)}%)`,
                    height: `${(componentsArr.length / componentsPerSlide) * 100}%`,
                }}
            >
                {componentsArr?.slice(0, getComponentLimit())?.map((element: any) => (
                    <section
                        className="carousel-section"
                        key={element.id}
                        ref={componentRef}
                    >
                        {element.component}
                    </section>
                ))}
            </div>
            <button className="carousel-btn previous" onClick={handlePrevious}>
                Previous
            </button>
            <button className="carousel-btn next" onClick={handleNext}>
                Next
            </button>
            <FloatingNavbar componentsArr={componentsArr} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
        </div>
    );
}

export default Carousel