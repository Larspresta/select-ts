import styled from "styled-components";

const Container = styled.div`
  background: red;
  width: 100px;
  height: 100px;
`;

type SelectOption = {
  label: string;
  value: any;
};

type SelectProps = {
  options: SelectOption[];
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
};

function Select({ value, options, onChange }: SelectProps) {
  return (
    <>
      <Container>
        <p>Right</p>
      </Container>
    </>
  );
}

export default Select;
