import { useEffect, useRef, useState } from "react";
import "./Carousel.css"
import FloatingNavbar from "../floating-navbar";

type Props = {
    componentsArr: any[];
    componentsPerSlide: number;
    componentLimit: number
}

const Carousel = ({
    componentsArr = [],
    componentsPerSlide = 1,
    componentLimit = componentsArr.length
}: Props) => {
    const componentRef = useRef<any>(null)
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


    function getComponentLimit() {
        return componentLimit > componentsArr.length ? componentsArr.length : componentLimit
    }

    return <div className="carousel-container__carousel">
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
                    style={{ height: `${100 / componentsPerSlide}%` }}
                >
                    {element.component}
                </section>
            ))}
        </div>
        <FloatingNavbar currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} componentsArr={componentsArr} />
    </div>

}

export default Carousel