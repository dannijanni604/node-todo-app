import 'package:flutter/material.dart';
import 'config/app_theme.dart';
import 'views/login_view.dart';
import 'views/sign_up_view.dart';
import 'views/welcome_view.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: lightTheme,
      initialRoute: '/',
      routes: {
        '/': (context) => const WelcomeView(),
        '/login': (context) => const LoginView(),
        '/signup': (context) => const SignupView(),
      },
    );
  }
}
