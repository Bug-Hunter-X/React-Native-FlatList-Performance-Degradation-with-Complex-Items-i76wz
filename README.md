# React Native FlatList Performance Optimization

This repository demonstrates a common performance issue in React Native's FlatList component when dealing with large datasets and complex item rendering. The problem is characterized by slow scrolling, dropped frames, and an overall poor user experience.

## Problem Description

The `bug.js` file contains a FlatList implementation that renders a list of 1000 items, each containing a title and a lengthy description. The item rendering is not optimized, leading to excessive re-renders and performance bottlenecks.

## Solution

The `bugSolution.js` file provides an optimized solution. The key improvements include:

* **Memoization:** Using `useMemo` and `React.memo` to prevent unnecessary re-renders of components.
* **Virtualization:** Leveraging the built-in virtualization capabilities of FlatList.
* **Item optimization:** Reducing the complexity of individual items. 

By applying these optimizations, the scrolling performance is significantly improved. 

## How to Reproduce

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npx react-native run-android` or `npx react-native run-ios` to run the app on an emulator or device.

Observe the scrolling performance difference between the original and optimized versions.