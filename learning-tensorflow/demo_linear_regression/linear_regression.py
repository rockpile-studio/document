# -*- coding: utf-8 -*-
# 不加编码方式，python文件的中文注释会报错

# linear regression 线性回归
# 梯度下降法，其核心内容是对自变量进行不断的更新（针对w和b求偏导），使得目标函数不断逼近最小值的过程

import numpy as np


# Python 3.x中取消了经典类，默认使用新式类
# 新式类的语法：class 类名(object): ...
class LinearRegression(object):
    # __init__() 是类的初始化方法，类实例化后自动调用
    def __init__(self, learning_rate=0.0001, max_iterations=1000):
        # self是用于存储对象属性的集合，就算没有属性self也是必备的
        self.learning_rate = learning_rate
        self.max_iterations = max_iterations
        # 通过np.random.normal取一个正态分布的数值
        # loc(float)：正态分布的均值，对应着这个分布的中心，loc=0说明这一个以Y轴为对称轴的正态分布
        # scale(float)：正态分布的标准差，对应分布的宽度，scale越大，正态分布的曲线越矮胖，scale越小，曲线越高瘦。
        self.w = np.random.normal(loc=1, scale=0.1)
        self.b = np.random.normal(1, 0.1)
        # 损失函数的结果集（平方误差损失）
        self.loss_arr = []

    def step_gradient(self, points):
        w_gradient = 0
        b_gradient = 0
        n = float(len(points))
        for i in range(0, len(points)):
            x = points[i, 0]
            y = points[i, 1]
            # grad_w = 2(wx+b-y)*x
            w_gradient += (2 / n) * x * ((self.w * x + self.b) - y)
            # grad_b = 2(wx+b-y)
            b_gradient += (2 / n) * ((self.w * x + self.b) - y)
        # update w'
        self.w = self.w - (self.learning_rate * w_gradient)
        self.b = self.b - (self.learning_rate * b_gradient)
        self.loss_arr.append(self.quadratic_loss(points))
        return [self.w, self.b]

    # y = wx + b
    def quadratic_loss(self, points):
        total = 0
        for i in range(0, len(points)):
            x = points[i, 0]
            y = points[i, 1]
            # quadratic loss平方误差损失函数
            total += (y - (self.w * x + self.b)) ** 2
        return total / float(len(points))

    def gradient_descent_runner(self, points):
        w_training = 0
        b_training = 0
        # update for several times
        for i in range(self.max_iterations):
            w_training, b_training = self.step_gradient(np.array(points))
        return [w_training, b_training]

