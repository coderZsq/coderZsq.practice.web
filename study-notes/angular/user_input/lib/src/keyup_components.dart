import 'dart:html';
import 'package:angular/angular.dart';

@Component(
  selector: 'key-up1',
//  注意： Dart文件中的 非原始字符串需要\在前面$。如果模板位于HTML文件中，请使用$event而不是\$event。
  template: '''
    <input (keyup)="onKey(\$event)">
    <p>{{values}}</p>
  ''',
)

class KeyUp1Component {
  String values = '';

//  void onKey(dynamic event) {
//    values += event.target.value + ' | ';
//    values += event.key + ' | ';
//  }

  void onKey(KeyboardEvent event) {
    InputElement el = event.target;
    values += '${el.value} | ';
  }
}

@Component(
  selector: 'key-up2',
  template: '''
    <input #box (keyup)="onKey(box.value)">
    <p>{{values}}</p>
  '''
)

class KeyUp2Component {
  String values = '';
  void onKey(value) => values += '$value | ';
}

@Component(
  selector: 'key-up3',
  template: '''
    <input #box (keyup.enter)="values=box.value">
    <p>{{values}}</p>
  '''
)

class KeyUp3Component {
  String values = '';
}

@Component(
  selector: 'key-up4',
  template: '''
    <input #box 
      (keyup.enter)="values=box.value"
      (blur)="values=box.value">
      <p>{{values}}</p>
  ''',
)

class KeyUp4Component {
  String values = '';
}