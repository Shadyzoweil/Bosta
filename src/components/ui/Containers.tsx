import "./Containers.css";

interface IScreen {
  children: React.ReactNode;
}

export const Screen: React.FC<IScreen> = ({ children }): JSX.Element => {
  return <div className="screen bg-color-bosta-gray">{children}</div>;
};

interface ISection {
  children: React.ReactNode;
  className?: string;
}
export const Section: React.FC<ISection> = ({
  children,
  className,
}): JSX.Element => {
  return (
    <section className={`${className} section section-padding-block `}>
      {children}
    </section>
  );
};
