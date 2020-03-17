import 'package:flutter/material.dart';

class SQBottomBarItem extends BottomNavigationBarItem {
  SQBottomBarItem(String iconName, String title)
      : super(
      title: Text(title),
      icon: Image.asset("assets/images/tabbar/$iconName.png", width: 32),
      activeIcon: Image.asset(
          "assets/images/tabbar/${iconName}_active.png",
          width: 32));
}