import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile116301Navigator from '../features/UserProfile116301/navigator';
import Settings116300Navigator from '../features/Settings116300/navigator';
import Settings116298Navigator from '../features/Settings116298/navigator';
import SignIn2116296Navigator from '../features/SignIn2116296/navigator';
import ArticleList116276Navigator from '../features/ArticleList116276/navigator';
import Maps116263Navigator from '../features/Maps116263/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile116301: { screen: UserProfile116301Navigator },
Settings116300: { screen: Settings116300Navigator },
Settings116298: { screen: Settings116298Navigator },
SignIn2116296: { screen: SignIn2116296Navigator },
ArticleList116276: { screen: ArticleList116276Navigator },
Maps116263: { screen: Maps116263Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
