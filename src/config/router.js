import React from 'react'
import { Router, Drawer, Stack, Tabs, LegacyTabs, Scene } from 'react-native-router-flux'
import ScrollableTabView from 'react-native-scrollable-tab-view'

import TaskTabbar from '../components/task-tabbar';

import DrawerContentScreen from '../screens/drawer-content/';
import DailyTaskScreen from '../screens/daily-task'
import WeeklyTaskScreen from '../screens/weekly-task';
import MonthlyTaskScreen from '../screens/monthly-task';
import LaterAndDoneTaskScreen from '../screens/later-and-done-task';

import AppNavbar from '../components/app-navbar';
import TaskDetailScreen from '../screens/task-detail';

/**
 * Use react-native-scrollable-tab-view for faster tab changing and animation
 *
 */
const renderTabBar = () => <TaskTabbar />
const renderNavBar = (data) => <AppNavbar data={data}/>

const TodoTabview = () => (
  <ScrollableTabView locked={true} renderTabBar={renderTabBar} prerenderingSiblingsNumber={Infinity}>
    <WeeklyTaskScreen tabLabel="WEEKLY" />
    <DailyTaskScreen tabLabel="DAILY" />
    <MonthlyTaskScreen tabLabel="MONTHLY" />
  </ScrollableTabView>
)

const AppRouter = () => (
  <Router>
    <Drawer hideNavBar={true} contentComponent={DrawerContentScreen}>
      <Stack key="root" navBar={renderNavBar}>
        <Scene key="todoTabview" component={TodoTabview} />
        <Scene key="laterTask" component={LaterAndDoneTaskScreen} title="Later Task" />
        <Scene key="doneTask" component={LaterAndDoneTaskScreen} title="Done Task" />
        <Scene key="taskDetails" component={TaskDetailScreen} title="Task Details" />
      </Stack>
    </Drawer>
  </Router>
)

export default AppRouter
