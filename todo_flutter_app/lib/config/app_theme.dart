import 'package:flutter/material.dart';

ThemeData lightTheme = ThemeData(
    brightness: Brightness.light,
    primaryColor: Colors.blue,
    scaffoldBackgroundColor: Colors.white,
    textTheme: const TextTheme(
        bodyLarge: TextStyle(
            fontSize: 18, fontWeight: FontWeight.w600, color: Colors.black),
        bodyMedium: TextStyle(
            fontSize: 16, fontWeight: FontWeight.w500, color: Colors.black87)),
    elevatedButtonTheme: ElevatedButtonThemeData(
        style: ElevatedButton.styleFrom(
            backgroundColor: Colors.blue,
            foregroundColor: Colors.white,
            padding: const EdgeInsets.symmetric(vertical: 12, horizontal: 24),
            textStyle:
                const TextStyle(fontSize: 16, fontWeight: FontWeight.bold))));
