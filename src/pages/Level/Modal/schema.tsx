export type ModalLevelProps = {
  id: string;
  title: string;
  modalData: any;
  refresh: () => void;
  onCloseModal: () => void;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
