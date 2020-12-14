# -*- coding: utf-8 -*-

import numpy as np
from demo_linear_regression.linear_regression import LinearRegression


def run():
    points = np.genfromtxt("data.csv", delimiter=",")
    learning_rate = 0.0001
    max_iterations = 1000

    regression = LinearRegression(learning_rate, max_iterations)
    # print("Starting gradient descent at w = {0}, b = {1}, error = {2}"
    #       .format(regression.w, regression.b, regression.quadratic_loss(points)))
    print("Starting gradient descent at w = {0:.3}, b = {1:.3}, error = {2}"
          .format(regression.w, regression.b, regression.quadratic_loss(points)))
    print("Running...")

    [w_training, b_training] = regression.gradient_descent_runner(points)
    print("After {0} iterations w = {1:.3}, b = {2:.3}, error = {3}".
          format(regression.max_iterations, w_training, b_training,
                 regression.quadratic_loss(points))
          )


if __name__ == '__main__':
    run()
