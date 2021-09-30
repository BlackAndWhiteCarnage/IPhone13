export const convertToArrayHandler = (text) => {
  const textArr = text.split('');

  return textArr.map((letter, i) => (
    <p style={{ textTransform: 'uppercase' }} key={i}>
      {letter}
    </p>
  ));
};
