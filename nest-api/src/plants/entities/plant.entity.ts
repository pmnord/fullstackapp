import { IPlant } from '../../../../types';
export class Plant implements IPlant {
  id: string;
  commonNames: string[];
  species: string;
  genus: string;
  family: string;
}
