import 'package:flutterapp/model/user_info.dart';
import 'package:flutterapp/viewmodel/user_view_model.dart';
import 'package:provider/provider.dart';
import 'package:provider/single_child_widget.dart';

import 'counter_view_model.dart';

List<SingleChildWidget> providers = [
  ChangeNotifierProvider(create: (ctx) => SQCounterViewModel()),
  ChangeNotifierProvider(create: (ctx) => SQUserViewModel(UserInfo("coderZsq", 18, "url"))),
];