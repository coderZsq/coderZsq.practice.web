class Logger {
  String _log = '';
  String get id => 'Logger';

  void fine(String msg) => _log = msg;

  String toString() => '[$id] $_log';
}