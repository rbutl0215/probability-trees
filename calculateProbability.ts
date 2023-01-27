import { TreeNode } from "./treeNode";

export class ProbabilityCalculator {
  p = 0;

  calculateProbability = (
    node: TreeNode,
    desiredValue: number,
    desiredHeight: number,
    previousNodeProbability: number = 1
  ) => {
    const newProbability = previousNodeProbability * node.probability;

    if (node.height === desiredHeight && node.value === desiredValue) {
      this.p += newProbability;
    } else {
      for (let i = 0; i < node.descendants.length; i++) {
        this.calculateProbability(
          node.descendants[i],
          desiredValue,
          desiredHeight,
          newProbability
        );
      }
    }
  };
}
