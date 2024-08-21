Future<Map<String, dynamic>> getActivityData() async {
  await Future.delayed(const Duration(seconds: 1));
  return {
    'activity': 'test',
    'accessibility': 10000,
    'type': 'test',
    'participants': 2000,
    'price': 180.0,
    'key': 'test',
    'data': [
      "test1",
      "test2",
    ],
  };
}

Future<List<String>> getData() async {
  await Future.delayed(const Duration(seconds: 1));
  return [
    "test3",
    "test4",
  ];
}
