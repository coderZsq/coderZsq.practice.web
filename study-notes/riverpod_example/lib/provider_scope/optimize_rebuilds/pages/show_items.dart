import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../items/item_list_provider.dart';

class ShowItems extends ConsumerWidget {
  const ShowItems({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final items = ref.watch(itemListProvider);

    return ListView(
      children: [
        for (final item in items)
          ProviderScope(
            overrides: [currentItemProvider.overrideWithValue(item)],
            child: const EachItem(),
          )
      ],
    );
    // return ListView(
    //   children: [for (final item in items) EachItem(item: item)],
    // );
  }
}

class EachItem extends ConsumerWidget {
  const EachItem({
    super.key,
  });

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final item = ref.watch(currentItemProvider);
    print('building $item');

    return ListTile(
      title: Text(
        item,
        style: const TextStyle(fontSize: 18.0),
      ),
      trailing: IconButton(
        onPressed: () {
          ref.read(itemListProvider.notifier).deleteItem(item);
        },
        icon: const Icon(Icons.delete),
      ),
    );
  }
}

// class EachItem extends ConsumerWidget {
//   const EachItem({
//     super.key,
//     required this.item,
//   });
//
//   final String item;
//
//   @override
//   Widget build(BuildContext context, WidgetRef ref) {
//     print('building $item');
//
//     return ListTile(
//       title: Text(
//         item,
//         style: const TextStyle(fontSize: 18.0),
//       ),
//       trailing: IconButton(
//         onPressed: () {
//           ref.read(itemListProvider.notifier).deleteItem(item);
//         },
//         icon: const Icon(Icons.delete),
//       ),
//     );
//   }
// }
