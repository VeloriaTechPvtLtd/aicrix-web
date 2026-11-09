import { FantasyXiGuide } from "./FantasyXiGuide";
import { MatchPredictionGuide } from "./MatchPredictionGuide";
import { PitchAndTossGuide } from "./PitchAndTossGuide";
import { PlayerPredictionGuide } from "./PlayerPredictionGuide";
import { PlayingXiGuide } from "./PlayingXiGuide";
import { TeamAnalysisGuide } from "./TeamAnalysisGuide";

export const guides = [
  {
    slug: "fantasy-xi",
    title: "Choosing a Fantasy XI",
    description:
      "Use suggested players and captain options as a starting point for a considered selection across both teams.",
    Component: FantasyXiGuide,
  },
  {
    slug: "match-prediction",
    title: "Reading a match prediction",
    description:
      "Use win probability and its supporting factors to understand a match outlook, while keeping the uncertainty of cricket in view.",
    Component: MatchPredictionGuide,
  },
  {
    slug: "pitch-and-toss",
    title: "Understanding pitch and toss",
    description:
      "Read pitch, weather, and toss information as connected parts of the match context.",
    Component: PitchAndTossGuide,
  },
  {
    slug: "player-prediction",
    title: "Understanding player impact",
    description:
      "Use Player Impact to explore expected contribution, then bring in the player\u2019s role, recent form, and match situation.",
    Component: PlayerPredictionGuide,
  },
  {
    slug: "playing-xi",
    title: "Projected and confirmed Playing XI",
    description:
      "Understand the difference between a projected lineup and the team officially announced for the match.",
    Component: PlayingXiGuide,
  },
  {
    slug: "team-analysis",
    title: "Reading team analysis",
    description:
      "Put recent results and tactical balance together to understand a team\u2019s strengths, gaps, and possible matchups.",
    Component: TeamAnalysisGuide,
  },
];
