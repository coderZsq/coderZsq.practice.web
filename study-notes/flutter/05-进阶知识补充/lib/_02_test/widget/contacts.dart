import 'package:flutter/material.dart';

class SQContacts extends StatelessWidget {
  final List<String> _names;

  SQContacts(this._names);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text("联系人列表"),
        ),
        body: ListView(
          children: _names.map((name) {
            return ListTile(
              leading: Icon(Icons.people),
              title: Text(name),
            );
          }).toList(),
        ),
      ),
    );
  }
}
