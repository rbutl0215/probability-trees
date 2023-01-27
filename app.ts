import { TreeNode } from "./treeNode";
import { ProbabilityCalculator } from "./calculateProbability";
import { TreeCreator } from "./creator";

const initNode = new TreeNode(1, 1, 0);

const desiredValue = 6;
const desiredHeight = 12;

const treeCreator = new TreeCreator(desiredHeight);
const calculator = new ProbabilityCalculator();

treeCreator.createProbabilityTree(initNode);
calculator.calculateProbability(initNode, desiredValue, desiredHeight);
console.log(calculator.p);
