import { TreeNode } from "./treeNode";
import { Node } from "./nodeMapper";

export class TreeCreator {
  height: number;
  nodeMap: Map<number, Node[]>;

  constructor(height: number, nodeMap: Map<number, Node[]>) {
    this.height = height;
    this.nodeMap = nodeMap;
  }

  nodeCreator = (treeNode: TreeNode) => {
    const desiredDescendants = this.nodeMap.get(treeNode.value);

    if (!desiredDescendants) {
      throw new Error(
        `There is no mapped value for the descendants of nodes with value ${treeNode.value}. Please update your nodeMap function to include this value.`
      );
    }

    treeNode.descendants.push(
      ...desiredDescendants.map((descendant) => {
        return new TreeNode(
          descendant.probability,
          descendant.value,
          treeNode.height + 1
        );
      })
    );

  };

  createProbabilityTree = (node: TreeNode) => {
    if (node.height < this.height) {
      this.nodeCreator(node);
      for (let i = 0; i < node.descendants.length; i++) {
        this.createProbabilityTree(node.descendants[i]);
      }
    }
  };
}
