import React from 'react'
import { Router, Drawer, Stack, Scene } from 'react-native-router-flux'
import ScrollableTabView from 'react-native-scrollable-tab-view'

import DrawerContentScreen from '../screens/drawer-content/';
import DailyTaskScreen from '../screens/daily-task'
import WeeklyTaskScreen from '../screens/weekly-task';
import MonthlyTaskScreen from '../screens/monthly-task';
import TaskFormScreen from '../screens/task-form';
import LaterAndDoneTaskScreen from '../screens/later-and-done-task';
import CategoriesScreen from '../screens/categories';
import CategoryFormScreen from '../screens/category-form';

import AppNavbar from '../components/app-navbar';
import TaskTabbar from '../components/task-tabbar';
import TaskDetailScreen from '../screens/task-detail';

class AppRouter extends React.Component {
  shouldComponentUpdate() {
    return false
  }

  renderNavBar(data) {
    return <AppNavbar data={data} />
  }

  TodoTabview() {
    const renderTabBar = () => <TaskTabbar />

    return (
      <ScrollableTabView locked={true} renderTabBar={renderTabBar} prerenderingSiblingsNumber={Infinity}>
        <DailyTaskScreen tabLabel="DAILY" />
        <WeeklyTaskScreen tabLabel="WEEKLY" />
        <MonthlyTaskScreen tabLabel="MONTHLY" />
      </ScrollableTabView>
    )
  }

  render() {
    const { renderNavBar, TodoTabview } = this

    return (
      <Router>
        <Drawer hideNavBar={true} contentComponent={DrawerContentScreen}>
          <Stack key="root" navBar={renderNavBar}>
            <Scene key="todoTabview" component={TodoTabview} />
            <Scene key="laterTask" component={LaterAndDoneTaskScreen} title="Later Task" taskType="later" />
            <Scene key="doneTask" component={LaterAndDoneTaskScreen} title="Done Task" taskType="done" />
            <Scene key="taskDetails" component={TaskDetailScreen} title="Task Details" />
            <Scene key="taskForm" component={TaskFormScreen} title="New Task" />
            <Scene key="editTaskForm" component={TaskFormScreen} title="Edit Task" />
            <Scene key="categories" component={CategoriesScreen} title="Categories" />
            <Scene key="categoryForm" component={CategoryFormScreen} title="Category Form" />
          </Stack>
        </Drawer>
      </Router>
    )
  }
}

export default AppRouter
