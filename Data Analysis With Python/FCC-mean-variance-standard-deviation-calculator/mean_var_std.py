import numpy as np

def calculate(list):
  if len(list) != 9:
    raise ValueError("List must contain nine numbers.")

  arr = np.array(list)

  rows_mean = [arr[[0,1,2]].mean(), arr[[3,4,5]].mean(), arr[[6,7,8]].mean()]
  columns_mean = [arr[[0,3,6]].mean(), arr[[1,4,7]].mean(), arr[[2,5,8]].mean()]

  rows_var = [arr[[0,1,2]].var(), arr[[3,4,5]].var(), arr[[6,7,8]].var()]
  columns_var = [arr[[0,3,6]].var(), arr[[1,4,7]].var(), arr[[2,5,8]].var()]

  rows_std = [arr[[0,1,2]].std(), arr[[3,4,5]].std(), arr[[6,7,8]].std()]
  columns_std = [arr[[0,3,6]].std(), arr[[1,4,7]].std(), arr[[2,5,8]].std()]

  rows_max = [arr[[0,1,2]].max(), arr[[3,4,5]].max(), arr[[6,7,8]].max()]
  columns_max = [arr[[0,3,6]].max(), arr[[1,4,7]].max(), arr[[2,5,8]].max()]

  rows_min = [arr[[0,1,2]].min(), arr[[3,4,5]].min(), arr[[6,7,8]].min()]
  columns_min = [arr[[0,3,6]].min(), arr[[1,4,7]].min(), arr[[2,5,8]].min()]

  rows_sum = [arr[[0,1,2]].sum(), arr[[3,4,5]].sum(), arr[[6,7,8]].sum()]
  columns_sum = [arr[[0,3,6]].sum(), arr[[1,4,7]].sum(), arr[[2,5,8]].sum()]

  return {
    'mean': [columns_mean, rows_mean, arr.mean()],
    'variance': [columns_var, rows_var, arr.var()],
    'standard deviation': [columns_std, rows_std, arr.std()],
    'max': [columns_max, rows_max, arr.max()],
    'min': [columns_min, rows_min, arr.min()],
    'sum': [columns_sum, rows_sum, arr.sum()]
  }