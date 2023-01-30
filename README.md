# What problem are we solving?

This all started over a dinner conversation with my roommates (all five of them). One roommate was sick while we attempted to make dinner plans, which led to an interesting combinatorics and probability problem.

```If there are six roommates trying to go to a three person dinner and we want to randomly select who goes, what is the probability that the sick roommates is included?```

It started out as combinations problem.

1. How many ways are there to select 3 people from a group of six?

    $6 \choose 3$ = $\frac{6!}{3!3!}$ = $20$


2. How many ways are there to select 3 people including one particular individual from a group of six

 - Because we know the sick individual is included, this problem becomes how many ways are there to select 2 individuals from a group of 5

- $5 \choose 32$ = $\frac{5!}{3!2!}$ = $10$

3. Divide step 1 by step 2

    $\frac{10}{20}$ = 0.5


There we have it - 50% chance that the sick individual is included. Here is where it got interesting.

Assuming that if you go to dinner with a sick individual you will become sick yourself, how many three person dinners (reselecting random individual each time) would result in a 99% chance of all roommates being sick.

We set to work building a probability tree. After the first dinner we know there is a 50% chance that 1 person is sick and a 50% chance that 3 people are sick. You can already see the tree itself is recursive - i.e. there is some chance that a node in the tree will result in itself. This gave me the idea to solve the problem programatically, but I first wanted to find all possible types of nodes in this tree:

1. Determine the probability of outcomes if 3 people are sick
2. If one of the outcomes results in a new type of node (i.e. 4,5, or 6 it is impossible to result in 2), then determine the probability of outcomes for the newly discovered node. Repeat until all paths to 6 are found.

This part I did on paper and can share my results:

format: node => [node: probability, ...]

3 => [3: 0.1, 4: 0.45, 5: 0.45],
4 => [4: 0.2, 5: 0.6, 6: 0.2],
5 => [5: 0.5, 6: 0.5]

Given any node in the tree, we can now say what the descendants of that node will be! 

The code in this repository does two core things:

1. It can construct a probability tree with n descendants on each node to a specified height (see creator.ts). We use the rules discussed above, but they can easily be replaced in the `nodeCreator` function. The height of the tree in the case of this problem is the number of dinners.
2. It can calculate the probability for a given event at a particular height in the tree (see calculateProbability.ts)

## File Description

##### treeNode.ts

Defines the class for TreeNode

##### creator.ts

Defines the class for TreeCreator. This class constructs a probability tree with n nodes based on a specified tree height and a node map passed in at the time of initialization. The node map should be a Map with the type `<number, Node[]>` where `Node` is an object with `value` and `probability`. Another way to think about the map is a dictionary that defines for every possible node what the descendants of that node should be.

##### nodeMapper.ts

Defines the node map to be used for the specific problem described above. You can replace this function to define your own probability tree structure.

##### calculateProbability.ts

Defines the class for ProbabilityCalculator. This class will determine the probability of a given event at a specified height of a tree as defined by the TreeNode class in treeNode.ts. The calculateProbability function can be called on any node in the tree, but it is will usually be called on the initial node of the tree.

##### app.ts

Here we create a function that can construct a tree to a desired height and calculate the probability of a given event at the desired height. We then run that function in a loop that increases the height of the tree during each execution. Once we reach 0.99 probability of our desired value, we exit the loop. Each execution of the loop logs the current height and the probability of the desired event.

## Results

 After all this, I can happily report the answer is 12, more specifically 12 consecutive dinners of 3 people randomly selected from a group of 6 where 1 person is sick would result in a >99% chance of all 6 contracting the disease assuming 100% chance of transmission from the dinner.
