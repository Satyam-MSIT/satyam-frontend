const isOutDimensionsClick = (dimensions, clientX, clientY) => {
  if (dimensions && clientX && clientY) {
    const { left, right, top, bottom } = dimensions;
    return (
      clientX < left || clientX > right || clientY < top || clientY > bottom
    );
  }
  return false;
};

export default isOutDimensionsClick;
