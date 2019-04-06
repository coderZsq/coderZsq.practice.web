import 'package:angular/angular.dart';
import 'src/click_me_component.dart';
import 'src/keyup_components.dart';
import 'src/loop_back_component.dart';
import 'src/little_tour_component.dart';

@Component(
  selector: 'my-app',
  templateUrl: 'app_component.html',
  directives: [
    ClickMeComponent,
    KeyUp1Component,
    KeyUp2Component,
    KeyUp3Component,
    KeyUp4Component,
    LoopBackComponent,
    LittleTourComponent,
  ],
)
class AppComponent {}