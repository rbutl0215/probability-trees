import { TreeNode } from "./treeNode";

export class ProbabilityCalculator {
  p = 0;

  desiredHeight: number;
  desiredValue: number;

  constructor(desiredHeight: number, desiredValue: number){
    this.desiredHeight = desiredHeight;
    this.desiredValue = desiredValue
  }


  calculateProbability = (
    node: TreeNode,
    previousNodeProbability: number = 1
  ) => {
    const newProbability = previousNodeProbability * node.probability;

    if (node.height === this.desiredHeight && node.value === this.desiredValue) {
      this.p += newProbability;
    } else {
      for (let i = 0; i < node.descendants.length; i++) {
        this.calculateProbability(
          node.descendants[i],
          newProbability
        );
      }
    }
  };
}
