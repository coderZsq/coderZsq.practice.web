import 'package:flutter/material.dart';
import 'package:flutterapp/model/user_info.dart';

class SQUserViewModel extends ChangeNotifier {
  UserInfo _user;

  SQUserViewModel(this._user);

  UserInfo get user => _user;

  set user(UserInfo value) {
    _user = value;
    notifyListeners();
  }
}