import 'package:angular/angular.dart';

@Component(
  selector: 'click-me',
  template: '''
    <button (click)="onClickMe()">Click Me!</button>
    {{clickMessage}}
  '''
)

class ClickMeComponent {
  String clickMessage = '';
  void onClickMe() => clickMessage = 'You are my hero!';
}