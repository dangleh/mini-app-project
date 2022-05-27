import { RootStackParamList } from './ChildrenNavigator';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
