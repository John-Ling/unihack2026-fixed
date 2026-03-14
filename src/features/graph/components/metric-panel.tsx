interface MetricPanelProps {
  depthLevel: number;
  nodesExplored: number;
}

export default function MetricPanel({ depthLevel, nodesExplored }: MetricPanelProps) {
  return (
    <div className="p-2 w-fit">
      <p className="font-jet">DEPTH LEVEL: {depthLevel}</p>
      <p className="font-jet">NODES EXPLORED: {nodesExplored}</p>
    </div>
  )
}


