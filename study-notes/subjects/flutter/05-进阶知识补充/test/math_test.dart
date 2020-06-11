import 'package:flutter_test/flutter_test.dart';
import 'package:flutterapp/_02_test/unit/math_utils.dart';

void main() {
  group("test math utils file", () {
    test("math utils file sum test", () {
      final result = sum(20, 30);
      expect(result, 50);
    });

    test("math utils file mul test", () {
      final result = mul(20, 30);
      expect(result, 600);
    });
  });
}