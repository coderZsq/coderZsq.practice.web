import 'package:flutter/material.dart';
import '../subject/subject.dart';
import '../home/home.dart';
import 'bottom_bar_item.dart';

List<SQBottomBarItem> items = [
  SQBottomBarItem("home", "首页"),
  SQBottomBarItem("subject", "书影音"),
  SQBottomBarItem("group", "小组"),
  SQBottomBarItem("mall", "市集"),
  SQBottomBarItem("profile", "我的"),
];

List<Widget> pages = [
  SQHomePage(),
  SQSubjectPage(),
  SQHomePage(),
  SQHomePage(),
  SQHomePage(),
];