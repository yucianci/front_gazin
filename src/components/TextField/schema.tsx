import { UseFormReturn } from 'react-hook-form';

export type TextFieldProps = {
  name: string;
  label?: string;
  methods: UseFormReturn<any>;
  type?: 'text' | 'number';
  required?: boolean;
  autoFocus?: boolean;
  disabled?: boolean;
  multiline?: boolean;
  search?: boolean;
  placeholder?: string;
  onClickButton?: any;
}
