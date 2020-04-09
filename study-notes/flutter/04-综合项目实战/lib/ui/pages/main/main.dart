import 'package:favorcate/ui/pages/home/home_drawer.dart';
import 'package:favorcate/ui/pages/main/initialize_items.dart';
import 'package:flutter/material.dart';

class SQMainScreen extends StatefulWidget {
  static const String routeName = "/";

  @override
  _SQMainScreenState createState() => _SQMainScreenState();
}

class _SQMainScreenState extends State<SQMainScreen> {
  int _currentIndex = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      drawer: SQHomeDrawer(),
      body: IndexedStack(
        index: _currentIndex,
        children: pages,
      ),
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _currentIndex,
        selectedFontSize: 14,
        unselectedFontSize: 14,
        items: items,
        onTap: (index) {
          setState(() {
            _currentIndex = index;
          });
        },
      ),
    );
  }
}
