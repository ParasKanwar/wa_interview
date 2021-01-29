import Container from "@material-ui/core/Container";
const CustomContainer = ({ children }: { children: any }) => {
  return (
    <Container style={{ height: "100%", maxWidth: 1700 }}>{children}</Container>
  );
};
export default CustomContainer;
