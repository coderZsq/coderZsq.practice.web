import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:riverpod_example/async_value_detail/cities.dart';
import 'package:riverpod_example/async_value_detail/weather_first_provider.dart';
import 'package:riverpod_example/providers/extension/async_value_xx.dart';

int _selectedCityIndex = 1;

class WeatherFirstPage extends ConsumerWidget {
  const WeatherFirstPage({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    ref.listen<AsyncValue<String>>(weatherFirstProvider, (previous, next) {
      if (next.hasError && !next.isLoading) {
        showDialog(
            context: context,
            builder: (context) {
              return AlertDialog(
                content: Text(next.error.toString()),
              );
            });
      }
    });

    final weather = ref.watch(weatherFirstProvider);
    print(weather.toStr);
    print(weather.props);
    try {
      print('value: ${weather.value}');
    } catch (e) {
      print(e.toString());
    }
    print('valueOrNull: ${weather.valueOrNull}');

    try {
      print('requireValue: ${weather.requireValue}');
    } on StateError {
      print('StateError');
    } catch (e) {
      print(e.toString());
    }

    print('==================');

    return Scaffold(
        appBar: AppBar(
          title: const Text('AsyncValue Details - First'),
          actions: [
            IconButton(
                onPressed: () {
                  _selectedCityIndex = 1;
                  ref.invalidate(weatherFirstProvider);
                },
                icon: const Icon(Icons.refresh))
          ],
        ),
        body: Center(
          child: weather.when(
              skipError: true,
              skipLoadingOnRefresh: false,
              data: (temp) {
                return Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(temp,
                        style: Theme.of(context).textTheme.headlineLarge),
                    const SizedBox(height: 20),
                    const GetWeatherButton()
                  ],
                );
              },
              error: (e, st) {
                return Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(
                      e.toString(),
                      style: const TextStyle(color: Colors.red),
                      textAlign: TextAlign.center,
                    ),
                    const SizedBox(
                      height: 20,
                    ),
                    const GetWeatherButton()
                  ],
                );
              },
              loading: () => const CircularProgressIndicator()),
        ));
  }
}

class GetWeatherButton extends ConsumerWidget {
  const GetWeatherButton({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return OutlinedButton(
        onPressed: () {
          final cityIndex = _selectedCityIndex % 4;
          final city = Cities.values[cityIndex];
          _selectedCityIndex++;
          ref.read(weatherFirstProvider.notifier).getTemperature(city);
        },
        child: const Text('Get Weather'));
  }
}
