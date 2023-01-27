export class TreeNode {
    probability: number;
    value: number;
    height: number;
    descendants: TreeNode[];

    constructor(probability, value, height) {
      this.probability = probability;
      this.value = value;
      this.height = height;
      this.descendants = [];
    }
  }
