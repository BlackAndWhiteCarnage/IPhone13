const Light = (props) => (
  <mesh {...props}>
    <pointLight castShadow />
  </mesh>
);

export default Light;
