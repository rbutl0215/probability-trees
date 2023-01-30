import { TreeNode } from "./treeNode";
import { ProbabilityCalculator } from "./calculateProbability";
import { TreeCreator } from "./creator";

const run = (desiredHeight, desiredValue) => {
    const initNode = new TreeNode(1, 1, 0);

    const treeCreator = new TreeCreator(desiredHeight);
    const calculator = new ProbabilityCalculator(desiredHeight, desiredValue);

    treeCreator.createProbabilityTree(initNode);
    calculator.calculateProbability(initNode);
    return calculator.p
}

//set i to increase to a high number
for(let i = 0; i < 50; i++){
    const probability = run(i, 6);

    console.log(`After round ${i}, the probability of 6 is ${probability}`)
    if(probability > 0.99){
        break;
    }
}
