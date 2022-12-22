import { DeveloperProps } from '../../../pages/Developer/schema';
import { LevelProps } from '../../../pages/Level/schema';

export type ActionButtonsProps = {
  data: DeveloperProps | LevelProps;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setModalData: React.Dispatch<React.SetStateAction<any>>;
  handleDelete: any;
  isAvailableToDelete?: any;
};
