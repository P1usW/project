import Graph from "@src/ui/Graph/Graph";
import { FC, ReactNode } from "react";

// type GraphProps = ComponentProps<typeof Graph>
interface SkillsRow extends Graph {
  textClassName: string,
  containerClassName: string,
  children: ReactNode
}

const SkillsRow: FC<SkillsRow> = ({
  data,
  type='line',
  title,
  children,
  containerClassName,
  textClassName,
  className
}) => {
  return (
    <div
      className={containerClassName}
    >
      <div 
        className={textClassName}
      >
        {children}
      </div>
      <Graph
        data={data}
        type={type}
        title={title}
        className={className}
      />
    </div>
  );
};

export default SkillsRow;
