export type RadioButtonProps = {
  borderColor?: string;
  color?: string;
  containerStyle?: object;
  description?: string;
  descriptionStyle?: object;
  disabled?: boolean;
  id: string;
  key?: string;
  label?: string;
  labelStyle?: object;
  layout?: 'row' | 'column';
  onPress?: (id: string) => void;
  selected?: boolean;
  size?: number;
  value?: string;
  borderSize?: number;
  testID?: string;
};

export type RadioGroupProps = {
  containerStyle?: object;
  layout?: 'row' | 'column';
  onPress?: (selectedId: string) => void;
  radioButtons: RadioButtonProps[];
  selectedId?: string;
  testID?: string;
};
