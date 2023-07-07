import makeExercise from "../../../content/1-using-promises/1.3/exercise";
import { createContainer } from "../../../lib/container";

const { graphExerciseTestCase } = createContainer({ makeExercise });

graphExerciseTestCase("1.3", [
  { created: ["A", "B"] },
  { resolved: "A", created: [] },
  { resolved: "B", created: ["C"] },
  { resolved: "C", created: ["D"] },
  { resolved: "D", created: [] },
]);

graphExerciseTestCase("1.3", [
  { created: ["A", "B"] },
  { resolved: "B", created: [] },
  { resolved: "A", created: ["C"] },
  { resolved: "C", created: ["D"] },
  { resolved: "D", created: [] },
]);
