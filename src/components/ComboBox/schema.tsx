import { UseFormReturn } from 'react-hook-form';

export type ComboboxProps = {
  name: string;
  label?: string;
  placeholder?: string;
  options: any[];
  methods: UseFormReturn<any>;
  required?: boolean;
}
