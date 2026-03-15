interface MetricPanelProps {
  depthLevel: number;
  nodesExplored: number;
  deepestLevel: number;
}

export default function MetricPanel({ depthLevel, nodesExplored, deepestLevel }: MetricPanelProps) {
  return (
    <div className="p-2 w-fit font-bold font-jet">
      <p>DEPTH LEVEL: {depthLevel}</p>
      <p>NODES EXPLORED: {nodesExplored}</p>
      <p>DEEPEST DEPTH: {deepestLevel}</p>
    </div>
  )
}


