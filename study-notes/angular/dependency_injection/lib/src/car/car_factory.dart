import 'car.dart';

class CarFactory {
  Car createCar() => Car(createEngine(), createTires());
  Engine createEngine() => Engine();
  Tires createTires() => Tires();
}