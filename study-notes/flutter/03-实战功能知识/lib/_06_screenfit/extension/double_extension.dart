import 'package:flutterapp/_06_screenfit/shared/size_fit.dart';

extension DoubleFit on double {
  double get px {
    return SQSizeFit.setPx(this);
  }

  double get rpx {
    return SQSizeFit.setRpx(this);
  }
}