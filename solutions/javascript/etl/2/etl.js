export const transform = (pointMap) => {
  const transformedObj = {};

  for (const point in pointMap) {
    pointMap[point].forEach(letter => {
      transformedObj[letter.toLowerCase()] = Number(point);
    })
  }

  return transformedObj;
};
