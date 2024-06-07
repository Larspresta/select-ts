import { useEffect, useRef, useState } from "react";
import { Container, Value, ClearButton, Divider, Options, Caret, Option, OptionButton } from "./ui/Select";

export type SelectOption = {
  label: string;
  value: string | number;
};

type multipleSelectProps = {
  multiple: true;
  value: SelectOption[];
  onChange: (value: SelectOption[]) => void;
};

type SingleSelectProps = {
  multiple?: false;
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
};

type SelectProps = {
  options: SelectOption[];
} & (SingleSelectProps | multipleSelectProps);

function Select({ multiple, value, options, onChange }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  function clearOptions() {
    multiple ? onChange([]) : onChange(undefined);
  }

  function selecOption(option: SelectOption) {
    if (multiple) {
      if (value.includes(option)) {
        onChange(value.filter((o) => o !== option));
      } else {
        onChange([...value, option]);
      }
    } else {
      if (option !== value) onChange(option);
    }
  }

  function isOptionSelected(option: SelectOption) {
    return multiple ? value.includes(option) : option === value;
  }

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  return (
    <Container
      ref={containerRef}
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
      tabIndex={0}
    >
      <Value>
        {multiple
          ? value.map((v) => (
              <OptionButton
                key={v.value}
                onClick={(e) => {
                  e.stopPropagation();
                  selecOption(v);
                }}
              >
                {v.label}
                <span className="remove-btn">&times;</span>
              </OptionButton>
            ))
          : value?.label}
      </Value>
      <ClearButton
        onClick={(e) => {
          e.stopPropagation();
          clearOptions();
        }}
      >
        &times;
      </ClearButton>
      <Divider></Divider>
      <Caret></Caret>
      <Options className={isOpen ? "show" : ""}>
        {options.map((option, index) => (
          <Option
            onClick={(e) => {
              e.stopPropagation();
              selecOption(option);
              setIsOpen(false);
            }}
            onMouseEnter={() => setHighlightedIndex(index)}
            key={option.value}
            className={`${"option"} ${isOptionSelected(option) ? "selected" : ""}
            ${index === highlightedIndex ? "highlighted" : ""}
            `}
          >
            {option.label}
          </Option>
        ))}
      </Options>
    </Container>
  );
}

export default Select;
