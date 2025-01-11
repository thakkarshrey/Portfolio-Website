import "./FloatingNavbar.css";

type Component = {
  id: number;
  component: React.ReactNode;
  title: string;
  link: string;
  icon: React.ReactNode;
}
type Props = {
  componentsArr: Component[];
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>
};

const FloatingNavbar = ({ componentsArr, currentIndex, setCurrentIndex }: Props) => {
  return (
    <div id="floating-navbar">
      <ul className="floating-navbar__menu">
        {componentsArr?.map(
          (
            element: Component
          ) => {
            return (element.link &&
              <li key={element.id} className={`floating-navbar__list-item ${element.id === currentIndex ? "floating-navbar--active-tab" : ""}`} onClick={() => setCurrentIndex(element.id)}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a>
                  <span className="floating-navbar__icon">{element.icon} </span>
                </a>
              </li>
            );
          }
        )}
        <div className="floating-navbar__indicator"></div>
      </ul>
    </div>
  );
};

export default FloatingNavbar;
