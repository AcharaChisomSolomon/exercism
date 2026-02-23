//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (rowCount) => {
  if (rowCount === 0) return [];
  if (rowCount === 1) return [[1]];
  if (rowCount === 2) return [[1], [1, 1]];

  const blocks = [[1], [1, 1]];
  let lastBlock = [1, 1];
  for (let i = 3; i <= rowCount; i++) {
    const newBlock = [1];
    for (let id = 1; id < lastBlock.length; id++) {
      newBlock.push(lastBlock[id] + lastBlock[id - 1]);
    }
    newBlock.push(1);
    lastBlock = newBlock;
    blocks.push(lastBlock);
  }

  return blocks;
};
