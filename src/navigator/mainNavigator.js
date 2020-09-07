import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen7198500Navigator from '../features/BlankScreen7198500/navigator';
import UserProfile98490Navigator from '../features/UserProfile98490/navigator';
import Tutorial98489Navigator from '../features/Tutorial98489/navigator';
import NotificationList98461Navigator from '../features/NotificationList98461/navigator';
import Settings98460Navigator from '../features/Settings98460/navigator';
import Settings98452Navigator from '../features/Settings98452/navigator';
import UserProfile98450Navigator from '../features/UserProfile98450/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen7198500: { screen: BlankScreen7198500Navigator },
UserProfile98490: { screen: UserProfile98490Navigator },
Tutorial98489: { screen: Tutorial98489Navigator },
NotificationList98461: { screen: NotificationList98461Navigator },
Settings98460: { screen: Settings98460Navigator },
Settings98452: { screen: Settings98452Navigator },
UserProfile98450: { screen: UserProfile98450Navigator },

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
