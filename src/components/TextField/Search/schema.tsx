import { UseFormReturn } from 'react-hook-form';

export type TextFieldSearchProps = {
  name: string;
  methods: UseFormReturn<any>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}
