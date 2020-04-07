import 'package:flutter/material.dart';
import 'package:favorcate/core/extension/int_extension.dart';

class SQOperationItem extends StatelessWidget {
  final Widget _icon;
  final String _title;

  SQOperationItem(this._icon, this._title);

  @override
  Widget build(BuildContext context) {
    return Row(
      children: <Widget>[_icon, SizedBox(width: 3.px), Text(_title)],
    );
  }
}
