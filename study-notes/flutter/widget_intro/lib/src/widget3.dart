import 'package:flutter/material.dart';
//import 'widget4.dart';
//import 'widget5.dart';
//import 'widget6.dart';
import 'widget7.dart';

void run() => runApp(
  MaterialApp(
    title: 'Flutter Tutorial',
    home: TutorialHome(),
  )
);

class TutorialHome extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: IconButton(
            icon: Icon(Icons.menu),
            tooltip: 'Navigation menu',
            onPressed: null
        ),
        title: Text('Example title'),
        actions: <Widget>[
          IconButton(
              icon: Icon(Icons.search),
              tooltip: 'Search',
              onPressed: null,
          ),
        ],
      ),
      body: Center(
//          child: Text('Hello, world!'),
//          child: MyButton()
//          child: Counter(),
          child: ShoppingListItem(
              product: Product(name: 'Goods'),
              inCart: true,
              onCartChanged: (product, inCart) {
                print('$product - $inCart');
              }
          ),
      ),
      floatingActionButton: FloatingActionButton(
          tooltip: 'Add',
          child: Icon(Icons.add),
          onPressed: null
      ),
    );
  }
}