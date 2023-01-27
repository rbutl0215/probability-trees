import { TreeNode } from "./treeNode";

export class TreeCreator {

  height: number;

  constructor(height: number){
    this.height = height
  }

  nodeCreator = (treeNode: TreeNode) => {
    if (treeNode.value === 1) {
      treeNode.descendants.push(
        new TreeNode(0.5, 3, treeNode.height + 1),
        new TreeNode(0.5, 1, treeNode.height + 1)
      );
    }
  
    if (treeNode.value === 3) {
      treeNode.descendants.push(
        new TreeNode(0.45, 5, treeNode.height + 1),
        new TreeNode(0.45, 4, treeNode.height + 1),
        new TreeNode(0.1, 3, treeNode.height + 1)
      );
    }
  
    if (treeNode.value === 4) {
      treeNode.descendants.push(
        new TreeNode(0.2, 6, treeNode.height + 1),
        new TreeNode(0.6, 5, treeNode.height + 1),
        new TreeNode(0.2, 4, treeNode.height + 1)
      );
    }
  
    if (treeNode.value === 5) {
      treeNode.descendants.push(
        new TreeNode(0.5, 6, treeNode.height + 1),
        new TreeNode(0.5, 5, treeNode.height + 1)
      );
    }
  
    if (treeNode.value === 6) {
      treeNode.descendants.push(
        new TreeNode(1, 6, treeNode.height + 1)
      );
    }
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

