import 'package:flutter/material.dart';

class SQStarRating extends StatefulWidget {
  final double rating;
  final double maxRating;
  final int count;
  final double size;
  final Color unselectedColor;
  final Color selectedColor;
  final Widget unselectedImage;
  final Widget selectedImage;

  SQStarRating(
      {@required this.rating,
        this.maxRating = 10,
        this.count = 5,
        this.size = 30,
        this.unselectedColor = const Color(0xffbbbbbb),
        this.selectedColor = const Color(0xffff0000),
        Widget unselectedImage,
        Widget selectedImage}): unselectedImage = unselectedImage ?? Icon(Icons.star_border,
      color: unselectedColor, size: size), selectedImage = selectedImage ?? Icon(Icons.star, color: selectedColor, size: size);

  @override
  _SQStarRatingState createState() => _SQStarRatingState();
}

class _SQStarRatingState extends State<SQStarRating> {
  @override
  Widget build(BuildContext context) {
    return Stack(
      children: <Widget>[
        Row(
          mainAxisSize: MainAxisSize.min,
          children: buildUnselectedStar(),
        ),
        Row(mainAxisSize: MainAxisSize.min, children: buildSelectedStar())
      ],
    );
  }

  List<Widget> buildUnselectedStar() {
    return List.generate(widget.count, (index) {
      return widget.unselectedImage;
    });
  }

  List<Widget> buildSelectedStar() {
    // 1. 创建stars
    List<Widget> stars = [];
    final star = widget.selectedImage;

    // 2. 构建满填充的star
    double oneValue = widget.maxRating / widget.count;
    int entireCount = (widget.rating / oneValue).floor();
    for (var i = 0; i < entireCount; i++) {
      stars.add(star);
    }
    // 3. 构建部分填充star
    // (widget.rating / oneValue) 3.5 - 3 = 0.5 * widget.size
    double leftWidth = ((widget.rating / oneValue) - entireCount) * widget.size;
    final halfStar = ClipRect(clipper: SQStarClipper(leftWidth), child: star);
    stars.add(halfStar);

    if (stars.length > widget.count) {
      return stars.sublist(0, widget.count);
    }

    return stars;
  }
}

class SQStarClipper extends CustomClipper<Rect> {
  double width;

  SQStarClipper(this.width);

  @override
  Rect getClip(Size size) {
    return Rect.fromLTRB(0, 0, width, size.height);
  }

  @override
  bool shouldReclip(SQStarClipper oldClipper) {
    return oldClipper.width != this.width;
  }
}
