import { UseFormReturn } from 'react-hook-form';

export type TextFieldProps = {
  name: string;
  label?: string;
  methods: UseFormReturn<any>;
  type?: 'text' | 'number' | 'date' | 'datetime-local';
  required?: boolean;
  autoFocus?: boolean;
  disabled?: boolean;
  multiline?: boolean;
  line?: number;
  search?: boolean;
  placeholder?: string;
  onClickButton?: () => void;
}
