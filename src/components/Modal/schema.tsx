import { UseFormReturn } from 'react-hook-form';

export type ModalProps = {
  id: string;
  onCloseModal: () => void;
  modalIsOpen: boolean;
  children: React.ReactNode;
  title: string;
  methods: UseFormReturn<any>,
  handleSubmit: () => void,
  action: 'include' | 'edit'
}
