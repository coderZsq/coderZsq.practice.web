import 'package:favorcate/ui/shared/size_fit.dart';

extension IntFit on int {
  double get px {
    return SQSizeFit.setPx(this.toDouble());
  }

  double get rpx {
    return SQSizeFit.setRpx(this.toDouble());
  }
}