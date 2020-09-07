import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile98562Navigator from '../features/UserProfile98562/navigator';
import Tutorial98561Navigator from '../features/Tutorial98561/navigator';
import NotificationList98533Navigator from '../features/NotificationList98533/navigator';
import Settings98532Navigator from '../features/Settings98532/navigator';
import Settings98524Navigator from '../features/Settings98524/navigator';
import UserProfile98522Navigator from '../features/UserProfile98522/navigator';
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
UserProfile98562: { screen: UserProfile98562Navigator },
Tutorial98561: { screen: Tutorial98561Navigator },
NotificationList98533: { screen: NotificationList98533Navigator },
Settings98532: { screen: Settings98532Navigator },
Settings98524: { screen: Settings98524Navigator },
UserProfile98522: { screen: UserProfile98522Navigator },
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
