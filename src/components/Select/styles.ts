import styled from "styled-components";
import * as Select from '@radix-ui/react-select';

export const SelectRoot = styled(Select.Root)``;

export const SelectTrigger = styled(Select.Trigger)`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 15px;
  font-size: 13px;
  height: 35px;
  width: fit-content;
  gap: 5px;
  background-color: white;
`;

export const SelectValue = styled(Select.Value)``;

export const SelectIcon = styled(Select.Icon)``;

export const SelectContent = styled(Select.Content)`
  overflow: hidden;
  background-color: white;
  border-radius: 4px;
  box-shadow:
    0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2);
`;

export const SelectScrollUpButton = styled(Select.ScrollUpButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  background-color: white;
  color: ${({ theme }) => theme.colors.blue};
  cursor: default;
`;

export const SelectViewport = styled(Select.Viewport)`
  padding: 5px;
`;

export const SelectItem = styled(Select.Item)`
  all: unset;
  font-size: 13px;
  line-height: 1px;
  border-radius: 3px;
  display: flex;
  color: ${({ theme }) => theme.colors.blue};
  align-items: center;
  height: 25px;
  padding: 0 35px 0 25px;
  position: relative;
  user-select: none;

  &:focus {
    background-color: ${({ theme }) => theme.colors.blueDark};
    color: ${({ theme }) => theme.colors.black0};
  };
`;

export const SelectItemText = styled(Select.ItemText)``;

export const SelectItemIndicator = styled(Select.ItemIndicator)`
  position: absolute;
  left: 0px;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const SelectScrollDownButton = styled(Select.ScrollDownButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  background-color: white;
  color: ${({ theme }) => theme.colors.blue};
  cursor: default;
`;
