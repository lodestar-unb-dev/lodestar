import { Dispatch, SetStateAction } from "react";
import { FiCheck, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Container, SelectContent, SelectIcon, SelectItem, SelectItemIndicator, SelectItemText, SelectRoot, SelectScrollDownButton, SelectScrollUpButton, SelectTrigger, SelectValue, SelectViewport } from "./styles";

interface Props {
  label: string;
  items: string[];
  setValue: Dispatch<SetStateAction<string>>;
  value: string | undefined;
}

export function Select({ label, value, setValue, items }: Props) {
  return (
    <Container>
      <label>{label}</label>
      <SelectRoot value={value} onValueChange={setValue}>
          <SelectTrigger id={label}>
            <SelectValue>
              {value}
            </SelectValue>
            <SelectIcon />
          </SelectTrigger>

          <SelectContent>
            <SelectScrollUpButton>
              <FiChevronUp />
            </SelectScrollUpButton>
            <SelectViewport>
              {items.map(item => (
                <SelectItem key={item} value={item}>
                  <SelectItemText>{item}</SelectItemText>
                  <SelectItemIndicator>
                    <FiCheck />
                  </SelectItemIndicator>
                </SelectItem>
              ))}
            </SelectViewport>
            <SelectScrollDownButton>
              <FiChevronDown />
            </SelectScrollDownButton>
          </SelectContent>
      </SelectRoot>
    </Container>
  )
}