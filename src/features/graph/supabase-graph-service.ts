/**
 * Functions for interacting with graph data stored in Supabase
 */

import { GraphData, Graph, SessionInfo } from "@/features/graph/types";
import { createClient } from "@/supabase/client";

export async function upsertGraph(userId: string, graphData: GraphData, sessionInfo: SessionInfo ) {
  const { currentDepth, nodesExplored, deepestLevel } = sessionInfo;
  const supabase = createClient();
  const { data, error } = await supabase
    .from("graphs")
    .upsert({ 
      user_id: userId, 
      graph_data: graphData, 
      current_depth: currentDepth, 
      nodes_explored: nodesExplored, 
      deepest_level: deepestLevel 
    }, { onConflict: "user_id" })
    .select();

  if (!error) {
    console.log("[LOG] upserted graph data successfully");
    return data[0].id;
  } else {
    console.error("[ERROR] failed to upsert graph data.", error.message);
    throw error;
  }
}

/**
 * Retrieve graph data
 * @param userId 
 */
export async function loadGraph(userId: string) {
  const supabase = createClient();
  console.log("Selecting using ", userId)
  const { data, error } = await supabase
    .from("graphs")
    .select("graph_data, current_depth, nodes_explored, deepest_level")
    .eq("user_id", userId)
    .limit(1)

  if (error) {
    console.error("[ERROR] failed to fetch graph data. Reason: " + error.message);
    throw error;
  } else {
    console.log(data[0])
    return data[0] as unknown as Graph
  }
}

