export interface Node {
  probability: number;
  value: number;
}

export const nodeMapper = () => {
  let map = new Map<number, Node[]>();

  map.set(1, [
    { probability: 0.5, value: 1 },
    { probability: 0.5, value: 3 },
  ]);

  map.set(3, [
    { probability: 0.45, value: 5 },
    { probability: 0.45, value: 4 },
    { probability: 0.1, value: 3 },
  ]);

  map.set(4, [
    { probability: 0.2, value: 6 },
    { probability: 0.6, value: 5 },
    { probability: 0.2, value: 4 },
  ]);

  map.set(5, [
    { probability: 0.5, value: 6 },
    { probability: 0.5, value: 5 },
  ]);

  map.set(6, [
    { probability: 1, value: 6 }
  ]);

  return map;
};
