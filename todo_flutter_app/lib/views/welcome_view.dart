import 'package:flutter/material.dart';

class WelcomeView extends StatelessWidget {
  const WelcomeView({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Center(
            child:
                Column(mainAxisAlignment: MainAxisAlignment.center, children: [
      const Spacer(),
      const FlutterLogo(size: 100),
      const Spacer(),
      Padding(
          padding: const EdgeInsets.symmetric(vertical: 30),
          child: Column(children: [
            ElevatedButton(
                onPressed: () => Navigator.pushNamed(context, '/login'),
                child: const Text("Login")),
            ElevatedButton(
                onPressed: () => Navigator.pushNamed(context, '/signup'),
                child: const Text("Sign Up")),
          ]))
    ])));
  }
}
