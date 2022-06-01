import { Dispatch, SetStateAction } from "react";
import { FiCheck, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { SelectContent, SelectIcon, SelectItem, SelectItemIndicator, SelectItemText, SelectRoot, SelectScrollDownButton, SelectScrollUpButton, SelectTrigger, SelectValue, SelectViewport } from "./styles";

interface Props {
  items: string[];
  setValue: Dispatch<SetStateAction<string>>;
  value: string | undefined;
}

export function Select({ value, setValue, items }: Props) {
  return (
    <SelectRoot value={value} onValueChange={setValue}>
        <SelectTrigger>
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
  )
}