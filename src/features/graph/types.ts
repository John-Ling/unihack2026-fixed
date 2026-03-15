import type { Database } from "@/supabase/database.types";

type GraphRow = Database["public"]["Tables"]["graphs"]["Row"];

// Override just the jsonb column
export type Graph = Omit<GraphRow, "graph_data" | "current_depth" | "nodes_explored" | "deepest_level"> & {
  graph_data: GraphData;
  current_depth: number;
  nodes_explored: number;
  deepest_level: number;
};

export type Node = {
  id: number;
  name: string;
  group: number;
  depth: number;
  type?: "top-level" | "topic" | "resource";
  url?: string;
  source?: "web" | "youtube" | "wiki";
  favicon?: string;
  snippet?: string;
};

export type TopicNode = Node & {
  type: "topic";
};

export type ResourceNode = Node & {
  type: "resource";
  url: string;
  source?: "web" | "youtube" | "wiki";
  favicon?: string;
  snippet?: string;
};

export type Link = {
  source: number | Node;
  target: number | Node;
};

export type GraphData = {
  nodes: Node[];
  links: Link[];
};

export type SessionInfo = {
  currentDepth: number;
  nodesExplored: number;
  deepestLevel: number;
}