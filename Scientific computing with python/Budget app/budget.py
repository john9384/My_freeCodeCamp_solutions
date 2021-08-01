class Category:
  def __init__(self, name):
    self.ledger = []
    self.name = name

  def get_balance(self):
    amount_list = []
    for x in self.ledger:
      amount_list.append(x["amount"])
    return sum(amount_list) 

  def check_funds(self, amount):
    balance = self.get_balance()
    if abs(amount) > balance: return False
    else: return True

  def deposit(self, amount, description=""):
    self.ledger.append({"amount":amount, "description": description})

  def withdraw(self, amount, description=""):
    fund_available = self.check_funds(amount)
    if fund_available:
      self.ledger.append({"amount":-amount, "description": description})
      return True
    else: return False

  def transfer(self, amount, budget_cat):
    balance = self.get_balance()
    if balance > abs(amount):
      self.withdraw(amount,f"Transfer to {budget_cat.name}")
      budget_cat.deposit(amount,f"Transfer from {self.name}")
      return True
    else: return False

  def __str__(self):
    title = f"{self.name:*^30}\n"
    items = ""
    total = 0

    for transaction in self.ledger:
      items +=f"{transaction['description'][0:23]:23}" + f"{transaction['amount']:>7.2f}" + "\n"
      total += transaction['amount']

    string = title + items + "Total: " + str(total)
    return string
  
  def get_withdrawals(self):
    total = 0
    for item in self.ledger:
      if item['amount'] < 0: total += item["amount"]
      return total


def get_totals(categories):
  total = 0
  breakdown = []
  truncate = lambda x: int(x * 10) / 10
  for category in categories:
    total += category.get_withdrawals()
    breakdown.append(category.get_withdrawals())
    if total == 0:
      total = 1
  rounded = list(map(lambda x: truncate(x/total), breakdown))
  return rounded

def create_spend_chart(categories):
  res = "Percentage spent by category\n"
  i = 100
  totals = get_totals(categories)

  while i >= 0:
    cat_spaces = " "

    for total in totals:
      if total * 100 >= i: cat_spaces += "o  "
      else: cat_spaces += "   "

    res += str(i).rjust(3) + "|" + cat_spaces + ("\n")
    i-= 10

  dashes = "-" + "---"*len(categories)
  names = []
  x_axis = ""
  for category in categories:
    names.append(category.name)
  
  max1 = max(names, key=len)

  for x in range(len(max1)):
    name_str = '     '
    for name in names:
      if x >= len(name): name_str += "   "
      else: name_str += name[x] + "  "
    
    if (x != len(max1) -1):
      name_str += "\n"

    x_axis += name_str

  res += dashes.rjust(len(dashes)+4) + "\n" + x_axis
  return res

