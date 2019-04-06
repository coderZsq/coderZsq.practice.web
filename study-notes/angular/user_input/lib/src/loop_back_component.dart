import 'package:angular/angular.dart';

@Component(
  selector: 'loop-back',
//除非您绑定到某个事件，否则这根本不起作用。
//只有当应用程序响应异步事件（例如击键）时，Angular才会更新绑定（以及屏幕）。此示例将keyup事件绑定到数字0，可能是最短的模板语句。虽然该语句没有任何用处，但它满足Angular的要求，因此Angular将更新屏幕
  template: '''
    <input #box (keyup)="0">
    <p>{{box.value}}</p>
  ''',
)

class LoopBackComponent {}