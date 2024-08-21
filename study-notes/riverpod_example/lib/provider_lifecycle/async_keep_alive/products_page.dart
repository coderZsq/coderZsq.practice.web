import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:riverpod_example/provider_lifecycle/async_keep_alive/product_page.dart';
import 'package:riverpod_example/provider_lifecycle/async_keep_alive/providers.dart';

class ProductsPage extends ConsumerWidget {
  const ProductsPage({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final productList = ref.watch(getProductsProvider);
    return Scaffold(
        appBar: AppBar(
          title: const Text('Products'),
        ),
        body: productList.when(
            data: (products) {
              return ListView.separated(
                  itemBuilder: (BuildContext context, int index) {
                    final product = products[index];

                    return GestureDetector(
                      onTap: () {
                        Navigator.push(
                            context,
                            MaterialPageRoute(
                                builder: (context) => ProductPage(
                                      productId: product.id,
                                    )));
                      },
                      child: ListTile(
                        leading: CircleAvatar(
                          child: Text('${product.id}'),
                        ),
                        title: Text(product.title ?? ''),
                      ),
                    );
                  },
                  separatorBuilder: (BuildContext context, int index) {
                    return const Divider();
                  },
                  itemCount: products.length);
            },
            error: (e, st) => Center(
                  child: Text(
                    e.toString(),
                    style: Theme.of(context).textTheme.headlineMedium,
                    textAlign: TextAlign.center,
                  ),
                ),
            loading: () => const Center(child: CircularProgressIndicator())));
  }
}
