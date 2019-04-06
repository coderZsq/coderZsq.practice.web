// Examples with car and engine variations
import 'car.dart';

///////// example 1 ////////////
Car simpleCar() =>
    // Simple car with 4 cylinders and Flintstone tires.
Car(Engine(), Tires())..description = 'Simple';

///////// example 2 ////////////

class Engine2 extends Engine {
  Engine2(cylinders) : super.withCylinders(cylinders);
}

Car superCar() =>
    // Super car with 12 cylinders and Flintstone tires.
Car(Engine2(12), Tires()) //!<br>
  ..description = 'Super';

/////////// example 3 //////////

class MockEngine extends Engine {
  MockEngine() : super.withCylinders(8);
}

class MockTires extends Tires {
  MockTires() {
    make = 'YokoGoodStone';
  }
}

Car testCar() =>
    // Test car with 8 cylinders and YokoGoodStone tires.
Car(MockEngine(), MockTires()) //!<br>
  ..description = 'Test';